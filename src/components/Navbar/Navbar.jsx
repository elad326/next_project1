"use client";


import styles from "./navbar.module.css";
import menuItems from './menuItems';
import NavLink from "./NavLinks/NavLink";
import { useState } from "react";



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

          {menuItems.map((item) => (
              <NavLink item={item} key={item.path}/>
          ))}

      </nav>
    
    </>
  )
}

export default Navbar