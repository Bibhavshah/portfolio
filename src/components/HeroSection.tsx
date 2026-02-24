"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { profile, stats, socials } from "@/data/portfolio";
import {
    Github,
    Linkedin,
    Twitter,
    ArrowRight,
    Download,
    MapPin,
    Code2,
    Cpu,
    Layers,
} from "lucide-react";
import FadeIn from "./FadeIn";

const ICON_MAP: Record<string, React.ReactNode> = {
    github: <Github size={16} />,
    linkedin: <Linkedin size={16} />,
    twitter: <Twitter size={16} />,
};

const FLOATING_CHIPS = [
    {
        cls: "chip-1",
        icon: <Code2 size={14} />,
        iconBg: "rgba(108,99,255,0.2)",
        iconColor: "var(--accent-primary)",
        label: "Clean Code",
    },
    {
        cls: "chip-2",
        icon: <Cpu size={14} />,
        iconBg: "rgba(34,211,238,0.2)",
        iconColor: "var(--accent-cyan)",
        label: "Full-Stack",
    },
    {
        cls: "chip-3",
        icon: <Layers size={14} />,
        iconBg: "rgba(167,139,250,0.2)",
        iconColor: "var(--accent-secondary)",
        label: "Scalable",
    },
];

export default function HeroSection() {
    return (
        <section className="hero bg-grid" id="hero">
            {/* Background glows */}
            <div className="hero-glow hero-glow-1" />
            <div className="hero-glow hero-glow-2" />

            <div className="container">
                <div className="hero-content">
                    {/* ── Left: Text ── */}
                    <div>
                        <FadeIn delay={0.05}>
                            <div className="hero-badge">
                                <span className="hero-badge-dot" />
                                Available for new projects
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.15}>
                            <h1 className="hero-heading">
                                Hi, I&apos;m{" "}
                                <span className="gradient-text">{profile.name}</span>
                            </h1>
                        </FadeIn>

                        <FadeIn delay={0.25}>
                            <p className="hero-role">
                                I&apos;m a{" "}
                                <TypeAnimation
                                    sequence={[
                                        "Full-Stack Developer",
                                        2000,
                                        "React Enthusiast",
                                        2000,
                                        "API Builder",
                                        2000,
                                        "Problem Solver",
                                        2000,
                                    ]}
                                    wrapper="span"
                                    speed={50}
                                    repeat={Infinity}
                                    style={{
                                        background:
                                            "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                                        WebkitBackgroundClip: "text",
                                        WebkitTextFillColor: "transparent",
                                        backgroundClip: "text",
                                        fontWeight: 600,
                                    }}
                                />
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.35}>
                            <p className="hero-description">{profile.tagline}</p>
                        </FadeIn>

                        <FadeIn delay={0.45}>
                            <div className="hero-actions">
                                <a href="#projects" className="btn-primary">
                                    <span>View My Work</span>
                                    <ArrowRight size={16} />
                                </a>
                                <a
                                    href={profile.resume}
                                    className="btn-outline"
                                    download
                                >
                                    <Download size={16} />
                                    Download CV
                                </a>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.55}>
                            <div className="hero-stats">
                                {stats.map((s) => (
                                    <div key={s.label} className="stat-item">
                                        <div className="stat-number">{s.number}</div>
                                        <div className="stat-label">{s.label}</div>
                                    </div>
                                ))}
                            </div>
                        </FadeIn>
                    </div>

                    {/* ── Right: Avatar Visual ── */}
                    <FadeIn delay={0.2} direction="left">
                        <div className="hero-visual">
                            <div className="avatar-wrapper">
                                <div className="avatar-ring" />
                                <div className="avatar-initials">
                                    {profile.initials}
                                </div>

                                {/* Floating info chips */}
                                {FLOATING_CHIPS.map((chip) => (
                                    <div key={chip.cls} className={`floating-chip ${chip.cls}`}>
                                        <div
                                            className="chip-icon"
                                            style={{
                                                background: chip.iconBg,
                                                color: chip.iconColor,
                                            }}
                                        >
                                            {chip.icon}
                                        </div>
                                        <span>{chip.label}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Location badge under avatar */}
                        <motion.div
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                                gap: 8,
                                marginTop: 24,
                                color: "var(--text-muted)",
                                fontSize: 14,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.7 }}
                        >
                            <MapPin size={14} color="var(--accent-primary)" />
                            {profile.location}
                        </motion.div>

                        {/* Social links under avatar */}
                        <motion.div
                            style={{
                                display: "flex",
                                justifyContent: "center",
                                gap: 12,
                                marginTop: 20,
                            }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 }}
                        >
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="social-icon"
                                    aria-label={s.label}
                                >
                                    {ICON_MAP[s.icon]}
                                </a>
                            ))}
                        </motion.div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
