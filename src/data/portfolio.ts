// ─────────────────────────────────────────────────────────────────────────────
// Portfolio Data  ·  Bibhav Shah
// ─────────────────────────────────────────────────────────────────────────────

export type SocialIcon = "github" | "linkedin" | "twitter";

type Social = {
    label: string;
    href: string;
    icon: SocialIcon;
};

export const profile = {
    name: "Bibhav Shah",
    initials: "BS",
    role: "Full-Stack Software Developer",
    tagline: "Building digital products that are fast, reliable, and delight users — one commit at a time.",
    bio: [
        "I'm Bibhav Shah, a passionate Full-Stack Developer currently pursuing my undergraduate degree at the Indian Institute of Information Technology Vadodara (IIITV). Originally from Nepal, I love crafting end-to-end web applications that are both performant and aesthetically pleasing.",
        "With 32+ public repositories on GitHub and hands-on experience across the modern web stack, I thrive at the intersection of back-end robustness and front-end elegance. I'm always eager to learn new technologies and tackle challenging real-world problems.",
    ],
    location: "Vadodara, India (originally from Nepal 🇳🇵)",
    email: "bibhavshah@example.com", // ← replace with your real email
    phone: "", // ← add if you want it shown
    availability: "Open to internships & full-time opportunities",
    resume: "https://drive.google.com/file/d/1Vwex7Xow_QfDCpGhn_4aHCvqYs_XEDF5/view",
};

export const socials: Social[] = [
    { label: "GitHub", href: "https://github.com/Bibhavshah", icon: "github" },
    { label: "LinkedIn", href: "https://linkedin.com/in/bibhav-shah", icon: "linkedin" },
    { label: "Twitter", href: "https://twitter.com/bibhavsah", icon: "twitter" },
];

export const stats = [
    { number: "1.5+", label: "Years Experience" },
    { number: "32+", label: "GitHub Repositories" },
    { number: "26+", label: "GitHub Followers" },
];

export const skills = [
    {
        category: "Frontend",
        icon: "🎨",
        color: "#6c63ff",
        items: ["React.js", "Next.js", "TypeScript", "JavaScript", "HTML5", "CSS3"],
    },
    {
        category: "Backend",
        icon: "⚙️",
        color: "#22d3ee",
        items: ["Node.js", "Express.js", "REST APIs", "Socket.io", "Python", "FastAPI"],
    },
    {
        category: "Database & Cloud",
        icon: "🗄️",
        color: "#a78bfa",
        items: ["MongoDB", "PostgreSQL", "Firebase", "Prisma ORM", "Render", "Vercel"],
    },
    {
        category: "Tools & Ecosystem",
        icon: "🚀",
        color: "#4ade80",
        items: ["Git", "GitHub", "Docker", "Expo / React Native", "LangChain", "RAG / AI"],
    },
];

export const experience = [
    {
        role: "Full-Stack Developer (Freelance / Projects)",
        company: "Self-Employed & IIIT Vadodara",
        period: "2024 – Present",
        current: true,
        description:
            "Building production-quality web applications independently and as part of academic projects. Delivering end-to-end solutions from database design to deployed frontends, with a focus on TypeScript, React, and Node.js.",
        highlights: [
            "Built a Job Board backend API in TypeScript deployed on Render with a live production URL.",
            "Implemented a real-time collaboration tutorial using PartyKit and deployed on Vercel, demonstrating WebSocket-based multiplayer UX.",
            "Explored AI/ML integrations by building a Retrieval-Augmented Generation (RAG) system using LangChain and JavaScript.",
        ],
        tech: ["Next.js", "TypeScript", "Node.js", "MongoDB", "Socket.io", "Render"],
    },
    {
        role: "Software Developer (Learning & Building)",
        company: "Open Source & Personal Projects",
        period: "2021 – 2024",
        current: false,
        description:
            "Started coding journey in early 2021, rapidly progressing through JavaScript, React, and the full web stack. Shipped 20+ projects spanning clones, SaaS products, and API integrations.",
        highlights: [
            "Built a full-featured Twitch Clone in Next.js + TypeScript with live preview on Vercel.",
            "Created a DALL·E AI image-generation web app integrating the OpenAI API.",
            "Published CodeBlogs — a Next.js + MDX technical blog platform with 1 GitHub star and a live Vercel deploy.",
            "Developed a Role-Based Auth system with a live demo deployed on Render.",
        ],
        tech: ["React.js", "Next.js", "TypeScript", "Firebase", "OpenAI API", "MDX"],
    },
];

