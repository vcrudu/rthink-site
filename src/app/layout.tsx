import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Chat from "./components/Chat";
import { cn } from "@/lib/utils";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "R-Think Software",
  description:
    "Welcome to R-Think Software, the leading edge in IT outsourcing.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Script src="https://www.googletagmanager.com/gtag/js?id=G-6Q0QT90ETF" />
      <Script id="google-analytics">
        {`
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
         
           gtag('config', 'G-6Q0QT90ETF');
        `}
      </Script>
      <body
        style={{ scrollBehavior: "smooth" }}
        className={cn("bg-blue-50 inset-0", inter.className)}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
