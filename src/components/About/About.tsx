import "./About.css"

function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">From chef to code - ready to make an impact in Sweden</p>
        </div>
        <div className="about-content">
          <div className="about-text">
            <p className="about-summary">
              Full Stack Developer with hands-on experience in Rust, Go, React, and JavaScript.
              Recent graduate from kood/Jõhvi's intensive programming bootcamp with a unique
              background in team leadership and high-pressure environments from 10 years in culinary
              arts.
            </p>
            <div className="about-highlights">
              <h3>Key Highlights</h3>
              <ul className="highlights-list">
                <li>Graduate from kood/Jõhvi's peer-learning program</li>
                <li>10 years of team leadership experience</li>
                <li>Passionate about efficient, clean code</li>
                <li>Committed to learning Swedish language</li>
              </ul>
            </div>
          </div>
          <div className="about-languages">
            <h3>Languages</h3>
            <div className="language-grid">
              {[
                { name: "Estonian", percent: 100, text: "Native" },
                { name: "English", percent: 90, text: "Fluent" },
                { name: "Spanish", percent: 50, text: "Intermediate" },
                { name: "Swedish", percent: 30, text: "Learning 📚" },
              ].map((lang) => (
                <div className="language-item" key={lang.name}>
                  <div className="language-name">{lang.name}</div>
                  <div className="language-level">
                    <div className="level-bar">
                      <div className="level-fill" style={{ width: `${lang.percent}%` }}></div>
                    </div>
                    <span className="level-text">{lang.text}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
