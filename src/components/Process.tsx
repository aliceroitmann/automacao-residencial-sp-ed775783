const steps = [
  {
    num: 1,
    title: "Consultoria Inicial",
    text: "Realizamos uma conversa detalhada para entender suas necessidades, rotina e expectativas. Analisamos plantas e fotos do imóvel para um diagnóstico preliminar.",
  },
  {
    num: 2,
    title: "Análise do Ambiente",
    text: "Visita técnica presencial para avaliar a infraestrutura elétrica, pontos de luz existentes, incidência de luz natural e oportunidades de automação.",
  },
  {
    num: 3,
    title: "Projeto Personalizado",
    text: "Desenvolvemos um projeto exclusivo com mapeamento de todos os pontos, cenários propostos, equipamentos selecionados e orçamento transparente.",
  },
  {
    num: 4,
    title: "Instalação Profissional",
    text: "Nossa equipe certificada executa a instalação com agilidade e organização, minimizando impacto na sua rotina. Prazo médio de 1 a 5 dias úteis.",
  },
  {
    num: 5,
    title: "Configuração Inteligente",
    text: "Programamos todos os cenários, integramos com assistentes de voz, configuramos aplicativos e realizamos ajustes finos para funcionamento perfeito.",
  },
  {
    num: 6,
    title: "Suporte Contínuo",
    text: "Treinamento completo para toda a família, suporte técnico 7 dias por semana e atualizações gratuitas. Seu projeto evolui com você.",
  },
];

const Process = () => (
  <section id="processo" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">Como Funciona o Projeto de Automação</h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Processo transparente e profissional para transformar a iluminação da sua residência em São Paulo.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((s) => (
          <div key={s.num} className="bg-card rounded-2xl p-6 text-center shadow-md">
            <div className="gradient-cta w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mx-auto mb-4">
              {s.num}
            </div>
            <h3 className="text-lg font-poppins font-bold text-foreground mb-3">{s.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{s.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://wa.me/5511975596711?text=Gostaria de agendar uma consultoria gratuita de iluminação"
          rel="nofollow"
          target="_blank"
          className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
        >
          SOLICITAR CONSULTORIA GRATUITA
        </a>
      </div>
    </div>
  </section>
);

export default Process;