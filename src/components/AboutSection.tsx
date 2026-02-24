"use client";

import { profile, highlights } from "@/data/portfolio";
import { User, MapPin, Clock, Briefcase } from "lucide-react";
import FadeIn from "./FadeIn";

const INFO_CARDS = [
    {
        icon: <MapPin size={20} />,
        title: "Location",
        body: profile.location,
        color: "rgba(108,99,255,0.15)",
        iconColor: "var(--accent-primary)",
    },
    {
        icon: <Clock size={20} />,
        title: "Experience",
        body: "1.5+ Years of Professional Development",
        color: "rgba(34,211,238,0.15)",
        iconColor: "var(--accent-cyan)",
    },
    {
        icon: <Briefcase size={20} />,
        title: "Status",
        body: profile.availability,
        color: "rgba(74,222,128,0.15)",
        iconColor: "var(--accent-green)",
    },
];

export default function AboutSection() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="about-grid">
                    {/* Left: Text */}
                    <div>
                        <FadeIn>
                            <span className="section-label">About me</span>
                            <h2 className="section-title">
                                Turning ideas into{" "}
                                <span className="gradient-text">real-world products</span>
                            </h2>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            {profile.bio.map((para, i) => (
                                <p
                                    key={i}
                                    className="about-text p"
                                    style={{
                                        color: "var(--text-secondary)",
                                        fontSize: "1.05rem",
                                        lineHeight: 1.8,
                                        marginBottom: 20,
                                    }}
                                >
                                    {para}
                                </p>
                            ))}
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="about-highlights">
                                {highlights.map((h) => (
                                    <div key={h} className="highlight-item">
                                        <span className="highlight-dot" />
                                        {h}
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right: Info Cards */}
                    <div className="about-cards">
                        {INFO_CARDS.map((card, i) => (
                            <FadeIn key={card.title} delay={0.1 * (i + 1)} direction="left">
                                <div className="glass-card info-card">
                                    <div
                                        className="info-card-icon"
                                        style={{
                                            background: card.color,
                                            color: card.iconColor,
                                        }}
                                    >
                                        {card.icon}
                                    </div>
                                    <h3>{card.title}</h3>
                                    <p>{card.body}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
