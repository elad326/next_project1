import Link from "next/link";
import styles from "./navbar.module.css";
import menuItems from './menuItems';



const Navbar = () => {

  return (
    <nav className={styles.mainMenu}>

        {menuItems.map((item) => (
            <Link href={item.path} key={item.name} className={styles.menuLink}>{item.name}</Link>
        ))}

    </nav>
  )
}

export default Navbar