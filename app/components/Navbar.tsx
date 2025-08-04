'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useContext } from 'react';
import { FunkyContext } from '../layout'; // import context from RootLayout

export default function Navbar() {
  const pathname = usePathname();
  const { isFunky, toggleFunky } = useContext(FunkyContext);

  const linkStyle = (path: string) =>
    pathname === path ? 'text-blue-500' : 'hover:text-blue-500';

  return (
    <nav className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-6 items-center justify-center border-b">
      <Link href="/" className={linkStyle('/')}>Home</Link>
      <Link href="/projects" className={linkStyle('/projects')}>Projects</Link>
      <Link href="/work" className={linkStyle('/work')}>Work</Link>

      <button 
        onClick={toggleFunky}
        className="px-3 py-1 border rounded hover:bg-gray-200 text-sm"
      >
        {isFunky ? "Professional Mode" : "Fun Mode 🎛"}
      </button>
    </nav>
  );
}
