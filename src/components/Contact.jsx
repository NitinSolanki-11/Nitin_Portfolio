import { useState } from 'react'
import { CONTACT_ITEMS, WEB3FORMS_KEY, PERSONAL } from '../data'
import { Reveal } from '../hooks/useReveal'
import styles from './Contact.module.css'

export default function Contact() {
  const [form,    setForm]    = useState({ name:'', email:'', subject:'', message:'' })
  const [status,  setStatus]  = useState(null)   // { msg, type: 'success'|'error' }
  const [loading, setLoading] = useState(false)

  /* Update form field */
  const handleChange = e =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  /* Show status message then hide after delay */
  const showStatus = (msg, type) => {
    setStatus({ msg, type })
    setTimeout(() => setStatus(null), 7000)
  }

  /* Submit handler */
  const handleSubmit = async e => {
    e.preventDefault()
    const { name, email, subject, message } = form

    /* Validation */
    if (!name)                  return showStatus('❌ Please enter your name.', 'error')
    if (!email)                 return showStatus('❌ Please enter your email.', 'error')
    if (!email.includes('@'))   return showStatus('❌ Enter a valid email address.', 'error')
    if (!message)               return showStatus('❌ Please write a message.', 'error')

    setLoading(true)

    try {
      const fd = new FormData()
      fd.append('access_key', WEB3FORMS_KEY)
      fd.append('name',    name)
      fd.append('email',   email)
      fd.append('subject', subject || `Portfolio Contact from ${name}`)
      fd.append('message', message)

      const res  = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: fd })
      const data = await res.json()

      if (data.success) {
        showStatus('✅ Message sent! Nitin will get back to you soon.', 'success')
        setForm({ name:'', email:'', subject:'', message:'' })
      } else {
        throw new Error(data.message || 'Submission failed')
      }
    } catch (err) {
      showStatus(`❌ Failed to send. Please try WhatsApp instead.`, 'error')
    }

    setLoading(false)
  }

  return (
    <section id="contact" className={styles.section}>
      <div className="section-wrap">

        <Reveal>
          <p className="section-tag">// 05. CONTACT</p>
          <h2 className="section-title">Get In <span>Touch</span></h2>
          <div className="section-line" />
        </Reveal>

        <div className={styles.grid}>

          {/* ---- Contact info links ---- */}
          <Reveal delay={100} className={styles.infoCol}>
            {CONTACT_ITEMS.map(item => (
              item.href ? (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel="noreferrer"
                  className={styles.contactItem}
                >
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </a>
              ) : (
                <div key={item.label} className={`${styles.contactItem} ${styles.noLink}`}>
                  <div className={styles.contactIcon}>{item.icon}</div>
                  <div>
                    <div className={styles.contactLabel}>{item.label}</div>
                    <div className={styles.contactValue}>{item.value}</div>
                  </div>
                </div>
              )
            ))}
          </Reveal>

          {/* ---- Contact form ---- */}
          <Reveal delay={200}>
            <form className={styles.form} onSubmit={handleSubmit} noValidate>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="name">YOUR NAME</label>
                  <input
                    id="name" name="name" type="text"
                    className={styles.input}
                    placeholder="Your name"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="email">YOUR EMAIL</label>
                  <input
                    id="email" name="email" type="email"
                    className={styles.input}
                    placeholder="Your email"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="subject">SUBJECT</label>
                <input
                  id="subject" name="subject" type="text"
                  className={styles.input}
                  placeholder="Subject (optional)"
                  value={form.subject}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formGroup}>
                <label className={styles.label} htmlFor="message">MESSAGE</label>
                <textarea
                  id="message" name="message"
                  className={styles.textarea}
                  placeholder="Write your message here..."
                  rows={5}
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.formActions}>
                <button type="submit" className="btn btn-primary" disabled={loading}>
                  {loading ? '⏳ Sending...' : '⚡ Send Message'}
                </button>
                <a
                  href={PERSONAL.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-wa"
                >
                  💬 WhatsApp Me
                </a>
              </div>

              {/* Status message */}
              {status && (
                <div className={`${styles.status} ${styles[status.type]}`}>
                  {status.msg}
                </div>
              )}

            </form>
          </Reveal>

        </div>
      </div>
    </section>
  )
}
