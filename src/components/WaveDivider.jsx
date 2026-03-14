import styles from './WaveDivider.module.css'

/* ----------------------------------------------------------
   WaveDivider — animated SVG wave between sections
   Props:
     color  — fill color (CSS variable string or hex)
     flip   — boolean, mirrors wave horizontally
     height — wave height in px (default 60)
   ---------------------------------------------------------- */
export default function WaveDivider({ color = 'var(--bg2)', flip = false, height = 60 }) {
  return (
    <div
      className={styles.wrap}
      style={{ transform: flip ? 'scaleX(-1)' : 'none' }}
    >
      <svg
        viewBox="0 0 1440 80"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ height: `${height}px` }}
      >
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
          fill={color}
        />
      </svg>
    </div>
  )
}
