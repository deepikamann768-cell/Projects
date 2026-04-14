import Navbar from "../components/Navbar";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent!");
  };

  return (
    <>
      <Navbar />

      <div className="section">
        <h1>Contact Us</h1>

        <div className="contact-container">

          {/* LEFT SIDE */}
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>We’d love to hear from you!</p>

            <p>📍 Delhi, India</p>
            <p>📧 support@outpro.com</p>
            <p>📞 +91 98765 43210</p>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="contact-form">
            <form onSubmit={handleSubmit}>

              <input
                type="text"
                placeholder="Your Name"
                required
                onChange={(e) =>
                  setForm({ ...form, name: e.target.value })
                }
              />

              <input
                type="email"
                placeholder="Your Email"
                required
                onChange={(e) =>
                  setForm({ ...form, email: e.target.value })
                }
              />

              <textarea
                placeholder="Your Message"
                rows="5"
                required
                onChange={(e) =>
                  setForm({ ...form, message: e.target.value })
                }
              ></textarea>

              <button className="btn">Send Message</button>
            </form>
          </div>

        </div>

        {/* 🗺️ GOOGLE MAP */}
        <div className="map-container">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.48168102073!2d77.06889970430632!3d28.5275820012214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d194c7ef9b1bb%3A0x9c1df6c3d6f8f6a!2sDelhi!5e0!3m2!1sen!2sin!4v1700000000000"
            loading="lazy"
            allowFullScreen
            title="map"
          ></iframe>
        </div>

      </div>
    </>
  );
}