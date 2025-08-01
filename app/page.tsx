import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col md:flex-row gap-6 items-center justify-center px-6 sm:px-8 md:px-12 py-6">
      
      {/* Mobile Developer */}
      <div className="border px-6 sm:px-8 py-10 sm:py-12 w-72 text-center shadow-md flex flex-col items-center justify-center">
        <Image 
          src="/icons/mobile.png" 
          alt="Mobile Developer" 
          width={100} 
          height={100} 
          className="mb-6"
        />
        <p className="text-2xl font-medium">Mobile developer</p>
      </div>

      {/* Competitive Programmer */}
      <div className="border px-6 sm:px-8 py-10 sm:py-12 w-65 text-center shadow-md flex flex-col items-center justify-center">
        <Image 
          src="/icons/pc.png" 
          alt="Competitive Programmer" 
          width={80} 
          height={80} 
          className="mb-6"
        />
        <p className="text-2xl font-medium">Competitive programmer</p>
      </div>

      {/* Game Developer - Smaller */}
      <div className="border px-5 sm:px-6 py-8 sm:py-10 w-55 text-center shadow-md flex flex-col items-center justify-center">
        <Image 
          src="/icons/game.png" 
          alt="Game Developer" 
          width={55} 
          height={55} 
          className="mb-4"
        />
        <p className="text-xl font-medium">Game developer</p>
      </div>

    </div>
  );
}
