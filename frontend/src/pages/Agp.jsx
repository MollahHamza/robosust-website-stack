function Agp() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" style={{ backgroundImage: 'url(/assets/images/home/agpbanner.png)', minHeight: '60vh', height: 'auto' }}>
        <div className="hero-overlay"></div>
        <div className="hero-content fade-in">
          <h1 className="hero-title">AGP</h1>
          <p className="hero-subtitle">Auto Grand Prix</p>
        </div>
      </section>

      {/* Coming Soon Section */}
      <section className="section text-center" style={{ padding: '100px 0' }}>
        <div className="container">
          <h2 className="section-title">Coming Soon</h2>
          <p className="section-subtitle">
            The AGP page is currently under development. Check back soon for exciting updates about the Auto Grand Prix competition!
          </p>
          <div style={{ marginTop: '40px', padding: '60px', background: 'var(--color-10)', borderRadius: '10px' }}>
            <svg width="100" height="100" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent)" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <path d="M12 6v6l4 2"/>
            </svg>
            <p style={{ marginTop: '20px', color: 'var(--color-5)', fontSize: '1.1rem' }}>
              Stay tuned for AGP updates and registration information.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Agp;
