import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Sobre Nós | CR7 Reviews",
  description:
    "O CR7 Reviews é o seu guia de confiança para descobrir as melhores plataformas de jogos online licenciadas em Portugal.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Sobre Nós"
        title="O seu guia de confiança em Portugal"
        subtitle="O CR7 Reviews é o seu guia de confiança para descobrir as melhores plataformas de jogos online licenciadas em Portugal."
      />
      <div className="container mx-auto max-w-3xl space-y-8 px-4 py-16 text-sm leading-relaxed text-zinc-400 md:text-base">
        <p>
          O CR7 Reviews nasceu da necessidade de criar um espaço informativo e fiável para jogadores portugueses. Com a internet repleta de opções, sabemos que escolher a plataforma certa pode ser avassalador. Por isso, a nossa equipa de especialistas faz o trabalho de análise e comparação por si.
        </p>
        <p>
          Somos um portal puramente informativo — não operamos jogos, não gerimos contas de utilizadores e não prestamos serviços de entretenimento online. O nosso papel é analisar, comparar e recomendar as melhores opções disponíveis no mercado português.
        </p>

        <div className="grid gap-4 md:grid-cols-2">
          {[
            "Apenas recomendamos plataformas licenciadas pelo SRIJ que cumprem rigorosos critérios de segurança e proteção ao jogador.",
            "Comparamos opções para que encontre a plataforma ideal para o seu estilo de jogo e preferências.",
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6">
              <p>{item}</p>
            </div>
          ))}
        </div>

        <h2 className="font-display text-2xl font-bold text-white">Como avaliamos</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Licenciamento e conformidade legal com o SRIJ;</li>
          <li>Qualidade e variedade do catálogo de jogos;</li>
          <li>Suporte em português e experiência móvel;</li>
          <li>Clareza de bónus e rapidez de pagamentos.</li>
        </ul>

        <h2 className="font-display text-2xl font-bold text-white">A nossa missão</h2>
        <p>
          Proporcionar aos jogadores portugueses informação transparente e fiável sobre plataformas de jogos online licenciadas. O seu entretenimento seguro é a nossa maior prioridade. Promovemos ativamente o jogo responsável e recomendamos apenas plataformas que respeitem os mais elevados padrões de proteção ao jogador em Portugal.
        </p>

        <p>
          Tem dúvidas, sugestões ou feedback? Adoraríamos ouvir a sua opinião. Visite a nossa página de{" "}
          <Link href="/contact" className="font-bold text-emerald-400 hover:underline">
            Contacto
          </Link>{" "}
          para entrar em contacto connosco.
        </p>
      </div>
    </>
  );
}
