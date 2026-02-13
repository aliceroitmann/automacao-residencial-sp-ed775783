const WA_LINK = "https://api.whatsapp.com/send?phone=5511975596711&text=Venho+pelo+site+Automacao+Residencial+LB+Oficial.+Quero+informacoes+sobre+Orcamentos+e+seus+servicos.+Podemos+conversar?";

const features = [
  {
    icon: "🏡",
    title: "Casas Grandes e Mansões",
    text: "Projetos completos de iluminação inteligente para residências amplas, com controle centralizado de centenas de pontos de luz distribuídos em múltiplos pavimentos.",
  },
  {
    icon: "🌿",
    title: "Jardins e Paisagismo",
    text: "Iluminação paisagística automatizada que valoriza cada detalhe do seu jardim. Programação por horário, sensores crepusculares e cenas sazonais para fachadas deslumbrantes.",
  },
  {
    icon: "🍖",
    title: "Áreas Gourmet e Varandas",
    text: "Cenários de iluminação que transformam suas áreas de lazer. Do churrasco casual ao jantar sofisticado, com controle de intensidade e temperatura de cor.",
  },
  {
    icon: "🏊",
    title: "Piscinas e Fachadas",
    text: "Iluminação subaquática com troca de cores, fachadas com efeitos programáveis e iluminação arquitetônica que destaca a personalidade da sua residência.",
  },
];

const HighEnd = () => (
  <section id="casas" className="py-20 gradient-hero text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 font-poppins font-bold text-center mb-4">
        Automação de Iluminação para Casas de Alto Padrão em Indaiatuba
      </h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="opacity-90 text-center max-w-2xl mx-auto mb-12">
        Soluções exclusivas de iluminação inteligente para residências de alto padrão em Indaiatuba e região. Sofisticação, tecnologia e elegância em cada ambiente.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <span className="text-4xl mb-4 block">{f.icon}</span>
            <h3 className="text-xl font-poppins font-bold mb-3">{f.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{f.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href={WA_LINK}
          rel="nofollow"
          target="_blank"
          className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
        >
          AGENDAR VISITA TÉCNICA GRATUITA
        </a>
      </div>
    </div>
  </section>
);

export default HighEnd;