import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import { MenuModalProvider } from "@/context/MenuModalContext";
import MenuModal from "@/components/MenuModal";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Little Coast — Mediterranean Kitchen",
  description: "A relaxed Mediterranean restaurant serving grilled meats, seafood, fresh salads, and classic Greek dishes near the harbor.",
  icons: {
    icon: "/assets/logos/logo-light.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-sans bg-brand-aegean text-brand-ivory min-h-screen selection:bg-brand-terracotta selection:text-brand-cream">
        <MenuModalProvider>
          {children}
          <MenuModal />
        </MenuModalProvider>
      </body>
    </html>
  );
}
