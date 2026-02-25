"use client";

import Link from "next/link";
import styles from "./Header.module.css";

const navItems = [
  { label: "Services", href: "#services" },
  { label: "Projekte", href: "#projekte" },
  { label: "Agentur", href: "#agentur" },
  { label: "KI-Transformation", href: "#ki-transformation" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}>&#9650;</div>
          <span className={styles.logoText}>
            move<span className={styles.logoAccent}>:</span>elevator
          </span>
        </Link>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <div className={styles.actions}>
          <button className={`brutalism-button ${styles.contactButton}`}>
            Kontakt
          </button>
          <button className={styles.menuButton} aria-label="Menü öffnen">
            &#9776;
          </button>
        </div>
      </div>
    </header>
  );
}
