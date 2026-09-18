import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Sobre Nós | CR7 Reviews",
  description: "Conheça a equipa e o método de avaliação do cr7reviews.com.",
};

export default function AboutPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-black">Sobre Nós</h1>
      <div className="space-y-6 text-slate-300">
        <p>
          O cr7reviews.com é um hub português de reviews de sites de jogos. A nossa missão é ajudar jogadores em Portugal a comparar operadores licenciados pelo SRIJ, com foco em bónus, pagamentos e segurança.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">O Que Fazemos</h2>
        <p>
          Analisamos licenças, rapidez de levantamento, qualidade do suporte em português e clareza das ofertas. Só listamos marcas que passam os nossos critérios mínimos de conformidade.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">O Nosso Compromisso</h2>
        <p>
          Estamos comprometidos com o jogo responsável. O jogo deve ser entretenimento. Se precisar de ajuda, contacte a Linha 1414 ou o ICAD.
        </p>
        <Link href="/#guide" className="inline-block font-bold text-accent hover:underline">
          Ver como avaliamos os sites →
        </Link>
      </div>
    </div>
  );
}
