'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) =>
    pathname === path ? 'text-blue-500' : 'hover:text-blue-500';

  return (
    <nav className="flex gap-6 p-6 justify-center border-b">
      <Link href="/" className={linkStyle('/')}>Home</Link>
      <Link href="/projects" className={linkStyle('/projects')}>Projects</Link>
      <Link href="/work" className={linkStyle('/work')}>Work</Link>
    </nav>
  );
}
