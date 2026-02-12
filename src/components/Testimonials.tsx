const testimonials = [
  {
    initials: "RC",
    name: "Ricardo Costa",
    role: "Proprietário - Apartamento Vila Olímpia",
    text: "A equipe da Automação Residencial Avançada superou todas as minhas expectativas. O conhecimento técnico demonstrado desde a primeira reunião me deixou impressionado. Hoje controlo absolutamente tudo da minha casa pelo celular — iluminação, cortinas, ar-condicionado e som ambiente. A economia na conta de luz já ultrapassou 40% e a praticidade no dia a dia é incomparável. Recomendo de olhos fechados para quem busca qualidade e profissionalismo.",
  },
  {
    initials: "AM",
    name: "Ana Martins",
    role: "Arquiteta - Escritório Ana Martins Arquitetura",
    text: "Como arquiteta, escolhi a Automação Residencial Avançada como parceira para o projeto de uma cobertura nos Jardins. A integração entre a automação e o projeto arquitetônico foi absolutamente perfeita. A equipe respeitou cada detalhe estético que planejamos, escondendo toda a tecnologia de forma elegante. O profissionalismo e a atenção aos detalhes fizeram dessa parceria um case de sucesso que apresento a todos os meus clientes.",
  },
  {
    initials: "PF",
    name: "Paulo Ferreira",
    role: "Proprietário - Casa Morumbi",
    text: "Após a instalação do sistema de segurança inteligente na minha casa no Morumbi, a tranquilidade da minha família aumentou enormemente. As câmeras com visão noturna e detecção por IA, os sensores em todas as aberturas e a simulação de presença quando viajamos nos dão uma paz que não tem preço. O monitoramento pelo celular em tempo real e as notificações instantâneas me mantêm sempre informado sobre minha residência.",
  },
  {
    initials: "MC",
    name: "Mariana Campos",
    role: "Proprietária - Casa Alphaville",
    text: "Moramos em Alphaville e a experiência com a automação foi transformadora. O sistema de áudio multiroom é espetacular — ouvimos música em todos os ambientes com qualidade impressionante. As cortinas motorizadas no pé-direito duplo da sala resolveram um problema que tínhamos há anos. O suporte pós-instalação é excelente, sempre atenciosos e rápidos quando precisamos de qualquer ajuste ou orientação técnica.",
  },
  {
    initials: "JS",
    name: "José Santos",
    role: "Proprietário - Apartamento Higienópolis",
    text: "Tenho 72 anos e confesso que tinha receio de que a tecnologia fosse complicada demais para mim. Estava completamente enganado! Os painéis touch são extremamente intuitivos e os comandos de voz pela Alexa mudaram minha vida. Basta falar para acender luzes, ajustar temperatura ou fechar cortinas. Ganhei mais independência e segurança no meu dia a dia. Sou imensamente grato à equipe pela paciência e dedicação.",
  },
  {
    initials: "RB",
    name: "Rafael Borges",
    role: "CEO - Empresa de Tecnologia",
    text: "Como profissional de tecnologia, sou naturalmente exigente com qualidade e integração de sistemas. A automação do meu apartamento na Faria Lima foi impecável. Tudo funciona perfeitamente integrado — do controle de acesso biométrico ao home theater com Dolby Atmos. O aplicativo é estável, rápido e bem projetado. Considero a Automação Residencial Avançada uma parceira estratégica de longo prazo para minha residência e escritório.",
  },
];

const Testimonials = () => (
  <section id="depoimentos" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">O Que Nossos Clientes Dizem</h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Depoimentos reais de famílias que transformaram suas residências com nossas soluções de automação.
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
          href="https://wa.me/5511975596711?text=Gostaria de ver mais depoimentos de clientes"
          rel="nofollow"
          target="_blank"
          className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
        >
          ORÇAMENTO PELO WHATSAPP - AQUI!
        </a>
      </div>
    </div>
  </section>
);

export default Testimonials;
