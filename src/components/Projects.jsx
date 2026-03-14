import { PROJECTS } from '../data'
import { Reveal } from '../hooks/useReveal'
import styles from './Projects.module.css'

export default function Projects() {
  return (
    <section id="projects" className={styles.section}>
      <div className="section-wrap">

        <Reveal>
          <p className="section-tag">// 04. PROJECTS</p>
          <h2 className="section-title">What I've <span>Built</span></h2>
          <div className="section-line" />
        </Reveal>

        <div className={styles.grid}>
          {PROJECTS.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <div className={styles.card}>
                {/* Top accent bar — animates on hover via CSS */}
                <div className={styles.accentBar} />

                <div className={styles.projectNum}>PROJECT_{project.id}</div>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDesc}>{project.desc}</p>

                <ul className={styles.highlights}>
                  {project.highlights.map((h, j) => (
                    <li key={j}>{h}</li>
                  ))}
                </ul>

                <div className={styles.tags}>
                  {project.tags.map(t => (
                    <span key={t} className={styles.tag}>{t}</span>
                  ))}
                </div>

                <div className={styles.links}>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.linkGithub}
                  >
                    ⌥ GitHub
                  </a>

                  {project.hostedUrl ? (
                    <a
                      href={project.hostedUrl}
                      target="_blank"
                      rel="noreferrer"
                      className={styles.linkLive}
                    >
                      🔗 Live Demo
                    </a>
                  ) : (
                    <span className={styles.linkSoon}>🔗 Coming Soon</span>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  )
}
