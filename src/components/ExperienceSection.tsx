"use client";

import { experience } from "@/data/portfolio";
import { CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";

export default function ExperienceSection() {
    return (
        <section className="section" id="experience">
            <div className="container">
                <FadeIn>
                    <span className="section-label">Experience</span>
                    <h2 className="section-title">
                        My Professional{" "}
                        <span className="gradient-text">Journey</span>
                    </h2>
                    <p className="section-subtitle">
                        A timeline of roles where I&apos;ve shipped products, grown as an
                        engineer, and contributed to real-world teams.
                    </p>
                </FadeIn>

                <div className="timeline">
                    {experience.map((job, i) => (
                        <FadeIn key={i} delay={0.1 * i}>
                            <div className="timeline-item">
                                <div className={`timeline-dot ${job.current ? "active" : ""}`} />

                                <div className="glass-card timeline-content">
                                    <div className="timeline-header">
                                        <div>
                                            <div className="timeline-role">{job.role}</div>
                                            <div className="timeline-company">{job.company}</div>
                                        </div>
                                        <span className="timeline-period">{job.period}</span>
                                    </div>

                                    {job.current && (
                                        <span className="timeline-current">● Currently here</span>
                                    )}

                                    <p className="timeline-description">{job.description}</p>

                                    {/* Key achievements */}
                                    <ul
                                        style={{
                                            listStyle: "none",
                                            marginBottom: 20,
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: 10,
                                        }}
                                    >
                                        {job.highlights.map((h, hi) => (
                                            <li
                                                key={hi}
                                                style={{
                                                    display: "flex",
                                                    gap: 10,
                                                    alignItems: "flex-start",
                                                    fontSize: 14,
                                                    color: "var(--text-secondary)",
                                                }}
                                            >
                                                <CheckCircle2
                                                    size={15}
                                                    style={{
                                                        color: "var(--accent-green)",
                                                        flexShrink: 0,
                                                        marginTop: 2,
                                                    }}
                                                />
                                                {h}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="timeline-tags">
                                        {job.tech.map((t) => (
                                            <span key={t} className="timeline-tag">
                                                {t}
                                            </span>
                                        ))}
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
