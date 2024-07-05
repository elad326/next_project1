
import styles from "./navbar.module.css";
import menuItems from './menuItems';
import NavLink from "./NavLinks/NavLink";



const Navbar = () => {

  return (
    <nav className={styles.mainMenu}>

        {menuItems.map((item) => (
            <NavLink item={item} key={item.path}/>
        ))}

    </nav>
  )
}

export default Navbar