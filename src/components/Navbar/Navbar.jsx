"use client";


import styles from "./navbar.module.css";
import menuItems from './menuItems';
import NavLink from "./NavLinks/NavLink";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";



const Navbar = () => {

  const [toggle, setToggle] = useState(false);

  const toggleMenu = () => {
    setToggle(!toggle);
  };

  return (

    <>

      <div className={styles.mobileMenu} onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    
      <nav className={`${styles.mainMenu} ${toggle? styles.active: ""}`}>
          
          <div className={styles.closeBtn} onClick={toggleMenu}>&#x2715;</div>

          <Link href="/">
              <Image src="/tora_logo.jpg" alt="לוגו האתר" width={85} height={85}  className={styles.siteLogoMobile}/>
          </Link>


          {menuItems.map((item) => (
              <NavLink item={item} key={item.path}/>
          ))}

      </nav>
    
    </>
  )
}

export default Navbar