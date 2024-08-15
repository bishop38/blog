'use client';

import Link from 'next/link';
import styles from './MenuLink.module.scss';

interface MenuLinkProps {
    href: string;
    isActive: boolean;
    children: React.ReactNode;
}

export default function MenuLink({ href, isActive, children }: MenuLinkProps) {
    return (
        <div>
            <Link
                href={href}
                className={`${isActive ? styles.menu__link_active : styles.menu__link
                    }`}
            >
                {children}
            </Link>
        </div>

    );
}