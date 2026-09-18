import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-purple-900/50 bg-black py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 flex flex-col items-center">
          <Link href="/" className="flex flex-col items-center gap-2">
            <div className="relative h-14 w-56">
              <Image src="/logo.svg" alt="CR7 Reviews" fill className="object-contain" />
            </div>
          </Link>
        </div>

        <div className="mb-12 grid grid-cols-2 gap-10 border-y border-white/5 py-12 md:grid-cols-4">
          <div className="col-span-2">
            <h4 className="mb-4 font-black uppercase tracking-widest text-white">Sobre</h4>
            <p className="max-w-md text-sm leading-relaxed text-slate-400">
              O cr7reviews.com é um guia independente de reviews de sites de jogos em Portugal. As nossas análises ajudam jogadores a comparar operadores licenciados, bónus e rapidez de pagamento.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-black uppercase tracking-widest text-white">Links Rápidos</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-sm font-bold uppercase text-slate-400 hover:text-accent">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/#brands" className="text-sm font-bold uppercase text-slate-400 hover:text-accent">
                  Marcas
                </Link>
              </li>
              <li>
                <Link href="/#guide" className="text-sm font-bold uppercase text-slate-400 hover:text-accent">
                  Guia
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm font-bold uppercase text-slate-400 hover:text-accent">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm font-bold uppercase text-slate-400 hover:text-accent">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-black uppercase tracking-widest text-white">Legal</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/privacy" className="text-sm font-bold uppercase text-slate-400 hover:text-accent">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm font-bold uppercase text-slate-400 hover:text-accent">
                  Termos de Serviço
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.srij.turismodeportugal.pt/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold uppercase text-slate-400 hover:text-accent"
                >
                  SRIJ Portugal
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="mx-auto mb-10 max-w-4xl text-center text-[11px] uppercase leading-relaxed tracking-wider text-slate-500">
          O cr7reviews.com é um portal de reviews independente. Recebemos comissões de afiliados dos operadores listados. O jogo é proibido a menores de 18 anos. Todos os operadores apresentados são regulados pelo SRIJ — Serviço de Regulação e Inspeção de Jogos.
        </p>

        <div className="mb-8 flex flex-wrap items-center justify-center gap-8 opacity-70">
          <div className="relative h-10 w-10">
            <Image src="/18plus.svg" alt="18+" fill className="object-contain" />
          </div>
          <Link
            href="https://www.srij.turismodeportugal.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-24"
          >
            <Image src="/srij.svg" alt="SRIJ" fill className="object-contain" />
          </Link>
          <Link href="https://www.icad.pt/" target="_blank" rel="noopener noreferrer" className="relative h-10 w-24">
            <Image src="/icad.svg" alt="ICAD" fill className="object-contain" />
          </Link>
          <Link
            href="https://www.srij.turismodeportugal.pt/pt/jogo-responsavel/o-que-e-o-jogo-responsavel"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-28"
          >
            <Image src="/jogo-responsavel.svg" alt="Jogo Responsável" fill className="object-contain" />
          </Link>
          <Link
            href="https://www.icad.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-10 w-24"
          >
            <Image src="/sicad.svg" alt="SICAD / ICAD" fill className="object-contain" />
          </Link>
        </div>

        <p className="text-center text-xs text-slate-500">
          © {currentYear} cr7reviews.com. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
