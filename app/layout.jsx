import { Bricolage_Grotesque, Protest_Riot, Quicksand } from "next/font/google";
import "./globals.css";
import "./sections.css";

const body = Bricolage_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

const heading = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-heading",
  display: "swap",
});

const accent = Protest_Riot({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-accent",
  display: "swap",
});

export const metadata = {
  title: "Sky — Premium Fashion Home",
  description:
    "Home page inspired by the Sky Shopify theme: immersive fashion shopping experience with smooth animations, hover effects and modern UI.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable} ${accent.variable}`}>
      <body>{children}</body>
    </html>
  );
}