export const projects = [
    {
        name: "Job Board API",
        type: "Backend / REST API",
        emoji: "💼",
        description:
            "A production-ready job board REST API built with TypeScript and Node.js, deployed on Render. Features job posting CRUD, authentication, and a clean API layer ready for any frontend client.",
        tech: ["TypeScript", "Node.js", "Express.js", "Render"],
        github: "https://github.com/Bibhavshah/job-board-backend",
        live: "https://job-board-backend-wwcs.onrender.com",
        gradient: "linear-gradient(135deg, #6c63ff22, #22d3ee22)",
    },
    {
        name: "PartyKit Real-Time App",
        type: "Real-Time / WebSocket",
        emoji: "🎉",
        description:
            "An interactive real-time collaboration demo powered by PartyKit and TypeScript. Showcases WebSocket-based multiplayer state synchronisation deployed live on Vercel.",
        tech: ["TypeScript", "PartyKit", "React", "Vercel"],
        github: "https://github.com/Bibhavshah/partykit-tut",
        live: "https://partykit-tut.vercel.app",
        gradient: "linear-gradient(135deg, #a78bfa22, #ec489922)",
    },
    {
        name: "CodeBlogs",
        type: "Content Platform",
        emoji: "✍️",
        description:
            "A technical blog platform built with Next.js App Router and MDX. Features syntax-highlighted code blocks, a clean reading experience, and a fully SEO-optimised static generation pipeline.",
        tech: ["Next.js", "MDX", "React", "Vercel"],
        github: "https://github.com/Bibhavshah/CodeBlogs",
        live: "https://code-blogs-sage.vercel.app",
        gradient: "linear-gradient(135deg, #f59e0b22, #4ade8022)",
    },
    {
        name: "Twitch Clone",
        type: "Full-Stack App",
        emoji: "📺",
        description:
            "A full-stack Twitch-inspired streaming platform built with Next.js and TypeScript. Includes user authentication, channel pages, and a responsive video layout deployed on Vercel.",
        tech: ["Next.js", "TypeScript", "React", "Vercel"],
        github: "https://github.com/Bibhavshah/twitch-clone",
        live: "https://twitch-clone-nu-sandy.vercel.app",
        gradient: "linear-gradient(135deg, #22d3ee22, #6c63ff22)",
    },
    {
        name: "DALL·E AI Image Generator",
        type: "AI / API Integration",
        emoji: "🖼️",
        description:
            "A web app that integrates the OpenAI DALL·E API to generate images from natural-language text prompts, with a gallery-style layout and shareable image links.",
        tech: ["React.js", "Node.js", "OpenAI API", "Vercel"],
        github: "https://github.com/Bibhavshah/Dalle_Ai",
        live: "https://dalle-ai-xi.vercel.app",
        gradient: "linear-gradient(135deg, #ec489922, #f59e0b22)",
    },
    {
        name: "Basic RAG System",
        type: "AI / LLM",
        emoji: "🤖",
        description:
            "A Retrieval-Augmented Generation (RAG) pipeline built in JavaScript using LangChain. Demonstrates document ingestion, vector search, and context-aware LLM responses.",
        tech: ["JavaScript", "LangChain", "Node.js", "RAG"],
        github: "https://github.com/Bibhavshah/basic-rag",
        live: "https://github.com/Bibhavshah/basic-rag",
        gradient: "linear-gradient(135deg, #4ade8022, #22d3ee22)",
    },
];

export const highlights = [
    "Problem Solver",
    "Clean Code Advocate",
    "Fast Learner",
    "Team Player",
    "Open Source Contributor",
    "AI / LLM Explorer",
];
