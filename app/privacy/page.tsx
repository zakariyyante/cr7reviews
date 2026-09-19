import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de Privacidade | CR7 Reviews",
  description: "A sua privacidade é fundamental para nós. Saiba que dados recolhemos e quais são os seus direitos.",
};

export default function PrivacyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de Privacidade"
        subtitle="A sua privacidade é fundamental para nós. Esta política explica que dados recolhemos, como os utilizamos e quais são os seus direitos enquanto utilizador do CR7 Reviews."
      />
      <div className="container mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-zinc-400">
        <p>
          O CR7 Reviews está empenhado em proteger a privacidade dos seus visitantes, em conformidade com o Regulamento Geral sobre a Proteção de Dados (RGPD) e a legislação portuguesa aplicável.
        </p>
        <h2 className="font-display text-xl font-bold text-white">1. Dados que Recolhemos</h2>
        <p>Podemos recolher identificadores de cookies e tecnologias similares, bem como parâmetros de URL (como identificadores de campanha publicitária, por exemplo o &quot;gclid&quot;).</p>
        <p>
          Se nos contactar através de email, recolheremos o nome, endereço de email e conteúdo da mensagem que nos enviar voluntariamente.
        </p>
        <h2 className="font-display text-xl font-bold text-white">2. Como Utilizamos os Dados</h2>
        <p>
          Utilizamos os dados para melhorar o site, medir campanhas, responder a pedidos de contacto e questões dos utilizadores, e cumprir obrigações legais.
        </p>
        <h2 className="font-display text-xl font-bold text-white">3. Base Legal</h2>
        <p>
          Tratamos dados com base em consentimento — para cookies não essenciais e comunicações de marketing (quando aplicável) — e na execução de pedido de contacto.
        </p>
        <h2 className="font-display text-xl font-bold text-white">4. Cookies e Tecnologias Similares</h2>
        <p>
          Consulte a nossa{" "}
          <Link href="/cookies" className="font-bold text-emerald-400 hover:underline">
            Política de Cookies
          </Link>{" "}
          para mais pormenores.
        </p>
        <h2 className="font-display text-xl font-bold text-white">5. Links de Afiliados</h2>
        <p>
          O cr7reviews.com contém links de afiliados para operadores licenciados. Não controlamos as políticas de privacidade desses sites.
        </p>
        <h2 className="font-display text-xl font-bold text-white">6. Os Seus Direitos</h2>
        <p>
          Tem direito de acesso — saber que dados temos sobre si — bem como retificação ou eliminação. Para exercer estes direitos, contacte-nos em &quot;geral@cr7reviews.com&quot;.
        </p>
        <p>
          Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que consulte esta página regularmente.
        </p>
        <p className="text-xs text-zinc-600">Última atualização: setembro de 2026.</p>
        <Link href="/" className="inline-block font-bold text-amber-400 hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </>
  );
}
