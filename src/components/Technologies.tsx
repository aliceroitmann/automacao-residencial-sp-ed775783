const techs = [
  {
    icon: "📱",
    title: "Aplicativos Mobile",
    text: "Controle toda a iluminação pelo smartphone com apps intuitivos para iOS e Android. Planta baixa interativa, controle individual e monitoramento de consumo em tempo real.",
  },
  {
    icon: "🗣️",
    title: "Controle por Voz",
    text: "Integração nativa com Alexa, Google Assistente e Siri. Comandos naturais como 'Acenda a sala' ou 'Modo cinema' para controlar cenários completos.",
  },
  {
    icon: "📡",
    title: "Sensores Inteligentes",
    text: "Sensores de presença, luminosidade e crepusculares que automatizam a iluminação conforme a necessidade real. Sem desperdício, sem preocupação.",
  },
  {
    icon: "⏰",
    title: "Timers e Programações",
    text: "Programe horários de ligar e desligar automaticamente. Simule presença durante viagens e sincronize a iluminação com o nascer e pôr do sol.",
  },
  {
    icon: "🔗",
    title: "Integração com Sistemas",
    text: "Compatível com cortinas motorizadas, climatização, som ambiente e sistemas de segurança. Uma plataforma centralizada para toda a sua casa inteligente.",
  },
];

const Technologies = () => (
  <section className="py-20 gradient-hero text-white">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 font-poppins font-bold text-center mb-4">
        Tecnologias e Integrações
      </h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="opacity-90 text-center max-w-2xl mx-auto mb-12">
        Utilizamos as tecnologias mais avançadas do mercado para garantir uma automação de iluminação perfeita e preparada para o futuro.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {techs.map((t) => (
          <div key={t.title} className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
            <span className="text-4xl mb-4 block">{t.icon}</span>
            <h3 className="text-lg font-poppins font-bold mb-3">{t.title}</h3>
            <p className="opacity-80 text-sm leading-relaxed">{t.text}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a
          href="https://wa.me/5511975596711?text=Gostaria de saber quais tecnologias de iluminação vocês utilizam"
          rel="nofollow"
          target="_blank"
          className="inline-block bg-whatsapp text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform shadow-lg"
        >
          FALAR COM ESPECIALISTA TÉCNICO
        </a>
      </div>
    </div>
  </section>
);

export default Technologies;