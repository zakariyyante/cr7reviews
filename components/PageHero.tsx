interface PageHeroProps {
  eyebrow: string;
  title: string;
  subtitle: string;
}

export default function PageHero({ eyebrow, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.05] bg-[#09090b] py-12 md:py-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-[-40%] left-[-10%] h-[140%] w-[55%] rounded-full bg-emerald-600/15 blur-[120px]" />
        <div className="absolute right-[-10%] bottom-[-40%] h-[140%] w-[55%] rounded-full bg-red-600/15 blur-[120px]" />
      </div>
      <div className="container relative z-10 mx-auto max-w-3xl px-4 text-center">
        <span className="badge-neutral mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
          {eyebrow}
        </span>
        <h1 className="mb-4 font-display text-3xl font-black tracking-tight text-white md:text-5xl">{title}</h1>
        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-zinc-400 md:text-base">{subtitle}</p>
      </div>
    </section>
  );
}
