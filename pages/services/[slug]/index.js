import React from 'react';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Head from 'next/head';
import style from '@/styles/service.module.scss';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Link from 'next/link';
import Image from 'next/image';
export default function index() {
    const [data, setAPIData] = useState(null);
    const router = useRouter();
    const { slug } = router.query;
    const baseUrl = typeof window !== "undefined" ? window.location.origin : '/';
    const currentUrl = `${baseUrl}${router.asPath}`;
    useEffect(() => {
        if (!slug) return;
        const fetchAPI = async () => {
            try {
                const res = await fetch(`/api/services?slug=${slug}`);
                const json = await res.json();
                setAPIData(json);
            } catch (error) {
                console.error("Error fetching services data", error);
            }
        };
        fetchAPI();
    }, [slug]);
    useEffect(() => {
        if (data?.[0]?.title) {
            setFormData((prevFormData) => ({
                ...prevFormData,
                services: data[0].title,
            }));
        }
    }, [data]);      
    const [formData, setFormData] = useState({yourname:'',companyname:'',email:'',phonenumber:'',message: '',services: ''});
    const [status, setStatus] = useState('');
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch('/api/services-email', {
                method:'POST',
                headers:{'Content-Type': 'application/json'},
                body:JSON.stringify(formData),
            });
            if (res.ok) {
                // setStatus('Email sent successfully!');
                window.location.href = '/thank-you';
                setFormData({yourname:'',companyname:'',email:'',phonenumber:'',message:'',services:''});
            } else {
                setStatus('Failed to send email.');
            }
        } catch(error) {
            console.error(error);
            setStatus('Something went wrong.');
        }
    };
    console.log(data)
    return (
        <>
            <Header />
            <div className={style.banner}>
                <div className={style.container}>
                    <div className={style.bannerrow}>
                        <div className={style.banneinfo}>
                            <h1>{data?.[0].title}</h1>
                            <p>{data?.[0].subtitle}</p>
                            {data?.[0].services && (
                             <ul>
                                {data?.[0].services.list?.map((data, index) => (
                                <li key={index}>{data.title}</li>
                                ))}
                             </ul>
                            )}
                        </div>
                        {data && (
                        <div className={style.form}>
                            <form action={`${baseUrl}/services/${slug}`} onSubmit={handleSubmit}>
                                <h3>Get a FREE Quote!</h3>
                                <div className={style.formgroup}>
                                    <div className={`${style.formcontrol} ${style.w100}`} style={{'display':'none'}}>
                                        <input
                                            type='hideen'
                                            placeholder='Enter your services'
                                            name='services'
                                            value={formData.services}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={style.formcontrol}>
                                        <label>Your Name<span>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter your name'
                                            name='yourname'
                                            value={formData.yourname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={style.formcontrol}>
                                        <label>Company Name<span>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter your company name'
                                            name='companyname'
                                            value={formData.companyname}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={style.formcontrol}>
                                        <label>Email Address<span>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter your email id'
                                            name='email'
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={style.formcontrol}>
                                        <label>Phone Number<span>*</span></label>
                                        <input
                                            type='text'
                                            placeholder='Enter your phone number'
                                            name='phonenumber'
                                            value={formData.phonenumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                    <div className={`${style.formcontrol} ${style.w100}`}>
                                        <label>Message<span>*</span></label>
                                        <textarea
                                            placeholder='Enter your message'
                                            name='message'
                                            cols={40}
                                            rows={5}
                                            value={formData.message}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <button className='button' type="submit">Send now</button>
                                {status && <p>{status}</p>}
                            </form>
                        </div>
                        )}
                    </div>
                </div>
            </div>
            {data?.[0].whychoose && (
            <div className={style.whychoose}>
                <div className={style.container}>
                    <div className={`${style.maintitle}`}>
                        <div className={style.title}>{data?.[0].whychoose.maintitle}</div>
                        <h2>{data?.[0].whychoose.title}</h2>
                        <p>{data?.[0].whychoose.subtitle}</p>
                    </div>
                    <ul dangerouslySetInnerHTML={{__html: data?.[0].whychoose.whychooselist }} />
                </div>
            </div>
            )}
            {data?.[0].keytakeaway && (
            <div className={style.manthankey}>
                <div className={style.container}>
                    <div className={style.keyinfo}>
                        <div className={`${style.maintitle}`}>
                            <h2>{data?.[0].keytakeaway.title}</h2>
                        </div>
                        <ul dangerouslySetInnerHTML={{__html: data?.[0].keytakeaway.subtitle }} />
                    </div>
                </div>
            </div>
            )}
            <Footer />
        </>
    )
}
