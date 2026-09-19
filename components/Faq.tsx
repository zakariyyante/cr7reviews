export default function Faq() {
  const items = [
    {
      q: "É seguro jogar online em Portugal?",
      a: "Sim. Desde que escolha plataformas licenciadas pelo SRIJ, como as que recomendamos, terá um ambiente regulado e seguro para o seu entretenimento.",
    },
    {
      q: "Como posso começar a jogar?",
      a: "Selecione uma plataforma do nosso ranking, clique em «Jogar Agora», crie a sua conta e siga as instruções do operador. O processo de registo é rápido e simples.",
    },
    {
      q: "Posso jogar no meu telemóvel?",
      a: "Sim. Todas as plataformas que recomendamos possuem versões otimizadas para dispositivos móveis ou aplicações dedicadas para iOS e Android.",
    },
    {
      q: "As vossas recomendações são imparciais?",
      a: "As nossas análises baseiam-se em critérios objetivos. Embora possamos receber compensação de parceiros, isso não compromete a integridade das nossas classificações.",
    },
    {
      q: "Preciso de ter mais de 18 anos?",
      a: "Sim. O jogo online em Portugal é exclusivamente para maiores de 18 anos. Verificamos sempre que as plataformas recomendadas cumprem este requisito legal.",
    },
  ];

  return (
    <section className="relative overflow-hidden py-16 md:py-24">
      <div className="container relative z-10 mx-auto max-w-3xl px-4">
        <div className="mb-12 text-center md:mb-16">
          <span className="badge-green mb-4 inline-block rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-widest">
            FAQ
          </span>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white md:text-4xl">
            Perguntas Frequentes
          </h2>
        </div>
        <div className="space-y-4">
          {items.map((item) => (
            <div
              key={item.q}
              className="rounded-2xl border border-white/[0.05] bg-white/[0.02] p-6 transition-colors hover:bg-white/[0.03] md:p-8"
            >
              <h3 className="mb-3 font-display text-lg font-bold text-white">{item.q}</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
