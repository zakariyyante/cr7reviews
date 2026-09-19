export default function Hero() {
  return (
    <section className="relative flex min-h-[240px] items-center justify-center overflow-hidden border-b border-white/[0.05] bg-[#09090b] md:min-h-[340px]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-30%] left-[-10%] h-[150%] w-[60%] rounded-full bg-emerald-600/20 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-30%] h-[150%] w-[60%] rounded-full bg-red-600/20 blur-[120px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#09090b]/40 to-[#09090b]" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-col items-center px-4 py-8 text-center md:py-10">
        <div className="mb-4 inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[#09090b]/50 px-4 py-1.5 shadow-[0_4px_24px_rgba(0,0,0,0.4)] backdrop-blur-md md:mb-5">
          <div className="flex gap-1.5">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)]" />
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]" />
          </div>
          <span className="font-display text-[10px] font-bold uppercase tracking-widest text-zinc-200 md:text-xs">
            O Teu Ponto de Encontro Gaming
          </span>
        </div>

        <h1 className="mb-3 max-w-4xl font-display text-2xl font-black leading-tight tracking-tight text-white drop-shadow-lg md:mb-4 md:text-4xl lg:text-5xl">
          As Melhores Plataformas de Jogos Online em Portugal
        </h1>
        <p className="mx-auto mb-6 max-w-2xl text-sm font-medium leading-relaxed text-zinc-300 drop-shadow md:mb-8 md:text-base">
          Descubra a seleção das plataformas mais confiáveis e divertidas para jogadores portugueses. Analisamos e classificamos as opções para sua segurança.
        </p>

        <div className="hide-scrollbar w-full overflow-x-auto">
          <div className="mx-auto flex w-max items-center justify-start gap-2 px-2 pb-2 md:w-auto md:justify-center md:gap-3">
            {[
              { label: "100% Legal e Seguro", style: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
              { label: "Registo Rápido", style: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400" },
              { label: "Melhores Bónus", style: "border-amber-500/30 bg-amber-500/10 text-amber-400" },
              { label: "Marcas de Portugal", style: "border-red-500/30 bg-red-500/10 text-red-400" },
            ].map((chip) => (
              <div
                key={chip.label}
                className={`whitespace-nowrap rounded-xl border px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md transition-transform hover:-translate-y-0.5 md:px-4 md:py-2 md:text-xs ${chip.style}`}
              >
                {chip.label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
