import type { Metadata } from "next";
import "./globals.css";
import CursorGlow from "@/components/CursorGlow";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Bibhav Shah — Full-Stack Developer",
  description:
    "Portfolio of Bibhav Shah, a passionate Full-Stack Developer from Nepal studying at IIIT Vadodara. Building modern web apps with React, Next.js, Node.js and exploring AI/LLM integrations.",
  openGraph: {
    title: "Bibhav Shah — Full-Stack Developer",
    description:
      "Portfolio of Bibhav Shah — Full-Stack Developer, IIIT Vadodara. React, Next.js, Node.js, TypeScript, AI/RAG.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&family=Fira+Code:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <ScrollProgress />
        <CursorGlow />
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
