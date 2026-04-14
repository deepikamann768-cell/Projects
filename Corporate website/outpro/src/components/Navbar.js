import { Link } from "react-router-dom";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <h2 className="logo">Outpro India</h2>

        {/* HAMBURGER */}
        <div className="menu-icon" onClick={() => setMenuOpen(true)}>
          ☰
        </div>

        {/* NAV LINKS */}
        <div className={menuOpen ? "nav-links active" : "nav-links"}>
          
          {/* CLOSE BUTTON */}
          <div className="close-btn" onClick={() => setMenuOpen(false)}>
            ✖
          </div>

          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/about" onClick={() => setMenuOpen(false)}>About</Link>
          <Link to="/services" onClick={() => setMenuOpen(false)}>Features</Link>
          <Link to="/portfolio" onClick={() => setMenuOpen(false)}>Events</Link>
          <Link to="/testimonials" onClick={() => setMenuOpen(false)}>Testimonials</Link>
          <Link to="/scalability" onClick={() => setMenuOpen(false)}>Scalability</Link>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        </div>
      </nav>

      {/* OVERLAY */}
      {menuOpen && (
        <div className="overlay-bg" onClick={() => setMenuOpen(false)}></div>
      )}
    </>
  );
}