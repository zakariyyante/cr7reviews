import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Termos de Serviço | CR7 Reviews",
  description: "Termos de serviço do cr7reviews.com.",
};

export default function TermsPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-black">Termos de Serviço</h1>
      <div className="space-y-6 text-slate-300">
        <p>
          Ao aceder ao cr7reviews.com, concorda em cumprir estes termos de serviço. Se não concordar, não utilize o site.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">1. Uso do Site</h2>
        <p>
          Este site destina-se apenas a fins informativos e a utilizadores com 18 anos ou mais. O conteúdo não constitui aconselhamento jurídico, financeiro nem garantia de ganhos.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">2. Reviews Independentes</h2>
        <p>
          As nossas reviews são independentes, mas o site é financiado por comissões de afiliados. A posição das marcas pode ser influenciada por estes acordos. Não garantimos a precisão absoluta de bónus ou promoções, que estão sujeitos aos termos de cada operador.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">3. Responsabilidade</h2>
        <p>
          O jogo envolve risco. É da responsabilidade do utilizador jogar de forma responsável e apenas com dinheiro que possa perder. Não nos responsabilizamos por perdas em sites de terceiros.
        </p>
        <h2 className="mt-8 text-2xl font-bold text-white">4. Propriedade Intelectual</h2>
        <p>
          Todo o conteúdo do cr7reviews.com é propriedade do site e não pode ser reproduzido sem autorização prévia. Nomes e logótipos de marcas pertencem aos respetivos operadores.
        </p>
        <p className="mt-12 text-sm italic text-slate-500">
          Ao continuar a utilizar este site, confirma que tem 18+ anos e aceita estes termos. Questões: &quot;legal@cr7reviews.com&quot; ou &apos;contacto@cr7reviews.com&apos;.
        </p>
        <Link href="/" className="inline-block font-bold text-accent hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </div>
  );
}
