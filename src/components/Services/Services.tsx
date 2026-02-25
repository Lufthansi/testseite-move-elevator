"use client";

import { motion } from "framer-motion";
import styles from "./Services.module.css";

const services = [
  {
    icon: "💡",
    title: "Strategie",
    description:
      "Datengetriebene Markenführung für die digitale Ära. Wir definieren Ziele und Wege.",
  },
  {
    icon: "📈",
    title: "Online Marketing",
    description:
      "Performance-Steigerung durch gezielte Kampagnen und messbaren Erfolg.",
  },
  {
    icon: "⟨/⟩",
    title: "Web-Entwicklung",
    description:
      "Skalierbare Softwarelösungen mit modernsten Stacks und höchster Sicherheit.",
  },
  {
    icon: "🖥",
    title: "Websites",
    description:
      "High-End Webauftritte für maximale Conversion und erstklassige User Experience.",
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: "easeOut" as const },
  }),
};

export default function Services() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <div>
            <span className={styles.label}>Was wir tun</span>
            <h2 className={styles.title}>
              Holistische
              <br />
              Digitale Lösungen
            </h2>
          </div>
          <p className={styles.subtitle}>
            Von der ersten Idee bis zur finalen Umsetzung begleiten wir Sie
            durch alle Phasen der digitalen Transformation.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              className={`brutalism-card ${styles.card}`}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              custom={i}
            >
              <span className={styles.cardIcon}>{service.icon}</span>
              <h3 className={styles.cardTitle}>{service.title}</h3>
              <p className={styles.cardDescription}>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
