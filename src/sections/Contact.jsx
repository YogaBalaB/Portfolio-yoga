import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import { LINKEDIN_URL } from '../constants/links';

const C = {
  bg: '#0b0c0e', bg2: '#111316', line: '#ffffff12', line2: '#ffffff20',
  text: '#f0f0ee', muted: '#8a8a8a', hint: '#4a4a4a',
  gold: '#c9a96e', gold2: '#e8c98a',
  fd: "'Playfair Display', Georgia, serif",
  fs: "'Outfit', sans-serif",
}

const contactLinks = [
  { label: 'Email', value: 'balamurugan56771@gmail.com', href: 'mailto:balamurugan56771@gmail.com', icon: FaEnvelope },
  { label: 'GitHub', value: 'github.com/YogaBalaB', href: 'https://github.com/YogaBalaB', icon: FaGithub },
  { label: 'LinkedIn', value: 'yoga-bala', href: LINKEDIN_URL, icon: FaLinkedin },
]

const inputStyle = {
  width: '100%', background: 'transparent',
  border: 'none', borderBottom: `1px solid #ffffff20`,
  padding: '0.55rem 0',
  fontFamily: "'Outfit', sans-serif", fontSize: '0.87rem', fontWeight: 300,
  color: '#f0f0ee', outline: 'none', resize: 'none',
}

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)
  const [sending, setSending] = useState(false)
  const [error, setError] = useState(null)
  const [linkHover, setLinkHover] = useState(null)

  const onChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const onSubmit = async e => {
    e.preventDefault()
    setSending(true)
    setError(null)
    try {
      const res = await fetch('https://formspree.io/f/xeewwqpk', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
        body: JSON.stringify(form),
      })
      if (res.ok) {
        setSent(true)
      } else {
        setError('Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSending(false)
    }
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="contact" style={{
      borderBottom: `1px solid ${C.line}`,
      padding: 'clamp(4rem, 8vw, 5.5rem) 0',
    }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '5rem', alignItems: 'start',
          }}
        >
          {/* LEFT - Contact Info */}
          <motion.div variants={itemVariants}>
            <h2 style={{
              fontFamily: C.fd,
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              fontWeight: 400, lineHeight: 1.15, marginBottom: '1rem',
            }}>
              Let's build<br />
              <em style={{ fontStyle: 'italic', color: C.gold }}>something great.</em>
            </h2>
            <p style={{ fontSize: '0.85rem', color: C.muted, lineHeight: 1.8, marginBottom: '2.5rem' }}>
              I'm open to new opportunities, collaborations, and exciting projects. Feel free to reach out!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {contactLinks.map((link, i) => {
                const Icon = link.icon
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    onMouseEnter={() => setLinkHover(link.label)}
                    onMouseLeave={() => setLinkHover(null)}
                    whileHover={{ x: 5 }}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '1rem',
                      padding: '1rem 0',
                      borderTop: i === 0 ? `1px solid ${C.line}` : 'none',
                      borderBottom: `1px solid ${C.line}`,
                      textDecoration: 'none',
                    }}
                  >
                    <Icon size={20} style={{ color: C.gold, flexShrink: 0 }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <span style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.hint, display: 'block' }}>
                        {link.label}
                      </span>
                      <span style={{
                        fontSize: '0.88rem',
                        color: linkHover === link.label ? C.gold : C.muted,
                        transition: 'color 0.2s',
                        display: 'block',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        whiteSpace: 'nowrap',
                      }}>
                        {link.value}
                      </span>
                    </div>
                  </motion.a>
                )
              })}
            </div>
          </motion.div>

          {/* RIGHT - Contact Form */}
          <motion.div variants={itemVariants}>
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', paddingTop: '2rem' }}
              >
                <div style={{ fontFamily: C.fd, fontSize: 'clamp(2rem, 4vw, 3rem)', color: C.gold, fontWeight: 400 }}>
                  ✓
                </div>
                <h3 style={{ fontFamily: C.fd, fontSize: '1.8rem', fontWeight: 400, margin: 0, marginBottom: '1rem' }}>
                  Message received!
                </h3>
                <p style={{ fontSize: '0.85rem', color: C.muted, lineHeight: 1.8 }}>
                  Thanks for reaching out. I'll get back to you as soon as possible!
                </p>
                <button
                  onClick={() => {
                    setSent(false)
                    setForm({ name: '', email: '', message: '' })
                  }}
                  style={{
                    marginTop: '1rem',
                    background: C.gold,
                    color: C.bg,
                    border: 'none',
                    padding: '0.7rem 1.4rem',
                    fontFamily: C.fs,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                <div>
                  <label style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, display: 'block', marginBottom: '0.5rem' }}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={onChange}
                    required
                    style={inputStyle}
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, display: 'block', marginBottom: '0.5rem' }}>
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={onChange}
                    required
                    style={inputStyle}
                    placeholder="Your email"
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.6rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: C.muted, display: 'block', marginBottom: '0.5rem' }}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={onChange}
                    required
                    style={{ ...inputStyle, minHeight: '100px', paddingTop: '0.75rem', resize: 'vertical' }}
                    placeholder="Your message"
                  />
                </div>

                {error && (
                  <p style={{ fontSize: '0.8rem', color: '#e05555', margin: 0 }}>{error}</p>
                )}

                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    marginTop: '0.5rem',
                    background: sending ? C.muted : C.gold,
                    color: C.bg,
                    border: 'none',
                    padding: '0.8rem 1.6rem',
                    fontFamily: C.fs,
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    letterSpacing: '0.08em',
                    textTransform: 'uppercase',
                    borderRadius: '4px',
                    cursor: sending ? 'not-allowed' : 'pointer',
                    transition: 'all 0.3s',
                    opacity: sending ? 0.6 : 1,
                  }}
                >
                  {sending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}