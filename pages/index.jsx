import React from 'react';
import style from '@/styles/Home.module.scss'
import Header from '@/component/Header';
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
        console.log(data)
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
        </>
    )
}