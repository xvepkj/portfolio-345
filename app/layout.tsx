'use client';

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { Roboto_Mono } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";

// Fonts
const robotoMono = Roboto_Mono({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
});
const funkyFont = Pixelify_Sans({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isFunky, setIsFunky] = useState(false);

  return (
    <html lang="en" className={`${isFunky ? "funky-bg" : "bg-white"}`} style={{ colorScheme: "light" }}>
      <body
        className={`${isFunky 
          ? `${funkyFont.className} funky-mode` 
          : robotoMono.className
        } text-black flex flex-col min-h-screen`}
      >
        <Navbar isFunky={isFunky} toggleFunky={() => setIsFunky(prev => !prev)} />

        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
