import { useState } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import myPhoto from '../assets/yoga-photo.png'


// ── Design tokens ────────────────────────────────────────────────
const C = {
  bg:    '#0b0c0e',
  bg2:   '#111316',
  line:  '#ffffff12',
  text:  '#f0f0ee',
  muted: '#8a8a8a',
  gold:  '#c9a96e',
  gold2: '#e8c98a',
  fd: "'Playfair Display', Georgia, serif",
  fs: "'Outfit', sans-serif",
}

// ── Replace this with your actual photo import ───────────────────
// import myPhoto from './assets/yoga-photo.jpg'
// Then pass it: <Hero photo={myPhoto} />
// Or just drop the image URL directly in the src below.

export default function Hero({ photo=myPhoto }) {
  const [hover, setHover] = useState(null)

  return (
    <>
      <style>{`
        @keyframes blink {
          0%,100%{opacity:1} 50%{opacity:0.4}
        }
        @keyframes fadeUp {
          from{opacity:0;transform:translateY(24px)}
          to{opacity:1;transform:translateY(0)}
        }
        .hero-cta a {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          font-family: ${C.fs};
          font-size: 0.72rem;
          font-weight: 500;
          letter-spacing: 0.09em;
          text-transform: uppercase;
          padding: 0.65rem 1.5rem;
          border-radius: 4px;
          text-decoration: none;
          transition: all 0.25s ease;
          cursor: pointer;
        }
        .hero-cta .primary {
          background: ${C.gold};
          color: #0b0c0e;
          border: 1.5px solid ${C.gold};
        }
        .hero-cta .primary:hover {
          background: ${C.gold2};
          border-color: ${C.gold2};
        }
        .hero-cta .outline {
          background: transparent;
          color: ${C.gold};
          border: 1.5px solid #c9a96e55;
        }
        .hero-cta .outline:hover {
          border-color: ${C.gold};
          background: #c9a96e12;
        }
        .stat-num {
          font-family: ${C.fd};
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          font-weight: 400;
          color: ${C.gold};
          line-height: 1;
        }
        .stat-label {
          font-size: 0.68rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: ${C.muted};
          margin-top: 4px;
        }
        /* Photo glow */
        .photo-wrap::after {
          content: '';
          position: absolute;
          bottom: 0; left: 50%;
          transform: translateX(-50%);
          width: 70%; height: 40%;
          background: radial-gradient(ellipse, #c9a96e30 0%, transparent 70%);
          pointer-events: none;
        }
        @media (max-width: 768px) {
          .hero-inner { flex-direction: column !important; }
          .hero-text  { order: 2; text-align: center; }
          .hero-photo { order: 1; justify-content: center !important; }
          .hero-cta   { justify-content: center !important; }
          .hero-stats { justify-content: center !important; }
        }
      `}</style>

      <section style={{
        background: C.bg,
        borderBottom: `1px solid ${C.line}`,
        minHeight: '92vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
      }}>
        <div style={{
          maxWidth: 1100,
          margin: '0 auto',
          padding: 'clamp(3rem,8vw,5rem) clamp(1.25rem,4vw,2.5rem)',
          width: '100%',
        }}>
          <div className="hero-inner" style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(2rem,5vw,5rem)',
          }}>

            {/* ── Left: Text ───────────────────────────────────── */}
            <div className="hero-text" style={{
              flex: '1 1 480px',
              display: 'flex',
              flexDirection: 'column',
              gap: '1.6rem',
              animation: 'fadeUp 0.7s ease both',
            }}>

              {/* Badge */}
              <div style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                fontSize: '0.62rem',
                letterSpacing: '0.13em',
                textTransform: 'uppercase',
                color: C.gold,
                border: '1px solid #c9a96e35',
                padding: '0.3rem 0.85rem',
                borderRadius: '2rem',
                width: 'fit-content',
              }}>
                <span style={{
                  width: 6, height: 6, borderRadius: '50%',
                  background: C.gold,
                  animation: 'blink 2s ease-in-out infinite',
                  flexShrink: 0,
                }}/>
                Open to opportunities · Chennai
              </div>

              {/* Greeting + Name */}
              <div>
                <p style={{
                  fontSize: 'clamp(0.9rem,1.5vw,1.05rem)',
                  color: C.muted,
                  marginBottom: '0.4rem',
                  fontFamily: C.fs,
                }}>
                  Hi, I am
                </p>
                <h1 style={{
                  fontFamily: C.fd,
                  fontSize: 'clamp(2.8rem,5.5vw,4.2rem)',
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: '-0.01em',
                  color: C.text,
                  marginBottom: '0.5rem',
                }}>
                  Yoga Bala
                </h1>
                <p style={{
                  fontSize: 'clamp(1rem,2vw,1.3rem)',
                  fontWeight: 600,
                  color: C.gold,
                  letterSpacing: '0.01em',
                  fontFamily: C.fs,
                }}>
                  Full Stack Developer &amp; AI/ML Engineer
                </p>
              </div>

              {/* Summary */}
              <p style={{
                fontSize: '0.92rem',
                color: '#9a9a98',
                lineHeight: 1.7,
                maxWidth: '600px',
                margin: '0',
              }}>
                Engineering graduate building responsive and scalable web applications with
                React.js, Node.js, and PostgreSQL. Backed by 2 internships and hands-on project
                experience, with a focus on clean code, performance, and user-centric design.
               </p>

              {/* CTAs */}
              <div className="hero-cta" style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.75rem',
                alignItems: 'center',
              }}>
                {/* Primary: Resume download */}
                <a
                  href="/resume.pdf"
                  download
                  className="primary"
                >
                  Download Resume
                </a>

                {/* Secondary: Contact */}
                <a href="#contact" className="outline">
                  Let's Talk
                </a>

                {/* Icon-only social links */}
                <a
                  href="https://github.com/YogaBalaB"
                  target="_blank"
                  rel="noreferrer"
                  className="outline"
                  style={{ padding: '0.65rem 0.85rem' }}
                  aria-label="GitHub"
                >
                  <FaGithub size={17} />
                </a>
                <a
                  href="https://www.linkedin.com/in/yoga-bala-b-1873192a5/"
                  target="_blank"
                  rel="noreferrer"
                  className="outline"
                  style={{ padding: '0.65rem 0.85rem' }}
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={17} />
                </a>
              </div>

              {/* Stats */}
              <div className="hero-stats" style={{
                display: 'flex',
                gap: '2.5rem',
                flexWrap: 'wrap',
                paddingTop: '0.5rem',
                borderTop: `1px solid ${C.line}`,
              }}>
                {[
                  { n: '3+',  l: 'Projects shipped' },
                  { n: '2',   l: 'Internships' },
                ].map((s, i) => (
                  <div key={i}>
                    <div className="stat-num">{s.n}</div>
                    <div className="stat-label">{s.l}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right: Photo ─────────────────────────────────── */}
            <div className="hero-photo" style={{
              flex: '0 0 auto',
              display: 'flex',
              justifyContent: 'flex-end',
              animation: 'fadeUp 0.9s 0.15s ease both',
            }}>
              <div className="photo-wrap" style={{
                position: 'relative',
                width: 'clamp(240px, 30vw, 380px)',
                aspectRatio: '3/4',
              }}>
                {photo ? (
                  <img
                    src={photo}
                    alt="Yoga Bala"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                      borderRadius: '12px',
                      display: 'block',
                    }}
                  />
                ) : (
                  /* Placeholder shown until you pass a photo prop */
                  <div style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '12px',
                    background: '#1a1b1f',
                    border: `1px dashed #c9a96e40`,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.75rem',
                    color: C.muted,
                  }}>
                    <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#c9a96e60" strokeWidth="1.2">
                      <circle cx="12" cy="8" r="4"/>
                      <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                    </svg>
                    <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase' }}>
                      Add your photo
                    </span>
                    <code style={{ fontSize: '0.65rem', color: '#c9a96e70', textAlign: 'center', padding: '0 1rem' }}>
                      import photo from './assets/you.jpg'<br/>
                      &lt;Hero photo={'{photo}'} /&gt;
                    </code>
                  </div>
                )}

                {/* Decorative corner accent */}
                <div style={{
                  position: 'absolute',
                  top: -12, right: -12,
                  width: 80, height: 80,
                  borderTop: `2px solid ${C.gold}`,
                  borderRight: `2px solid ${C.gold}`,
                  borderRadius: '0 12px 0 0',
                  opacity: 0.4,
                  pointerEvents: 'none',
                }}/>
                <div style={{
                  position: 'absolute',
                  bottom: -12, left: -12,
                  width: 80, height: 80,
                  borderBottom: `2px solid ${C.gold}`,
                  borderLeft: `2px solid ${C.gold}`,
                  borderRadius: '0 0 0 12px',
                  opacity: 0.4,
                  pointerEvents: 'none',
                }}/>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  )
}