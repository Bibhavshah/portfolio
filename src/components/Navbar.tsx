"use client";

import { useEffect, useState } from "react";
import { profile, socials } from "@/data/portfolio";
import {
    Github,
    Linkedin,
    Twitter,
    Menu,
    X,
    Download,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
];

const ICON_MAP: Record<string, React.ReactNode> = {
    github: <Github size={16} />,
    linkedin: <Linkedin size={16} />,
    twitter: <Twitter size={16} />,
};

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [active, setActive] = useState("");
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // Highlight active section
    useEffect(() => {
        const ids = NAV_LINKS.map((l) => l.href.slice(1));
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) setActive(entry.target.id);
                });
            },
            { rootMargin: "-40% 0px -55% 0px" }
        );
        ids.forEach((id) => {
            const el = document.getElementById(id);
            if (el) observer.observe(el);
        });
        return () => observer.disconnect();
    }, []);

    return (
        <>
            <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
                <div className="container navbar-inner">
                    {/* Logo */}
                    <a href="#" className="nav-logo">
                        {profile.initials}
                    </a>

                    {/* Desktop links */}
                    <ul className="nav-links">
                        {NAV_LINKS.map((link) => (
                            <li key={link.href}>
                                <a
                                    href={link.href}
                                    className={active === link.href.slice(1) ? "active" : ""}
                                >
                                    {link.label}
                                </a>
                            </li>
                        ))}
                    </ul>

                    {/* Social icons + CTA */}
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
                        <a href={profile.resume} className="nav-cta nav-links a" style={{ marginLeft: 8 }}>
                            <Download size={14} style={{ display: "inline", marginRight: 6 }} />
                            Resume
                        </a>

                        {/* Hamburger */}
                        <button
                            className="hamburger"
                            onClick={() => setOpen(!open)}
                            aria-label="Toggle menu"
                        >
                            {open ? (
                                <X size={22} color="var(--text-primary)" />
                            ) : (
                                <>
                                    <span /><span /><span />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu */}
            <AnimatePresence>
                {open && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25 }}
                    >
                        {NAV_LINKS.map((link, i) => (
                            <motion.a
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.07 }}
                            >
                                {link.label}
                            </motion.a>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
