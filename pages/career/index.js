import React from 'react';
import Head from 'next/head';
import {useState, useEffect} from 'react';
import {useRouter} from "next/router";
import style from '@/styles/career.module.scss';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Careerpost from '../career/Careerpost';
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
                "width": 160,
                "height": 30
            },
            "sameAs": [
                "https://www.linkedin.com/company/manhantech",
                "https://www.facebook.com/manhantech",
                "https://www.instagram.com/manhantech",
                "https://twitter.com/manhantech"
            ]
        }
    };
    return(
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
            {data?.banner && (
            <div className={style.banner}>
                <div className={style.container}>
                    <div className={style.bannerrow}>
                        <div className={style.banneinfo}>
                             <h1>{data?.banner.title}</h1>
                             <p>{data?.banner.subtitle}</p>
                             <Link
                                className={style.button}
                                href={data?.banner.button.url}
                                target={data?.banner.button.target || '_self'}
                             >
                                {data?.banner.button.title}
                             </Link>
                        </div>
                        {data.banner.image && (
                        <div className={style.bannerimage}>
                            <Image 
                                src={data?.banner.image.url}
                                alt={data?.banner.image.alt}
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
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.opening.maintitle}</div>
                        <h2>{data?.opening.title}</h2>
                        <p>{data?.opening.subtitle}</p>
                    </div>
                    <div className={style.row}>
                        <Careerpost />
                        <div className={style.openingsidebar}>
                            <div className={style.sticky}>
                                <div className={style.findopening}>
                                    {data?.opening.image && (
                                    <figure>
                                        <Image 
                                            src={data?.opening.image.url}
                                            alt={data?.opening.image.alt}
                                            width={68}
                                            height={68}
                                            priority={false}
                                        />
                                    </figure>
                                    )}
                                    <h3>{data?.opening.findtitle}</h3>
                                    <Link
                                        className={style.button}
                                        href={data?.opening.button.url || '#'}
                                        target={data?.opening.button.target || '_self'}
                                    >
                                        {data?.opening.button.title}
                                    </Link>
                                </div>
                                <div className={style.googlerating}>
                                    {data?.opening.googleimage && (
                                    <figure>
                                        <Image 
                                            src={data?.opening.googleimage.url}
                                            alt={data?.opening.googleimage.alt}
                                            width={203}
                                            height={52}
                                            priority={false}
                                            style={{maxWidth:'100%', height:'auto'}}
                                        />
                                    </figure>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {data?.hiringprocess && (
            <div className={style.hireprocess}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.hiringprocess.maintitle}</div>
                        <h2>{data?.hiringprocess.title}</h2>
                    </div>
                    <div className={style.row}>
                        {data?.hiringprocess.processlist.map((data, index) => (
                        <div className={style.processsteps} key={index}>
                            <div className={style.processarrow}>
                                <Image 
                                    src='/images/process-arrow.svg'
                                    alt='process-arrow'
                                    width={68}
                                    height={78}
                                    priority={false}
                                    style={{maxWidth:'100%', height:'auto'}}
                                />
                            </div>
                            <h4>{data?.title}</h4>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            )}
            {data?.benefits && (
            <div className={style.perks}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.perksnfo}>
                            <div className={style.maintitle}>
                                <div className={style.title}>{data?.benefits.maintitle}</div>
                                <h2>{data?.benefits.title}</h2>
                                <p>{data?.benefits.subtitle}</p>
                                <Link
                                    className={style.button}
                                    href={data?.benefits.button.url}
                                    target={data?.benefits.button.target || '_self'}
                                >
                                    {data?.benefits.button.title}
                                </Link>
                            </div>
                        </div>
                        <div className={style.perksnfo}>
                            {data?.benefits.benefitsinfo.map((data, index) => (
                            <div className={style.perkslist} key={index}>
                                <h3>{data?.title}</h3>
                                <p>{data?.subtitle}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            )}
            <Recentblog />
            <Footer />
        </>
    )
}
