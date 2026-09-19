import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Contacto | CR7 Reviews",
  description: "Tem alguma dúvida, sugestão ou comentário? Entre em contacto com a equipa do CR7 Reviews.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contacto"
        title="Fale connosco"
        subtitle="Tem alguma dúvida, sugestão ou comentário? Adoraríamos ouvir a sua opinião. Utilize as informações abaixo para entrar em contacto connosco."
      />
      <div className="container mx-auto max-w-3xl space-y-8 px-4 py-16">
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-500">Email</p>
            <a href="mailto:geral@cr7reviews.com" className="font-display text-lg font-bold text-white hover:text-amber-400">
              geral@cr7reviews.com
            </a>
          </div>
          <div className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-8">
            <p className="mb-2 text-xs font-bold uppercase tracking-wider text-zinc-500">Horário</p>
            <p className="font-display text-lg font-bold text-white">09:00 – 18:00</p>
            <p className="mt-1 text-sm text-zinc-500">Hora de Lisboa. Respostas em dias úteis.</p>
          </div>
        </div>

        <div className="space-y-4">
          {[
            {
              q: "Posso sugerir uma plataforma?",
              a: "Sim! Envie-nos um email com a sua sugestão e a nossa equipa irá analisar a plataforma proposta.",
            },
            {
              q: "O conteúdo é gratuito?",
              a: "Sim, todo o conteúdo do CR7 Reviews é gratuito. Financiamo-nos através de parcerias com operadores licenciados.",
            },
          ].map((item) => (
            <div key={item.q} className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 md:p-8">
              <h2 className="mb-3 font-display text-lg font-bold text-white">{item.q}</h2>
              <p className="text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </div>
          ))}
        </div>

        <Link href="/" className="inline-block text-sm font-bold text-amber-400 hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </>
  );
}
