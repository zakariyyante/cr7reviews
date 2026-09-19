import Link from "next/link";

export default function ComplianceBar() {
  return (
    <div className="border-y border-white/[0.05] bg-black/40 py-4">
      <div className="container mx-auto flex max-w-[1000px] flex-col items-center justify-center gap-3 px-4 text-center md:flex-row md:text-left">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/[0.05] bg-white/[0.02] px-4 py-2">
          <span className="font-display text-xs font-bold tracking-widest text-white">18+</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Apenas para adultos 18+.</span>
        </div>
        <p className="text-sm text-zinc-500">
          O jogo pode causar dependência. Jogue de forma responsável. Apoio:{" "}
          <Link href="https://www.icad.pt/" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:underline">
            ICAD
          </Link>{" "}
          · Linha Vida <span className="font-bold text-white">1414</span> · Regulador SRIJ.
        </p>
      </div>
    </div>
  );
}
