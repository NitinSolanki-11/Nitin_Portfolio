import { useState, useEffect } from "react";
import styles from "./Navbar.module.css";

/* Navigation links config */
const NAV_LINKS = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Internship", href: "#internship" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /* Add shadow/glow on scroll */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ""}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <div className={styles.logoIcon}>◈</div>
        <span>NITIN SOLANKI</span>
      </div>

      {/* Desktop links */}
      <ul className={`${styles.links} ${menuOpen ? styles.open : ""}`}>
        {NAV_LINKS.map((link) => (
          <li key={link.label}>
            <a href={link.href} onClick={closeMenu} className={styles.link}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>

      {/* Right controls */}
      <div className={styles.controls}>
        <button
          className={styles.themeBtn}
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? "☀️ LIGHT" : "🌙 DARK"}
        </button>

        {/* Hamburger */}
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? styles.barTop : ""} />
          <span className={menuOpen ? styles.barMiddle : ""} />
          <span className={menuOpen ? styles.barBottom : ""} />
        </button>
      </div>
    </nav>
  );
}
