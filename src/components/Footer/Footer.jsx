import Image from 'next/image';
import styles from './footer.module.css';
import Link from 'next/link';
import FooterNav from './FooterNav';

import footerMenu from './footer_menu';

const Footer = () => {

  let d = new Date();
  let year = d.getFullYear();


  return (
    <footer>

      <div className={styles.siteFooter}>
        <div className={styles.footerLogo}>
          <Link href="/">
            <Image src="/Footer_Logo.png" alt="לוגו האתר" width={150} height={150} className={styles.siteLogo} role="logo"/>
          </Link>
        </div>

        {footerMenu.map(menu => <FooterNav key={menu.header} header={menu.header} menuItems={menu.links}/> )}

      </div>

      <div className={styles.copyrights}>
        &copy; - כל הזכויות שמורות לאלעד תורה בשמחה - {year}
      </div>
      
    </footer>
  )
}

export default Footer