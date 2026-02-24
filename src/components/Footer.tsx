"use client";

import { profile, socials } from "@/data/portfolio";
import { Github, Linkedin, Twitter, Heart, ArrowUp } from "lucide-react";

const ICON_MAP: Record<string, JSX.Element> = {
    github: <Github size={16} />,
    linkedin: <Linkedin size={16} />,
    twitter: <Twitter size={16} />,
};

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer style={{ borderTop: "1px solid var(--border)", background: "var(--bg-secondary)", paddingTop: 60 }}>
            {/* Top row */}
            <div
                className="container"
                style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr 1fr",
                    gap: 40,
                    paddingBottom: 48,
                    borderBottom: "1px solid var(--border)",
                }}
            >
                {/* Brand */}
                <div>
                    <div
                        style={{
                            fontFamily: "var(--font-display)",
                            fontSize: 24,
                            fontWeight: 700,
                            background: "linear-gradient(135deg, var(--accent-primary), var(--accent-cyan))",
                            WebkitBackgroundClip: "text",
                            WebkitTextFillColor: "transparent",
                            backgroundClip: "text",
                            marginBottom: 12,
                        }}
                    >
                        {profile.initials}
                    </div>
                    <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, maxWidth: 260 }}>
                        {profile.tagline}
                    </p>
                </div>

                {/* Navigation */}
                <div>
                    <p
                        style={{
                            fontSize: 13,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "var(--text-muted)",
                            marginBottom: 20,
                        }}
                    >
                        Navigation
                    </p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    style={{
                                        fontSize: 14,
                                        color: "var(--text-secondary)",
                                        transition: "color 0.2s",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.color = "var(--text-primary)")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.color = "var(--text-secondary)")
                                    }
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <p
                        style={{
                            fontSize: 13,
                            fontWeight: 600,
                            textTransform: "uppercase",
                            letterSpacing: "0.08em",
                            color: "var(--text-muted)",
                            marginBottom: 20,
                        }}
                    >
                        Get in Touch
                    </p>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 8 }}>
                        {profile.email}
                    </p>
                    <p style={{ fontSize: 14, color: "var(--text-secondary)", marginBottom: 20 }}>
                        {profile.location}
                    </p>
                    <div style={{ display: "flex", gap: 10 }}>
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
                    </div>
                </div>
            </div>

            {/* Bottom row */}
            <div className="container footer" style={{ paddingTop: 28, paddingBottom: 28 }}>
                <p className="footer-copy">
                    © {year} {profile.name}. Crafted with{" "}
                    <Heart
                        size={12}
                        style={{ display: "inline", color: "var(--accent-pink)", verticalAlign: "middle" }}
                        fill="var(--accent-pink)"
                    />{" "}
                    using Next.js
                </p>

                {/* Back-to-top */}
                <button
                    id="back-to-top"
                    onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                    style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 8,
                        background: "rgba(108,99,255,0.1)",
                        border: "1px solid var(--border-accent)",
                        borderRadius: 8,
                        color: "var(--accent-primary)",
                        padding: "8px 16px",
                        fontSize: 13,
                        fontWeight: 500,
                        cursor: "pointer",
                        transition: "all 0.2s ease",
                        fontFamily: "var(--font-sans)",
                    }}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(108,99,255,0.2)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.background = "rgba(108,99,255,0.1)";
                        e.currentTarget.style.transform = "translateY(0)";
                    }}
                >
                    <ArrowUp size={14} />
                    Back to Top
                </button>
            </div>
        </footer>
    );
}
