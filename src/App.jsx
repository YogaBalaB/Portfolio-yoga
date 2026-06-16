import './styles/global.css'
import Nav from './components/Nav'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Skills from './sections/Skills'
import About from './sections/About'
import Certifications from './sections/Certifications'
import GitHub from './sections/GitHub'
import Contact from './sections/Contact'

const C = { line: '#ffffff12', muted: '#8a8a8a', hint: '#4a4a4a', fd: "'Playfair Display', Georgia, serif" }

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Projects />
        <Skills />
        <About />
        <Certifications />
        <GitHub />
        <Contact />
      </main>
      <footer style={{ borderTop: `1px solid ${C.line}`, padding: '1.5rem 0' }}>
        <div style={{
          maxWidth: 1000, margin: '0 auto',
          padding: '0 clamp(1.25rem, 4vw, 2rem)',
          display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        }}>
          <span style={{ fontFamily: C.fd, fontSize: '0.95rem', color: C.muted }}>Yoga Bala B</span>
          <span style={{ fontSize: '0.65rem', letterSpacing: '0.06em', color: C.hint }}>Built with React · Vite · Framer Motion · 2025</span>
        </div>
      </footer>
    </>
  )
}