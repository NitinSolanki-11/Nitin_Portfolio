import { useEffect, useRef, useState } from 'react'

/* ----------------------------------------------------------
   useReveal — triggers .visible class when element scrolls
   into view using IntersectionObserver
   ---------------------------------------------------------- */
export function useReveal(threshold = 0.12) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold }
    )
    const el = ref.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [threshold])

  return [ref, visible]
}

/* ----------------------------------------------------------
   Reveal wrapper component — wraps children with fade-in
   ---------------------------------------------------------- */
export function Reveal({ children, delay = 0, style = {}, className = '' }) {
  const [ref, visible] = useReveal()

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
