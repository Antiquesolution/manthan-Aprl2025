import React from 'react';
import style from '../styles/testimonials.module.scss';
import { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
export default function Testimonials() {
    const [data, setAPIData] = useState(null);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/testimonials');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Testimonials Module", error);
            }
        };
        fetchAPI();
    }, []);
    return (
        <>
            {data?.testimonials ? (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.testimonials.maintitle}</div>
                        <h2>{data?.testimonials.title}</h2>
                        <p>{data?.testimonials.subtitle}</p>
                    </div>
                    <Swiper
                            className={style.swiper}
                            modules={[Autoplay]}
                            loop={true}
                            autoplay={{
                                delay: 4000
                            }}
                            slidesPerView={1}
                            breakpoints={{
                                468:{slidesPerView:1,spaceBetween:30},
                                768:{slidesPerView:2,spaceBetween:30}
                            }}
                            navigation={false}
                        >
                            {data?.testimonials.clienttestimonials.map((data, index) => {
                            const nameParts = data?.name ? data.name.split(" ") : [];
                            const initials = nameParts.length > 1 ? `${nameParts[0].charAt(0)}${nameParts[1].charAt(0)}` : nameParts[0]?.charAt(0) || "";
                            return (
                                <SwiperSlide key={index}>
                                    <div className={style.wrap}>
                                        <i>
                                            <svg width="33" height="24" viewBox="0 0 33 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M14.3044 0V1.51767C9.77962 4.12112 6.98679 7.42213 5.92587 11.4224C7.0742 10.676 8.11798 10.3006 9.05806 10.3006C10.6246 10.3006 11.9469 10.9331 13.0258 12.1997C14.1047 13.4645 14.6446 15.0114 14.6446 16.8427C14.6446 18.8668 13.935 20.5679 12.5176 21.9399C11.0993 23.3119 9.35457 24 7.28415 24C5.21288 24 3.48097 23.1259 2.08841 21.3786C0.695851 19.6312 0 17.4563 0 14.8562C0 11.1919 1.40027 7.90973 4.20339 5.0055C7.00479 2.10298 10.3718 0.434478 14.3044 0ZM32.1085 0V1.51767C27.5829 4.12112 24.7893 7.42213 23.7292 11.4224C24.8767 10.676 25.9299 10.3006 26.8871 10.3006C28.4373 10.3006 29.7493 10.9331 30.83 12.1997C31.9089 13.4645 32.4479 15.0114 32.4479 16.8427C32.4479 18.8668 31.7435 20.5679 30.3338 21.9399C28.9241 23.3119 27.1836 24 25.1132 24C23.0248 24 21.2886 23.1259 19.9054 21.3786C18.5215 19.6312 17.829 17.4563 17.829 14.8562C17.829 11.1919 19.2259 7.90973 22.0196 5.0055C24.8124 2.10298 28.1751 0.434478 32.1085 0Z" fill="#81807E"/>
                                            </svg>
                                        </i>
                                        <p>{data?.title}</p>
                                        <div className={style.userinfo}>
                                            <h4 className={style.image}>{initials}</h4>
                                            <div className={style.userdetails}>
                                                <p><strong>{data?.name}</strong></p>
                                                <p>{data?.country}</p>
                                            </div>
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                        </Swiper>
                </div>
            </div>
            ):null}
        </>
    )
}
