import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { LINKEDIN_URL } from '../constants/links';

const C = {
  bg: '#0b0c0e', bg2: '#111316', line: '#ffffff12', line2: '#ffffff20',
  text: '#f0f0ee', muted: '#8a8a8a', hint: '#4a4a4a', gold: '#c9a96e',
  fd: "'Playfair Display', Georgia, serif",
  fs: "'Outfit', sans-serif",
}

export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [hovered, setHovered] = useState(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    window.addEventListener('scroll', onScroll)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navLinks = [
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'About', href: '#about' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/YogaBalaB', label: 'GitHub' },
    { icon: FaLinkedin, href: LINKEDIN_URL, label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:balamurugan56771@gmail.com', label: 'Email' },
  ]

  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 99,
      background: C.bg,
      borderBottom: `1px solid ${scrolled ? C.line : 'transparent'}`,
      padding: '1.1rem 0',
      transition: 'all 0.3s',
    }}>
      <div style={{
        maxWidth: 1000, margin: '0 auto',
        padding: '0 clamp(1.25rem, 4vw, 2rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>

        {/* ── Logo ── */}
        <a href="#hero" style={{
          fontFamily: C.fd, fontSize: '1.15rem', fontWeight: 400,
          textDecoration: 'none', color: C.text,
          display: 'flex', alignItems: 'center', gap: '0.3rem',
          flexShrink: 0,
        }}>
          Yoga Bala <span style={{ color: C.gold, fontWeight: 700 }}>B</span>
        </a>

        {/* ── Desktop Nav (hidden on mobile) ── */}
        {!isMobile && (
          <ul style={{
            display: 'flex', gap: '2.5rem', listStyle: 'none',
            alignItems: 'center', margin: 0, padding: 0,
          }}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onMouseEnter={() => setHovered(link.label)}
                  onMouseLeave={() => setHovered(null)}
                  style={{
                    fontSize: '0.72rem', letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: hovered === link.label ? C.gold : C.muted,
                    transition: 'color 0.2s',
                    textDecoration: 'none',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        )}

        {/* ── Desktop Social Icons (hidden on mobile) ── */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.15, color: C.gold }}
                  style={{
                    color: C.muted, fontSize: '1.1rem',
                    transition: 'all 0.2s',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </div>
        )}

        {/* ── Mobile Hamburger (hidden on desktop) ── */}
        {isMobile && (
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: 'none', border: 'none',
              color: menuOpen ? C.gold : C.muted,
              fontSize: '1.5rem', cursor: 'pointer',
              display: 'flex', alignItems: 'center', padding: '0.25rem',
              transition: 'color 0.2s',
            }}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        )}
      </div>

      {/* ── Mobile Full-Screen Overlay ── */}
      {isMobile && menuOpen && (
        <div style={{
          position: 'fixed',
          top: 0, left: 0, right: 0, bottom: 0,
          background: C.bg2,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0',
          zIndex: 100,
        }}>
          {/* Close button top-right */}
          <button
            onClick={() => setMenuOpen(false)}
            style={{
              position: 'absolute', top: '1.25rem', right: 'clamp(1.25rem, 4vw, 2rem)',
              background: 'none', border: 'none',
              color: C.gold, fontSize: '1.5rem', cursor: 'pointer',
            }}
            aria-label="Close menu"
          >
            <FaTimes />
          </button>

          {/* Logo inside menu */}
          <div style={{
            fontFamily: C.fd, fontSize: '1.1rem', color: C.text,
            marginBottom: '2.5rem', display: 'flex', gap: '0.3rem',
          }}>
            Yoga Bala <span style={{ color: C.gold, fontWeight: 700 }}>B</span>
          </div>

          {/* Nav links */}
          <ul style={{
            display: 'flex', flexDirection: 'column',
            alignItems: 'center', gap: '1.8rem',
            listStyle: 'none', padding: 0, margin: 0,
          }}>
            {navLinks.map(link => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  style={{
                    fontSize: '1rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: C.muted,
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                    fontFamily: C.fs,
                  }}
                  onMouseEnter={e => e.target.style.color = C.gold}
                  onMouseLeave={e => e.target.style.color = C.muted}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Social links */}
          <div style={{
            display: 'flex', gap: '1.5rem',
            marginTop: '2.5rem',
            paddingTop: '2rem',
            borderTop: `1px solid ${C.line}`,
            width: '160px',
            justifyContent: 'center',
          }}>
            {socialLinks.map((social, i) => {
              const Icon = social.icon
              return (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ scale: 1.2, color: C.gold }}
                  style={{ color: C.muted, fontSize: '1.3rem' }}
                  title={social.label}
                >
                  <Icon />
                </motion.a>
              )
            })}
          </div>
        </div>
      )}
    </nav>
  )
}