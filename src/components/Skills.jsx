import { SKILLS } from "../data";
import { Reveal } from "../hooks/useReveal";
import styles from "./Skills.module.css";

export default function Skills() {
  return (
    <section id="skills" className={styles.section}>
      <div className="section-wrap">
        <Reveal>
          <h2 className="section-title">
            My <span>Tech Stack</span>
          </h2>
          <div className="section-line" />
        </Reveal>

        <div className={styles.grid}>
          {SKILLS.map((cat, i) => (
            <Reveal key={cat.cat} delay={i * 80}>
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <span className={styles.dot} />
                  <span className={styles.catName}>{cat.cat}</span>
                </div>
                <div className={styles.tags}>
                  {cat.items.map((item) => (
                    <span key={item} className={styles.tag}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
