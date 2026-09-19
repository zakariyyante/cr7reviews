"use client";

import Image from "next/image";
import { track } from "@vercel/analytics";
import type { Brand } from "@/app/data/brands";

interface BrandCardProps {
  brand: Brand;
  index: number;
  gclidValue?: string;
}

const rankStyles = [
  {
    ring: "from-amber-400 via-amber-600 to-amber-900",
    badge: "bg-gradient-to-b from-amber-400 to-amber-600 text-black",
    bonus: "from-amber-200 to-amber-500",
    stroke: "#f59e0b",
    cta: "from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500",
    label: "Top Escolha",
    labelClass: "bg-red-500/10 border-red-500/20 text-red-400 animate-pulse",
  },
  {
    ring: "from-zinc-300 via-zinc-500 to-zinc-700",
    badge: "bg-gradient-to-b from-zinc-200 to-zinc-400 text-black",
    bonus: "from-zinc-100 to-zinc-400",
    stroke: "#a1a1aa",
    cta: "from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500",
    label: "Premium",
    labelClass: "bg-white/[0.03] border-white/[0.05] text-zinc-300",
  },
  {
    ring: "from-orange-300 via-orange-600 to-orange-900",
    badge: "bg-gradient-to-b from-orange-300 to-orange-600 text-black",
    bonus: "from-orange-200 to-orange-500",
    stroke: "#fb923c",
    cta: "from-amber-500 to-amber-600 text-black hover:from-amber-400 hover:to-amber-500",
    label: "Recomendado",
    labelClass: "bg-orange-500/10 border-orange-500/20 text-orange-300",
  },
];

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

  const style = rankStyles[index] ?? {
    ring: "from-white/20 via-white/5 to-transparent",
    badge: "bg-white/10 text-white",
    bonus: "from-white to-zinc-400",
    stroke: "#71717a",
    cta: "from-amber-500 to-amber-600 text-black",
    label: "Licenciado",
    labelClass: "bg-white/[0.03] border-white/[0.05] text-zinc-300",
  };

  const radius = 32;
  const circumference = 2 * Math.PI * radius;
  const dash = (brand.rating / 10) * circumference;
  const filledStars = Math.min(5, Math.floor(brand.rating / 2));
  const gradientId = `ratingRing-${brand.id}`;

  return (
    <div
      onClick={handleCardClick}
      className="group relative block cursor-pointer overflow-hidden rounded-3xl p-[1px] transition-all duration-500 hover:-translate-y-1"
    >
      <div className={`absolute inset-0 z-0 bg-gradient-to-br opacity-50 transition-opacity duration-500 group-hover:opacity-100 ${style.ring}`} />
      <div className="relative z-10 h-full w-full overflow-hidden rounded-[23px] bg-gradient-to-br from-zinc-900 to-black">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(245,158,11,0.28),transparent_50%)] opacity-20" />

        <div className="relative z-10 hidden min-h-[120px] items-stretch md:flex">
          <div className="relative flex w-[240px] flex-shrink-0 items-center justify-center p-4">
            <div className={`absolute left-6 top-0 z-20 flex items-center gap-1.5 rounded-b-lg px-3 py-1 shadow-lg ${style.badge}`}>
              <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 21h8M12 17v4M7 4h10v6a5 5 0 01-10 0V4zM4 8h3M17 8h3" />
              </svg>
              <span className="text-[11px] font-black tracking-widest">#{index + 1}</span>
            </div>
            <div className="relative mt-2 h-[96px] w-full">
              <Image
                src={brand.logo}
                alt={`Logo ${brand.name}`}
                fill
                className="object-contain drop-shadow-lg transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          <div className="flex min-w-0 flex-1 flex-col justify-center border-l border-white/[0.03] px-4 py-4">
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <span className="rounded-md border border-white/[0.05] bg-white/[0.03] px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest text-zinc-300">
                Premium
              </span>
              {index < 3 && (
                <span className={`rounded-md border px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest ${style.labelClass}`}>
                  {style.label}
                </span>
              )}
            </div>
            <p className={`bg-gradient-to-r font-display text-xl font-black uppercase leading-tight tracking-tight text-transparent bg-clip-text lg:text-2xl ${style.bonus}`}>
              {brand.bonus}
            </p>
          </div>

          <div className="flex flex-shrink-0 items-center gap-6 border-l border-white/[0.03] bg-white/[0.02] px-6 py-4">
            <div className="flex flex-col items-center gap-1.5">
              <div className="relative h-[60px] w-[60px]">
                <svg className="-rotate-90 drop-shadow-[0_0_10px_rgba(0,0,0,0.5)]" viewBox="0 0 72 72">
                  <circle cx="36" cy="36" r={radius} fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.05)" strokeWidth="4" />
                  <circle
                    cx="36"
                    cy="36"
                    r={radius}
                    fill="none"
                    stroke={`url(#${gradientId})`}
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray={`${dash} ${circumference}`}
                  />
                  <defs>
                    <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#f59e0b" />
                      <stop offset="100%" stopColor="#fbbf24" />
                    </linearGradient>
                  </defs>
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-lg font-black leading-none text-white">
                    {brand.rating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, starIndex) => (
                  <svg
                    key={starIndex}
                    className={`h-3.5 w-3.5 ${starIndex < filledStars ? "fill-amber-500 text-amber-500" : "text-zinc-700"}`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
            <div className="gold-shimmer relative overflow-hidden rounded-xl">
              <span className={`cta-gradient inline-flex h-12 items-center gap-2 whitespace-nowrap rounded-xl px-8 text-sm font-bold uppercase tracking-widest ${style.cta}`}>
                Jogar Agora
                <svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={3} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </div>
          </div>
        </div>

        <div className="relative z-10 flex flex-col gap-6 p-5 md:hidden">
          <div className="flex w-full items-start justify-between">
            <div className="relative">
              <div className={`absolute -top-5 left-2 z-20 flex items-center gap-1 rounded-b-md px-2.5 py-1 shadow-lg ${style.badge}`}>
                <span className="text-[10px] font-black tracking-widest">#{index + 1}</span>
              </div>
              <div className="relative mt-2 h-[90px] w-[180px]">
                <Image src={brand.logo} alt={`Logo ${brand.name}`} fill className="object-contain" />
              </div>
            </div>
            <div className="flex flex-col items-center gap-1.5">
              <div className="relative h-12 w-12">
                <svg className="-rotate-90" viewBox="0 0 58 58">
                  <circle cx="29" cy="29" r="26" fill="rgba(0,0,0,0.3)" stroke="rgba(255,255,255,0.05)" strokeWidth="3" />
                  <circle
                    cx="29"
                    cy="29"
                    r="26"
                    fill="none"
                    stroke={style.stroke}
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeDasharray={`${(brand.rating / 10) * 163} 163`}
                  />
                </svg>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-display text-sm font-black text-white">{brand.rating.toFixed(1)}</span>
                </div>
              </div>
            </div>
          </div>
          <p className={`bg-gradient-to-r font-display text-lg font-black uppercase leading-tight text-transparent bg-clip-text ${style.bonus}`}>
            {brand.bonus}
          </p>
          <span className={`cta-gradient gold-shimmer flex h-[52px] w-full items-center justify-center gap-2 rounded-xl text-sm font-bold uppercase tracking-widest ${style.cta}`}>
            Jogar Agora
          </span>
        </div>
      </div>
    </div>
  );
}
