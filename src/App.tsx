function App() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0a0a0a 0%, #111827 50%, #0a0a0a 100%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
      color: '#fff',
      padding: '2rem',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Glow */}
      <div style={{
        position: 'absolute', top: '20%', left: '50%', transform: 'translateX(-50%)',
        width: '600px', height: '300px',
        background: 'radial-gradient(ellipse, rgba(245,158,11,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Live badge */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        background: 'rgba(16,185,129,0.1)', border: '1px solid rgba(16,185,129,0.3)',
        borderRadius: '999px', padding: '6px 16px', marginBottom: '2.5rem',
        fontSize: '13px', color: '#10b981',
      }}>
        <span style={{
          width: '8px', height: '8px', borderRadius: '50%', background: '#10b981',
          display: 'inline-block', boxShadow: '0 0 8px #10b981',
          animation: 'pulse 2s infinite',
        }} />
        Live on DeployWise
      </div>

      {/* Framework badge */}
      <div style={{
        background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: '12px', padding: '8px 20px', marginBottom: '1.5rem',
        fontSize: '13px', color: 'rgba(255,255,255,0.5)', letterSpacing: '0.08em',
        textTransform: 'uppercase' as const, fontWeight: 600,
      }}>
        Vite · React · TypeScript
      </div>

      {/* Heading */}
      <h1 style={{
        fontSize: 'clamp(2.5rem, 6vw, 4.5rem)',
        fontWeight: 800,
        margin: '0 0 1rem',
        textAlign: 'center' as const,
        lineHeight: 1.1,
        background: 'linear-gradient(135deg, #fff 30%, rgba(255,255,255,0.5))',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        backgroundClip: 'text',
      }}>
        Your app is live. 🚀
      </h1>

      <p style={{
        fontSize: '1.125rem',
        color: 'rgba(255,255,255,0.45)',
        textAlign: 'center' as const,
        maxWidth: '480px',
        lineHeight: 1.7,
        margin: '0 0 3rem',
      }}>
        This Vite + React starter is deployed and running on your own VPS.
        Edit <code style={{ background: 'rgba(255,255,255,0.08)', padding: '2px 8px', borderRadius: '4px', fontSize: '0.9em', color: 'rgba(255,255,255,0.7)' }}>src/App.tsx</code> to get started.
      </p>

      {/* CTA */}
      <a
        href="https://deploywise.dev"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-flex', alignItems: 'center', gap: '10px',
          background: 'rgba(245,158,11,0.12)', border: '1px solid rgba(245,158,11,0.35)',
          color: '#fcd34d', borderRadius: '12px', padding: '14px 28px',
          textDecoration: 'none', fontSize: '15px', fontWeight: 600,
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
        </svg>
        Deployed with DeployWise
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 17L17 7M7 7h10v10"/>
        </svg>
      </a>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #0a0a0a; }
      `}</style>
    </main>
  )
}

export default App
