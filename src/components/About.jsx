import { PERSONAL } from "../data";
import { Reveal } from "../hooks/useReveal";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.section}>
      <div className="section-wrap">
        <Reveal>
          <h2 className="section-title">
            Who <span>Am I?</span>
          </h2>
          <div className="section-line" />
        </Reveal>

        <div className={styles.grid}>
          {/* Text side */}
          <Reveal delay={100} className={styles.textSide}>
            {PERSONAL.bio.map((para, i) => (
              <p key={i} className={styles.para}>
                {para}
              </p>
            ))}

            <div className={styles.traits}>
              {PERSONAL.traits.map((t) => (
                <span key={t} className={styles.trait}>
                  {t}
                </span>
              ))}
            </div>

            <div className={styles.infoList}>
              {[
                ["📍", "LOCATION", PERSONAL.location],
                ["🎓", "DEGREE", PERSONAL.degree],
                ["📧", "EMAIL", PERSONAL.email],
                ["📱", "PHONE", PERSONAL.phone],
              ].map(([icon, label, value]) => (
                <div key={label} className={styles.infoRow}>
                  <span className={styles.infoIcon}>{icon}</span>
                  <span className={styles.infoLabel}>{label}</span>
                  <span className={styles.infoValue}>{value}</span>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Photo side */}
          <Reveal delay={200} className={styles.photoSide}>
            <div className={styles.photoFrame}>
              <div className={styles.photoGlow} />
              {PERSONAL.photo ? (
                <img
                  src={PERSONAL.photo}
                  alt={PERSONAL.name}
                  className={styles.photo}
                />
              ) : (
                <div className={styles.placeholder}>{PERSONAL.initials}</div>
              )}
              <div className={styles.photoCornerTL} />
              <div className={styles.photoCornerBR} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
