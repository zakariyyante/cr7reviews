import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidade | CR7 Reviews",
  description: "Política de privacidade do cr7reviews.com.",
};

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-black">Política de Privacidade</h1>
      <div className="space-y-6 text-slate-300">
        <p>
          Bem-vindo ao cr7reviews.com. A sua privacidade é importante para nós. Esta política explica como recolhemos e utilizamos dados quando visita o nosso site.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">1. Recolha de Dados</h2>
        <p>
          Recolhemos informações técnicas, como o endereço IP, o tipo de browser e cookies, para melhorar a experiência no site. Não recolhemos dados pessoais identificáveis, a menos que os forneça voluntariamente através da página de contacto.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">2. Cookies e Rastreio</h2>
        <p>
          Utilizamos cookies e identificadores como o &quot;gclid&quot; para medir campanhas de anúncios e atribuir conversões. Ao utilizar o site, concorda com esta utilização, nos termos da legislação portuguesa e do RGPD.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">3. Links de Afiliados</h2>
        <p>
          O cr7reviews.com contém links de afiliados para operadores de jogos licenciados. Quando clica nestes links, pode ser redirecionado para sites de terceiros. Não controlamos as políticas de privacidade desses sites e recomendamos que as leia.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">4. Os Seus Direitos</h2>
        <p>
          Tem o direito de solicitar acesso, retificação ou eliminação de quaisquer dados pessoais que possamos ter. Para exercer estes direitos, contacte-nos em &quot;privacidade@cr7reviews.com&quot;.
        </p>
        <p className="mt-12 text-sm italic text-slate-500">
          Última atualização: setembro de 2026. Se tiver dúvidas, escreva para &apos;privacidade@cr7reviews.com&apos;.
        </p>
        <Link href="/" className="inline-block font-bold text-accent hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </div>
  );
}
