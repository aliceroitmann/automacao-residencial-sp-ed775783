const benefits = [
  {
    icon: "🎛️",
    title: "Controle Total da Iluminação",
    text: "Ajuste intensidade, temperatura de cor e cor de cada ponto de luz da sua residência pelo smartphone, tablet ou painéis touch. Controle individual ou por ambientes, de qualquer lugar do mundo.",
  },
  {
    icon: "🎭",
    title: "Cenários Personalizados",
    text: "Crie ambientes únicos com um toque: Modo Cinema, Jantar Romântico, Despertar Suave, Leitura, Festa. Cada cenário ajusta automaticamente dezenas de pontos de luz para a atmosfera perfeita.",
  },
  {
    icon: "⚡",
    title: "Economia de Energia",
    text: "Reduza sua conta de luz em até 70% com LEDs inteligentes, sensores de presença e programação automática. A iluminação liga e desliga conforme a necessidade real de cada ambiente.",
  },
  {
    icon: "📈",
    title: "Valorização do Imóvel",
    text: "Imóveis com automação de iluminação valorizam de 10% a 25%. A tecnologia integrada é um diferencial decisivo para compradores e locatários que buscam sofisticação e praticidade.",
  },
  {
    icon: "✨",
    title: "Conforto e Praticidade",
    text: "Esqueça interruptores tradicionais. Programe horários, use sensores de presença e geolocalização para que a iluminação se adapte automaticamente à sua rotina e estilo de vida.",
  },
  {
    icon: "🗣️",
    title: "Integração com Assistentes de Voz",
    text: "Controle toda a iluminação por comandos de voz com Alexa, Google Assistente e Siri. Diga 'Boa noite' e toda a casa se ajusta para o seu descanso.",
  },
  {
    icon: "🔐",
    title: "Segurança Residencial",
    text: "Simule presença quando estiver viajando com programações automáticas de iluminação. Sensores de movimento acendem luzes em áreas externas, inibindo invasões e aumentando a proteção.",
  },
];

const Benefits = () => (
  <section id="beneficios" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">
        Benefícios da Automação de Iluminação Inteligente
      </h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        Descubra como a automação de iluminação em São Paulo pode transformar o conforto, a economia e a segurança da sua residência.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((b) => (
          <div
            key={b.title}
            className="bg-card rounded-2xl p-8 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
          >
            <span className="text-5xl mb-4 block">{b.icon}</span>
            <h3 className="text-lg font-poppins font-bold text-foreground mb-3">{b.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{b.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://wa.me/5511975596711?text=Gostaria de saber mais sobre os benefícios da automação de iluminação"
          rel="nofollow"
          target="_blank"
          className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
        >
          FALAR COM ESPECIALISTA
        </a>
      </div>
    </div>
  </section>
);

export default Benefits;