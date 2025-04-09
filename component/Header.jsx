import React from 'react';
import style from '@/styles/header.module.scss'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
export default function Header() {
    const [data, setAPIData] = useState(null);
    const [windowWidth, setWindowWidth] = useState(0);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);
    useEffect(() => {
        const fetchAPI = async () => {
            try {
                const res = await fetch('/api/header');
                const data = await res.json();  
                setAPIData(data);
            }catch (error){
                console.error("Error fetching Header Module", error);
            }
        };
        fetchAPI();
        if (typeof window !== "undefined") {
            setWindowWidth(window.innerWidth);
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
            return () => {
                window.removeEventListener('resize', handleResize);
            };
        }
    }, []);
    const isUnwrapped = windowWidth > 1150;
    const toggleMenu = () => {
        setIsMenuOpen(prevState => !prevState);
    };
    const toggleSubMenu = (index) => {
        setOpenSubMenuIndex(prevIndex => (prevIndex === index ? null : index));
    };
    return (
        <>
            <header className={style.main}>
                <div className={style.container}>
                    <div className={style.navbar}>
                        {data?.logo && (
                        <Link className={style.logo} href='/' target='_self'>
                            <Image
                                style={{opacity:0}}
                                src={data?.logo.url}
                                alt={data?.logo.alt}
                                width={192}
                                height={44}
                                priority={false}
                            />
                        </Link>
                        )}
                        {isUnwrapped ? (<></>):(
                            <div  className={`${style.muneline} ${isMenuOpen ? style.active : ''}`} onClick={toggleMenu}><span></span></div>
                        )}
                        {data?.navmenu && (
                        <div className={style.mainnav}
                            style={windowWidth <= 1150 ? {
                                opacity: isMenuOpen ? '1' : '0',
                                visibility: isMenuOpen ? 'inherit' : 'hidden',
                                pointerEvents: isMenuOpen ? 'all' : 'none',
                            }: {}}
                        >
                            <ul className={style.navmenu}>
                                {data?.navmenu?.map((data, index) => (
                                <li className={`${style.menulist} ${data?.navmenuitem.title === 'Technologies' ? style.submenuli : ''}`} key={index}>
                                    <Link
                                        className={style.menulink}
                                        href={data?.navmenuitem.url}
                                        target={data?.navmenuitem.target || '_self'}
                                    >
                                        {data?.navmenuitem.title}
                                    </Link>
                                    {isUnwrapped ? (
                                        <></>
                                    ):(
                                        data?.navsubmenu && (
                                            <div className={style.menudrop} onClick={() => toggleSubMenu(index)}></div>
                                        )
                                    )}
                                    {data?.navsubmenu &&(
                                    <ul className={style.submenu} 
                                        style={windowWidth <= 1150 ? {
                                            display: openSubMenuIndex === index ? 'block' : '',
                                    }: {}}
                                    >
                                        {data?.navsubmenu?.map((data, index) => (
                                        <li className={style.submenulist} key={index}>
                                            <Link
                                                className={style.submenulink}
                                                href={data?.submenuitems.link.url}
                                                target={data?.submenuitems.link.target || '_self'}
                                            >
                                                {data?.submenuitems.link.title}
                                            </Link>
                                        </li>
                                        ))}
                                    </ul>
                                    )}
                                </li>
                                ))}
                            </ul>
                            {isUnwrapped ? (
                                <></>
                            ):(
                                data?.button && (
                                    <Link
                                        style={{"marginTop":"50px"}}
                                        className={style.button}
                                        href={data?.button.url}
                                        target={data?.button.alt}
                                    >
                                        {data?.button.title}
                                    </Link>
                                )
                            )}
                        </div>
                        )}
                        {isUnwrapped ? (
                            data?.button && (
                                <Link
                                 style={{"marginLeft":"50px"}}
                                    className={style.button}
                                    href={data?.button.url}
                                    target={data?.button.alt}
                                >
                                    {data?.button.title}
                                </Link>
                            )
                        ):(
                            <></>
                        )}
                    </div>
                </div>
            </header>
        </>
    )
}