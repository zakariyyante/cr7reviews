import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="guide" className="relative overflow-hidden border-y border-white/[0.05] bg-white/[0.01] py-16 md:py-24">
      <div className="container relative z-10 mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center md:mb-16">
          <span className="badge-neutral mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            Metodologia
          </span>
          <h2 className="mb-4 font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Como classificamos?
          </h2>
          <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">
            A nossa equipa de especialistas avalia cada plataforma com base em critérios objetivos para criar rankings justos e transparentes.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { n: "01", title: "Segurança", text: "Encriptação, licenciamento e proteção de dados" },
            { n: "02", title: "Qualidade", text: "Catálogo, design e experiência do utilizador" },
            { n: "03", title: "Suporte", text: "Atendimento em português e tempo de resposta" },
            { n: "04", title: "Mobile", text: "Compatibilidade e desempenho em dispositivos móveis" },
          ].map((item) => (
            <div key={item.n} className="relative rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6">
              <span className="absolute right-5 top-4 text-[10px] font-bold tracking-widest text-zinc-600">
                {item.n}
              </span>
              <h3 className="mb-2 font-display text-base font-bold text-white">{item.title}</h3>
              <p className="text-xs leading-relaxed text-zinc-500">{item.text}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap justify-center gap-3">
          {["Licenciamento SRIJ", "Proteção ao Jogador", "Variedade de Jogos", "Bónus de Boas-Vindas", "Reputação"].map(
            (chip) => (
              <div
                key={chip}
                className="flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-4 py-2 text-xs font-medium uppercase tracking-wider text-zinc-300"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                {chip}
              </div>
            )
          )}
        </div>
      </div>

      <div className="container mx-auto mt-16 max-w-4xl px-4">
        <div className="flex flex-col items-center gap-6 overflow-hidden rounded-3xl border border-white/[0.05] bg-white/[0.02] p-8 md:flex-row md:gap-10 md:p-10">
          <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-2xl border border-red-500/20 bg-red-500/10">
            <svg className="h-8 w-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <div className="flex-1 text-center md:text-left">
            <h3 className="mb-2 font-display text-xl font-bold text-white">Jogo Responsável</h3>
            <p className="text-sm leading-relaxed text-zinc-400">
              O jogo deve ser sempre entretenimento. Se precisar de ajuda, contacte a Linha Vida no{" "}
              <strong className="text-white">1414</strong> — apoio confidencial e gratuito.
            </p>
          </div>
          <Link
            href="/jogo-responsavel"
            className="inline-flex flex-shrink-0 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.05] px-6 py-3 text-sm font-medium uppercase tracking-wider text-white hover:bg-white/[0.08]"
          >
            Saber Mais
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 18l6-6-6-6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
