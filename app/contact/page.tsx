import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contacto | CR7 Reviews",
  description: "Contacte a equipa do cr7reviews.com.",
};

export default function ContactPage() {
  return (
    <div className="container mx-auto max-w-4xl px-4 py-20">
      <h1 className="mb-8 text-4xl font-black">Contacto</h1>
      <div className="space-y-6 text-slate-300">
        <p>
          Tem dúvidas, sugestões ou feedback sobre as nossas reviews? A equipa do cr7reviews.com responde em português, em horário útil.
        </p>
        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-white">Informações de Contacto</h2>
          <p className="mb-2">
            <span className="font-bold text-accent">Email:</span>{" "}
            <a href="mailto:contacto@cr7reviews.com" className="text-white hover:text-accent">
              contacto@cr7reviews.com
            </a>
          </p>
          <p className="text-sm text-slate-500">
            Tentamos responder a todas as mensagens num prazo de 24 a 48 horas úteis.
          </p>
        </div>
        <Link href="/" className="inline-block font-bold text-accent hover:underline">
          ← Voltar à página inicial
        </Link>
      </div>
    </div>
  );
}
