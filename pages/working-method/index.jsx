import React from 'react';
import style from '@/styles/workmethod.module.scss';
import { useState, useEffect, useRef, useLayoutEffect } from 'react';
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
    console.log(data)
    return(
        <>
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