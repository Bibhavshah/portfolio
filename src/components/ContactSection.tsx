"use client";

import { JSX, useState } from "react";
import { profile, socials, type SocialIcon } from "@/data/portfolio";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle2 } from "lucide-react";
import FadeIn from "./FadeIn";


const ICON_MAP: Record<SocialIcon, React.ReactNode> = {
    github: <Github size={18} />,
    linkedin: <Linkedin size={18} />,
    twitter: <Twitter size={18} />,
};

const CHANNELS = [
    {
        icon: <Mail size={20} />,
        label: "Email",
        value: profile.email,
        href: `mailto:${profile.email}`,
        bg: "rgba(108,99,255,0.15)",
        color: "var(--accent-primary)",
    },
    {
        icon: <Phone size={20} />,
        label: "Phone",
        value: profile.phone,
        href: `tel:${profile.phone}`,
        bg: "rgba(34,211,238,0.15)",
        color: "var(--accent-cyan)",
    },
    {
        icon: <MapPin size={20} />,
        label: "Location",
        value: profile.location,
        href: "#",
        bg: "rgba(167,139,250,0.15)",
        color: "var(--accent-secondary)",
    },
];

export default function ContactSection() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        // Simulate async send
        setTimeout(() => {
            setLoading(false);
            setSent(true);
        }, 1500);
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <FadeIn>
                    <span className="section-label">Contact</span>
                    <h2 className="section-title">
                        Let&apos;s Work{" "}
                        <span className="gradient-text">Together</span>
                    </h2>
                    <p className="section-subtitle">
                        Have an idea, a project, or just want to say hello? My inbox is
                        always open — I&apos;ll get back to you within 24 hours.
                    </p>
                </FadeIn>

                <div className="contact-wrapper">
                    {/* ── Left: Info ── */}
                    <FadeIn delay={0.1}>
                        <div className="contact-info">
                            <h3>Get in Touch</h3>
                            <p>
                                Whether you&apos;re looking for a developer to join your team,
                                need help bringing a product idea to life, or just want to
                                connect — I&apos;d love to hear from you.
                            </p>

                            <div className="contact-channels">
                                {CHANNELS.map((ch) => (
                                    <a key={ch.label} href={ch.href} className="contact-channel">
                                        <div
                                            className="channel-icon"
                                            style={{ background: ch.bg, color: ch.color }}
                                        >
                                            {ch.icon}
                                        </div>
                                        <div className="channel-text">
                                            <div className="channel-label">{ch.label}</div>
                                            <div className="channel-value">{ch.value}</div>
                                        </div>
                                    </a>
                                ))}
                            </div>

                            {/* Social links */}
                            <div style={{ marginTop: 32 }}>
                                <p style={{ fontSize: 13, color: "var(--text-muted)", marginBottom: 16 }}>
                                    Find me on social media
                                </p>
                                <div style={{ display: "flex", gap: 12 }}>
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
                    </FadeIn>

                    {/* ── Right: Form ── */}
                    <FadeIn delay={0.2} direction="left">
                        <div className="glass-card contact-form">
                            {sent ? (
                                <div
                                    style={{
                                        display: "flex",
                                        flexDirection: "column",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: 16,
                                        minHeight: 300,
                                        textAlign: "center",
                                    }}
                                >
                                    <CheckCircle2 size={56} color="var(--accent-green)" />
                                    <h3 style={{ fontSize: "1.4rem" }}>Message Sent!</h3>
                                    <p style={{ color: "var(--text-secondary)" }}>
                                        Thanks for reaching out. I&apos;ll get back to you shortly.
                                    </p>
                                    <button
                                        className="btn-outline"
                                        onClick={() => setSent(false)}
                                        style={{ marginTop: 8 }}
                                    >
                                        Send Another
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit}>
                                    <div className="form-row">
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="contact-name">
                                                Your Name
                                            </label>
                                            <input
                                                id="contact-name"
                                                type="text"
                                                className="form-input"
                                                placeholder="John Doe"
                                                required
                                            />
                                        </div>
                                        <div className="form-group">
                                            <label className="form-label" htmlFor="contact-email">
                                                Email Address
                                            </label>
                                            <input
                                                id="contact-email"
                                                type="email"
                                                className="form-input"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-subject">
                                            Subject
                                        </label>
                                        <input
                                            id="contact-subject"
                                            type="text"
                                            className="form-input"
                                            placeholder="Project Inquiry / Collaboration / Hello"
                                            required
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label className="form-label" htmlFor="contact-message">
                                            Message
                                        </label>
                                        <textarea
                                            id="contact-message"
                                            className="form-textarea"
                                            placeholder="Hi Alex, I'd love to discuss..."
                                            required
                                        />
                                    </div>

                                    <button
                                        id="contact-submit"
                                        type="submit"
                                        className="btn-primary"
                                        disabled={loading}
                                        style={{ width: "100%", justifyContent: "center" }}
                                    >
                                        {loading ? (
                                            <>
                                                <span
                                                    style={{
                                                        width: 16,
                                                        height: 16,
                                                        border: "2px solid rgba(255,255,255,0.3)",
                                                        borderTopColor: "white",
                                                        borderRadius: "50%",
                                                        animation: "spin 0.7s linear infinite",
                                                        display: "inline-block",
                                                    }}
                                                />
                                                <span>Sending…</span>
                                            </>
                                        ) : (
                                            <>
                                                <Send size={16} />
                                                <span>Send Message</span>
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}
