import React from 'react';
import {useState, useEffect} from 'react';
import style from '@/styles/business.module.scss';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Technologies from '@/component/Technologies';
import Testimonials from '@/component/Testimonials';
import Recentblog from '@/component/recentblog';
import Link from 'next/link';
import Image from 'next/image';
export default function index() {
    const [data, setAPIData] = useState(null);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/business-model');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Business Model Module", error);
            }
        };
        fetchAPI();
    }, []);
    console.log(data);
    return (
        <>
            <Header />
            {data?.businessmodel && (
            <div className={style.main}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.businessmodel.maintitle}</div>
                        <h1>{data?.businessmodel.title}</h1>
                        <p>{data?.businessmodel.subtitle}</p>
                    </div>
                    {data?.businessmodel.businessmodellist?.map((data, index) => (
                    <div className={style.row} key={index}>
                        <div className={style.model}>
                            <Image 
                                src={data?.image.url}
                                alt={data?.image.alt}
                                width={600}
                                height={400}
                                priority='false'
                            />
                        </div>
                        <div className={style.model}>
                            <div dangerouslySetInnerHTML={{__html: data?.discription}} />
                            <Link
                                className={style.button}
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
            )}
            {data?.modeldifferences && (
            <div className={style.difference}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.modeldifferences.maintitle}</div>
                        <h2>{data?.modeldifferences.title}</h2>
                        <p>{data?.modeldifferences.subtitle}</p>
                    </div>
                    <div className='responsive'>
                        <table>
                            <thead>
                                {Array.isArray(data?.modeldifferences?.table) &&
                                data.modeldifferences.table.length > 0 && (
                                    <tr>
                                    {data.modeldifferences.table[0].map((data, index) => (
                                        <th key={index}>
                                        {data}
                                        </th>
                                    ))}
                                    </tr>
                                )}
                            </thead>
                            <tbody>
                                {Array.isArray(data?.modeldifferences?.table) &&
                                data.modeldifferences.table.slice(1).map((data, index) => (
                                    <tr key={index}>
                                        {data.map((data, index) => (
                                        <td key={index}>{data}</td>
                                         ))}
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            )}
            <Technologies />
            <Testimonials />
            <Recentblog />
            <Footer />
        </>
    )
}
