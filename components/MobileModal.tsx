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
    <div className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[#09090b]">
      <div className="sticky top-0 z-[110] flex items-center justify-between border-b border-white/[0.05] bg-[#09090b]/95 px-4 py-4 backdrop-blur-xl">
        <Image
          src="/logo.png"
          alt="CR7 Reviews"
          width={200}
          height={50}
          className="h-10 w-auto object-contain"
        />
        <button
          onClick={() => setDismissed(true)}
          className="rounded-full bg-white/5 p-2 text-zinc-400 hover:text-white"
          aria-label="Fechar"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="flex-1 px-4 py-10">
        <div className="mb-10 text-center">
          <div className="badge-gold mb-4 inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-widest">
            Ofertas exclusivas móveis
          </div>
          <h2 className="mb-3 font-display text-3xl font-black leading-tight text-white">
            Melhores Plataformas no Telemóvel
          </h2>
          <p className="mx-auto max-w-sm text-sm text-zinc-400">
            Avaliações de especialistas, bónus exclusivos e pagamentos rápidos no seu telemóvel.
          </p>
        </div>

        <div className="mb-12 flex flex-col gap-4">
          {mobileBrands.map((brand, index) => (
            <BrandCard key={brand.id} brand={brand} index={index} gclidValue={gclid} />
          ))}
        </div>

        <div className="mb-8 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 text-center">
          <p className="text-xs font-medium uppercase tracking-wider text-zinc-500">
            Apenas para adultos 18+. O jogo pode causar dependência. Regulador: SRIJ. Helpline: 1414.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
