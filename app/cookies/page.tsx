import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Política de Cookies | CR7 Reviews",
  description: "Saiba o que são cookies, como os utilizamos no CR7 Reviews e como pode controlar as suas preferências.",
};

export default function CookiesPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Política de Cookies"
        subtitle="Esta página explica o que são cookies, como os utilizamos no CR7 Reviews e como pode controlar as suas preferências."
      />
      <div className="container mx-auto max-w-3xl space-y-6 px-4 py-16 text-sm leading-relaxed text-zinc-400">
        <p>
          Ao continuar a navegar no cr7reviews.com, concorda com a utilização de cookies conforme descrito nesta política. Pode alterar as suas preferências a qualquer momento através das definições do seu navegador.
        </p>
        <h2 className="font-display text-xl font-bold text-white">1. O que são Cookies?</h2>
        <p>
          Cookies são pequenos ficheiros de texto armazenados no seu dispositivo (computador, tablet ou smartphone) quando visita um website. Permitem que o site reconheça o seu dispositivo e memorize determinadas informações sobre a sua visita.
        </p>
        <p>
          Existem também tecnologias similares, como pixels de rastreamento, armazenamento local (localStorage) e identificadores de sessão, que funcionam de forma semelhante aos cookies.
        </p>
        <h2 className="font-display text-xl font-bold text-white">2. Porque Utilizamos Cookies?</h2>
        <p>Utilizamos cookies para diversas finalidades legítimas, incluindo funcionamento do site, medição de audiência e atribuição de campanhas.</p>
        <h2 className="font-display text-xl font-bold text-white">3. Tipos de Cookies que Utilizamos</h2>
        <p>
          <strong className="text-white">Necessários</strong> — essenciais para o funcionamento básico do site. Sem estes cookies, certas funcionalidades não estarão disponíveis. Não requerem consentimento. Incluem cookies de sessão, preferências de consentimento e segurança.
        </p>
        <p>
          <strong className="text-white">Funcionalidade e marketing</strong> — identificadores de campanha (&quot;gclid&quot;) para medição de conversões e cookies definidos por parceiros publicitários para medir a eficácia de campanhas.
        </p>
        <h2 className="font-display text-xl font-bold text-white">4. Cookies de Terceiros</h2>
        <p>
          Alguns cookies são definidos por serviços de terceiros que aparecem nas nossas páginas. Não controlamos diretamente estes cookies. Recomendamos consultar as políticas de privacidade desses terceiros para mais informações.
        </p>
        <h2 className="font-display text-xl font-bold text-white">5. Duração dos Cookies</h2>
        <p>Os cookies de sessão são eliminados automaticamente quando fecha o navegador. Os cookies persistentes permanecem no dispositivo durante um período definido (de dias a meses).</p>
        <p>
          Além de cookies, podemos memorizar identificadores de campanha (como gclid) durante 30 dias. Estes dados permanecem no seu dispositivo até expirarem ou serem eliminados manualmente.
        </p>
        <h2 className="font-display text-xl font-bold text-white">6. Como Gerir os Cookies</h2>
        <p>Pode controlar e eliminar cookies através das definições do seu navegador. A maioria dos navegadores permite:</p>
        <ul className="list-disc space-y-2 pl-5">
          <li>Ver que cookies estão instalados e eliminá-los individualmente;</li>
          <li>Bloquear cookies de terceiros;</li>
          <li>Bloquear cookies de sites específicos;</li>
          <li>Bloquear todos os cookies;</li>
          <li>Eliminar todos os cookies ao fechar o navegador.</li>
        </ul>
        <p>Note que a desativação de cookies pode afetar a funcionalidade do site e limitar a sua experiência de navegação.</p>
        <p>Links úteis: Google Chrome (Definições → Privacidade e segurança → Cookies); Mozilla Firefox; Safari; Microsoft Edge.</p>
        <p>Podemos atualizar esta Política de Cookies periodicamente. Consulte esta página regularmente para se manter informado.</p>
        <p className="text-xs text-zinc-600">Última atualização: setembro de 2026.</p>
        <Link href="/" className="inline-block font-bold text-amber-400 hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </>
  );
}
