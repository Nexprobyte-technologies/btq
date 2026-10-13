import { Bricolage_Grotesque, Protest_Riot, Quicksand } from "next/font/google";
import { StoreProvider } from "@/context/StoreContext";
import CartDrawer from "@/components/CartDrawer";
import QuickViewModal from "@/components/QuickViewModal";
import SearchModal from "@/components/SearchModal";
import EnquiryModal from "@/components/EnquiryModal";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import ToastNotification from "@/components/ToastNotification";
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
  title: "Charmique — Luxury Women's Boutique & Handcrafted Couture",
  description:
    "Explore Charmique's exclusive collection of pure silk Kanjivaram sarees, regal bridal lehengas, bespoke designer anarkalis, and handcrafted festive couture. Direct WhatsApp enquiries & custom tailoring.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${body.variable} ${heading.variable} ${accent.variable}`}>
      <body>
        <StoreProvider>
          {children}
          <CartDrawer />
          <QuickViewModal />
          <SearchModal />
          <EnquiryModal />
          <FloatingWhatsApp />
          <ToastNotification />
        </StoreProvider>
      </body>
    </html>
  );
}
