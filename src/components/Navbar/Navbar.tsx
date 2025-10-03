import React from "react"
import "./Navbar.css"

interface NavbarProps {
  darkMode: boolean
  setDarkMode: React.Dispatch<React.SetStateAction<boolean>>
}

const Navbar: React.FC<NavbarProps> = ({ darkMode, setDarkMode }) => {
  return (
    <nav className="navbar" id="navbar">
      <div className="container">
        <div className="nav-content">
          <div className="nav-brand">
            <span className="brand-text">Taivo Tokman</span>
          </div>
          <div className="nav-menu" id="nav-menu">
            <a href="#home" className="nav-link">
              Home
            </a>
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#projects" className="nav-link">
              Projects
            </a>
            <a href="#skills" className="nav-link">
              Skills
            </a>
            <a href="#experience" className="nav-link">
              Experience
            </a>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </div>
          <div className="nav-actions">
            <button
              className="theme-toggle"
              aria-label="Toggle theme"
              onClick={() => setDarkMode((m) => !m)}
            >
              <span className="theme-icon">{darkMode ? "🌞" : "🌙"}</span>
            </button>
            <button className="mobile-menu-toggle" id="mobile-menu-toggle" aria-label="Toggle menu">
              <span className="hamburger"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
