"use client";

import { motion } from "framer-motion";
import styles from "./AITransformation.module.css";

const steps = [
  {
    number: "01",
    title: "Prozessautomatisierung",
    description:
      "Effizienzsteigerung durch intelligente Workflows und KI-Tools.",
  },
  {
    number: "02",
    title: "Individuelle LLM-Trainings",
    description:
      "Eigene KI-Modelle, die Ihr Markenwissen und Tonalität perfekt beherrschen.",
  },
  {
    number: "03",
    title: "KI-Strategieberatung",
    description:
      "Roadmap-Entwicklung für Ihren nachhaltigen Wettbewerbsvorteil.",
  },
];

export default function AITransformation() {
  return (
    <section id="ki-transformation" className={styles.section}>
      <div className="container">
        <motion.div
          className={`brutalism-card ${styles.banner}`}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <div className={styles.bannerInner}>
            <div>
              <h2 className={styles.title}>
                KI-Trans-
                <br />
                formation
              </h2>
              <p className={styles.description}>
                Wir begleiten Sie sicher in die Zukunft der künstlichen
                Intelligenz. Nutzen Sie das volle Potenzial Ihrer Daten.
              </p>
              <button className={`brutalism-button ${styles.ctaButton}`}>
                Jetzt anfragen
              </button>
            </div>

            <div className={styles.steps}>
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className={styles.step}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                >
                  <span className={styles.stepNumber}>{step.number}</span>
                  <div>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDescription}>
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.bgDecor} aria-hidden="true">
            &#10024;
          </div>
        </motion.div>
      </div>
    </section>
  );
}
