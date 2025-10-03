import React from "react"
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; 2024 Taivo Tokman</p>
          </div>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/taivot"
              target="_blank"
              className="footer-link"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/O31"
              target="_blank"
              className="footer-link"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
