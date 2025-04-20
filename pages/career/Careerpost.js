import React from 'react';
import {useState, useEffect} from 'react';
import style from '@/styles/career.module.scss';
import Link from 'next/link';
export default function index() {
    const [data, setAPIData] = useState(null);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/jobpost');
                const data = await res.json();
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Business Model Module", error);
            }
        };
        fetchAPI();
    }, []);
    return(
        <>
            <div className={style.opening}>
                {data?.map((data, index) => (
                <div className={style.positionbox} key={index}>
                    <div className={style.openingtitle}>
                        <Link href={`/career/${data.slug}`}>
                            <h3>{data?.title}</h3>
                        </Link>
                        <p>{data?.experience} of Experience</p>
                    </div>
                    <div className={style.openingvacancy}>
                        <p>Openings: <span>{data?.openings}</span></p>
                    </div>
                    <div className={style.openingaction}>
                        <Link
                            className={style.button}
                            href={`/career/${data.slug}`}
                            target='_self'
                        >
                            Apply Now
                        </Link>
                    </div>
                </div>
                ))}
            </div> 
        </>
    )
}
