import { INTERNSHIPS } from '../data'
import { Reveal } from '../hooks/useReveal'
import styles from './Internship.module.css'

export default function Internship() {
  return (
    <section id="internship" className={styles.section}>
      <div className="section-wrap">

        <Reveal>
          <p className="section-tag">// 03. INTERNSHIP</p>
          <h2 className="section-title">Work <span>Experience</span></h2>
          <div className="section-line" />
        </Reveal>

        <div className={styles.timeline}>
          {INTERNSHIPS.map((item, i) => (
            <Reveal key={i} delay={i * 120} className={styles.itemWrapper}>
              {/* Timeline dot */}
              <div className={styles.dotWrap}>
                <div className={styles.dot} />
                {i < INTERNSHIPS.length - 1 && <div className={styles.line} />}
              </div>

              {/* Card */}
              <div className={styles.card}>
                <div className={styles.cardTop}>
                  <div>
                    <h3 className={styles.role}>{item.role}</h3>
                    <div className={styles.company}>{item.company}</div>
                  </div>
                  <span className={styles.badge}>{item.badge}</span>
                </div>

                <div className={styles.meta}>
                  <span>📅 {item.date}</span>
                  <span>📍 {item.location}</span>
                </div>

                <hr className={styles.divider} />

                <ul className={styles.points}>
                  {item.points.map((p, j) => (
                    <li key={j} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </ul>

                <div className={styles.tags}>
                  {item.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
