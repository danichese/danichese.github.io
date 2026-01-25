import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
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
  title: "Dan Cheeseman | AI-Assisted Full Stack Developer",
  description: "Portfolio of Dan Cheeseman, an AI-Assisted Full Stack Developer specializing in modern web solutions built with Gemini CLI and Conductor.",
  openGraph: {
    title: "Dan Cheeseman | AI-Assisted Full Stack Developer",
    description: "8+ years of App Support & ITIL Management transitioned into high-velocity AI-driven product development.",
    url: "https://danichese.github.io",
    siteName: "Dan Cheeseman Portfolio",
    images: [
      {
        url: "/assets/profile-pic-new.jpg",
        width: 800,
        height: 800,
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Dan Cheeseman | AI-Assisted Full Stack Developer",
    description: "High-velocity product development using Gemini CLI and Conductor methodology.",
    images: ["/assets/profile-pic-new.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
