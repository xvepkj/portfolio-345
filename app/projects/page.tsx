'use client';

import { useContext, useEffect } from "react";
import { FunkyContext } from "../FunkyContext"; // Adjust the import path as needed

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

  // Icon and text styles
  const iconClass = isFunky
    ? "text-5xl drop-shadow-[0_0_8px_white]"
    : "text-3xl";

  const headingClass = isFunky
    ? "text-white font-bold text-lg drop-shadow-[0_0_6px_white]"
    : "text-black text-sm";

  const paragraphClass = isFunky
    ? "text-white text-base drop-shadow-[0_0_5px_white]"
    : "text-black text-sm";

  return (
    <main className="flex flex-col items-center gap-12 py-12">

      {/* Scheduler */}
      <div className={`relative w-80 aspect-[4/3] border p-4 text-center flex flex-col justify-center items-center
        ${isFunky ? "border-white" : "border-gray-300"}`}>
        <span className={iconClass}>⏰</span>
        <h2 className={`mt-2 ${headingClass}`}>Scheduler</h2>
        <p className={`mt-1 ${paragraphClass}`}>
          An app to manage your daily schedule with help of templates
        </p>
      </div>

      {/* Wolf Warrior */}
      <div className={`relative w-80 aspect-[4/3] border p-4 text-center flex flex-col justify-center items-center
        ${isFunky ? "border-white" : "border-gray-300"}`}>
        <span className={iconClass}>🐺</span>
        <h2 className={`mt-2 ${headingClass}`}>Wolf Warrior</h2>
        <p className={`mt-1 ${paragraphClass}`}>
          A fast‑paced action game with survival and combat mechanics
        </p>
      </div>

      {/* InkSpace */}
      <div className={`relative w-80 aspect-[4/3] border p-4 text-center flex flex-col justify-center items-center
        ${isFunky ? "border-white" : "border-gray-300"}`}>
        <span className={iconClass}>✏️</span>
        <h2 className={`mt-2 ${headingClass}`}>InkSpace</h2>
        <p className={`mt-1 ${paragraphClass}`}>
          A collaborative drawing app where users can sketch together in real‑time
        </p>
      </div>

    </main>
  );
}
