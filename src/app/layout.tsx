import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import { site } from "@/data/site";
import ChatWidget from "@/components/ChatWidget";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display", display: "swap" });
const jetbrains = JetBrains_Mono({ subsets: ["latin"], variable: "--font-jetbrains", display: "swap" });

const description =
  "Portfolio of Omar Ahmed Gharib, a Media Engineering Technology graduate and software developer building full-stack, AI, mobile, and interactive 3D applications.";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Software Developer`, template: `%s | ${site.name}` },
  description,
  keywords: ["Omar Ahmed Gharib", "software developer", "Flutter", "Next.js", "Java", "Unity", "AI", "Cairo", "GUC"],
  authors: [{ name: site.name }],
  openGraph: {
    title: `${site.name} | Software Developer`,
    description,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image", title: site.name, description },
};

export const viewport: Viewport = { themeColor: "#08080d", colorScheme: "dark" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${jetbrains.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-accent focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        {children}
        <ChatWidget />
      </body>
    </html>
  );
}