import React from 'react';
import {useState, useEffect} from 'react';
import style from '../styles/technologies.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
export default function Technologies() {
    const [data, setAPIData] = useState(null);
    const [activeTab, setActiveTab] = useState(0);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/technologies');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Technologies Module", error);
            }
        };
        fetchAPI();
    }, []);
    return (
        <>
            {data?.technologies && (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.technologies.maintitle}</div>
                        <h2>{data?.technologies.title}</h2>
                        <p>{data?.technologies.subtitle}</p>
                    </div>
                    <Swiper
                        className={`swiper-container ${style.swiper}`}
                        modules={[Navigation]}
                        allowTouchMove={false}
                        loop={false}
                        slidesPerView={2}
                        breakpoints={{
                            468: { slidesPerView: 3 },
                            991: { slidesPerView: 4 },
                            1280: { slidesPerView: 6 },
                        }}
                        navigation={true}
                    >
                        {data?.technologies.technologieslist.map((data, index) => (
                            <SwiperSlide key={index}>
                                <div className={`${style.list} ${activeTab === index ? style.active : ''}`}  onClick={() => setActiveTab(index)} key={index}>
                                    {data?.technologiesmenu}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <ul>
                    {data?.technologies.technologieslist[activeTab]?.technologiesinfo.map((data,index) => (
                        <li key={index}>
                            <div className={style.info}>
                                {data?.image &&(
                                <div className={style.icon}>
                                    <Image 
                                        src={data?.image.url}
                                        alt={data?.image.alt}
                                        width={35}
                                        height={35}
                                    />
                                </div>
                                )}
                                <p>{data?.title}</p>
                            </div>
                        </li>
                    ))}
                    </ul>
                </div>
            </div>
            )}
        </>
    )
}