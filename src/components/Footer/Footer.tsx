import Image from "next/image";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.upper}>
          <div>
            <h2 className={styles.headline}>
              Bereit für den
              <br />
              <span className={styles.headlineAccent}>nächsten</span> Schritt?
            </h2>
            <p className={styles.footerDescription}>
              Lassen Sie uns gemeinsam etwas Herausragendes schaffen. Besuchen
              Sie uns in Oberhausen, Dresden oder Berlin.
            </p>
          </div>

          <div className={styles.columns}>
            <div>
              <p className={styles.columnLabel}>Kontakt</p>
              <ul className={styles.columnList}>
                <li>
                  <a
                    href="mailto:hallo@move-elevator.de"
                    className={styles.columnLink}
                  >
                    hallo@move-elevator.de
                  </a>
                </li>
                <li>
                  <a href="tel:+4920830700" className={styles.columnLink}>
                    +49 (0) 208 307 00
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className={styles.columnLabel}>Social</p>
              <ul className={styles.columnList}>
                <li>
                  <a href="#" className={styles.columnLink}>
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.columnLink}>
                    Instagram
                  </a>
                </li>
                <li>
                  <a href="#" className={styles.columnLink}>
                    Behance
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <div className={styles.bottomLogo}>
            <Image
              src="/images/logo-white.svg"
              alt="move:elevator"
              width={150}
              height={28}
            />
          </div>
          <div className={styles.bottomLinks}>
            <a href="#" className={styles.bottomLink}>
              Impressum
            </a>
            <a href="#" className={styles.bottomLink}>
              Datenschutz
            </a>
            <a href="#" className={styles.bottomLink}>
              Cookies
            </a>
            <span>&copy; 2025 move:elevator GmbH</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
