const faqs = [
  {
    q: "O que é automação de iluminação inteligente?",
    a: "Automação de iluminação inteligente é a integração de tecnologias que permitem controlar toda a iluminação da sua residência de forma centralizada — por aplicativo, comandos de voz, sensores automáticos ou painéis touch. Você pode ajustar intensidade, cor, temperatura de cor, criar cenários personalizados e programar horários, tudo pelo smartphone ou por voz. A tecnologia proporciona conforto, economia de energia de até 70% e valorização significativa do imóvel.",
  },
  {
    q: "Quanto custa a automação de iluminação em São Paulo?",
    a: "O investimento varia conforme o tamanho do imóvel e o nível de sofisticação desejado. Para apartamentos de 60 a 100m², projetos de iluminação inteligente partem de R$ 8.000 a R$ 20.000. Casas de médio porte entre 150 e 250m² ficam na faixa de R$ 25.000 a R$ 60.000. Para residências de alto padrão acima de 300m², projetos premium ultrapassam R$ 80.000. Oferecemos orçamentos transparentes e projetos modulares — você pode começar com o essencial e expandir gradualmente.",
  },
  {
    q: "É possível instalar iluminação inteligente sem reforma?",
    a: "Sim! O retrofit é uma das nossas especialidades. Utilizamos interruptores inteligentes que substituem os tradicionais, lâmpadas smart, módulos wireless e sensores sem fio que dispensam obras. Aproximadamente 75% dos nossos projetos são realizados em imóveis já habitados, sem necessidade de quebrar paredes ou passar nova fiação. O prazo médio de instalação é de 1 a 3 dias úteis, com mínima interferência na rotina.",
  },
  {
    q: "Quais cenários de iluminação posso criar?",
    a: "As possibilidades são ilimitadas! Os cenários mais populares incluem: Modo Cinema (luzes baixas e quentes), Jantar Romântico (iluminação intimista), Despertar Suave (luzes que aumentam gradualmente), Modo Leitura (luz focada e neutra), Modo Festa (cores dinâmicas), Modo Ausente (simulação de presença) e Boa Noite (desliga tudo com um comando). Cada cenário é totalmente customizável conforme suas preferências.",
  },
  {
    q: "A automação de iluminação funciona com Alexa, Google e Siri?",
    a: "Sim! Nossos sistemas possuem integração nativa com os principais assistentes de voz do mercado — Alexa, Google Assistente e Siri. Você pode controlar cenários, ligar e desligar luzes, ajustar intensidade e temperatura de cor apenas com comandos de voz naturais. Além disso, é possível criar rotinas automatizadas como 'Bom dia' ou 'Boa noite' que ativam múltiplos cenários simultaneamente.",
  },
  {
    q: "A automação de iluminação economiza energia?",
    a: "Sim, significativamente! A combinação de LEDs inteligentes, sensores de presença, sensores de luminosidade e programação automática pode reduzir o consumo de energia com iluminação em até 70%. Luzes desligam automaticamente em ambientes vazios, a intensidade se ajusta conforme a luz natural e cenários econômicos programados para horários de pico garantem máxima eficiência. O retorno do investimento ocorre tipicamente em 2 a 3 anos.",
  },
  {
    q: "Vocês atendem toda a região de São Paulo?",
    a: "Sim! Atendemos toda a cidade de São Paulo — zona sul, norte, leste, oeste e centro — além da região metropolitana, ABC Paulista (Santo André, São Bernardo, São Caetano), Guarulhos, Osasco, Barueri, Alphaville e Santana de Parnaíba. No interior, cobrimos Campinas, São José dos Campos, Jundiaí, Sorocaba e região. No litoral, atendemos Santos, Guarujá e Praia Grande. Realizamos visitas técnicas gratuitas em toda a área de atendimento.",
  },
  {
    q: "Qual a garantia e suporte pós-instalação?",
    a: "Oferecemos garantia de 24 meses em todos os equipamentos e 12 meses para serviços de instalação. Nosso suporte técnico funciona 7 dias por semana, com atendimento remoto que resolve a maioria dos chamados sem visita presencial. Quando necessário, realizamos visitas em até 48 horas. Inclui treinamento completo para a família, atualizações de software gratuitas e planos opcionais de manutenção preventiva.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-clamp-h2 text-foreground text-center mb-4">Perguntas Frequentes</h2>
        <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
        <p className="text-muted-foreground text-center mb-12">
          Respostas para as dúvidas mais comuns sobre automação de iluminação inteligente em São Paulo.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl overflow-hidden shadow-sm">
              <div className="bg-primary text-white p-5 font-semibold text-sm md:text-base">
                {faq.q}
              </div>
              <div className="bg-card p-5 text-muted-foreground text-sm leading-relaxed">
                {faq.a}
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <a
            href="https://wa.me/5511975596711?text=Gostaria de tirar mais dúvidas sobre automação de iluminação"
            rel="nofollow"
            target="_blank"
            className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
          >
            TIRE SUAS DÚVIDAS PELO WHATSAPP
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;