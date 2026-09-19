"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Sobre Nós", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-white/[0.05] bg-[#09090b]/80 backdrop-blur-xl">
      <div className="container mx-auto flex h-[72px] items-center justify-between px-4 md:h-[84px]">
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="CR7 Reviews"
            width={240}
            height={60}
            className="h-12 w-auto object-contain md:h-[60px]"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-wide text-zinc-400 transition-colors hover:text-white"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="p-2 text-zinc-400 transition-colors hover:text-white md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5h16M4 12h16M4 19h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="space-y-4 border-b border-white/[0.05] bg-[#09090b] px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block font-display text-lg font-medium uppercase text-zinc-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
