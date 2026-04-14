import Navbar from "../components/Navbar";

export default function Services() {
  return (
    <>
      <Navbar />

      <div className="section">
        <h1>Platform Features</h1>
        <p style={{ maxWidth: "700px", margin: "auto" }}>
          Everything you need to stay connected with sports — from live updates
          to competitive tournaments.
        </p>

        <div className="feature-grid">

          <div className="feature-card">
            <h2>⚡</h2>
            <h3>Live Match Updates</h3>
            <p>Track scores and match stats in real-time.</p>
          </div>

          <div className="feature-card">
            <h2>🏆</h2>
            <h3>Tournaments</h3>
            <p>Join and compete in exciting sports events.</p>
          </div>

          <div className="feature-card">
            <h2>👥</h2>
            <h3>Team Management</h3>
            <p>Create and manage your teams easily.</p>
          </div>

          <div className="feature-card">
            <h2>📊</h2>
            <h3>Player Stats</h3>
            <p>Analyze performance with detailed stats.</p>
          </div>

          <div className="feature-card">
            <h2>📍</h2>
            <h3>Nearby Matches</h3>
            <p>Find games happening near your location.</p>
          </div>

          <div className="feature-card">
            <h2>💬</h2>
            <h3>Community Chat</h3>
            <p>Connect and chat with other players.</p>
          </div>

        </div>
      </div>
    </>
  );
}