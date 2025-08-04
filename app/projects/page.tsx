'use client';

import { useContext, useEffect } from "react";
import { FunkyContext } from "../layout";

export default function ProjectsPage() {
  const { isFunky } = useContext(FunkyContext);

  // Apply funky background to body
  useEffect(() => {
    if (isFunky) {
      document.body.classList.add("projects-funky-bg");
    } else {
      document.body.classList.remove("projects-funky-bg");
    }
    return () => document.body.classList.remove("projects-funky-bg");
  }, [isFunky]);

  // Funky styles for icons and text
  const iconClass = isFunky
    ? "text-5xl drop-shadow-[0_0_3px_white]"
    : "text-3xl";
    
  const textClass = isFunky
    ? "text-white font-bold text-lg drop-shadow-[0_0_2px_black]"
    : "text-black text-sm";

  return (
    <main className="flex flex-col items-center gap-12 py-12">
      
      {/* Scheduler */}
      <div className={`relative w-80 aspect-[4/3] border p-4 text-center flex flex-col justify-center items-center
        ${isFunky ? "border-white" : "border-gray-300"}`}>
        <span className={iconClass}>⏰</span>
        <h2 className={`mt-2 ${textClass}`}>Scheduler</h2>
        <p className={`${isFunky ? "text-white text-base" : "text-black text-sm"} mt-1`}>
          An app to manage your daily schedule with help of templates
        </p>
      </div>

      {/* Wolf Warrior */}
      <div className={`relative w-80 aspect-[4/3] border p-4 text-center flex flex-col justify-center items-center
        ${isFunky ? "border-white" : "border-gray-300"}`}>
        <span className={iconClass}>🐺</span>
        <h2 className={`mt-2 ${textClass}`}>Wolf Warrior</h2>
        <p className={`${isFunky ? "text-white text-base" : "text-black text-sm"} mt-1`}>
          A fast‑paced action game with survival and combat mechanics
        </p>
      </div>

      {/* InkSpace */}
      <div className={`relative w-80 aspect-[4/3] border p-4 text-center flex flex-col justify-center items-center
        ${isFunky ? "border-white" : "border-gray-300"}`}>
        <span className={iconClass}>✏️</span>
        <h2 className={`mt-2 ${textClass}`}>InkSpace</h2>
        <p className={`${isFunky ? "text-white text-base" : "text-black text-sm"} mt-1`}>
          A collaborative drawing app where users can sketch together in real‑time
        </p>
      </div>

    </main>
  );
}
