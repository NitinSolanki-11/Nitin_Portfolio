import { useState, useEffect } from "react";
import styles from "./ScrollToTop.module.css";
export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollUp = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <button
      className={`${styles.btn} ${visible ? styles.show : ""}`}
      onClick={scrollUp}
      aria-label="Scroll to top"
      title="Back to top"
    >
      ▲
    </button>
  );
}
