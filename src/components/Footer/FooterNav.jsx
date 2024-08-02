import styles from './footer.module.css';

const FooterNav = ({header, menuItems}) => {
  return (
    <nav className={styles.footerMenu}>
        <h3>{header}</h3>
        <ul>
            {
                menuItems.map((item) => (
                    <li key={item.name}><a href={item.url}>{item.name}</a></li>
                ))
            }
        </ul>
    </nav>
  )
}

export default FooterNav