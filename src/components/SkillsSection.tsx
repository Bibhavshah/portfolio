"use client";

import { skills } from "@/data/portfolio";
import FadeIn from "./FadeIn";

export default function SkillsSection() {
    return (
        <section className="section" id="skills" style={{ background: "var(--bg-secondary)" }}>
            <div className="container">
                <FadeIn>
                    <span className="section-label">Skills</span>
                    <h2 className="section-title">
                        My Tech{" "}
                        <span className="gradient-text">Stack</span>
                    </h2>
                    <p className="section-subtitle">
                        Technologies I work with to bring ideas to life — from pixel-perfect
                        interfaces to robust server-side systems.
                    </p>
                </FadeIn>

                <div className="skills-grid">
                    {skills.map((category, i) => (
                        <FadeIn key={category.category} delay={0.1 * i}>
                            <div className="glass-card skill-category">
                                <h3 className="skill-category-title">
                                    <span
                                        className="skill-category-icon"
                                        style={{ background: `${category.color}20` }}
                                    >
                                        {category.icon}
                                    </span>
                                    {category.category}
                                </h3>
                                <div className="skill-tags">
                                    {category.items.map((skill) => (
                                        <span key={skill} className="skill-tag">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
