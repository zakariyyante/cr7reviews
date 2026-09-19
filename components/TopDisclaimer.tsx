import Image from "next/image";
import Link from "next/link";

export default function TopDisclaimer() {
  return (
    <div className="border-b border-white/[0.05] bg-black/80">
      <div className="container mx-auto flex flex-wrap items-center justify-center gap-x-4 gap-y-2 px-4 py-2 text-center md:justify-between">
        <div className="flex flex-wrap items-center justify-center gap-3 text-[11px] font-medium uppercase tracking-wider text-zinc-400">
          <Image src="/18plus.svg" alt="18+" width={22} height={22} className="h-5 w-5 object-contain" />
          <span className="font-display font-bold tracking-widest text-white">18+</span>
          <span className="hidden h-1 w-1 rounded-full bg-zinc-600 sm:block" />
          <span>Apenas para adultos. Jogue com responsabilidade.</span>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="https://safergamblinguk.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 opacity-80 transition-opacity hover:opacity-100"
          >
            <Image
              src="/safer-gambling.webp"
              alt="Safer Gambling Week"
              width={140}
              height={79}
              className="h-5 w-auto object-contain"
            />
            <span className="text-[10px] font-medium uppercase tracking-wider text-zinc-400">
              Safer Gambling
            </span>
          </Link>
          <Link
            href="/jogo-responsavel"
            className="text-[10px] font-medium uppercase tracking-wider text-emerald-400 hover:text-emerald-300"
          >
            Jogo Responsável
          </Link>
        </div>
      </div>
    </div>
  );
}
