import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./theme.css";
import "./profile.css";
import "./project-previews.css";
import "./mobile.css";
import "./navigation.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Stephen Pinacate — Full-Stack Developer",
  description:
    "Stephen Pinacate's software engineering portfolio featuring full-stack, mobile, desktop, and AI-assisted systems built around real operational problems.",
  keywords: [
    "Stephen Pinacate",
    "Full-Stack Developer",
    "Computer Engineering",
    "ASP.NET Core",
    "C#",
    "React",
    "Kotlin",
    "Software Engineering",
  ],
  openGraph: {
    title: "Stephen Pinacate — Full-Stack Developer",
    description:
      "Full-stack developer building practical software for real operational systems across web, mobile, desktop, and AI-assisted applications.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Stephen Pinacate — Full-Stack Developer",
    description: "Full-stack software portfolio focused on practical systems and real operational workflows.",
  },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: "#fdfcf9",
};

const themeScript = `
(function () {
  document.documentElement.dataset.theme = 'light';
  document.documentElement.classList.remove('dark');
})();`;

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: themeScript }} /></head>
      <body className={`${geist.variable} ${geistMono.variable}`}>{children}</body>
    </html>
  );
}
