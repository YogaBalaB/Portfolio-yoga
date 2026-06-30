import { motion } from 'framer-motion'
import { FaHtml5, FaCss3Alt, FaReact, FaBootstrap, FaNodeJs, FaServer, FaGitAlt, FaGithub, FaFigma, FaCode, FaBrain } from 'react-icons/fa'
import { SiJavascript, SiTailwindcss, SiExpress, SiPostgresql, SiMysql, SiPostman, SiFastapi, SiPython, SiScikitlearn, SiTensorflow, SiPandas } from 'react-icons/si'

const C = {
  bg: '#0b0c0e', bg2: '#111316', line: '#ffffff12', line2: '#ffffff20',
  muted: '#8a8a8a', gold: '#c9a96e', gold2: '#e8c98a', text: '#f0f0ee',
  fd: "'Playfair Display', Georgia, serif",
}

const skillGroups = [
  {
    label: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, level: 90 },
      { name: 'CSS3', icon: FaCss3Alt, level: 85 },
      { name: 'JavaScript', icon: SiJavascript, level: 80 },
      { name: 'React.js', icon: FaReact, level: 85 },
      { name: 'Bootstrap', icon: FaBootstrap, level: 80 },
      { name: 'Tailwind CSS', icon: SiTailwindcss, level: 75 },
    ],
  },
  {
    label: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, level: 75 },
      { name: 'Express.js', icon: SiExpress, level: 75 },
      { name: 'Python FastAPI', icon: SiFastapi, level: 80 },
      { name: 'RESTful APIs', icon: FaServer, level: 85 },
    ],
  },
  {
    label: 'Database',
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, level: 70 },
      { name: 'MySQL', icon: SiMysql, level: 80 },
    ],
  },
  {
    label: 'AI/ML',
    skills: [
      { name: 'Python', icon: SiPython, level: 85 },
      { name: 'Machine Learning (Scikit-learn)', icon: SiScikitlearn, level: 75 },
      { name: 'Deep Learning (TensorFlow)', icon: SiTensorflow, level: 70 },
      { name: 'Pandas & NumPy', icon: SiPandas, level: 80 },
      { name: 'Natural Language Processing (NLP)', icon: FaBrain, level: 75 },
    ],
  },
  {
    label: 'Tools',
    skills: [
      { name: 'GitHub', icon: FaGithub, level: 85 },
      { name: 'VS Code', icon: FaCode, level: 90 },
      { name: 'Figma', icon: FaFigma, level: 80 },
    ],
  },
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  }

  return (
    <section id="skills" style={{ borderBottom: `1px solid ${C.line}`, padding: 'clamp(4rem, 8vw, 5.5rem) 0' }}>
      <div style={{ maxWidth: 1000, margin: '0 auto', padding: '0 clamp(1.25rem, 4vw, 2rem)' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          style={{ display: 'flex', alignItems: 'baseline', gap: '1.5rem', marginBottom: '3rem' }}
        >
          <div style={{ fontFamily: C.fd, fontSize: '3.5rem', color: C.line2, fontWeight: 400, lineHeight: 1 }}>02</div>
          <div style={{ fontFamily: C.fd, fontSize: 'clamp(1.6rem, 3vw, 2rem)', fontWeight: 400, letterSpacing: '-0.01em' }}>
            Skills &amp; <em style={{ fontStyle: 'italic', color: C.gold }}>Stack</em>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
        >
          {skillGroups.map(group => (
            <motion.div key={group.label} variants={itemVariants}>
              <div style={{
                fontSize: '0.75rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: C.gold,
                paddingBottom: '0.75rem', borderBottom: `1px solid ${C.line}`, marginBottom: '1.5rem', fontWeight: 600,
              }}>
                {group.label}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))', gap: '1rem' }}>
                {group.skills.map(skill => (
                  <motion.div
                    key={skill.name}
                    whileHover={{ y: -5, borderColor: C.gold2, backgroundColor: '#ffffff08' }}
                    style={{
                      background: C.bg2, border: `1px solid ${C.line}`, borderRadius: '8px',
                      padding: '1rem', display: 'flex', flexDirection: 'column', gap: '0.8rem',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)', cursor: 'default'
                    }}
                  >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                      <skill.icon size={20} style={{ color: C.gold }} />
                      <span style={{ fontSize: '0.9rem', color: C.text, fontWeight: 500 }}>{skill.name}</span>
                    </div>
                    <div style={{ width: '100%', height: '4px', background: C.line, borderRadius: '2px', overflow: 'hidden' }}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        style={{ height: '100%', background: C.gold, borderRadius: '2px' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}