import Navbar from "../components/Navbar";

export default function About() {
  return (
    <>
      <Navbar />

      <div className="section">
        <h1>About Outpro India</h1>

        <p>
          Outpro India is a modern sports platform connecting players,
          teams, and sports enthusiasts.
        </p>

        <div className="grid">
          <div className="card">🎯 Mission</div>
          <div className="card">👁️ Vision</div>
          <div className="card">💡 Values</div>
        </div>
      </div>
    </>
  );
}