import { useState, useEffect, useRef } from "react";
import { PERSONAL, STATS } from "../data";
import styles from "./Hero.module.css";

/* ----------------------------------------------------------
   Typing animation hook
   ---------------------------------------------------------- */
function useTyping(phrases) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[index];
    const delay = deleting ? 45 : 80;

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, charIdx + 1));
        if (charIdx + 1 >= current.length) {
          setTimeout(() => setDeleting(true), 1600);
        } else {
          setCharIdx((c) => c + 1);
        }
      } else {
        setText(current.slice(0, charIdx - 1));
        if (charIdx - 1 < 0) {
          setDeleting(false);
          setIndex((i) => (i + 1) % phrases.length);
          setCharIdx(0);
        } else {
          setCharIdx((c) => c - 1);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIdx, deleting, index, phrases]);

  return text;
}

/* ----------------------------------------------------------
   Particle canvas background
   ---------------------------------------------------------- */
function ParticleCanvas({ theme }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    /* Particle config differs per theme */
    const color = theme === "dark" ? "0,229,255" : "5,38,89";

    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 2 + 0.5,
      speedY: Math.random() * 0.4 + 0.1,
      speedX: (Math.random() - 0.5) * 0.3,
      opacity: Math.random() * 0.5 + 0.1,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.opacity})`;
        ctx.fill();

        p.y -= p.speedY;
        p.x += p.speedX;

        if (p.y < -10) {
          p.y = canvas.height + 10;
          p.x = Math.random() * canvas.width;
        }
        if (p.x < 0 || p.x > canvas.width) p.speedX *= -1;
      });
      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className={styles.particles} />;
}

/* ----------------------------------------------------------
   Wave SVG divider
   ---------------------------------------------------------- */
export function WaveDivider({ flip = false, color = "var(--bg2)" }) {
  return (
    <div
      className={styles.waveDivider}
      style={{ transform: flip ? "scaleX(-1)" : "none" }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  );
}

/* ----------------------------------------------------------
   Hero section
   ---------------------------------------------------------- */
export default function Hero({ theme }) {
  const typed = useTyping(PERSONAL.taglines);

  return (
    <section id="hero" className={styles.hero}>
      {/* Particle background */}
      <ParticleCanvas theme={theme} />

      {/* Sparkle decorations — dark mode only */}
      {theme === "dark" && (
        <>
          <span className={styles.sparkle} style={{ top: "18%", left: "54%" }}>
            ✦
          </span>
          <span
            className={styles.sparkle}
            style={{
              top: "72%",
              right: "8%",
              fontSize: "0.8rem",
              animationDelay: "1.5s",
            }}
          >
            ✦
          </span>
          <span
            className={styles.sparkle}
            style={{
              top: "42%",
              left: "47%",
              fontSize: "0.55rem",
              animationDelay: "2.2s",
            }}
          >
            ✦
          </span>
        </>
      )}

      {/* Floating stat cards */}
      <div className={`${styles.floatCard} ${styles.floatRight}`}>
        <span className={styles.floatIcon}>🚀</span>
        <div>
          <div className={styles.floatLabel}>Projects Done</div>
          <div className={styles.floatNum}>3+</div>
        </div>
      </div>
      <div className={`${styles.floatCard} ${styles.floatLeft}`}>
        <span className={styles.floatIcon}>⚡</span>
        <div>
          <div className={styles.floatLabel}>Bugs Fixed</div>
          <div className={styles.floatNum}>100+</div>
        </div>
      </div>

      {/* Main content grid */}
      <div className={styles.content}>
        {/* LEFT — Text */}
        <div className={styles.left}>
          {/* <div className={styles.badge}>
            <span className={styles.badgeDot} />
            AVAILABLE FOR OPPORTUNITIES
          </div> */}

          <h1 className={styles.heading}>
            {theme === "dark" ? (
              <>
                <span className={styles.cyan}></span>
                <br />
                <span className={styles.green}>Nitin Solanki</span>
              </>
            ) : (
              <>
                <span className={styles.light1}></span>
                <br />
                <span className={styles.light2}>Nitin Solanki</span>
              </>
            )}
          </h1>

          <div className={styles.typed}>
            {typed}
            <span className="cursor">|</span>
          </div>

          <p className={styles.desc}>
            Full-Stack Java Developer specializing in Spring MVC, React.js &
            MySQL. Passionate about building scalable, secure, and
            high-performance web applications.
          </p>

          {/* CTA Buttons */}
          <div className={styles.btns}>
            <a href="#projects" className="btn btn-primary">
              What I've Built ▶
            </a>
            <a href="#contact" className="btn btn-outline">
              Get In Touch ▷
            </a>
            <a
              href={PERSONAL.cvPath}
              download="Nitin_Solanki_Resume.pdf"
              className="btn btn-cv"
            >
              📄 Download Resume
            </a>
            <a
              href={PERSONAL.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="btn btn-wa"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Stats */}
          <div className={styles.stats}>
            {STATS.map((s) => (
              <div key={s.label} className={styles.statCard}>
                <div className={styles.statNum}>{s.num}</div>
                <div className={styles.statLabel}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — Profile photo */}
        <div className={styles.right}>
          <div className={styles.profileWrapper}>
            <div className={styles.ring1} />
            <div className={styles.ring2} />
            <div className={styles.ring3} />
            <div className={styles.circle}>
              {PERSONAL.photo ? (
                <img
                  src={PERSONAL.photo}
                  alt={PERSONAL.name}
                  className={styles.photo}
                />
              ) : (
                <span className={styles.initials}>{PERSONAL.initials}</span>
              )}
            </div>
          </div>

          {/* Scroll hint */}
          <div className={styles.scrollHint}>
            <div className={styles.scrollDot} />
            <span>Scroll Down</span>
          </div>
        </div>
      </div>
    </section>
  );
}
