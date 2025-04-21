import React from 'react';
import Head from 'next/head';
import style from '@/styles/careerpost.module.scss';
import {useState, useEffect} from 'react';
import {useRouter} from 'next/router';
import Header from '@/component/Header';
import Footer from '@/component/Footer';
import Recentblog from '@/component/recentblog';
import Link from 'next/link';
import Image from 'next/image';
export default function index() {
    const [data, setAPIData] = useState(null);
    const [post, setPostData] = useState(null);
    const router = useRouter();
    const { slug } = router.query;
    const baseUrl = typeof window !== "undefined" ? window.location.origin : '/';
    const currentUrl = `${baseUrl}${router.asPath}`;
    useEffect(() => {
        if (!slug) return;
        const fetchAPI = async () => {
            try {
                const res = await fetch(`/api/jobpost?slug=${slug}`);
                const json = await res.json();
                setPostData(json);
            } catch (error) {
                console.error("Error fetching Job Post data", error);
            }
        };
        fetchAPI();
    }, [slug]);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/career');
                const data = await res.json();
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Career Post Module", error);
            }
        };
        fetchAPI();
    }, []);
    const jsonLd = {
        "@context":"https://schema.org",
        "@type":"JobPosting",
        "title": `${post?.[0]?.title} - Manthan Technologies`,
        "development":"Website Design,  Web Development, PSD to HTML, Responsive HTML5, Ecommerce Web Development, Mobile App Development, HubSpot Development, Wordpress Development, PHP Development, HTML Development, CMS Development",
        "datePosted":`${post?.[0]?.date}`,
        "employmentType":"Full Time",
        "jobLocation":{
            "@type":"Place",
            "address":{
                "@type":"PostalAddress",
                "addressLocality": `${post?.[0]?.location}, Gujarat`,
                "addressRegion":"Gujarat",
                "addressCountry":"India"
            }
        },
        "hiringOrganization":{
            "@type":"Organization",
            "name":"Manthan Technologies",
            "sameAs":baseUrl,
            "logo": `${baseUrl}/images/logo.svg`
        }
    };
    return (
        <>
            <Head>
                <title>{post?.[0]?.title} - Manthan Technologies</title>
                <link rel="preload" href={`${baseUrl}/images/logo.svg`} as="image" type="image/svg+xml" />
                <meta name="development" content="Website Design,  Web Development, PSD to HTML, Responsive HTML5, Ecommerce Web Development, Mobile App Development, HubSpot Development, Wordpress Development, PHP Development, HTML Development, CMS Development" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-status-bar-style" content="white-translucent" />
                <meta name="twitter:card" content="summary" />
                <meta name="twitter:title" content={`${post?.[0]?.title} - Manthan Technologies`} />
                <meta name="og:title" content={`${post?.[0]?.title} - Manthan Technologies`} />
                <meta name="og:url" content={currentUrl} />
                <meta name="og:site_name" content="Manthan Technologies" />
                <meta name="og:locale" content="en_US" />
                <meta name="og:type" content="article" />
                <meta name="og:updated_time" content={post?.[0]?.date}></meta>
                <meta name="author" content="Manthan Technologies" />
                <link rel="canonical" href={currentUrl} />
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML=
                    {{ __html: JSON.stringify(jsonLd) }}
                />
            </Head>
            <Header />
            <div className={style.banner}>
                <div className={style.container}>
                    <div className={style.bannerrow}>
                        <div className={style.banneinfo}>
                            <Link
                                className={style.backpage}
                                href='/career'
                                target='_self'
                            >
                                <Image 
                                    src='/images/left-arrow.svg'
                                    alt='left-arrow'
                                    width={20}
                                    height={20}
                                    priority={false}
                                />
                                Back to Job Listing
                            </Link>
                            <h1>{post?.[0]?.title}</h1>
                            <p>{post?.[0]?.subtitle}</p>
                            <ul>
                                <li>
                                    <Image src='/images/experience-icon.svg' alt='experience-icon' width={25} height={25} priority={false} />
                                    <p><strong>Experience:</strong> {post?.[0]?.experience}</p>
                                </li>
                                <li>
                                    <Image src='/images/job-type.svg' alt='job-type' width={25} height={25} priority={false} />
                                    <p><strong>Job Type:</strong> {post?.[0]?.jobtype}</p>
                                </li>
                                <li>
                                    <Image src='/images/location-icon.svg' alt='location-icon' width={25} height={25} priority={false} />
                                    <p><strong>Location:</strong> {post?.[0]?.location}</p>
                                </li>
                                <li>
                                    <Image src='/images/write-icon.svg' alt='write-icon' width={25} height={25} priority={false} />
                                    <p><strong>Openings:</strong> {post?.[0]?.openings}</p>
                                </li>
                            </ul>
                            <Link
                                className={style.button}
                                href='/'
                                target='_self'
                                >
                                    Apply Now
                            </Link>
                        </div>
                        {data?.bannerpost.image && (
                        <div className={style.bannerimage}>
                            <Image 
                                src={data?.bannerpost.image.url}
                                alt={data?.bannerpost.image.alt}
                                width={600}
                                height={400}
                                priority={true}
                            />
                        </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={style.post}>
                <div className={style.container}>
                    {post?.[0]?.jobdiscription.subtitle && (
                    <div className={style.info}>
                        <h2>{post?.[0]?.jobdiscription.title}</h2>
                        <p>{post?.[0]?.jobdiscription.subtitle}</p>
                    </div>
                    )}
                    {post?.[0]?.qualifications.subtitle && (
                    <div className={style.info}>
                        <h2>{post?.[0]?.qualifications.title}</h2>
                        <p>{post?.[0]?.qualifications.subtitle}</p>
                    </div>
                    )}
                    {post?.[0]?.roles_responsibilities && (
                    <div className={style.info}>
                        <h2>Roles and Responsibilities</h2>
                        <div className={style.row}>
                            {post?.[0]?.roles_responsibilities.map((post, index) => (
                            <div className={style.grid} key={index} dangerouslySetInnerHTML={{__html: post?.content }} />
                            ))}
                        </div>
                    </div>
                    )}
                </div>
            </div>
            {data?.hiringprocess && (
            <div className={style.hireprocess}>
                <div className={style.container}>
                    <div className={`${style.maintitle} ${style.centertitle}`}>
                        <div className={style.title}>{data?.hiringprocess.maintitle}</div>
                        <h2>{data?.hiringprocess.title}</h2>
                    </div>
                    <div className={style.row}>
                        {data?.hiringprocess.processlist.map((data, index) => (
                        <div className={style.processsteps} key={index}>
                            <div className={style.processarrow}>
                                <Image 
                                    src='/images/process-arrow.svg'
                                    alt='process-arrow'
                                    width={68}
                                    height={78}
                                    priority={false}
                                    style={{maxWidth:'100%', height:'auto'}}
                                />
                            </div>
                            <h4>{data?.title}</h4>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
            )}
            {data?.benefits && (
            <div className={style.perks}>
                <div className={style.container}>
                    <div className={style.row}>
                        <div className={style.perksnfo}>
                            <div className={style.maintitle}>
                                <div className={style.title}>{data?.benefits.maintitle}</div>
                                <h2>{data?.benefits.title}</h2>
                                <p>{data?.benefits.subtitle}</p>
                                <Link
                                    className={style.button}
                                    href={data?.benefits.button.url}
                                    target={data?.benefits.button.target || '_self'}
                                >
                                    {data?.benefits.button.title}
                                </Link>
                            </div>
                        </div>
                        <div className={style.perksnfo}>
                            {data?.benefits.benefitsinfo.map((data, index) => (
                            <div className={style.perkslist} key={index}>
                                <h3>{data?.title}</h3>
                                <p>{data?.subtitle}</p>
                            </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            )}
            <Recentblog />
            <Footer />
        </>
    )
}
