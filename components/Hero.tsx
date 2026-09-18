export default function Hero() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-purple-900/30 to-transparent" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-900/40 px-4 py-2 text-sm font-bold uppercase tracking-widest text-purple-100">
          <span className="h-2 w-2 rounded-full bg-accent shadow-[0_0_8px_rgba(255,140,0,0.8)]" />
          O Principal Hub de Reviews de Jogos de Portugal {currentYear}
        </div>

        <h1 className="mb-6 text-4xl font-black leading-tight md:text-7xl">
          Encontre os Melhores <span className="gold-text">Sites de Jogos</span> de Portugal
        </h1>

        <p className="mx-auto mb-12 max-w-3xl text-lg font-medium text-slate-300 md:text-2xl">
          Avaliações de especialistas, bónus exclusivos e pagamentos rápidos. O guia independente para jogar com segurança em Portugal.
        </p>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
          {[
            {
              label: "Licenciado",
              icon: "M12 3l8 4v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V7l8-4z",
            },
            {
              label: "Aprovado por Especialistas",
              icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z",
            },
            {
              label: "Levantamentos Rápidos",
              icon: "M13 10V3L4 14h7v7l9-11h-7z",
            },
          ].map((badge) => (
            <div
              key={badge.label}
              className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-6 py-3 backdrop-blur-sm"
            >
              <svg className="h-6 w-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={badge.icon} />
              </svg>
              <span className="font-bold uppercase tracking-wide text-white">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
