import React from 'react';
import { useState, useEffect, useRef } from 'react';
import style from '@/styles/about.module.scss';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Whyus from '@/component/Whyus';
import Testimonials from '@/component/Testimonials';
import Recentblog from '@/component/recentblog';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
export default function index() {
    const [data, setAPIData] = useState(null);
    const [FAQsTab, setFAQsTab] = useState(null);
    const counterRefs = useRef([]);
     useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/about');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching About Module", error);
            }
        };
        fetchAPI();
        }, []);
        const handleToggle = (index) => {
            setFAQsTab(FAQsTab === index ? null : index);
        };
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
        console.log(data)
    return (
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
            {data?.counter &&(
            <div className={style.counter}>
                <div className={style.container}>
                    <div className={style.counterrow}>
                        {data?.counter?.map((data, index) => (
                        <div className={style.counterbox} key={index}>
                            <h2 ref={(el) => (counterRefs.current[index] = el)}data-count={data?.number}>0</h2>
                            <p>{data?.title}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            )}
            {data?.mission && (
            <div className={style.missionvision}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.mission.maintitle}</div>
                        <h2>{data?.mission.title}</h2>
                        <p>{data?.mission.subtitle}</p>
                    </div>
                    <div className={style.missionvisionrow}>
                        {data?.mission.missionlist?.map((data, index) => (
                        <div className={style.missionvisioninfo} key={index}>
                            {data?.image && (
                            <div className={style.missionvisionicon}>
                                <Image 
                                    src={data?.image.url}
                                    alt={data?.image.alt}
                                    width={50}
                                    height={50}
                                    priority='false'
                                />
                            </div>
                            )}
                            <h3>{data?.title}</h3>
                            <p>{data?.content}</p>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            )}
            {data?.ourvalue && (
            <div className={style.corevalue}>
                <div className={style.container}>
                    <div className={style.corevaluerow}>
                        {data?.ourvalue.image && (
                        <div className={style.corevalueimage}>
                            <Image 
                                src={data?.ourvalue.image.url}
                                alt={data?.ourvalue.image.alt}
                                width={600}
                                height={400}
                                style={{'width':'auto','height':'auto'}}
                            />
                        </div>
                        )}
                        <div className={style.maintitle}>
                            <div className={style.title}>{data?.ourvalue.maintitle}</div>
                             <h2>{data?.ourvalue.title}</h2>
                            <p>{data?.ourvalue.subtitle}</p>
                        </div>
                    </div>
                </div>
            </div>
            )}
            {data?.businesshelp && (
            <div className={style.business}>
                <div className={style.container}>
                    <div className={style.businessrow}>
                        <div className={style.businesstitle}>
                            <div className={style.maintitle}>
                                <div className={style.title}>{data?.businesshelp.maintitle}</div>
                                <h2>{data?.businesshelp.title}</h2>
                                <p>{data?.businesshelp.subtitle}</p>
                            </div>
                        </div>
                        <div className={style.details}>
                                {data?.businesshelp.details?.map((data, index) => (
                                <div className={style.detailsitem} key={index}>
                                    <h3>{data?.title}</h3>
                                    <p>{data?.subtitle}</p>
                                </div>
                                ))}
                            </div>
                    </div>
                </div>
            </div>
            )}
            <Whyus />
            <Testimonials />
            <Recentblog />
            <Footer />
        </>
    )
}