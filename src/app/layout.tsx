import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Navbar from "@/components/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Danyal Tariq — Software Engineer",
  description:
    "Full-stack software engineer with 5+ years of experience in React/Next.js, Node.js, cloud-native architecture, and high-performance C# systems.",
  keywords: [
    "Danyal Tariq",
    "Full Stack Engineer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "System Design",
  ],
  authors: [{ name: "Danyal Tariq" }],
  openGraph: {
    title: "Danyal Tariq — Software Engineer",
    description:
      "Full-stack software engineer with 5+ years of experience in React/Next.js, Node.js, and cloud-native architecture.",
    url: "https://danyaltariqdev.vercel.app",
    siteName: "Danyal Tariq Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danyal Tariq — Software Engineer",
    description:
      "Full-stack software engineer with 5+ years of experience in React/Next.js, Node.js, and cloud-native architecture.",
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        <ThemeProvider>
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
