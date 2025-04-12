import React from 'react';
import { useState, useEffect } from 'react';
import style from '../styles/blog.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
export default function recentblog() {
    const [data, setAPIData] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/blog');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Recent Blog Module", error);
            }
        };
        fetchAPI();
    }, []);
    useEffect(() => {
        const handleResize = () => {
          setIsMobile(window.innerWidth <= 1150);
        };
    
        handleResize(); // run initially
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    },[data]);
    return(
        <>
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>Blogs</div>
                        <h2>Hand-picked and best-read stories</h2>
                        <p>Want to work with some of the best global talent and build software used by all the companies you know and love?</p>
                    </div>
                    {isMobile ? (
                        <>
                            <Swiper
                                className={style.blogrow}
                                modules={[Pagination]}
                                grabCursor={true}
                                pagination={{
                                    el: `.${style.pagination}`,
                                    clickable: true,
                                    renderBullet: (index, className) => {
                                      return `<span class="${className}"></span>`;
                                    },
                                }}
                                spaceBetween={30}
                                breakpoints={{
                                    639: { slidesPerView: 1 },
                                    700: { slidesPerView: 2 },
                                    1000: { slidesPerView: 2 },
                                }}
                            >
                            {data?.slice(0, 3).map((data, index) => (
                            <SwiperSlide className={style.bloglist} key={index}>
                                <div className={style.blogimage}>
                                    <Link
                                        href={`/blog/${data?.slug}`}
                                    >
                                        <Image 
                                            src='/images/whyus.jpg'
                                            alt='whyus'
                                            width={1020}
                                            height={500}
                                            priority='false'
                                            style={{'width':'auto', 'height':'auto', 'maxWidth': '100%'}}
                                        />
                                    </Link>
                                </div>
                                <div className={style.blogcontent}>
                                    <div className={style.blogtag}>
                                    {data?.Tags?.map((data, index) => (
                                        <a href={`/blog/category/${data.toLowerCase().replace(/-/g, '/').replace(/\//g, '-')}`} key={index}>{data}</a>
                                    ))}
                                    </div>
                                    <Link href={`/blog/${data?.slug}`}>
                                        <h4>{data?.Title}</h4>
                                    </Link>
                                    <p>{data?.Content.replace(/<[^>]*>/g, '').slice(0, 130) + (data?.Content.replace(/<[^>]*>/g, '').length > 130 ? '.....' : '')}</p>
                                    <div className={style.blogauthor}>
                                        <div className={style.blogauthorbio}>
                                            <Image 
                                                src={`/images/avtar.svg`}
                                                alt='auhor'
                                                width={48}
                                                height={48}
                                            />
                                        </div>
                                        <div className={style.blogauthordetails}>
                                            <p>{data?.author.Name}</p>
                                            <p>{data?.Date}</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            ))}
                            
                        </Swiper>
                        <div className={style.pagination}></div>
                    </>
                    ):(
                        <>
                            <div className={style.blogrow}>
                                {data?.slice(0, 3).map((data, index) => (
                                <div className={style.bloglist} key={index}>
                                    <div className={style.blogimage}>
                                        <Link
                                            href={`/blog/${data?.slug}`}
                                        >
                                            <Image 
                                                src='/images/whyus.jpg'
                                                alt='whyus'
                                                width={1020}
                                                height={500}
                                                priority='false'
                                                style={{'width':'auto', 'height':'auto', 'maxWidth': '100%'}}
                                            />
                                        </Link>
                                    </div>
                                    <div className={style.blogcontent}>
                                        <div className={style.blogtag}>
                                        {data?.Tags?.map((data, index) => (
                                            <a href={`/blog/category/${data.toLowerCase().replace(/-/g, '/').replace(/\//g, '-')}`} key={index}>{data}</a>
                                        ))}
                                        </div>
                                        <Link href={`/blog/${data?.slug}`}>
                                            <h4>{data?.Title}</h4>
                                        </Link>
                                        <p>{data?.Content.replace(/<[^>]*>/g, '').slice(0, 130) + (data?.Content.replace(/<[^>]*>/g, '').length > 130 ? '.....' : '')}</p>
                                        <div className={style.blogauthor}>
                                            <div className={style.blogauthorbio}>
                                                <Image 
                                                    src={`/images/avtar.svg`}
                                                    alt='auhor'
                                                    width={48}
                                                    height={48}
                                                />
                                            </div>
                                            <div className={style.blogauthordetails}>
                                                <p>{data?.author.Name}</p>
                                                <p>{data?.Date}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}   
