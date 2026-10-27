
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./Navbar.css";
import logo from "../assets/LOGO.webp";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Academics", path: "/academics" },
    { name: "Gallery", path: "/gallery" },
    { name: "Admissions", path: "/admissions" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
  ];

  return (
    <nav className="navbar">
      {/* School Logo and Name */}
      <Link to="/" className="logo" onClick={closeMenu}>
        <img
          src={logo}
          alt="Padma Vidya Vikas School Logo"
          className="school-logo"
        />

        <span className="logo-text">
          Padma Vidya Vikas School
          <small>Veldurti</small>
        </span>
      </Link>

      {/* Mobile Menu Button */}
      <button
        className="hamburger"
        type="button"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label={
          menuOpen ? "Close navigation menu" : "Open navigation menu"
        }
        aria-expanded={menuOpen}
        aria-controls="primary-navigation"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Navigation Links */}
      <ul
        id="primary-navigation"
        className={`nav-links ${menuOpen ? "active" : ""}`}
      >
        {navItems.map((item) => (
          <li key={item.path}>
            <NavLink
              to={item.path}
              end={item.path === "/"}
              onClick={closeMenu}
              className={({ isActive }) =>
                isActive ? "nav-link active-link" : "nav-link"
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
