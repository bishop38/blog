'use client';

import Link from 'next/link';

import styles from './HeaderLogo.module.scss';

export default function HeaderLogo() {

    return (
        <div className={styles['header-logo']}>
            <Link className={styles['header-logo__link']} href="/home" replace>
                <span className={`${styles['logo-text']}`}><span className={styles['logo-text_color']}>Blog</span></span>
            </Link>
        </div>
    )
}