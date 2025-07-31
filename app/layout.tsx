import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Roboto_Mono } from "next/font/google"; // ⬅️ Roboto Mono

const robotoMono = Roboto_Mono({
  weight: ["100", "300", "400", "500", "700"], // Choose weights you want
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} flex flex-col min-h-screen`}>
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
