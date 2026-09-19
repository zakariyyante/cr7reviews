import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto border-t border-white/[0.05] bg-[#09090b] py-12 md:py-16">
      <div className="container mx-auto flex flex-col items-center px-4 text-center">
        <Link href="/" className="mb-8">
          <Image
            src="/logo.png"
            alt="CR7 Reviews"
            width={240}
            height={60}
            className="h-12 w-auto object-contain opacity-90 md:h-14"
          />
        </Link>

        <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/[0.05] bg-white/[0.02] px-4 py-2">
          <span className="font-display text-xs font-bold tracking-widest text-white">18+</span>
          <span className="h-1 w-1 rounded-full bg-zinc-700" />
          <span className="text-xs font-medium uppercase tracking-wider text-zinc-400">Jogo Responsável</span>
        </div>

        <p className="mx-auto mb-10 max-w-2xl text-sm leading-relaxed text-zinc-500">
          Aviso: O CR7 Reviews destina-se apenas a maiores de 18 anos. O jogo pode causar dependência. Por favor, jogue de forma responsável.
        </p>

        <nav className="mb-12 flex flex-wrap justify-center gap-x-8 gap-y-4">
          <Link href="/terms" className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white">
            Termos e Condições
          </Link>
          <Link href="/privacy" className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white">
            Política de Privacidade
          </Link>
          <Link href="/jogo-responsavel" className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white">
            Jogo Responsável
          </Link>
          <Link href="/cookies" className="text-xs font-medium uppercase tracking-wider text-zinc-400 hover:text-white">
            Política de Cookies
          </Link>
        </nav>

        <div className="mb-10 flex flex-wrap items-center justify-center gap-8 md:gap-12">
          <Image src="/18plus.svg" alt="18+" width={40} height={40} className="h-8 w-auto object-contain md:h-10" />
          <Link
            href="https://safergamblinguk.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src="/safer-gambling.webp"
              alt="Safer Gambling Week"
              width={140}
              height={79}
              className="h-8 w-auto object-contain md:h-10"
            />
          </Link>
          <Link
            href="https://www.srij.turismodeportugal.pt/pt"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src="/srij.webp"
              alt="SRIJ — Serviço de Regulação e Inspeção de Jogos"
              width={264}
              height={144}
              className="h-8 w-auto object-contain md:h-10"
            />
          </Link>
          <Link
            href="https://www.icad.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="opacity-50 grayscale transition-all hover:opacity-100 hover:grayscale-0"
          >
            <Image
              src="/icad.webp"
              alt="ICAD"
              width={486}
              height={144}
              className="h-8 w-auto object-contain md:h-10"
            />
          </Link>
        </div>

        <div className="mb-8 h-px w-full max-w-md bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <p className="text-xs font-medium text-zinc-600">
          © {currentYear} <span className="text-zinc-400">cr7reviews.com</span>. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}
