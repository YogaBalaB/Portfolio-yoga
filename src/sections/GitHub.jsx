import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaCodeBranch, FaUserFriends, FaUserPlus } from 'react-icons/fa';

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
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const StatCard = ({ icon: Icon, value, label }) => {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={itemVariants}
      whileHover={{ y: -5, borderColor: C.gold2 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
        padding: '2.5rem 1.5rem',
        background: C.bg2,
        border: `1px solid ${hovered ? C.gold2 : C.line}`,
        borderRadius: '8px',
        transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '3px',
          background: C.gold,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.3s',
        }}
      />
      <div
        style={{
          padding: '0.8rem',
          background: `${C.gold}15`,
          borderRadius: '50%',
          color: C.gold,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Icon size={24} />
      </div>
      <div
        style={{
          fontFamily: C.fd,
          fontSize: '2.5rem',
          color: C.text,
          fontWeight: 500,
          lineHeight: 1,
        }}
      >
        {value}
      </div>
      <p
        style={{
          fontSize: '0.75rem',
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: C.muted,
          margin: 0,
          fontWeight: 600,
        }}
      >
        {label}
      </p>
    </motion.div>
  );
};

export default function GitHub() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(false);
  const githubUsername = 'YogaBalaB';

  useEffect(() => {
    const fetchGitHubStats = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${githubUsername}`);
        const data = await response.json();
        setStats({
          followers: data.followers || 0,
          following: data.following || 0,
          repos: data.public_repos || 0,
          avatar: data.avatar_url,
        });
      } catch (err) {
        console.log('GitHub stats unavailable');
      } finally {
        setLoading(false);
      }
    };
    fetchGitHubStats();
  }, []);

  // Trigger animation after data loads
  useEffect(() => {
    if (!loading) {
      const timer = setTimeout(() => setShow(true), 100);
      return () => clearTimeout(timer);
    }
  }, [loading]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
  };

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
            GitHub <em style={{ fontStyle: 'italic', color: C.gold }}>Activity</em>
          </div>
        </motion.div>

        {loading ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '1rem',
              padding: '2.5rem 1.5rem',
              background: `linear-gradient(145deg, ${C.bg2}, #1a1610)`,
              border: `1px solid ${C.gold}`,
              borderRadius: '8px',
              textDecoration: 'none',
              transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
              boxShadow: `0 4px 20px ${C.gold}15`,
            }}
            whileHover={{ y: -5, boxShadow: `0 8px 30px ${C.gold}25` }}
          >
            <div
              style={{
                width: '30px',
                height: '30px',
                border: `2px solid ${C.line}`,
                borderTopColor: C.gold,
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
                margin: '0 auto 1rem',
              }}
            />
            Loading GitHub stats...
            <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
          </motion.div>
        ) : (
          show && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '2rem',
              }}
            >
              {/* Profile Card */}
              <motion.a
                variants={itemVariants}
                href="https://github.com/YogaBalaB"
                target="_blank"
                rel="noreferrer"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '1rem',
                  padding: '2.5rem 1.5rem',
                  background: `linear-gradient(145deg, ${C.bg2}, #1a1610)`,
                  border: `1px solid ${C.gold}`,
                  borderRadius: '8px',
                  textDecoration: 'none',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
                  boxShadow: `0 4px 20px ${C.gold}15`,
                }}
                whileHover={{ y: -5, boxShadow: `0 8px 30px ${C.gold}25` }}
              >
                {stats?.avatar ? (
                  <div style={{ position: 'relative' }}>
                    <img
                      src={stats.avatar}
                      alt="GitHub Avatar"
                      style={{
                        width: '64px',
                        height: '64px',
                        borderRadius: '50%',
                        border: `2px solid ${C.gold}`,
                        objectFit: 'cover',
                      }}
                    />
                    <div
                      style={{
                        position: 'absolute',
                        bottom: '-5px',
                        right: '-5px',
                        background: C.bg2,
                        borderRadius: '50%',
                        padding: '4px',
                      }}
                    >
                      <FaGithub size={18} style={{ color: C.gold }} />
                    </div>
                  </div>
                ) : (
                  <FaGithub size={64} style={{ color: C.gold }} />
                )}
                <div style={{ textAlign: 'center', marginTop: '0.5rem' }}>
                  <h3 style={{ fontFamily: C.fd, fontSize: '1.2rem', margin: 0, color: C.text, fontWeight: 500 }}>
                    GitHub Profile
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: C.gold, margin: 0, marginTop: '0.2rem' }}>
                    @YogaBalaB
                  </p>
                </div>
              </motion.a>

              {/* Stat Cards */}
              {stats && (
                <>
                  <StatCard icon={FaCodeBranch} value={stats.repos} label="Repositories" />
                  <StatCard icon={FaUserFriends} value={stats.followers} label="Followers" />
                  <StatCard icon={FaUserPlus} value={stats.following} label="Following" />
                </>
              )}
            </motion.div>
          )
        )}
      </div>
    </section>
  );
}
