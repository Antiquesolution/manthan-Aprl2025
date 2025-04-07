import React from 'react';
import style from '@/styles/header.module.scss'
export default function Header() {

    return (
        <>
            <header className={style.main}>
                <div className={style.container}>
                    <div className={style.navbar}>
                        <a className={style.logo}
                            href='#'
                            target='_self'
                        >
                        </a>
                        <div className={style.navmenu}>
                            
                        </div>
                    </div>
                </div>
            </header>
        </>
    )
}
