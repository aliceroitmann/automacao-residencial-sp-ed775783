const solutions = [
  {
    icon: "🏢",
    title: "Apartamentos Modernos",
    text: "Iluminação inteligente que transforma apartamentos convencionais em espaços high-tech. Interruptores smart que substituem os tradicionais sem necessidade de obra.",
  },
  {
    icon: "🌇",
    title: "Coberturas e Penthouses",
    text: "Projetos exclusivos de iluminação para coberturas, com integração entre áreas internas e terraços. Cenários que acompanham o pôr do sol paulistano.",
  },
  {
    icon: "📐",
    title: "Studios e Compactos",
    text: "Soluções compactas e eficientes para maximizar cada metro quadrado. Iluminação que cria sensação de amplitude e versatilidade para diferentes usos do espaço.",
  },
  {
    icon: "🔧",
    title: "Retrofit Tecnológico",
    text: "Instalação sem quebra-quebra em imóveis já habitados. Tecnologia wireless de última geração que dispensa nova fiação e preserva o acabamento original.",
  },
];

const Apartments = () => (
  <section id="apartamentos" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">
        Automação de Iluminação para Apartamentos em São Paulo
      </h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Soluções ideais de iluminação inteligente para apartamentos modernos, coberturas e studios em toda São Paulo e região metropolitana.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {solutions.map((s) => (
          <div
            key={s.title}
            className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <span className="text-4xl mb-4 block">{s.icon}</span>
            <h3 className="text-lg font-poppins font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://wa.me/5511975596711?text=Gostaria de um orçamento de iluminação inteligente para meu apartamento"
          rel="nofollow"
          target="_blank"
          className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
        >
          RECEBER PROJETO PERSONALIZADO
        </a>
      </div>
    </div>
  </section>
);

export default Apartments;