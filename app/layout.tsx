'use client';

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { useState } from "react";
import { FunkyContext } from "./FunkyContext"; // ✅ Import from separate file
import { Roboto_Mono } from "next/font/google";
import { Pixelify_Sans } from "next/font/google";

// Fonts
const robotoMono = Roboto_Mono({ weight: ["100","300","400","500","700"], subsets: ["latin"] });
const funkyFont = Pixelify_Sans({ weight: ["400","700"], subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isFunky, setIsFunky] = useState(false);

  return (
    <html lang="en" style={{ colorScheme: "light" }}>
      <body
        className={`${isFunky ? `funky-bg ${funkyFont.className}` : robotoMono.className} text-black flex flex-col min-h-screen`}
      >
        <FunkyContext.Provider value={{ isFunky, toggleFunky: () => setIsFunky(p => !p) }}>
          <Navbar />
          <main className={`flex-grow flex items-center justify-center ${isFunky ? 'bg-transparent' : 'bg-white'}`}>
            {children}
          </main>
          <Footer />
        </FunkyContext.Provider>
      </body>
    </html>
  );
}
