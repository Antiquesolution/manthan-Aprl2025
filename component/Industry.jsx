import React from 'react'
import {useState, useEffect} from 'react';
import style from '../styles/industries.module.scss';
import Image from 'next/image';
export default function Industry() {
    const [data, setAPIData] = useState(null);
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
    console.log(data)
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
                        <div className={style.industriesbox} key={index}>
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
