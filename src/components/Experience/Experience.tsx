import React from 'react';
import './Experience.css';

const experiences = [
    {
        date: "November 2022 – November 2024",
        title: "Full Stack Developer Program",
        org: "kood/Jõhvi • Jõhvi, Estonia",
        description: "Intensive peer-to-peer learning program with project-based curriculum",
        highlights: [
            "Completed 50+ hands-on programming projects",
            "Mastered collaborative development with Git workflows",
            "Developed expertise in multiple programming languages",
            "Practiced Agile development methodologies"
        ]
    },
    {
        date: "2014 – 2022",
        title: "Sous Chef",
        org: "Various Restaurants • Estonia",
        description: "Led kitchen teams in high-pressure restaurant environments",
        highlights: [
            "Managed teams of 5-12 members daily",
            "Served 200+ customers with consistent quality",
            "Reduced service time by 25% through process optimization",
            "Developed strong leadership and communication skills"
        ]
    }
];

function Experience() {
    return (
        <section className="experience" id="experience">
            <div className="container">
                <div className="section-header">
                    <h2 className="section-title">Experience</h2>
                    <p className="section-subtitle">Journey from culinary arts to tech</p>
                </div>
                <div className="timeline">
                    {experiences.map((exp, idx) => (
                        <div className="timeline-item" key={idx}>
                            <div className="timeline-marker"></div>
                            <div className="timeline-content">
                                <div className="timeline-date">{exp.date}</div>
                                <h3 className="timeline-title">{exp.title}</h3>
                                <div className="timeline-organization">{exp.org}</div>
                                <p className="timeline-description">{exp.description}</p>
                                <ul className="timeline-highlights">
                                    {exp.highlights.map((hl, i) => <li key={i}>{hl}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Experience;
