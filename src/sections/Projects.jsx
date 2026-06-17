import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const C = {
  bg: '#0b0c0e', bg2: '#111316', line: '#ffffff12', line2: '#ffffff20',
  text: '#f0f0ee', muted: '#8a8a8a', hint: '#4a4a4a',
  gold: '#c9a96e', gold2: '#e8c98a',
  fd: "'Playfair Display', Georgia, serif",
  fs: "'Outfit', sans-serif",
}

const projects = [
  {
    num: '01',
    title: 'Routineo',
    description: 'A productivity and habit-tracking application that helps users manage daily routines, organize tasks, and monitor progress through an intuitive and responsive interface.',
    features: [
      'Daily routine tracking with visual progress',
      'Habit management with streak counter',
      'Task organization and prioritization',
      'Responsive design for mobile and desktop',
      'Data persistence with local storage'
    ],
    stack: ['React.js', 'JavaScript', 'CSS3', 'Node.js'],
    github: 'https://github.com/YogaBalaB/Routineo',
    liveDemo: 'https://routineo-coral.vercel.app/',
  },
  {
    num: '02',
    title: 'Workflow Management System',
    description: 'A full-stack workflow management platform that enables efficient task assignment, project tracking, and workflow monitoring to improve team productivity and collaboration.',
    features: [
      'Task assignment and tracking',
      'Real-time collaboration features',
      'Project timeline visualization',
      'Team member role management',
      'Progress analytics and reporting'
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'PostgreSQL', 'Material-UI'],
    github: 'https://github.com/YogaBalaB/workflow-management-system',
    liveDemo: 'https://workflow-management-system-rouge.vercel.app/login',
  },
  {
    num: '03',
    title: 'NexFeedAI — Surplus Food Redistribution',
    description: 'Web platform connecting donors, NGOs, and volunteers for resource distribution with role-based access, user authentication, and surplus food quality assessment.',
    features: [
      'Surplus food quality assessment',
      'Role-based access (Donors, NGOs, Volunteers)',
      'Secure user authentication',
      'Resource distribution tracking',
    ],
    stack: ['JavaScript', 'PHP', 'MySQL', 'HTML/CSS'],
  },
]

export default function Projects() {
  const [hovered, setHovered] = useState(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.1 }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  return (
    <section id="projects" style={{
      borderBottom: `1px solid ${C.line}`,
      padding: 'clamp(4rem, 8vw, 5.5rem) 0',
    }}>
      <div style={{
        maxWidth: 1000,
        margin: '0 auto',
        padding: '0 clamp(1.25rem, 4vw, 2rem)',
      }}>
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{
            display: 'flex',
            alignItems: 'baseline',
            gap: '1.5rem',
            marginBottom: '3rem',
          }}
        >
          <div style={{
            fontFamily: C.fd,
            fontSize: '3.5rem',
            color: C.line2,
            fontWeight: 400,
            lineHeight: 1,
          }}>
            01
          </div>
          <div style={{
            fontFamily: C.fd,
            fontSize: 'clamp(1.6rem, 3vw, 2rem)',
            fontWeight: 400,
            letterSpacing: '-0.01em',
            color: C.text,
          }}>
            Featured <em style={{ fontStyle: 'italic', color: C.gold }}>Projects</em>
          </div>
        </motion.div>

        {/* Main Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3rem' }}
        >
          {projects.map(project => (
            <motion.div
              key={project.num}
              variants={itemVariants}
              onMouseEnter={() => setHovered(project.num)}
              onMouseLeave={() => setHovered(null)}
              style={{
                background: C.bg2,
                border: `1px solid ${hovered === project.num ? C.line2 : C.line}`,
                padding: 'clamp(1.5rem, 3vw, 2rem)',
                display: 'flex', flexDirection: 'column', gap: '1.5rem',
                transition: 'all 0.3s cubic-bezier(0.25,0.46,0.45,0.94)',
                borderRadius: '8px',
                overflow: 'hidden',
              }}
            >
              {/* Number and Title */}
              <div>
                <div style={{ fontSize: '0.7rem', color: C.hint, letterSpacing: '0.08em', marginBottom: '0.5rem' }}>
                  {project.num}
                </div>
                <h3 style={{
                  fontFamily: C.fd,
                  fontSize: 'clamp(1.2rem, 2vw, 1.5rem)',
                  fontWeight: 400,
                  color: hovered === project.num ? C.gold2 : C.text,
                  letterSpacing: '-0.01em',
                  transition: 'color 0.2s',
                  margin: 0,
                }}>
                  {project.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{
                fontSize: '0.88rem',
                color: '#b0b0ae',
                lineHeight: 1.8,
                margin: 0,
              }}>
                {project.description}
              </p>

              {/* Features */}
              {project.features.length > 0 && (
                <div>
                  <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.6rem', marginTop: 0 }}>
                    Key Features
                  </p>
                  <ul style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem', listStyle: 'none', padding: 0, margin: 0 }}>
                    {project.features.slice(0, 3).map((feat, i) => (
                      <li key={i} style={{
                        fontSize: '0.75rem', color: C.text,
                        background: C.line,
                        padding: '0.35rem 0.8rem',
                        borderRadius: '3px',
                      }}>
                        {feat}
                      </li>
                    ))}
                    {project.features.length > 3 && (
                      <li style={{
                        fontSize: '0.75rem', color: C.muted,
                        padding: '0.35rem 0.8rem',
                      }}>
                        +{project.features.length - 3} more
                      </li>
                    )}
                  </ul>
                </div>
              )}

              {/* Tech Stack */}
              <div>
                <p style={{ fontSize: '0.7rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: C.muted, marginBottom: '0.6rem', marginTop: 0 }}>
                  Tech Stack
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
                  {project.stack.map((tech, i) => (
                    <span key={i} style={{
                      fontSize: '0.75rem',
                      color: C.gold,
                      padding: '0.3rem 0.7rem',
                      border: `1px solid ${C.gold}40`,
                      borderRadius: '3px',
                      transition: 'all 0.2s',
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links — only renders if at least one link exists */}
              {(project.github || project.liveDemo) && (
                <div style={{ display: 'flex', gap: '1rem', paddingTop: '0.5rem' }}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.6rem 1.2rem',
                        background: hovered === project.num ? C.gold2 : C.gold,
                        color: C.bg,
                        fontFamily: C.fs, fontSize: '0.7rem', fontWeight: 500,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        borderRadius: '4px', textDecoration: 'none',
                        transition: 'all 0.2s', border: 'none', cursor: 'pointer',
                      }}
                    >
                      <FaGithub size={14} /> GitHub
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      style={{
                        display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        padding: '0.6rem 1.2rem',
                        background: 'transparent',
                        color: hovered === project.num ? C.gold2 : C.muted,
                        fontFamily: C.fs, fontSize: '0.7rem', fontWeight: 500,
                        letterSpacing: '0.08em', textTransform: 'uppercase',
                        borderRadius: '4px', border: `1px solid ${hovered === project.num ? C.gold2 : C.muted}40`,
                        textDecoration: 'none',
                        transition: 'all 0.2s', cursor: 'pointer',
                      }}
                    >
                      <FaExternalLinkAlt size={14} /> Live Demo
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Project Placeholders */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          style={{ marginTop: '3rem', paddingTop: '2rem', borderTop: `1px solid ${C.line}` }}
        >
          <p style={{ fontSize: '0.85rem', color: C.muted, marginBottom: '1.5rem', margin: 0 }}>
            More projects coming soon...
          </p>
        </motion.div>
      </div>
    </section>
  )
}