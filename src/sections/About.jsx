import { motion } from 'framer-motion'
import { FaGraduationCap, FaMapMarkerAlt, FaCode, FaBriefcase, FaCalendarAlt } from 'react-icons/fa'

const C = {
  bg: '#0b0c0e', bg2: '#111316', line: '#ffffff12', line2: '#ffffff20',
  text: '#f0f0ee', muted: '#8a8a8a', gold: '#c9a96e', gold2: '#e8c98a',
  fd: "'Playfair Display', Georgia, serif",
}

const facts = [
  { label: 'Based in', value: 'Chennai, Tamil Nadu', icon: FaMapMarkerAlt },
  { label: 'Specialization', value: 'Frontend Development · Full Stack Web Development', icon: FaCode },
]

const internships = [
  {
    role: 'Web Development Intern',
    company: 'Cadd Expert',
    date: 'Feb 2025',
    location: 'Tenkasi, Tamil Nadu'
  },
  {
    role: 'Data Science Intern',
    company: 'Eagle HiTech Soft Cloud Pvt. Ltd.',
    date: 'Jul 2025',
    location: 'Chennai, Tamil Nadu'
  }
]

const DegreeCard = () => (
  <div style={{
    display: 'flex', alignItems: 'flex-start', gap: '1rem',
    background: C.bg2,
    border: `1px solid ${C.line}`,
    borderRadius: '8px',
    padding: '1rem',
    transition: 'all 0.3s',
  }}
    onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = 'translateY(-2px)' }}
    onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.line; e.currentTarget.style.transform = 'translateY(0)' }}
  >
    <FaGraduationCap size={24} style={{ color: C.gold, marginTop: '2px', flexShrink: 0 }} />
    <div style={{ flex: 1 }}>
      <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.4rem' }}>Degree</div>
      <div style={{ fontFamily: C.fd, fontSize: '1.1rem', fontWeight: 500, color: C.text, marginBottom: '0.2rem' }}>
        Bachelor of Engineering
      </div>
      <div style={{ fontSize: '0.85rem', color: C.gold, marginBottom: '0.2rem' }}>
        Computer Science & Engineering
      </div>
      <div style={{ fontSize: '0.8rem', color: C.muted, marginBottom: '1rem' }}>
        Einstein College of Engineering · 2022 – 2026
      </div>

      {/* CGPA Bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
        <span style={{ fontSize: '0.75rem', color: C.muted, whiteSpace: 'nowrap', textTransform: 'uppercase', letterSpacing: '0.05em' }}>CGPA</span>
        <div style={{ flex: 1, height: '5px', background: C.line, borderRadius: '999px', overflow: 'hidden' }}>
          <div style={{
            width: '80.8%',
            height: '100%',
            background: `linear-gradient(90deg, ${C.gold}, ${C.gold2})`,
            borderRadius: '999px',
          }} />
        </div>
        <span style={{ fontSize: '0.8rem', fontWeight: 600, color: C.gold2, whiteSpace: 'nowrap' }}>
          8.08 / 10
        </span>
      </div>
    </div>
  </div>
);

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="about" style={{ borderBottom: `1px solid ${C.line}`, padding: 'clamp(4rem, 8vw, 5.5rem) 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <div style={{ fontFamily: C.fd, fontSize: '3.5rem', color: C.line2, fontWeight: 400, lineHeight: 1 }}>03</div>
          <div style={{ fontFamily: C.fd, fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 400, letterSpacing: '-0.01em' }}>
            About <em style={{ fontStyle: 'italic', color: C.gold }}>Me</em>
          </div>
        </motion.div>

<motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '4rem', alignItems: 'start' }}
        >
          <motion.div variants={itemVariants} style={{
            position: 'relative', padding: '2rem', background: C.bg2, borderRadius: '8px', border: `1px solid ${C.line}`
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, width: '4px', height: '100%', background: C.gold, borderRadius: '8px 0 0 8px' }} />
            <div style={{ fontSize: '0.95rem', color: '#b0b0ae', lineHeight: 1.95 }}>
              <p style={{ margin: '0 0 1.2rem 0' }}>
                I'm a Full Stack Developer & AI/ML Engineer with hands-on experience building responsive web applications and intelligent systems — from intuitive frontends to scalable backends and data-driven applications.
              </p>
              <p style={{ margin: '0 0 1.2rem 0' }}>My technical expertise includes React.js, Node.js, PostgreSQL, MySQL, Python, TensorFlow, and Scikit-learn. Through 2 internships and multiple projects, I've gained practical experience developing full-stack applications, working with databases, APIs, and modern web technologies.
              </p>
              <p style={{ margin: '0 0 1.2rem 0' }}>
               I'm continuously expanding my expertise in full-stack development, AI/ML, and modern engineering practices while building efficient and scalable applications.
                </p>
              <p style={{ margin: 0 }}>
                I'm open to full-time roles and collaborations where I can contribute across the stack — especially in teams building products that solve real problems.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <DegreeCard />
              {facts.map((f, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: C.bg2, border: `1px solid ${C.line}`, borderRadius: '8px', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.gold; e.currentTarget.style.transform = 'translateY(-2px)' }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.line; e.currentTarget.style.transform = 'translateY(0)' }}>
                  <f.icon size={24} style={{ color: C.gold }} />
                  <div>
                    <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.2rem' }}>{f.label}</div>
                    <div style={{ fontSize: '0.85rem', color: C.text, fontWeight: 400 }}>{f.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ background: C.bg2, border: `1px solid ${C.line}`, borderRadius: '8px', padding: '1.5rem', transition: 'all 0.3s' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = C.gold2 }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = C.line }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                <FaBriefcase style={{ color: C.gold }} />
                <h4 style={{ fontSize: '0.9rem', color: C.text, fontWeight: 500, margin: 0, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Internships</h4>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', position: 'relative' }}>
                <div style={{ position: 'absolute', left: '6px', top: '10px', bottom: '10px', width: '1px', background: C.line }} />
                {internships.map((intern, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 5 }}
                    style={{ position: 'relative', paddingLeft: '2rem', transition: 'all 0.2s' }}
                  >
                    <div style={{ position: 'absolute', left: '3px', top: '6px', width: '7px', height: '7px', borderRadius: '50%', background: C.gold, boxShadow: `0 0 0 4px ${C.bg2}` }} />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '0.5rem' }}>
                      <div style={{ fontSize: '0.95rem', color: C.text, fontWeight: 500, marginBottom: '0.2rem' }}>{intern.role}</div>
                      <div style={{ fontSize: '0.7rem', color: C.gold, display: 'flex', alignItems: 'center', gap: '0.3rem', background: `${C.gold}15`, padding: '0.2rem 0.6rem', borderRadius: '12px' }}>
                        <FaCalendarAlt /> {intern.date}
                      </div>
                    </div>
                    <div style={{ fontSize: '0.8rem', color: C.muted, marginTop: '0.3rem' }}>{intern.company}</div>
                    <div style={{ fontSize: '0.75rem', color: '#6a6a6a', display: 'flex', alignItems: 'center', gap: '0.3rem', marginTop: '0.3rem' }}>
                      <FaMapMarkerAlt size={10} /> {intern.location}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section >
  )
}