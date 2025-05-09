import React from 'react';
import Head from 'next/head';
import style from '@/styles/workmethod.module.scss';
import {useState, useEffect, useRef, useLayoutEffect} from 'react';
import {useRouter} from "next/router";
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Technologies from '@/component/Technologies';
import Testimonials from '@/component/Testimonials';
import Recentblog from '@/component/recentblog';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import Link from 'next/link';
import Image from 'next/image';
export default function page(){
    const [data, setAPIData] = useState(null);
    const sectionRef = useRef(null);
    const imagesRef = useRef([]);
    const router = useRouter();
    const baseUrl = typeof window !== "undefined" ? window.location.origin : '/';
    const currentUrl = `${baseUrl}${router.asPath}`;
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/working-method');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Business Model Module", error);
            }
        };
        fetchAPI();
    }, []);
    useLayoutEffect(() => {
        if (!data?.workingmethod) return;
        let ctx = gsap.context(() => {
            imagesRef.current.forEach((image) => {
                if (image) {
                    gsap.set(image,{scale:0});
                    gsap.to(image, {
                        scale:1,
                        duration:1.9,
                        ease: 'power3.out',
                        scrollTrigger: {
                            trigger: image,
                            start: 'top 90%',
                            end: 'top 50%',
                            once: true,
                        },
                    });
                }
            });
        }); 
        return () => ctx.revert();
    }, [data]);
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
                                priority='false'
                            />
                        </div>
                        )}
                    </div>
                </div>
            </div>
            )}
            {data?.workingmethod && (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.workingmethod.maintitle}</div>
                        <h2>{data?.workingmethod.title}</h2>
                        <p>{data?.workingmethod.subtitle}</p>
                    </div>
                    <div className={style.flow} ref={sectionRef}>
                        {data?.workingmethod.workingmethodlist?.map((data, index) => (
                        <div className={style.list} key={index}>
                            <div className={style.steps}></div>
                            <div className={style.row}>
                                {data?.image && (
                                <div className={style.image}>
                                    <Image
                                        ref={(el) => (imagesRef.current[index] = el)}
                                        src={data?.image.url}
                                        alt={data?.image.alt}
                                        width={800}
                                        height={792}
                                        style={{"width":"auto", "height":"auto"}}
                                    />
                                </div>
                                )}
                                <div className={style.content} dangerouslySetInnerHTML={{__html: data?.content}}></div>
                            </div>
                        </div>
                        ))}
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