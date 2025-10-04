import React from "react"
import "./Skills.css"

const programming = [
  { name: "HTML/CSS", percent: 90 },
  { name: "JavaScript", percent: 65 },
  { name: "Go", percent: 60 },
  { name: "TypeScript", percent: 55 },
  { name: "Rust", percent: 55 },
  { name: "React", percent: 50 },
]
const tools = [
  { name: "Jira", percent: 55 },
  { name: "Linux", percent: 50 },
  { name: "Git", percent: 50 },
  { name: "Docker", percent: 40 },
]

type SkillBarProps = {
  name: string
  percent: number
}

function SkillBar({ name, percent }: SkillBarProps) {
  return (
    <div className="skill-item">
      <div className="skill-header">
        <span className="skill-name">{name}</span>
        <span className="skill-percentage">{percent}%</span>
      </div>
      <div className="skill-bar">
        <div className="skill-progress" style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  )
}

function Skills() {
  return (
    <section className="skills" id="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Technical Skills</h2>
          <p className="section-subtitle">Expertise across the full development stack</p>
        </div>
        <div className="skills-content">
          <div className="skills-category">
            <h3 className="category-title">Programming Languages</h3>
            <div className="skills-grid">
              {programming.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
          <div className="skills-category">
            <h3 className="category-title">Tools & Technologies</h3>
            <div className="skills-grid">
              {tools.map((skill) => (
                <SkillBar key={skill.name} {...skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
