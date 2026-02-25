"use client";

import { motion } from "framer-motion";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className={styles.badge}>Full-Service Digitalagentur</div>

          <h1 className={styles.headline}>
            Herzen gewinnen
            <br />
            durch digitale
            <br />
            <span className={styles.headlineAccent}>Exzellenz</span>
          </h1>

          <p className={styles.description}>
            Strategische Präzision trifft auf kreative Exzellenz für Ihren
            digitalen Erfolg. Wir bauen Brücken zwischen Marken und Menschen.
          </p>

          <div className={styles.ctas}>
            <button className={`brutalism-button ${styles.ctaPrimary}`}>
              Projekt starten &rarr;
            </button>
            <button className={`brutalism-button ${styles.ctaSecondary}`}>
              Unsere Arbeit
            </button>
          </div>
        </motion.div>

        <motion.div
          className={styles.visual}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          <div className={`brutalism-card ${styles.imageCard}`}>
            <img
              src="/images/hero-team.jpg"
              alt="Modernes Team arbeitet gemeinsam an einem digitalen Projekt"
              className={styles.image}
            />
          </div>
          <div className={styles.statBadge}>
            <p className={styles.statNumber}>+250</p>
            <p className={styles.statLabel}>Digital-Experten</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
