export default function ProjectsPage() {
  return (
    <main className="flex flex-col items-center gap-12 py-12">
      
      {/* Scheduler */}
      <div
        className="relative w-80 aspect-[4/3] flex flex-col justify-center items-center text-center text-black pl-8 pr-10"
        style={{
          backgroundImage: "url('/box-shape.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        ⏰
        <h2 className="text-blue-500 mt-2">Scheduler</h2>
        <p className="text-sm mt-1">
          An app to manage your daily schedule with help of templates
        </p>
      </div>

      {/* Wolf Warrior */}
      <div
        className="relative w-80 aspect-[4/3] flex flex-col justify-center items-center text-center text-black pl-8 pr-10"
        style={{
          backgroundImage: "url('/box-shape.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        🐺
        <h2 className="text-blue-500 mt-2">Wolf Warrior</h2>
        <p className="text-sm mt-1">
          A fast‑paced action game with survival and combat mechanics
        </p>
      </div>

      {/* InkSpace */}
      <div
        className="relative w-80 aspect-[4/3] flex flex-col justify-center items-center text-center text-black pl-8 pr-10"
        style={{
          backgroundImage: "url('/box-shape.png')",
          backgroundSize: "contain",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center"
        }}
      >
        ✏️
        <h2 className="text-blue-500 mt-2">InkSpace</h2>
        <p className="text-sm mt-1">
          A collaborative drawing app where users can sketch together in real‑time
        </p>
      </div>

    </main>
  );
}
