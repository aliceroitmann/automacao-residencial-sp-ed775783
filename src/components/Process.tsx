const steps = [
  {
    num: 1,
    title: "Diagnóstico",
    text: "Realizamos uma visita técnica detalhada à sua residência para compreender suas necessidades, rotina familiar e expectativas. Avaliamos a infraestrutura existente e identificamos as melhores oportunidades de automação para o seu estilo de vida.",
  },
  {
    num: 2,
    title: "Projeto",
    text: "Desenvolvemos um projeto personalizado com diagramas técnicos, renderizações 3D e orçamento transparente. Apresentamos todas as opções disponíveis para que você tome decisões informadas sobre cada aspecto da sua automação residencial.",
  },
  {
    num: 3,
    title: "Instalação",
    text: "Nossa equipe especializada executa a instalação com máxima precisão, organização e respeito ao seu ambiente. Seguimos cronogramas rigorosos e mantemos o local impecavelmente limpo durante todo o processo de implementação.",
  },
  {
    num: 4,
    title: "Configuração",
    text: "Programamos todos os sistemas, realizamos a integração completa entre dispositivos e configuramos cenários personalizados de acordo com suas preferências. Cada detalhe é ajustado para garantir funcionamento perfeito e fluido.",
  },
  {
    num: 5,
    title: "Entrega",
    text: "Treinamos toda a família no uso dos sistemas, entregamos documentação completa e oferecemos suporte contínuo pós-instalação. Garantimos que todos se sintam seguros e confortáveis com a nova tecnologia do lar.",
  },
];

const Process = () => (
  <section className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">Como Trabalhamos</h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Processo transparente, eficiente e pensado para entregar excelência em cada etapa do seu projeto.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="bg-card rounded-2xl p-6 text-center shadow-md relative">
            <div className="gradient-cta w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              {s.num}
            </div>
            <h3 className="text-lg font-poppins font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Process;
