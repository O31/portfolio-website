import React, { useState } from "react"
import "./Projects.css"

const PROJECTS = [
  {
    icon: "🌐",
    title: "Social Network Application",
    description: "Full-stack social networking platform with real-time messaging capabilities",
    tech: ["React", "TypeScript", "Go", "WebSockets"],
    highlights: [
      "Developed real-time messaging system using WebSockets",
      "Implemented user authentication and authorization",
      "Created responsive design with Tailwind CSS",
      "Built RESTful API with Go backend",
    ],
  },
  {
    icon: "🕷️",
    title: "Concurrent Web Crawler",
    description: "High-performance wget clone using Go's concurrency features",
    tech: ["Go", "Goroutines", "Channels", "HTTP"],
    highlights: [
      "Achieved 3x faster download speeds through goroutines",
      "Implemented robust error handling and retry logic",
      "Used Go channels for communication between goroutines",
      "Optimized memory usage for large file downloads",
    ],
  },
  {
    icon: "⚡",
    title: "Mini UNIX Shell",
    description: "Command-line interface replicating core UNIX shell functionality",
    tech: ["Rust", "Systems Programming", "Command Line"],
    highlights: [
      "Implemented process management and I/O redirection",
      "Applied Rust's memory safety features",
      "Built command parsing and execution engine",
      "Added support for pipes and background processes",
    ],
  },
  {
    icon: "🎮",
    title: "Multiplayer Bomber-Man Game",
    description: "Real-time multiplayer game with custom virtual DOM framework",
    tech: ["JavaScript", "Node.js", "WebSockets", "Custom Framework"],
    highlights: [
      "Created custom virtual DOM and state management",
      "Implemented real-time multiplayer synchronization",
      "Built game physics and collision detection",
      "Developed responsive game controls",
    ],
  },
]
function Projects() {
  const [expanded, setExpanded] = useState<number | null>(null)

  return (
    <section className="projects" id="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">
            Showcasing technical skills and problem-solving abilities
          </p>
        </div>
        <div className="projects-grid">
          {PROJECTS.map((proj, idx) => (
            <div className="project-card" key={idx}>
              <div className="project-image">
                <div className="project-placeholder">{proj.icon}</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-description">{proj.description}</p>
                <div className="project-tech">
                  {proj.tech.map((tag) => (
                    <span key={tag} className="tech-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="project-actions">
                  <a href="https://github.com/O31" className="project-link">
                    GitHub
                  </a>
                  <a href="https://github.com/O31" className="project-link">
                    Live Demo
                  </a>
                  <button
                    className="project-expand"
                    onClick={() => setExpanded(idx === expanded ? null : idx)}
                  >
                    View Details
                  </button>
                </div>
              </div>
              {expanded === idx && (
                <div className="project-details">
                  <div className="details-content">
                    <h4>Project Highlights</h4>
                    <ul>
                      {proj.highlights.map((hl, i) => (
                        <li key={i}>{hl}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
