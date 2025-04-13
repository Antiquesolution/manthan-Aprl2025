import React from 'react'
import {useState, useEffect, useRef} from 'react';
import style from '../styles/industries.module.scss';
import Image from 'next/image';
import gsap from "gsap";
export default function Industry() {
    const [data, setAPIData] = useState(null);
    const elementsRef = useRef([]);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/industries');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Industries Module", error);
            }
        };
        fetchAPI();
    }, []);
    useEffect(() => {
      if (!elementsRef.current || elementsRef.current.length === 0) return;
      const elements = elementsRef.current.filter(Boolean);
      gsap.set(elements, { opacity: 0, y: 40 });
      const timeline = gsap.timeline();
      const observer = new IntersectionObserver(
        (entries, observerInstance) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const delay = timeline.isActive() ? "-=0.3" : "+=0";
              timeline.to(entry.target, {
                    autoAlpha: 1,
                    y: 0,
                    duration: 0.4,
                    ease: "power3.out",
                }, delay);
                observerInstance.unobserve(entry.target);
            }
          });
        },
        { threshold:0.9}
      );
      requestAnimationFrame(() => {
        elements.forEach((el) => observer.observe(el));
      });
    }, [data]);
    return (
        <>
            {data?.industries && (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.industries.maintitle}</div>
                        <h2>{data?.industries.title}</h2>
                        <p>{data?.industries.subtitle}</p>
                    </div>
                    <div className={style.industriesrow}>
                        {data?.industries.industrieslist?.map((data, index) => (
                        <div className={style.industriesbox} key={index}  ref={(el) => (elementsRef.current[index] = el)}>
                            {data?.image && (
                            <div className={style.industriesicon}>
                                <Image 
                                    src={data?.image.url}
                                    alt={data?.image.alt}
                                    width={60}
                                    height={60}
                                    priority='false'
                                />
                            </div>
                            )}
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
