"use client";

import { useContext } from "react";
import { FunkyContext } from "../layout";

export default function Footer() {
  const { isFunky } = useContext(FunkyContext);

  return (
    <footer
      className={`text-center text-sm border-t py-4 mt-10 flex flex-col gap-2 
        md:flex-row md:justify-between md:items-center px-4 
        ${isFunky ? "text-white border-white/50" : "text-gray-700 border-gray-300"}`}
    >
      <span className="text-base">Pratham</span>
      <a
        href="tel:+919654963228"
        className={`hover:${isFunky ? "text-yellow-300" : "text-blue-500"}`}
      >
        +91 9654963228
      </a>
      <a
        href="mailto:pkjrockzz@gmail.com"
        className={`hover:${isFunky ? "text-yellow-300" : "text-blue-500"}`}
      >
        pkjrockzz@gmail.com
      </a>
    </footer>
  );
}
