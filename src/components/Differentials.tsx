const differentials = [
  {
    icon: "🎯",
    title: "Atendimento Especializado",
    text: "Consultoria dedicada do primeiro contato à entrega final. Cada cliente recebe atenção exclusiva de um consultor técnico especializado em iluminação.",
  },
  {
    icon: "✏️",
    title: "Projetos 100% Personalizados",
    text: "Nenhum projeto é igual ao outro. Desenvolvemos soluções sob medida que respeitam a arquitetura, o estilo e as necessidades específicas de cada residência.",
  },
  {
    icon: "🚀",
    title: "Tecnologia de Ponta",
    text: "Trabalhamos exclusivamente com as melhores marcas globais de automação, garantindo durabilidade, performance e compatibilidade com as tecnologias mais atuais.",
  },
  {
    icon: "👨‍🔧",
    title: "Equipe Certificada",
    text: "Engenheiros e técnicos com certificações das principais fabricantes mundiais. Instalação impecável com testes rigorosos de qualidade em cada etapa.",
  },
  {
    icon: "🛡️",
    title: "Suporte Pós-Instalação",
    text: "Garantia estendida, suporte técnico 7 dias por semana, atualizações gratuitas e planos de manutenção preventiva. Estamos sempre ao seu lado.",
  },
  {
    icon: "📍",
    title: "Atendimento em Indaiatuba e Região",
    text: "Indaiatuba, Itu, Campinas, Salto, Americana, Sumaré, Hortolândia, Paulínia, Jaguariúna, Holambra, Vinhedo e Valinhos. Visitas técnicas gratuitas.",
  },
];

const Differentials = () => (
  <section className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 font-poppins font-bold text-white text-center mb-4">
        Diferenciais da Automação Residencial em Indaiatuba
      </h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-white/80 text-center max-w-2xl mx-auto mb-12">
        Por que somos a escolha certa para a automação de iluminação da sua residência em Indaiatuba e região.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {differentials.map((d) => (
          <div key={d.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-white">
            <span className="text-4xl mb-4 block">{d.icon}</span>
            <h3 className="text-lg font-poppins font-bold mb-3">{d.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{d.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Differentials;