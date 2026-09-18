"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import type { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclidValue?: string;
}

export default function BrandCard({ brand, index, gclidValue }: BrandCardProps) {
  const buildUrl = (url: string, gclid?: string) => {
    if (!gclid) return url;
    return `${url}${gclid}`;
  };

  const handleCardClick = () => {
    const finalUrl = buildUrl(brand.url, gclidValue);
    track("Brand Click", { brand: brand.name });

    if (typeof window !== "undefined" && window.gtag_report_conversion) {
      window.gtag_report_conversion(finalUrl);
    }

    window.open(finalUrl, "_blank", "noopener,noreferrer");
  };

  const badge =
    index === 0
      ? { label: "Ouro", className: "bg-[#ffd700] text-black" }
      : index === 1
        ? { label: "Prata", className: "bg-[#c0c0c0] text-black" }
        : index === 2
          ? { label: "Bronze", className: "bg-[#cd7f32] text-white" }
          : null;

  const filledStars = Math.floor(brand.rating / 2);

  return (
    <div
      onClick={handleCardClick}
      className="casino-card-bg group relative flex cursor-pointer flex-col transition-all duration-500 hover:scale-[1.02] md:flex-row"
    >
      <div className="pointer-events-none absolute right-0 top-0 h-16 w-16 overflow-hidden">
        <div className="absolute right-[-10px] top-[-10px] h-20 w-20 rotate-45 bg-orange-500/15 transition-colors group-hover:bg-orange-500/30" />
      </div>
      <div className="pointer-events-none absolute bottom-0 left-0 h-12 w-12 overflow-hidden">
        <div className="absolute bottom-[-10px] left-[-10px] h-16 w-16 rotate-45 bg-purple-500/15" />
      </div>

      {badge && (
        <div
          className={`absolute -left-2 -top-3 z-20 rounded-lg px-3 py-1 text-xs font-black uppercase tracking-wider shadow-xl ${badge.className}`}
        >
          {badge.label}
        </div>
      )}

      <div className="flex w-full flex-col items-center justify-center border-b border-purple-900/40 bg-black/20 p-6 md:w-2/5 md:border-b-0 md:border-r">
        <div className="relative mb-4 h-16 w-40 transition-transform duration-500 group-hover:scale-110">
          <Image
            src={brand.logo}
            alt={`Logo ${brand.name}`}
            fill
            className="object-contain"
          />
        </div>
        <div className="mb-1 flex items-center gap-1 text-yellow-400">
          {Array.from({ length: 5 }).map((_, starIndex) => (
            <svg
              key={starIndex}
              className={`h-4 w-4 ${starIndex < filledStars ? "text-yellow-400" : "text-white/20"}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <div className="text-2xl font-black text-white">
          {brand.rating.toFixed(1)} <span className="text-xs font-normal text-slate-400">/ 10</span>
        </div>
        <div className="mt-1 text-[10px] font-bold uppercase tracking-widest text-slate-500">
          {brand.votes.toLocaleString("pt-PT")} votos
        </div>
      </div>

      <div className="flex w-full flex-col items-center justify-center p-6 text-center md:w-3/5 md:items-start md:text-left">
        <span className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-accent">
          Oferta exclusiva
        </span>
        <p className="mb-6 text-xl font-black leading-tight text-white md:text-2xl">
          {brand.bonus}
        </p>
        <button className="cta-gradient gold-shimmer w-full rounded-xl px-8 py-4 text-sm font-black uppercase tracking-wider text-white md:w-auto">
          Visitar Agora
        </button>
      </div>
    </div>
  );
}
