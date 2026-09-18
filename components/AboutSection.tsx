import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="guide" className="bg-black/20 py-20">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-4xl font-black uppercase tracking-tight md:text-5xl">
          Como Avaliamos os <span className="gold-text">Sites de Jogos</span>
        </h2>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="casino-card-bg flex flex-col gap-6 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20">
                <svg className="h-7 w-7 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-black italic uppercase text-white">
                Porque as Nossas Reviews se Destacam
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Confirmamos cada licença SRIJ antes de listar um operador",
                "Testamos depósitos e levantamentos com métodos portugueses",
                "Analisamos as letras miúdas dos bónus e requisitos de apostas",
                "Avaliamos o suporte ao cliente em português",
                "Verificamos a experiência móvel e a rapidez da app",
              ].map((point) => (
                <li key={point} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-1 font-bold text-accent">♠</span>
                  <span className="font-medium">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="casino-card-bg flex flex-col gap-6 border-orange-500/20 p-8">
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20">
                <svg className="h-7 w-7 text-purple-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="text-2xl font-black italic uppercase text-white">Jogo Responsável</h3>
            </div>
            <p className="font-medium leading-relaxed text-slate-300">
              O jogo deve ser entretenimento, nunca uma fonte de rendimento. Promovemos o jogo seguro em Portugal e só trabalhamos com operadores licenciados pelo SRIJ.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <Link
                href="https://www.srij.turismodeportugal.pt/pt/jogo-responsavel/o-que-e-o-jogo-responsavel"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10"
              >
                <span className="mb-1 block text-xs font-bold uppercase text-slate-500">Regulador</span>
                <span className="text-sm font-black text-white">SRIJ</span>
              </Link>
              <Link
                href="https://www.icad.pt/"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-white/5 bg-white/5 p-4 text-center transition-colors hover:bg-white/10"
              >
                <span className="mb-1 block text-xs font-bold uppercase text-slate-500">Apoio</span>
                <span className="text-sm font-black text-white">ICAD</span>
              </Link>
            </div>
            <div className="rounded-xl border border-orange-500/20 bg-orange-500/10 p-4 text-center">
              <span className="mb-1 block text-xs font-bold uppercase text-accent">Linha 1414 (gratuita)</span>
              <span className="text-2xl font-black tracking-widest text-white">1414</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
