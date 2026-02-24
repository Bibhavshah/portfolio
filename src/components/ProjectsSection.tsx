"use client";

import { projects } from "@/data/portfolio";
import { Github, ExternalLink } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ProjectsSection() {
    return (
        <section
            className="section"
            id="projects"
            style={{ background: "var(--bg-secondary)" }}
        >
            <div className="container">
                <FadeIn>
                    <span className="section-label">Projects</span>
                    <h2 className="section-title">
                        Things I&apos;ve{" "}
                        <span className="gradient-text">Built</span>
                    </h2>
                    <p className="section-subtitle">
                        A selection of side-projects and professional work that showcase my
                        skills across different domains and technologies.
                    </p>
                </FadeIn>

                <div className="projects-grid">
                    {projects.map((project, i) => (
                        <FadeIn key={project.name} delay={0.1 * i}>
                            <div className="glass-card project-card">
                                {/* Banner */}
                                <div
                                    className="project-image"
                                    style={{ background: project.gradient, position: "relative" }}
                                >
                                    <div className="project-image-overlay" style={{ position: "absolute", inset: 0, zIndex: 1 }} />
                                    <span style={{ fontSize: 72, position: "relative", zIndex: 2, lineHeight: 1, filter: "drop-shadow(0 4px 20px rgba(0,0,0,0.5))" }}>
                                        {project.emoji}
                                    </span>
                                </div>

                                {/* Body */}
                                <div className="project-body">
                                    <div className="project-meta">
                                        <span className="project-type">{project.type}</span>
                                    </div>

                                    <h3 className="project-title">{project.name}</h3>
                                    <p className="project-description">{project.description}</p>

                                    <div className="project-tech">
                                        {project.tech.map((t) => (
                                            <span key={t} className="tech-tag">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="project-links">
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link"
                                        >
                                            <Github size={14} />
                                            Code
                                        </a>
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="project-link"
                                        >
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
