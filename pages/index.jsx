import React from 'react';
import style from '../styles/home.module.scss';
import Header from '../component/Header';
import Industry from '@/component/Industry';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function index() {
    const [data, setAPIData] = useState(null);
    const counterRefs = useRef([]);
     useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/home');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Header Module", error);
            }
        };
        fetchAPI();
        }, []);
        useEffect(() => {
            if (data?.counter) {
                gsap.registerPlugin(ScrollTrigger);
                counterRefs.current.forEach((counter, index) => {
                    const dataCount = counter.getAttribute("data-count");
                    let targetValue = parseFloat(dataCount);
                    gsap.fromTo(
                        counter,
                        {textContent:0},
                        {
                            textContent: targetValue,
                            duration: 3,
                            ease: "power2",
                            scrollTrigger: {
                                trigger: counter,
                                scrub: false,
                                once:false,
                                markers: false,
                            },
                            onUpdate: function() {
                                counter.textContent = Math.round(counter.textContent);
                                if (dataCount.includes("%")) {
                                  counter.textContent += "%";
                                } else if (dataCount.endsWith("+")) {
                                    counter.textContent += "+";
                                }
                            }
                        }
                    );
                });
            }
        },[data]);
        // console.log(data)
    return (
        <>
            <Header />
            {data?.banner && (
            <div className={style.banner}>
                <div className={style.container}>
                    <div className={style.bannerrow}>
                        <div className={style.banneinfo}>
                             <h1>{data?.banner.heading}</h1>
                             <p>{data?.banner.subheading}</p>
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
            {data?.aboutus && (
            <div className={style.aboutus}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.aboutus.maintitle}</div>
                        <h2>{data?.aboutus.title}</h2>
                        <p>{data?.aboutus.subtitle}</p>
                    </div>
                    {data?.counter &&(
                    <div className={style.counter}>
                        <div className={style.counterrow}>
                            {data?.counter?.map((data, index) => (
                            <div className={style.counterbox} key={index}>
                                <h2 ref={(el) => (counterRefs.current[index] = el)}data-count={data?.number}>0</h2>
                                <p>{data?.title}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                    )}
                    {/* {data?.aboutus.aboutinfo && (
                    <div className={style.aboutusrow}>
                        {data?.aboutus.aboutinfo?.map((data, index) => (
                        <div className={style.aboutusbox} key={index}>
                            {data?.image && (
                            <div className={style.aboutusicon}>
                                <Image 
                                    src={data?.image.url}
                                    alt={data?.image.alt}
                                    width={100}
                                    height={100}
                                    priority='false'
                                />
                            </div>
                            )}
                            <p>{data?.title}</p>
                        </div>
                        ))}
                    </div>
                    )} */}
                </div>
            </div>
            )}
            {data?.services && (
            <div className={style.services}>
                <div className={style.container}>
                    <div className={style.servicesrow}>
                        <div>
                            <div className={style.maintitle}>
                                <div className={style.title}>{data?.services.maintitle}</div>
                                <h2>{data?.services.title}</h2>
                                <p>{data?.services.subtitle}</p>
                                <Link
                                    className={style.button}
                                    href={data?.services.button.url}
                                    target={data?.services.button.target || '_self'}
                                >
                                    {data?.services.button.title}
                                </Link>
                            </div>
                        </div>
                        <div className={style.serviceslist}>
                            {data?.services.serviceslist?.map((data, index) => (
                            <div className={style.servicesbox} key={index}>
                                {data?.image && (
                                <div className={style.servicesicon}>
                                    <Image 
                                        src={data?.image.url}
                                        alt={data?.image.alt}
                                        width={50}
                                        height={50}
                                        priority='falses'
                                    />
                                </div>
                                )}
                                <div className={style.servicesinfo}>
                                    <h4>{data?.title}</h4>
                                    <p>{data?.subtitle}</p>
                                    <Link
                                        className={style.buttonlink}
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
                </div>
            </div>
            )}
            <Industry />
        </>
    )
}