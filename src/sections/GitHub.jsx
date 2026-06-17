import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const C = {
  bg: '#0b0c0e',
  bg2: '#111316',
  line: '#ffffff12',
  line2: '#ffffff20',
  text: '#f0f0ee',
  muted: '#8a8a8a',
  gold: '#c9a96e',
  gold2: '#e8c98a',
  fd: "'Playfair Display', Georgia, serif",
  fs: "'Outfit', sans-serif",
};

export default function GitHub() {
  return (
    <section
      id="github"
      style={{ borderBottom: `1px solid ${C.line}`, padding: 'clamp(4rem, 8vw, 5.5rem) 0' }}
    >
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <div style={{ fontFamily: C.fd, fontSize: '3.5rem', color: C.line2, fontWeight: 400, lineHeight: 1 }}>
            05
          </div>
          <div style={{ fontFamily: C.fd, fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 400, letterSpacing: '-0.01em' }}>
            GitHub <em style={{ fontStyle: 'italic', color: C.gold }}>Profile</em>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
            padding: '3rem 2rem',
            background: `linear-gradient(145deg, ${C.bg2}, #1a1610)`,
            border: `1px solid ${C.gold}40`,
            borderRadius: '8px',
            textAlign: 'center',
          }}
        >
          <div style={{
            padding: '1.2rem',
            background: `${C.gold}15`,
            borderRadius: '50%',
            color: C.gold,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <FaGithub size={40} />
          </div>

          <div>
            <h3 style={{ fontFamily: C.fd, fontSize: '1.4rem', color: C.text, fontWeight: 400, margin: 0 }}>
              GitHub Profile
            </h3>
            <p style={{ fontSize: '0.85rem', color: C.gold, margin: '0.3rem 0 0' }}>
              @YogaBalaB
            </p>
          </div>

          <p style={{ fontSize: '0.9rem', color: C.muted, margin: 0, maxWidth: '420px', lineHeight: 1.7 }}>
            Explore my repositories, source code, and project work on GitHub.
          </p>

          <a
            href="https://github.com/YogaBalaB"
            target="_blank"
            rel="noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.6rem',
              padding: '0.75rem 1.8rem',
              background: C.gold,
              color: C.bg,
              fontFamily: C.fs,
              fontSize: '0.75rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              borderRadius: '4px',
              textDecoration: 'none',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = C.gold2}
            onMouseLeave={e => e.currentTarget.style.background = C.gold}
          >
            <FaExternalLinkAlt size={12} /> View Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}