import React from 'react';
import { useState, useEffect } from 'react';
import style from '../styles/footer.module.scss';
import Link from 'next/link';
import Image from 'next/image';
export default function Footer() {
    const [data, setAPIData] = useState(null);
    const date = new Date();
    const year = date.getFullYear();
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/footer');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Footer Module", error);
            }
        };
        fetchAPI();
    }, []);
    return (
        <>

            <footer className={style.main}>
                <div className={style.container}>
                    <div className={style.toprow}>
                        <div className={style.sidebar}>
                            <h3>{data?.footer.title}</h3>
                            <p>{data?.footer.subtitle}</p>
                        </div>
                        <div className={style.rightsidebar}>
                            <Link
                                className={style.button}
                                href={data?.footer.button.url || '#'}
                                target={data?.footer.button.target || '_self'}
                            >
                                {data?.footer.button.title}
                            </Link>
                            <div className={style.followus}>
                                <h4>{data?.footer.followus.title}</h4>
                                <ul>
                                    {data?.footer.followus.followus?.map((data, index) => (
                                    <li key={index}>
                                        <Link
                                            href={data?.link.url || '#'}
                                            target={data?.link.target || '_self'}
                                        >
                                            <i className={style[data?.icon]} />
                                        </Link>
                                    </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className={style.middle}>
                        <div className={style.row}>
                            {data?.logo && data?.title &&(
                            <div className={style.logobox}>
                                <Image 
                                    src={data?.logo.url}
                                    alt={data?.logo.alt}
                                    width={192}
                                    height={44}
                                    priority={false}
                                />
                                <p>{data?.title}</p>
                            </div>
                            )}
                            <div className={style.footermenu}>
                                {data?.menu?.map((data, index) => (
                                <div className={style.footermenulist} key={index}>
                                    <h4>{data?.title}</h4>
                                    <ul>
                                        {data?.navmenu?.map((data, index) => (
                                        <li key={index}>
                                            <Link
                                                href={data?.url || '#'}
                                                target={data?.target || '_self'}
                                            >
                                                {data?.title}
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className={style.bottom}>
                        <div className={style.copyright}>
                            <p>&copy; {year} Manthan Technologies All rights reserved</p>
                            <ul>
                                {Array.isArray(data?.copyright) &&
                                data?.copyright.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <li>
                                            <Link
                                                href={item?.url || '#'}
                                                target={item?.target || '_self'}
                                            >
                                                {item?.title}
                                            </Link>
                                        </li>
                                        {index !== data.copyright.length - 1 && ' |'}
                                    </React.Fragment>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
