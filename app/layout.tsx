import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./theme.css";

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
    "Stephen Pinacate's software development portfolio featuring full-stack, mobile, and AI-powered projects.",
  openGraph: {
    title: "Stephen Pinacate — Full-Stack Developer",
    description:
      "Full-stack developer building practical web, mobile, and AI-assisted software systems.",
    type: "website",
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
