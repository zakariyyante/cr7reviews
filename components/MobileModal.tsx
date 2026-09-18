"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Image from "next/image";
import type { Brand } from "@/app/data/brands";
import BrandCard from "./BrandCard";
import Footer from "./Footer";

interface MobileModalProps {
  brands: Brand[];
}

export default function MobileModal({ brands }: MobileModalProps) {
  const searchParams = useSearchParams();
  const [dismissed, setDismissed] = useState(false);
  const gclid = searchParams.get("gclid") ?? undefined;
  const mobileBrands = brands.filter((brand) => brand.isMobile);
  const isOpen = Boolean(gclid && mobileBrands.length > 0 && !dismissed);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#0f051d]">
      <div className="sticky top-0 z-[110] flex items-center justify-between border-b border-purple-900/50 bg-[#0f051d]/95 px-4 py-4 backdrop-blur-md">
        <div className="relative h-10 w-40">
          <Image src="/logo.svg" alt="CR7 Reviews" fill className="object-contain" />
        </div>
        <button
          onClick={() => setDismissed(true)}
          className="rounded-full bg-white/5 p-2 text-white/70 hover:text-white"
          aria-label="Fechar"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 px-4 py-10">
        <div className="mb-10 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/15 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-accent">
            Ofertas exclusivas móveis
          </div>
          <h2 className="mb-3 text-4xl font-black uppercase leading-tight">
            Melhores Sites de <span className="gold-text">Jogos</span> no Telemóvel
          </h2>
          <p className="mx-auto max-w-sm text-sm font-medium text-slate-400">
            Avaliações de especialistas, bónus exclusivos e pagamentos rápidos no seu telemóvel.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6">
          {mobileBrands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} gclidValue={gclid} />
          ))}
        </div>

        <div className="mb-8 rounded-2xl border border-white/10 bg-white/5 p-6 text-center">
          <div className="mb-3 flex items-center justify-center gap-2 text-accent">
            <span className="font-black">18+</span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400">
              Apenas para adultos 18+.
            </span>
          </div>
          <p className="text-[11px] font-bold uppercase leading-relaxed tracking-wider text-slate-500">
            O jogo pode criar dependência. Jogue com responsabilidade. Regulador: SRIJ. Helpline: 1414.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
