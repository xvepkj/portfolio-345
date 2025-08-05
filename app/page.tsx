'use client';

import Image from "next/image";
import { useContext } from "react";
import { FunkyContext } from "./FunkyContext";

export default function HomePage() {
  const { isFunky } = useContext(FunkyContext);

  const iconPath = (name: string) =>
    isFunky ? `/icons/${name}-funky.png` : `/icons/${name}.png`;

  const cardStyle = isFunky
    ? "bg-transparent border-none shadow-none"
    : "border shadow-md bg-white";

  const sizeMultiplier = isFunky ? 1.4 : 1; // 40% bigger in funky mode

  // Outline for funky mode
  const iconClass = isFunky
    ? "bg-transparent drop-shadow-[0_0_2px_white] drop-shadow-[0_0_4px_white]"
    : "bg-transparent";

  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center px-6 sm:px-8 md:px-12 py-6">
      
      {/* Mobile Developer */}
      <div className={`px-6 sm:px-8 py-10 sm:py-12 w-72 text-center flex flex-col items-center justify-center ${cardStyle}`}>
        <Image
          src={iconPath("mobile")}
          alt="Mobile Developer"
          width={100 * sizeMultiplier}
          height={100 * sizeMultiplier}
          className={iconClass}
        />
        <p className="text-2xl font-medium">Mobile developer</p>
      </div>

      {/* Competitive Programmer */}
      <div className={`px-6 sm:px-8 py-10 sm:py-12 w-65 text-center flex flex-col items-center justify-center ${cardStyle}`}>
        <Image
          src={iconPath("pc")}
          alt="Competitive Programmer"
          width={80 * sizeMultiplier}
          height={80 * sizeMultiplier}
          className={iconClass}
        />
        <p className="text-2xl font-medium">Competitive programmer</p>
      </div>

      {/* Game Developer */}
      <div className={`px-5 sm:px-6 py-8 sm:py-10 w-55 text-center flex flex-col items-center justify-center ${cardStyle}`}>
        <Image
          src={iconPath("game")}
          alt="Game Developer"
          width={55 * sizeMultiplier}
          height={55 * sizeMultiplier}
          className={iconClass}
        />
        <p className="text-xl font-medium">Game developer</p>
      </div>
    </div>
  );
}
