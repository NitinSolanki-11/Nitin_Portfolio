import { useState, useEffect } from "react";

/* ---- Layout components ---- */
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import WaveDivider from "./components/WaveDivider";
import Footer from "./components/Footer";

/* ---- Page sections ---- */
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Internship from "./components/Internship";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

/* ----------------------------------------------------------
   App — root component
   Manages dark / light theme and renders full page layout.
   ---------------------------------------------------------- */
export default function App() {
  /* ---- Theme state — defaults to light ---- */
  const [theme, setTheme] = useState("light");

  /* Sync theme attribute on <html> for CSS variable switching */
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  /* ---- Wave colors per theme ---- */
  const w = {
    dark: {
      bg: "#030810",
      bg2: "#060f1a",
      bg3: "#0a1628",
    },
    light: {
      bg: "#C1E8FF",
      bg2: "#7DA0CA",
      bg3: "#5483B3",
    },
  };

  const c = w[theme];

  return (
    <>
      {/* ── Fixed UI ─────────────────────────── */}
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      <ScrollToTop />

      {/* ── Background grid (dark mode only) ── */}
      {theme === "dark" && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            pointerEvents: "none",
            zIndex: 0,
            backgroundImage:
              "linear-gradient(rgba(0,229,255,0.025) 1px, transparent 1px)," +
              "linear-gradient(90deg, rgba(0,229,255,0.025) 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
        />
      )}

      {/* ── Page sections ────────────────────── */}

      {/* HERO */}
      <Hero theme={theme} />

      {/* Wave: hero → about */}
      <WaveDivider color={c.bg2} />

      {/* ABOUT */}
      <About />

      {/* Wave: about → skills */}
      <WaveDivider color={c.bg} flip />

      {/* SKILLS */}
      <Skills />

      {/* Wave: skills → internship */}
      <WaveDivider color={c.bg3} />

      {/* INTERNSHIP */}
      <Internship />

      {/* Wave: internship → projects */}
      <WaveDivider color={c.bg2} flip />

      {/* PROJECTS */}
      <Projects />

      {/* Wave: projects → contact */}
      <WaveDivider color={c.bg} />

      {/* CONTACT */}
      <Contact />

      {/* Wave: contact → footer */}
      <WaveDivider color={c.bg2} flip />

      {/* FOOTER */}
      <Footer />
    </>
  );
}
