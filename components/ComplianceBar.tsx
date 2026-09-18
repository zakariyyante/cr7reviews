import Link from "next/link";

export default function ComplianceBar() {
  return (
    <div className="w-full border-y border-purple-900/30 bg-black/50 py-4">
      <div className="container mx-auto flex flex-col items-center justify-center gap-4 px-4 text-center md:flex-row md:text-left">
        <div className="flex shrink-0 items-center gap-2 text-accent">
          <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 9v2m0 4h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"
            />
          </svg>
          <span className="text-lg font-black uppercase tracking-tight">Apenas para adultos 18+.</span>
        </div>
        <p className="max-w-4xl text-sm text-slate-400">
          O jogo pode criar dependência. Jogue com responsabilidade. Para apoio, visite{" "}
          <Link
            href="https://www.icad.pt/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-accent hover:underline"
          >
            ICAD
          </Link>{" "}
          ou a{" "}
          <Link
            href="https://www.srij.turismodeportugal.pt/pt/sos-jogadores/servicos-de-apoio-ao-jogador"
            target="_blank"
            rel="noopener noreferrer"
            className="font-bold text-accent hover:underline"
          >
            Linha 1414
          </Link>
          . Regulador: SRIJ — Serviço de Regulação e Inspeção de Jogos. Helpline:{" "}
          <span className="font-bold text-white">1414</span>.
        </p>
      </div>
    </div>
  );
}
