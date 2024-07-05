"use client";

import { usePathname } from 'next/navigation';
import styles from './navLinks.module.css';
import Link from 'next/link';

const NavLink = ({item}) => {

    const path = usePathname();

    const isActive = (path === item.path)? styles.active : "";

  return (
    <Link href={item.path} className={`${styles.menuLink} ${isActive}`}>{item.name}</Link>
  )
}

export default NavLink