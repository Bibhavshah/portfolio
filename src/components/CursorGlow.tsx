"use client";

import { useEffect, useRef, useState } from "react";

export default function CursorGlow() {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const move = (e: MouseEvent) => {
            if (ref.current) {
                ref.current.style.left = `${e.clientX}px`;
                ref.current.style.top = `${e.clientY}px`;
                if (!visible) setVisible(true);
            }
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, [visible]);

    return (
        <div
            ref={ref}
            className="cursor-glow"
            style={{ opacity: visible ? 1 : 0 }}
        />
    );
}
