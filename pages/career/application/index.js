import React from 'react';
import Head from 'next/head';
import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import style from '@/styles/form.module.scss';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Image from 'next/image';
export default function index() {
    const [data, setAPIData] = useState(null);
    const router = useRouter();
    const baseUrl = typeof window !== "undefined" ? window.location.origin : '/';
    const currentUrl = `${baseUrl}${router.asPath}`;
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/career');
                const data = await res.json();
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Career Post Module", error);
            }
        };
        fetchAPI();
    }, []);
    const jsonLd = {
        "@context":"https://schema.org",
        "@type":"JobPosting",
        "title": data?.formseo.title,
        "development":data?.formseo.discripion,
        "employmentType":"Full Time",
        "jobLocation":{
            "@type":"Place",
            "address":{
                "@type":"PostalAddress",
                "addressLocality":"Ahmedabad, Gujarat",
                "addressRegion":"Gujarat",
                "addressCountry":"India"
            }
        },
        "hiringOrganization":{
            "@type":"Organization",
            "name":"Manthan Technologies",
            "sameAs":baseUrl,
            "logo": `${baseUrl}/images/logo.svg`
        }
    };
    return (
        <>
            <Head>
                <title>{data?.formseo.title}</title>
                <link rel="preload" href={`${baseUrl}/images/logo.svg`} as="image" type="image/svg+xml" />
                <meta name="development" content={data?.formseo.discripion} />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="white-translucent" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={data?.formseo.title} />
                <meta name="og:title" content={data?.formseo.title} />
                <meta name="og:url" content={currentUrl} />
                <meta name="og:site_name" content="Manthan Technologies" />
                <meta name="og:locale" content="en_US" />
                <meta name="og:type" content="article" />
                <meta name="author" content="Manthan Technologies" />
                <link rel="canonical" href={currentUrl} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML=
                    {{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <Header />
            {data?.formbanner && (
            <div className={style.banner}>
                <div className={style.container}>
                    <div className={style.bannerrow}>
                        <div className={style.banneinfo}>
                             <h1>{data?.formbanner.title}</h1>
                             <p>{data?.formbanner.subtitle}</p>
                        </div>
                        {data.formbanner.image && (
                        <div className={style.bannerimage}>
                            <Image 
                                src={data?.formbanner.image.url}
                                alt={data?.formbanner.image.alt}
                                width={600}
                                height={400}
                                priority={true}
                            />
                        </div>
                        )}
                    </div>
                </div>
            </div>
            )}
            <div className={style.formmain}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.form.maintitle}</div>
                        <h2>{data?.form.title}</h2>
                        <p>{data?.form.subtitle}</p>
                    </div>
                    <form className={style.form}>
                        <div className={style.formgroup}>
                            <div className={`${style.formcontrol} ${style.w100}`}>
                                <label>Apply For<span>*</span></label>
                                <input 
                                    type='text'
                                    name='applyfor'
                                    placeholder='Apply For'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>First Name<span>*</span></label>
                                <input 
                                    type='text'
                                    name='firstname'
                                    placeholder='First Name'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Last Name<span>*</span></label>
                                <input 
                                    type='text'
                                    name='lastname'
                                    placeholder='Last Name'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Email Address<span>*</span></label>
                                <input 
                                    type='text'
                                    name='email'
                                    placeholder='Email Address'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Mobile Number<span>*</span></label>
                                <input 
                                    type='tel'
                                    maxLength="15"
                                    name='mobilenumber'
                                    placeholder='Mobile Number'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Select Gender<span>*</span></label>
                                <select>
                                    <option value="Select Gender">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Qualification<span>*</span></label>
                                <select>
                                    <option value="Select Qualification">Select Qualification</option>
                                    <option value="B.E Graduate">B.E Graduate</option>
                                    <option value="M.Tech">M.Tech</option>
                                    <option value="M.C.A">M.C.A</option>
                                    <option value="B.A">B.A</option>
                                    <option value="B.Com">B.Com</option>
                                    <option value="B.Sc (IT)">B.Sc (IT)</option>
                                    <option value="M.Sc (IT)">M.Sc (IT)</option>
                                    <option value="Diploma">Diploma</option>
                                    <option value="Other">Other</option>
                                </select>
                            </div>
                            <div className={`${style.formcontrol} ${style.w100}`}>
                                <label>LinkedIn Profile<span>*</span></label>
                                <input 
                                    type='text'
                                    name='linkedin-profile'
                                    placeholder='Enter Your LinkedIn Profile URL'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Qualification<span>*</span></label>
                                <select>
                                    <option value="Experience">Experience</option>
                                    <option value="Fresher">Fresher</option>
                                    <option value="1+ Years">1+ Years</option>
                                    <option value="2+ Years">2+ Years</option>
                                    <option value="3+ Years">3+ Years</option>
                                    <option value="4+ Years">4+ Years</option>
                                    <option value="5+ Years">5+ Years</option>
                                    <option value="6+ Years">6+ Years</option>
                                    <option value="7+ Years">7+ Years</option>
                                    <option value="8+ Years">8+ Years</option>
                                    <option value="9+ Years">9+ Years</option>
                                    <option value="10+ Years">10+ Years</option>
                                </select>
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Notice Period<span>*</span></label>
                                <input 
                                    type='text'
                                    name='notice-period'
                                    placeholder='Notice Period'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Current CTC<span>*</span></label>
                                <input 
                                    type='text'
                                    name='current-ctc'
                                    placeholder='Enter Your Current CTC'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Expected CTC<span>*</span></label>
                                <input 
                                    type='text'
                                    name='expected-ctc'
                                    placeholder='Enter Your Expected CTC'
                                />
                            </div>
                            <div className={`${style.formcontrol} ${style.w100}`}>
                                <label>Skill<span>*</span></label>
                                <textarea 
                                    type='te'
                                    cols="40"
                                    rows="5"
                                    name='expected-ctc'
                                    placeholder='Enter Your Skills'
                                />
                            </div>
                            <div className={`${style.formcontrol} ${style.w100}`}>
                                <label>Personal Attributes<span>*</span></label>
                                <textarea 
                                    type='te'
                                    cols="40"
                                    rows="5"
                                    name='personal-attribute'
                                    placeholder='Enter Your Personal Attributes'
                                />
                            </div>
                            <div className={`${style.formcontrol} ${style.w100}`}>
                                <label>Message<span>*</span></label>
                                <textarea 
                                    type='te'
                                    cols="40"
                                    rows="5"
                                    name='message'
                                    placeholder='Enter Your Message to HR'
                                />
                            </div>
                        </div>
                        <button type='submit' className={style.button}>Apply Now</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}