
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <h2>Padma Vidya Vikash School</h2>

          <p>
            Veldurti
          </p>

          <p>
            Empowering students through quality education,
            innovation and values.
          </p>
        </div>

        <div>
          <h3>Quick Links</h3>

          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/admission">Admissions</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/teachers">Teachers</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div>
          <h3>Contact</h3>

          <p>📍 Veldurti, Andhra Pradesh, India</p>
          <p>📞 Add your school's phone number</p>
          <p>✉️ Add your school's email address</p>
        </div>
      </div>

      <div className="copyright">
        © {new Date().getFullYear()} Padma Vidya Vikas School, Veldurti.
        All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
