import Image from "next/image"
import Link from "next/link";
import styles from "./header.module.css"
import Navbar from "../Navbar/Navbar";


const Header = () => {
  return (
    <div className={styles.container}>
        <Link href="/">
            <Image src="/tora_logo.jpg" alt="לוגו האתר" width={150} height={150} />
        </Link>
        <Navbar/>
    </div>
  )
}

export default Header