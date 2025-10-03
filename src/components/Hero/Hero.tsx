import React from "react"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">Hello, I'm</div>
            <h1 className="hero-name">Taivo Tokman</h1>
            <h2 className="hero-title">Full Stack Developer</h2>
            <p className="hero-tagline">kood/Jõhvi Graduate | Rust, Go, React</p>
            <div className="hero-actions">
              <a href="#projects" className="btn btn--primary">
                View Projects
              </a>
              <a href="#" className="btn btn--outline" target="_blank">
                Download CV
              </a>
              <a href="#contact" className="btn btn--secondary">
                Contact Me
              </a>
            </div>
          </div>
          <div className="hero-image">
            <div className="avatar-placeholder">
              <div className="avatar-icon">👨‍💻</div>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll down</span>
        <div className="scroll-arrow">↓</div>
      </div>
    </section>
  )
}

export default Hero
