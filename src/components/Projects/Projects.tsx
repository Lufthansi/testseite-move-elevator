"use client";

import { motion } from "framer-motion";
import styles from "./Projects.module.css";

const filters = ["Alle", "Strategie", "UX/UI", "KI", "Web Dev"];

const projects = [
  {
    tags: "UX/UI, React",
    name: "Phantasialand",
    description: "Digitales Freizeitpark-Erlebnis der nächsten Generation.",
    image: "/images/project-phantasialand.jpg",
  },
  {
    tags: "Web Dev, Security",
    name: "Audi BKK",
    description:
      "Sicherer Relaunch des hochfrequentierten Gesundheitsportals.",
    image: "/images/project-audi-bkk.jpg",
  },
  {
    tags: "Campaign, AI",
    name: "Coca-Cola",
    description: "KI-gestützte Content Engine für globalen Output.",
    image: "/images/project-coca-cola.jpg",
  },
  {
    tags: "Strategy, E-Comm",
    name: "Red Bull",
    description: "Next-Gen Performance Shop für ultimative Verkaufsziele.",
    image: "/images/project-red-bull.jpg",
  },
];

export default function Projects() {
  return (
    <section id="projekte" className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Ausgewählte Projekte</h2>
          <div className={styles.filters}>
            {filters.map((filter, i) => (
              <button
                key={filter}
                className={`${styles.filterButton} ${i === 0 ? styles.filterButtonActive : ""}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.grid}>
          {projects.map((project, i) => (
            <motion.div
              key={project.name}
              className={styles.project}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className={`brutalism-card ${styles.imageWrapper}`}>
                <img
                  src={project.image}
                  alt={`${project.name} Projekt`}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.projectInfo}>
                <div>
                  <p className={styles.projectTags}>{project.tags}</p>
                  <h3 className={styles.projectName}>{project.name}</h3>
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                </div>
                <span className={styles.projectArrow}>&rarr;</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className={styles.cta}>
          <button className={`brutalism-button ${styles.ctaButton}`}>
            Gesamtes Portfolio ansehen
          </button>
        </div>
      </div>
    </section>
  );
}
