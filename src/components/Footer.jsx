import styles from './Footer.module.css'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>

        <div className={styles.brand}>
          <div className={styles.logoIcon}>◈</div>
          <span className={styles.logoText}>NITIN.DEV</span>
        </div>

        <p className={styles.copy}>
          Designed & Built by <span>Nitin Solanki</span> &nbsp;·&nbsp; © {currentYear}
        </p>

        <p className={styles.sub}>
          Full-Stack Java Developer · Mathura, Uttar Pradesh
        </p>

        <div className={styles.socials}>
          <a href="https://github.com/NitinSolanki-11"                         target="_blank" rel="noreferrer" className={styles.social}>GitHub</a>
          <a href="https://www.linkedin.com/in/nitin-solanki-515807257/"       target="_blank" rel="noreferrer" className={styles.social}>LinkedIn</a>
          <a href="mailto:nitin5115solanki@gmail.com"                          className={styles.social}>Email</a>
          <a href="https://wa.me/917668895115"                                 target="_blank" rel="noreferrer" className={styles.social}>WhatsApp</a>
        </div>

      </div>
    </footer>
  )
}
