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
  title: "Danyal Tariq — Full Stack Engineer",
  description:
    "Software Engineer specializing in Full-Stack Development, System Design, and Real-Time Applications. Building production-grade solutions with modern web technologies.",
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
    title: "Danyal Tariq — Full Stack Engineer",
    description:
      "Software Engineer specializing in Full-Stack Development, System Design, and Real-Time Applications.",
    url: "https://danyaltariqdev.vercel.app",
    siteName: "Danyal Tariq Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Danyal Tariq — Full Stack Engineer",
    description:
      "Software Engineer specializing in Full-Stack Development, System Design, and Real-Time Applications.",
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
