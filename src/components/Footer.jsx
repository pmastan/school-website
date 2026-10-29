
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          {/* School Information */}
          <div className="footer-column footer-about">
            <h2>Padma Vidya Vikas School</h2>

            <p className="footer-location">
              📍 Veldurti, Andhra Pradesh, India
            </p>

            <p>
              Empowering students through quality education,
              innovation, discipline, and values to build a
              brighter future.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-column footer-quick-links">
            <h3>Quick Links</h3>

            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/admissions">Admissions</Link></li>
              <li><Link to="/academics">Academics</Link></li>
              {/* <li><Link to="/facilities">Facilities</Link></li> */}
              <li><Link to="/gallery">Gallery</Link></li>
              {/* <li><Link to="/events">Events</Link></li> */}
              {/* <li><Link to="/teachers">Teachers</Link></li> */}
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/careers">Careers</Link></li> 
              <li><Link to="/login">Login</Link></li>
            </ul>
          </div>

          {/* Contact Information */}
          <div className="footer-column footer-contact">
            <h3>Contact Us</h3>

            <p>📍 Veldurti, Andhra Pradesh, India</p>
            <p>📞 9876543210</p>
            <p>✉️  info.pvvs@gmail.com</p>

            <p className="footer-message">
              We welcome students and parents to our school community.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="copyright">
          <p>
            © {new Date().getFullYear()} Padma Vidya Vikas School,
            Veldurti. All Rights Reserved.
          </p>
        
        </div>
        <div className="author">
  <p>mastanVali</p>
</div>
      </div>
    </footer>
  );
};

export default Footer;
