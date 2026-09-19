export default function WhyChoose() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center md:mb-16">
          <span className="badge-gold mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            Vantagens
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Porquê escolher-nos?
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-zinc-400 md:text-base">
            Somos o guia de referência para jogadores portugueses que procuram plataformas seguras, licenciadas e de qualidade.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {[
            {
              title: "100% Seguro",
              text: "Apenas plataformas com licenciamento SRIJ e rigorosos padrões de proteção ao jogador entram no nosso ranking.",
              iconBg: "bg-emerald-500/10 border-emerald-500/20",
              iconColor: "text-emerald-400",
              path: "M12 3l8 4v6c0 5-3.4 9.4-8 11-4.6-1.6-8-6-8-11V7l8-4zm-3 9l2 2 4-4",
            },
            {
              title: "Análises Rigorosas",
              text: "Cada plataforma é testada pela nossa equipa — usabilidade, catálogo, suporte e experiência móvel são avaliados.",
              iconBg: "bg-amber-500/10 border-amber-500/20",
              iconColor: "text-amber-400",
              path: "M8 21h8M12 17v4M7 4h10v6a5 5 0 01-10 0V4z",
            },
            {
              title: "Variedade Épica",
              text: "Centenas de opções de entretenimento para todos os gostos — slots, mesa, live e muito mais.",
              iconBg: "bg-indigo-500/10 border-indigo-500/20",
              iconColor: "text-indigo-400",
              path: "M6 11h4M8 9v4M17.32 5H6.68a4 4 0 00-3.98 3.59C2.6 9.42 2 14.46 2 16a3 3 0 003 3c1 0 1.5-.5 2-1l1.41-1.41A2 2 0 019.83 16h4.34a2 2 0 011.41.59L17 18c.5.5 1 1 2 1a3 3 0 003-3c0-1.54-.6-6.58-.68-7.26A4 4 0 0017.32 5z",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.03]"
            >
              <div className={`mb-6 flex h-12 w-12 items-center justify-center rounded-xl border ${card.iconBg}`}>
                <svg className={`h-6 w-6 ${card.iconColor}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={card.path} />
                </svg>
              </div>
              <h3 className="mb-3 font-display text-lg font-bold text-white">{card.title}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{card.text}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4">
          {[
            { value: "50+", label: "Plataformas Analisadas" },
            { value: "100%", label: "Licenciadas SRIJ" },
            { value: "24/7", label: "Suporte Disponível" },
            { value: "18+", label: "Apenas Maiores" },
          ].map((stat) => (
            <div key={stat.label} className="rounded-2xl border border-white/[0.05] bg-white/[0.02] px-4 py-6 text-center">
              <div className="mb-2 font-display text-2xl font-bold text-white md:text-3xl">{stat.value}</div>
              <div className="text-[11px] font-medium uppercase tracking-wider text-zinc-500 md:text-xs">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
