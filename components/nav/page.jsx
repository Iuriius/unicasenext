"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import styles from "./page.module.css";

export default function Nav() {
    const router = useRouter();
    const { pathname } = router;
    return (
        <nav className={styles.nav}>
            <ul className={styles.navigation}>
                <li><Link className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href="/">Головна</Link></li>
                <li><Link className={`${styles.link} ${pathname === '/cases' ? styles.active : ''}`} href="/cases">Послуги</Link></li>
                <li><Link className={`${styles.link} ${pathname === '/ourteam' ? styles.active : ''}`} href="/ourteam">Команда</Link></li>
                <li><Link className={`${styles.link} ${pathname === '/contacts' ? styles.active : ''}`} href="/contacts">Контакти</Link></li>
            </ul>
        </nav>
    )
}