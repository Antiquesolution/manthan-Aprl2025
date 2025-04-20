import React from 'react';
import Head from 'next/head';
import {useState, useEffect} from 'react';
import { useRouter } from "next/router";
import style from '@/styles/business.module.scss';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Technologies from '@/component/Technologies';
import Testimonials from '@/component/Testimonials';
import Recentblog from '@/component/recentblog';
import Link from 'next/link';
import Image from 'next/image';
export default function index() {
    const [data, setAPIData] = useState(null);
    const router = useRouter();
    const baseUrl = typeof window !== "undefined" ? window.location.origin : '/';
    const currentUrl = `${baseUrl}${router.asPath}`;
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/business-model');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Business Model Module", error);
            }
        };
        fetchAPI();
    }, []);
    const jsonLd = {
        "@context": "http://schema.org",
        "@type": "WebPage",
        "name": `${data?.seo.title}`,
        "url": `${currentUrl}`,
        "description": `${data?.seo.discripion}`,
        "publisher": {
            "@type": "Organization",
            "name": "Manthan Technologies",
            "url": `${baseUrl}`,
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/images/logo.svg`,
                "width": 192,
                "height": 44
            },
            "sameAs": [
                "https://www.linkedin.com/company/manhantech",
                "https://www.facebook.com/manhantech",
                "https://www.instagram.com/manhantech",
                "https://twitter.com/manhantech"
            ]
        }
    };
    return (
        <>
            <Head>
                <title>{data?.seo.title}</title>
                <link rel="canonical" href={currentUrl} />
                <meta name="description" content={data?.seo.discripion} />
                
                <meta itemprop="name" content={data?.seo.title} />
                <meta itemprop="description" content={data?.seo.discripion} />
                <meta itemprop="image" content={data?.seo.image} />
                
                <meta name="twitter:card" content="summary" />
                <meta itemprop="twitter:title" content={data?.seo.title} />
                <meta itemprop="twitter:description" content={data?.seo.discripion} />
                <meta name="twitter:site" content="@Manthantechnologies" />
                <meta name="twitter:creator" content="@Manthantechnologies" />                
                <meta itemprop="twitter:image:src" content={data?.seo.image} />

                <meta name="keywords" content={data?.seo.keywords} />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

                <meta name="og:title" content={data?.seo.title} />
                <meta name="og:description" content={data?.seo.discripion} />
                <meta name="og:image" content={data?.seo.image} />
                <meta name="og:url" content={currentUrl} />
                <meta name="og:site_name" content="Manthan Technologies" />
                <meta name="og:locale" content="en_US" />
                <meta name="og:type" content="article" />

                <meta name="title" property="og:title" content={data?.seo.title} />
                <meta name="image" property="og:image" content={data?.seo.image} />
                <meta name="author" content="Manthan Technologies" />

                <link rel="preload" href={`${baseUrl}/images/logo.svg`} as="image" fetchpriority="high" type="image/svg+xml" />

                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML=
                    {{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <Header />
            {data?.businessmodel && (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.businessmodel.maintitle}</div>
                        <h1>{data?.businessmodel.title}</h1>
                        <p>{data?.businessmodel.subtitle}</p>
                    </div>
                    {data?.businessmodel.businessmodellist?.map((data, index) => (
                    <div className={style.row} key={index}>
                        <div className={style.model}>
                            <Image 
                                src={data?.image.url}
                                alt={data?.image.alt}
                                width={600}
                                height={400}
                                priority='false'
                            />
                        </div>
                        <div className={style.model}>
                            <div dangerouslySetInnerHTML={{__html: data?.discription}} />
                            <Link
                                className={style.button}
                                href={data?.button.url}
                                target={data?.button.target || '_self'}
                             >
                                {data?.button.title}
                             </Link>
                        </div> 
                    </div>
                    ))}
                </div>
            </div>
            )}
            {data?.modeldifferences && (
            <div className={style.difference}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.modeldifferences.maintitle}</div>
                        <h2>{data?.modeldifferences.title}</h2>
                        <p>{data?.modeldifferences.subtitle}</p>
                    </div>
                    <div className='responsive'>
                        <table>
                            <thead>
                                {Array.isArray(data?.modeldifferences?.table) &&
                                data.modeldifferences.table.length > 0 && (
                                    <tr>
                                    {data.modeldifferences.table[0].map((data, index) => (
                                        <th key={index}>
                                        {data}
                                        </th>
                                    ))}
                                    </tr>
                                )}
                            </thead>
                            <tbody>
                                {Array.isArray(data?.modeldifferences?.table) &&
                                data.modeldifferences.table.slice(1).map((data, index) => (
                                    <tr key={index}>
                                        {data.map((data, index) => (
                                        <td key={index}>{data}</td>
                                         ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            )}
            <Technologies />
            <Testimonials />
            <Recentblog />
            <Footer />
        </>
    )
}
