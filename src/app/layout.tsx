import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import LiquidGlassCursor from "@/components/LiquidGlassCursor";
import { ThemeProvider } from "@/components/ThemeProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://danichese.github.io"),
  title: "Dan | DexRoboKnix ADE",
  description: "Dan is building DexRoboKnix ADE: a supervised desktop workspace for AI agents with human approval, observability, and audit trails.",
  openGraph: {
    title: "Dan | DexRoboKnix ADE",
    description: "Building trustworthy desktops for AI agents, with humans in the loop.",
    url: "https://danichese.github.io",
    siteName: "Dan | DexRoboKnix",
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
    title: "Dan | DexRoboKnix ADE",
    description: "Building trustworthy desktops for AI agents, with humans in the loop.",
    images: ["/assets/profile-pic-new.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-site-theme="light" data-theme-mode="light" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <LiquidGlassCursor />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
