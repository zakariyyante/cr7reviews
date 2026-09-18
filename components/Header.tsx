"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { name: "Início", href: "/" },
  { name: "Marcas", href: "/#brands" },
  { name: "Guia", href: "/#guide" },
  { name: "Sobre Nós", href: "/about" },
  { name: "Contacto", href: "/contact" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-purple-900/50 bg-[#0f051d]/90 backdrop-blur-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-11 w-11 overflow-hidden rounded-lg">
            <Image
              src="/favicon.svg"
              alt="CR7 Reviews"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col leading-none">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-black italic text-accent">CR7</span>
              <span className="text-xl font-black text-purple-300">PT</span>
              <span className="text-xl font-bold text-white">REVIEWS</span>
            </div>
            <span className="mt-1 text-[10px] font-bold uppercase tracking-[0.28em] text-slate-400">
              cr7reviews.com
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-bold uppercase tracking-wider text-slate-300 transition-colors hover:text-accent"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        <button
          className="p-2 text-white md:hidden"
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {isMenuOpen && (
        <div className="space-y-4 border-b border-purple-900/50 bg-[#1a0b2e] px-4 py-4 md:hidden">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block text-lg font-bold uppercase text-slate-300 hover:text-accent"
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
