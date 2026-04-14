import Navbar from "../components/Navbar";

export default function Scalability() {
  return (
    <>
      <Navbar />

      <div className="section">
        <h1>Scalability & Future Growth</h1>

        <p style={{ maxWidth: "700px", margin: "auto" }}>
          Outpro India is built to scale and evolve with the growing sports
          ecosystem. Our platform is designed for future expansion and
          continuous innovation.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <h2>📰</h2>
            <h3>Sports Blog</h3>
            <p>Latest news, updates, and sports insights.</p>
          </div>

          <div className="feature-card">
            <h2>💼</h2>
            <h3>Career Portal</h3>
            <p>Opportunities for players, coaches, and organizers.</p>
          </div>

          <div className="feature-card">
            <h2>🤝</h2>
            <h3>Partner Program</h3>
            <p>Collaborate with sports brands and academies.</p>
          </div>

          <div className="feature-card">
            <h2>📱</h2>
            <h3>Mobile App</h3>
            <p>Future Android & iOS application launch.</p>
          </div>

          <div className="feature-card">
            <h2>🌍</h2>
            <h3>Global Expansion</h3>
            <p>Expand platform beyond India.</p>
          </div>

          <div className="feature-card">
            <h2>📊</h2>
            <h3>Advanced Analytics</h3>
            <p>AI-based performance tracking.</p>
          </div>

        </div>
      </div>
    </>
  );
}
