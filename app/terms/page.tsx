import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Termos e Condições | CR7 Reviews",
  description: "Leia atentamente os termos que regem a utilização do CR7 Reviews.",
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Termos e Condições"
        subtitle="Leia atentamente os termos que regem a utilização do CR7 Reviews. Ao aceder ao nosso site, concorda com as condições descritas nesta página."
      />
      <div className="container mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-zinc-400">
        <p>
          O CR7 Reviews (cr7reviews.com) é um site informativo e de comparação. Não operamos plataformas de jogo nem prestamos serviços de entretenimento online diretamente aos utilizadores.
        </p>
        <h2 className="font-display text-xl font-bold text-white">1. Aceitação dos Termos</h2>
        <p>
          Ao aceder, navegar ou utilizar o website cr7reviews.com, o utilizador declara ter lido, compreendido e aceite integralmente os presentes Termos e Condições. Caso não concorde com alguma disposição, deverá cessar imediatamente a utilização do site.
        </p>
        <p>
          Reservamo-nos o direito de alterar estes termos a qualquer momento. As alterações entram em vigor após a sua publicação nesta página. A continuação da utilização do site após alterações constitui aceitação dos novos termos.
        </p>
        <h2 className="font-display text-xl font-bold text-white">2. Natureza do Serviço</h2>
        <p>
          O CR7 Reviews funciona exclusivamente como um portal de informação e comparação de plataformas de jogos online licenciadas em Portugal. O nosso objetivo é fornecer análises independentes, rankings e informações úteis para jogadores portugueses.
        </p>
        <p>Não oferecemos jogos, apostas ou qualquer forma de entretenimento interativo.</p>
        <h2 className="font-display text-xl font-bold text-white">3. Idade Mínima</h2>
        <p>
          O acesso a este website destina-se exclusivamente a pessoas com 18 anos ou mais. Ao utilizar o CR7 Reviews, confirma que cumpre este requisito de idade legal em Portugal. Recomendamos vivamente que menores de idade não acedam a conteúdos relacionados com jogos online. Os pais e encarregados de educação devem supervisionar a utilização da internet por menores.
        </p>
        <h2 className="font-display text-xl font-bold text-white">4. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo presente neste site — incluindo textos, gráficos, logótipos, imagens, design e código — é propriedade do CR7 Reviews ou dos respetivos licenciadores, estando protegido pelas leis de propriedade intelectual aplicáveis.
        </p>
        <h2 className="font-display text-xl font-bold text-white">5. Links de Parceiros</h2>
        <p>
          O nosso portal contém links para websites de operadores e parceiros externos. Estes links são disponibilizados apenas para conveniência informativa do utilizador. Cada operador possui os seus próprios termos, políticas e condições.
        </p>
        <p>
          O CR7 Reviews pode receber compensação quando um utilizador acede a um site parceiro através dos nossos links. Esta relação comercial não influencia a integridade das nossas análises, mas pode afetar a ordem de apresentação dos parceiros. Comprometemo-nos a manter transparência sobre estas relações e a basear as nossas classificações em critérios objetivos sempre que possível.
        </p>
        <h2 className="font-display text-xl font-bold text-white">6. Lei Aplicável</h2>
        <p>
          Os presentes Termos e Condições regem-se pela legislação portuguesa. Qualquer litígio emergente da utilização deste site será submetido aos tribunais competentes de Portugal.
        </p>
        <p className="text-xs text-zinc-600">Última atualização: setembro de 2026.</p>
        <Link href="/" className="inline-block font-bold text-amber-400 hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </>
  );
}
