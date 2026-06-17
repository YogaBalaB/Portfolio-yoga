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

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

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
      backdropFilter: 'blur(10px)',
    }}>
      <div style={{
        maxWidth: 1000, margin: '0 auto',
        padding: '0 clamp(1.25rem, 4vw, 2rem)',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <a href="#hero" style={{
          fontFamily: C.fd, fontSize: '1.15rem', fontWeight: 400,
          textDecoration: 'none', transition: 'color 0.2s',
          display: 'flex', alignItems: 'center', gap: '0.3rem',
        }}>
          Yoga Bala <span style={{ color: C.gold, fontWeight: 700 }}>B</span>
        </a>

        {/* Desktop Navigation */}
        <ul style={{
          display: 'flex', gap: '2.5rem', listStyle: 'none',
          alignItems: 'center',
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

        {/* Social Links */}
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
                  color: C.muted,
                  fontSize: '1.1rem',
                  transition: 'all 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                title={social.label}
              >
                <Icon />
              </motion.a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}