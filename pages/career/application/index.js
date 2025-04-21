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
                                    placeholder='Apply For'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Apply For<span>*</span></label>
                                <input 
                                    type='text'
                                    placeholder='Apply For'
                                />
                            </div>
                            <div className={`${style.formcontrol}`}>
                                <label>Apply For<span>*</span></label>
                                <input 
                                    type='text'
                                    placeholder='Apply For'
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}