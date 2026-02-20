export default function Home() {
  return (
    <main style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '100vh',
      padding: '2rem',
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem', textAlign: 'center' }}>
        Welcome to CCNA Journey
      </h1>
      <p style={{ fontSize: '1.2rem', textAlign: 'center', maxWidth: '600px' }}>
        Your path to mastering Cisco Certified Network Associate certification.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <p style={{ textAlign: 'center', color: '#666' }}>
          Vercel Speed Insights is enabled and tracking performance metrics.
        </p>
      </div>
    </main>
  )
}
