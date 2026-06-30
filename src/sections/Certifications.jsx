import { motion } from 'framer-motion'
import { FaFileAlt, FaTrophy, FaMedal, FaUsers } from 'react-icons/fa'

const C = {
  bg: '#0b0c0e', bg2: '#111316', line: '#ffffff12', line2: '#ffffff20',
  text: '#f0f0ee', muted: '#8a8a8a', gold: '#c9a96e', gold2: '#e8c98a',
  fd: "'Playfair Display', Georgia, serif",
}

const certifications = [
  {
    title: '2nd Prize — Paper Presentation on "Home Automation System"',
    issuer: 'Loyola Institute of Technology and Science',
    date: 'Apr 2025',
    badge: 'Award',
    type: 'award',
    icon: FaTrophy
  },
  {
    title: '1st Prize — School Cultural Event Organization',
    issuer: 'Awarded by the Tahsildar',
    date: 'Achievement',
    badge: 'Award',
    type: 'award',
    icon: FaMedal
  },
  {
    title: 'Head of Junior Red Cross (JRC)',
    issuer: 'Led social initiatives & community service programs',
    date: 'Community Leadership',
    badge: 'Leadership',
    type: 'special',
    icon: FaUsers
  },
  {
    title: 'AI Masterclass, IoT in AI Bootcamp & Career Counselling',
    issuer: 'Professional Workshops',
    date: 'Professional Development',
    badge: 'Certification',
    type: 'cert',
    icon: FaFileAlt
  },
  {
    title: 'Hands-On React Applications with React Hooks',
    issuer: 'Infosys Springboard',
    date: '2026',
    badge: 'Certification',
    type: 'cert',
    icon: FaFileAlt
  },
  {
    title: 'English Speaking Training Program Certification',
    issuer: 'Professional Development',
    date: '2024',
    badge: 'Certification',
    type: 'cert',
    icon: FaFileAlt
  },
]

export default function Certifications() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="certifications" style={{ borderBottom: `1px solid ${C.line}`, padding: 'clamp(4rem, 8vw, 5.5rem) 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <div style={{ fontFamily: C.fd, fontSize: '3.5rem', color: C.line2, fontWeight: 400, lineHeight: 1 }}>04</div>
          <div style={{ fontFamily: C.fd, fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 400, letterSpacing: '-0.01em' }}>
            Certifications <em style={{ fontStyle: 'italic', color: C.gold }}>&amp; Awards</em>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}
        >
          {certifications.map((item, i) => {
            const isAward = item.type === 'award';
            return (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                style={{
                  display: 'flex', flexDirection: 'column',
                  padding: '1.5rem',
                  background: isAward ? `linear-gradient(145deg, ${C.bg2}, #1a1610)` : C.bg2,
                  border: `1px solid ${isAward ? C.gold : C.line}`,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  position: 'relative', overflow: 'hidden',
                  boxShadow: isAward ? `0 4px 20px ${C.gold}15` : 'none',
                  transition: 'all 0.3s',
                }}
                onMouseEnter={(e) => { if (!isAward) e.currentTarget.style.borderColor = C.gold2 }}
                onMouseLeave={(e) => { if (!isAward) e.currentTarget.style.borderColor = C.line }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                  <div style={{
                    padding: '0.8rem', background: isAward ? `${C.gold}20` : C.line,
                    borderRadius: '8px', color: C.gold, display: 'flex', alignItems: 'center', justifyContent: 'center'
                  }}>
                    <item.icon size={20} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: isAward ? C.gold : C.muted, fontWeight: 600 }}>
                      {item.badge}
                    </span>
                    <div style={{ fontSize: '0.75rem', color: C.muted, marginTop: '0.2rem' }}>{item.date}</div>
                  </div>
                </div>
                <h4 style={{ fontFamily: C.fd, fontSize: '1.1rem', fontWeight: 500, color: C.text, margin: 0, marginBottom: '0.5rem', lineHeight: 1.4 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: C.muted, margin: 0, marginTop: 'auto' }}>
                  {item.issuer}
                </p>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}