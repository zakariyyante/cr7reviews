import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Jogo Responsável | CR7 Reviews",
  description: "O CR7 Reviews promove o entretenimento seguro. O jogo deve ser sempre uma forma de diversão.",
};

export default function ResponsibleGamblingPage() {
  return (
    <>
      <PageHero
        eyebrow="Jogo Responsável"
        title="Entretenimento seguro"
        subtitle="O CR7 Reviews promove o entretenimento seguro. O jogo deve ser sempre uma forma de diversão — nunca uma solução para problemas pessoais ou financeiros."
      />
      <div className="container mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-zinc-400">
        <p>
          Acreditamos que o jogo online deve ser uma experiência de entretenimento controlada e consciente. O CR7 Reviews apoia ativamente a promoção do jogo responsável e recomenda apenas plataformas licenciadas pelo Serviço de Regulação e Inspeção de Jogos (SRIJ) em Portugal.
        </p>
        <h2 className="font-display text-xl font-bold text-white">Sinais de alerta</h2>
        <p>O jogo pode tornar-se problemático quando:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Esconde o seu comportamento de jogo de familiares ou amigos;</li>
          <li>O jogo interfere com o trabalho, estudos ou relações pessoais;</li>
          <li>Utiliza o jogo como escape de problemas emocionais ou stress;</li>
          <li>Tenta recuperar perdas aumentando as apostas.</li>
        </ul>
        <h2 className="font-display text-xl font-bold text-white">Dicas para um Jogo Seguro</h2>
        <ul className="list-disc space-y-2 pl-5">
          <li>Trate o jogo como entretenimento, não como forma de obter rendimento;</li>
          <li>Mantenha um registo das suas sessões de jogo;</li>
          <li>Converse abertamente com pessoas de confiança sobre os seus hábitos de jogo.</li>
        </ul>
        <h2 className="font-display text-xl font-bold text-white">Ferramentas de controlo</h2>
        <p>As plataformas licenciadas em Portugal são obrigadas a disponibilizar ferramentas de jogo responsável. Estas incluem:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Limites de depósito e de apostas;</li>
          <li>Testes de autoavaliação de comportamento de jogo;</li>
          <li>Histórico de atividade e relatórios de jogo;</li>
          <li>Autoexclusão, incluindo através da plataforma do SRIJ.</li>
        </ul>
        <p>Recomendamos vivamente que configure estas ferramentas antes de iniciar qualquer sessão de jogo.</p>
        <h2 className="font-display text-xl font-bold text-white">Precisa de ajuda?</h2>
        <p>
          Se sentir que o jogo está a deixar de ser uma diversão, existem organizações especializadas prontas a apoiar em Portugal. Contacte a Linha Vida <strong className="text-white">1414</strong> (ICAD) ou visite{" "}
          <Link href="https://www.icad.pt/" target="_blank" rel="noopener noreferrer" className="font-bold text-emerald-400 hover:underline">
            www.icad.pt
          </Link>{" "}
          e{" "}
          <Link
            href="https://www.srij.turismodeportugal.pt/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-emerald-400 hover:underline"
          >
            www.srij.turismodeportugal.pt
          </Link>
          .
        </p>
        <h2 className="font-display text-xl font-bold text-white">Menores de 18 anos</h2>
        <p>
          O jogo online é estritamente proibido para menores de 18 anos. Os pais e encarregados de educação devem educar sobre os riscos associados ao jogo online e supervisionar o acesso à internet.
        </p>
        <p>
          Em Portugal, o jogo online é regulado pelo SRIJ, que licencia e supervisiona os operadores. Apenas plataformas com licença válida podem operar legalmente no mercado português. Recomendamos sempre verificar a licença antes de se registar em qualquer plataforma.
        </p>
        <Link href="/" className="inline-block font-bold text-amber-400 hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </>
  );
}
