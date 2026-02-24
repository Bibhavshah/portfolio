"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface FadeInProps {
    children: ReactNode;
    delay?: number;
    direction?: "up" | "down" | "left" | "right" | "none";
    className?: string;
}

export default function FadeIn({
    children,
    delay = 0,
    direction = "up",
    className = "",
}: FadeInProps) {
    const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

    const offsets: Record<string, { x?: number; y?: number }> = {
        up: { y: 40 },
        down: { y: -40 },
        left: { x: 40 },
        right: { x: -40 },
        none: {},
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            initial={{ opacity: 0, ...offsets[direction] }}
            animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
            transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
        >
            {children}
        </motion.div>
    );
}
