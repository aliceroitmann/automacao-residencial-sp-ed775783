const testimonials = [
  {
    initials: "FM",
    name: "Fernanda Moreira",
    role: "Proprietária — Apartamento Vila Nova Conceição",
    text: "A Automations São Paulo transformou completamente a iluminação do meu apartamento. Os cenários personalizados são incríveis — o Modo Cinema e o Jantar Romântico viraram nossos favoritos. A economia na conta de luz foi de quase 50% e o controle por voz com Alexa é extremamente prático. Profissionais impecáveis do início ao fim.",
  },
  {
    initials: "CR",
    name: "Carlos Ribeiro",
    role: "Arquiteto — Studio CR Arquitetura",
    text: "Como arquiteto, indico a Automations São Paulo para todos os meus projetos de alto padrão. A integração da automação de iluminação com a proposta arquitetônica é perfeita. A equipe técnica compreende a linguagem de design e esconde a tecnologia com elegância. Os resultados são sempre surpreendentes e os clientes ficam encantados.",
  },
  {
    initials: "LS",
    name: "Luciana Santos",
    role: "Proprietária — Casa Alphaville",
    text: "Automatizamos toda a iluminação da casa, incluindo jardim, fachada e piscina. O resultado é deslumbrante — parece que moramos em uma casa de revista. Os sensores de presença nos corredores e a simulação de presença quando viajamos trouxeram muito mais segurança. O suporte pós-instalação é excelente e sempre disponível.",
  },
  {
    initials: "RA",
    name: "Roberto Almeida",
    role: "Proprietário — Cobertura Itaim Bibi",
    text: "Tinha dúvidas se a automação de iluminação faria diferença real no dia a dia. Fazia, e muito! Acordar com a luz subindo gradualmente, chegar em casa com tudo aceso automaticamente e controlar tudo pelo celular mudou nossa rotina. A economia de energia superou as expectativas. Investimento que se paga sozinho.",
  },
  {
    initials: "JC",
    name: "Juliana Costa",
    role: "Designer de Interiores — JC Design",
    text: "Trabalho com a Automations São Paulo há 3 anos e em todos os projetos a entrega foi impecável. A personalização dos cenários de iluminação valoriza enormemente o projeto de interiores. A temperatura de cor ajustável e o dimmer inteligente fazem toda a diferença na ambientação que proponho aos meus clientes.",
  },
  {
    initials: "MT",
    name: "Marcos Tavares",
    role: "Proprietário — Casa Alto de Pinheiros",
    text: "Temos 4 filhos e a automação de iluminação simplificou muito nossa vida. As luzes acendem automaticamente com sensores de presença, os quartos das crianças têm programação noturna suave e o modo 'Saindo de casa' desliga tudo com um comando. Praticidade e segurança para toda a família.",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">O Que Nossos Clientes Dizem</h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Depoimentos reais de famílias e profissionais que transformaram seus ambientes com nossa automação de iluminação.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl p-8 shadow-md relative">
            <span className="absolute top-4 right-4 text-accent text-5xl opacity-20 font-bold">"</span>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">{t.text}</p>
            <div className="flex items-center gap-3">
              <div className="gradient-cta w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-sm">
                {t.initials}
              </div>
              <div>
                <p className="font-poppins font-bold text-foreground text-sm">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://wa.me/5511975596711?text=Gostaria de solicitar um orçamento para automação de iluminação"
          rel="nofollow"
          target="_blank"
          className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
        >
          SOLICITAR ORÇAMENTO GRATUITO
        </a>
      </div>
    </div>
  </section>
);

export default Testimonials;