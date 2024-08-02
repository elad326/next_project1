
import styles from "./header.module.css"
import Navbar from "../Navbar/Navbar";
import Link from "next/link";
import Image from "next/image";


const Header = () => {
  return (
    <div className={styles.container}>
        <Link href="/">
          <Image src="/tora_logo.jpg" alt="לוגו האתר" width={150} height={150} className={styles.siteLogo} role="logo"/>
        </Link>
        <Navbar/>
    </div>
  )
}

export default Header