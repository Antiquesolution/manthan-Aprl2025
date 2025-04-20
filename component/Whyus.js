import React from 'react';
import {useState, useEffect} from 'react';
import style from '../styles/whyus.module.scss';
import Image from 'next/image';
export default function Whyus() {
    const [data, setAPIData] = useState(null);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/whyus');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Whyus Module", error);
            }
        };
        fetchAPI();
    }, []);
    return (
        <>
            {data?.whyus && (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.whyus.maintitle}</div>
                        <h2>{data?.whyus.title}</h2>
                        <p>{data?.whyus.subtitle}</p>
                    </div>
                    <div className={style.whyusrow}>
                        <div className={style.whyusinfo}>
                            {data?.whyus.whyuslist?.map((data, index) => (
                            <div className={style.whyuslist} key={index}>
                                {data?.counter && (
                                <h4 className={style.whyuscounter}>{data?.counter}{data?.symbol}</h4>
                                )}
                                {data?.image && (
                                <div className={style.whyusicon}>
                                    <Image 
                                        src={data?.image.url}
                                        alt={data?.image.alt}
                                        width={40}
                                        height={40}
                                        priority={false}
                                    />
                                </div>
                                )}
                                <p>{data?.title}</p>
                            </div>
                            ))}
                        </div>

                        <div className={style.whyusimage}>
                            <Image 
                                src={data.whyus.image.url}
                                alt={data?.whyus.image.alt}
                                width={550}
                                height={350}
                                priority={false}
                                style={{'maxWidth':'100%', 'height':'auto', 'width':'auto', 'height':'auto'}}
                            />
                        </div>

                    </div>
                </div>
            </div>
            )}
        </>
    )
}
