const faqs = [
  {
    q: "O que é automação residencial e quais seus benefícios?",
    a: "Automação residencial é a integração de tecnologias inteligentes que permitem controlar iluminação, climatização, segurança, entretenimento e outros sistemas da sua casa de forma centralizada e automatizada. Os principais benefícios incluem conforto excepcional no dia a dia, segurança reforçada com monitoramento 24 horas, economia significativa de energia — que pode chegar a 40% na conta de luz —, valorização do imóvel em até 20%, maior acessibilidade para idosos e pessoas com mobilidade reduzida, e personalização completa dos ambientes conforme sua rotina e preferências. A automação transforma sua residência em um ecossistema inteligente que se adapta às necessidades de toda a família.",
  },
  {
    q: "Quanto custa uma automação residencial completa?",
    a: "O investimento em automação residencial varia conforme o tamanho da residência, quantidade de sistemas e nível de sofisticação desejado. Para apartamentos de 60 a 90m², projetos básicos partem de R$ 15.000 com iluminação e cortinas automatizadas. Residências de médio porte entre 120 e 200m² ficam na faixa de R$ 35.000 a R$ 80.000 com automação completa. Para imóveis de alto padrão acima de 300m², projetos premium ultrapassam R$ 150.000 com todas as tecnologias integradas. Trabalhamos com total transparência nos orçamentos e oferecemos projetos modulares — você pode começar com o essencial e expandir gradualmente conforme seu orçamento permitir.",
  },
  {
    q: "É possível automatizar uma casa já construída sem reforma?",
    a: "Sim, absolutamente! O retrofit é uma de nossas especialidades. Utilizamos tecnologias wireless de última geração, interruptores inteligentes que substituem os tradicionais, motores compactos para cortinas, sensores sem fio com bateria de longa duração e dispositivos plug-and-play que dispensam obras. Aproximadamente 70% dos nossos projetos são realizados em residências já habitadas, sem necessidade de quebrar paredes ou passar nova fiação. O prazo médio de instalação completa é de 2 a 5 dias úteis, com mínima interferência na rotina da família.",
  },
  {
    q: "Quais marcas de equipamentos vocês utilizam?",
    a: "Trabalhamos exclusivamente com marcas renomadas no mercado global de automação residencial. Utilizamos plataformas de controle líderes mundiais, sistemas de iluminação inteligente premium, equipamentos de áudio e vídeo de alta fidelidade, câmeras e sensores de segurança de ponta e fechaduras biométricas com certificação internacional. Todos os equipamentos possuem garantia de 1 a 3 anos e utilizam protocolos abertos que garantem compatibilidade futura com novas tecnologias do mercado.",
  },
  {
    q: "Como funciona o controle por aplicativo e comandos de voz?",
    a: "Nossos sistemas funcionam com aplicativos intuitivos para iOS e Android, que exibem a planta baixa interativa da sua residência com controle de todos os dispositivos na palma da mão. A integração com assistentes de voz como Alexa, Google Assistente e Siri permite comandos simples e naturais como 'boa noite' para ativar todo o cenário noturno. O processamento local garante funcionamento mesmo sem internet. Complementamos com painéis touch elegantes nas paredes e oferecemos treinamento completo para toda a família durante a entrega do projeto.",
  },
  {
    q: "Vocês atendem em quais regiões de São Paulo?",
    a: "Atendemos toda a cidade de São Paulo — zona sul, norte, leste, oeste e centro — além da Região Metropolitana incluindo Guarulhos, Osasco, Santo André, São Bernardo, São Caetano, Diadema, Mauá, Barueri, Cotia e Santana de Parnaíba. No interior, cobrimos São José dos Campos, Jundiaí, Campinas, Sorocaba, Ribeirão Preto e região. No litoral, atendemos Santos, Guarujá, Praia Grande e Bertioga. Nossa equipe móvel desloca-se até sua residência para consultoria gratuita. Consulte disponibilidade pelo WhatsApp.",
  },
  {
    q: "Como funciona a integração entre diferentes dispositivos de automação?",
    a: "Nosso sistema funciona como um cérebro central que conecta todos os dispositivos através de protocolos como Zigbee, Z-Wave, Wi-Fi e Bluetooth Mesh. Essa plataforma traduz comandos entre dispositivos de diferentes fabricantes, criando uma experiência unificada. Por exemplo, ao ativar o cenário Cinema, o sistema automaticamente escurece as luzes, fecha as cortinas, liga o home theater, ajusta a temperatura e reduz o volume do som ambiente — tudo simultaneamente. Utilizamos hubs dedicados e realizamos testes rigorosos de integração.",
  },
  {
    q: "A automação residencial consome muita energia elétrica?",
    a: "Pelo contrário, a automação residencial é projetada para REDUZIR o consumo de energia. Sensores de presença desligam luzes e equipamentos em ambientes vazios, a programação inteligente otimiza o uso de cada dispositivo, e o gerenciamento da climatização pode reduzir o consumo do ar-condicionado em até 30%. LEDs inteligentes consomem até 85% menos que lâmpadas convencionais, e cortinas automatizadas bloqueiam o calor solar excessivo. O monitoramento em tempo real permite acompanhar o consumo de cada circuito. Nossos clientes reportam economia média de 20% a 40% na conta de luz, com retorno do investimento em 2 a 4 anos.",
  },
  {
    q: "Posso expandir o sistema de automação no futuro?",
    a: "Com certeza! A escalabilidade é um princípio fundamental dos nossos projetos. Utilizamos plataformas modulares que permitem adicionar novos dispositivos e funcionalidades a qualquer momento. Você pode começar com iluminação e segurança, por exemplo, e posteriormente incluir climatização, áudio multiroom, irrigação inteligente ou integração solar. Preparamos toda a infraestrutura para expansões futuras, e as atualizações de software são gratuitas e automáticas. Oferecemos consultoria gratuita para expansão e mantemos o histórico completo do seu projeto.",
  },
  {
    q: "Qual a diferença entre automação residencial e sistemas de segurança convencionais?",
    a: "A diferença principal está na abrangência, integração e inteligência. Sistemas tradicionais são limitados à vigilância básica com câmeras e alarmes isolados. A automação residencial cria um ecossistema completo onde segurança, iluminação, climatização e entretenimento trabalham em conjunto. Cenários automáticos são ativados por reconhecimento facial, os dispositivos aprendem seus hábitos, você controla tudo por voz e monitora remotamente pelo celular. Toda a comunicação é protegida por criptografia avançada, oferecendo um nível de proteção e conveniência incomparável aos sistemas convencionais.",
  },
  {
    q: "Vocês oferecem garantia e suporte técnico após a instalação?",
    a: "Oferecemos garantia de 24 meses em todos os equipamentos e 12 meses para serviços de instalação. Nosso suporte técnico funciona 7 dias por semana, das 8h às 22h, com atendimento remoto que resolve aproximadamente 80% dos chamados sem necessidade de visita presencial. Quando necessário, realizamos visitas técnicas em até 48 horas. As atualizações de software são gratuitas e automáticas, incluímos treinamento completo para a família, oferecemos planos de manutenção preventiva semestrais e entregamos um manual digital completo do seu sistema personalizado.",
  },
  {
    q: "A automação residencial funciona durante quedas de energia ou internet?",
    a: "Sim! Nossos sistemas são projetados com redundância. Utilizamos nobreaks e baterias de backup que mantêm os dispositivos essenciais funcionando por até 4 horas sem energia elétrica. O processamento local garante que cenários básicos como iluminação, fechaduras e alarmes continuem operando mesmo sem conexão à internet. Ao retornar a energia, o sistema restabelece automaticamente todas as configurações. Além disso, fechaduras inteligentes possuem chave mecânica de emergência e os portões contam com destravamento manual.",
  },
  {
    q: "Como a automação residencial aumenta a segurança da minha casa?",
    a: "A automação eleva a segurança a um nível incomparável com múltiplas camadas de proteção. Câmeras com inteligência artificial detectam movimentos suspeitos e enviam alertas instantâneos ao celular. Sensores de abertura em portas e janelas acionam alarmes sonoros e notificações. A simulação de presença programa luzes e cortinas para simular ocupação quando você viaja. Fechaduras biométricas registram cada acesso com data e horário. Sensores de fumaça, gás e alagamento acionam alertas e desligam dispositivos automaticamente, protegendo sua família 24 horas por dia.",
  },
  {
    q: "O que é uma casa inteligente com cenários personalizados?",
    a: "Cenários são rotinas automatizadas que ativam múltiplos dispositivos simultaneamente com um único comando. Por exemplo, o cenário 'Bom Dia' abre as cortinas gradualmente, liga as luzes na intensidade ideal, ajusta o ar-condicionado e inicia sua playlist favorita. O cenário 'Saindo de Casa' desliga todas as luzes, ativa o alarme, fecha cortinas e reduz a climatização. Você pode criar cenários ilimitados personalizados para cada momento do dia, ativados por voz, aplicativo, horário programado ou até pela sua localização GPS.",
  },
  {
    q: "Como funciona a automação de iluminação inteligente?",
    a: "A iluminação inteligente permite controlar intensidade, cor e temperatura de cada lâmpada individualmente ou por ambiente. Programações automáticas ajustam a luz conforme o horário — mais quente à noite para favorecer o sono, mais fria durante o dia para produtividade. Sensores de presença acendem e apagam luzes automaticamente, e sensores de luminosidade ajustam o brilho conforme a luz natural. Tudo pode ser controlado por voz, aplicativo ou painéis touch. A economia com iluminação LED inteligente pode chegar a 85% comparada com lâmpadas convencionais.",
  },
  {
    q: "É possível automatizar cortinas e persianas?",
    a: "Sim, a motorização de cortinas e persianas é um dos serviços mais procurados. Instalamos motores silenciosos e compactos compatíveis com praticamente todos os tipos de cortinas — rolo, romana, painel, persiana horizontal e vertical. A programação por horário permite que as cortinas abram com o nascer do sol e fechem ao entardecer. Sensores de luminosidade e temperatura ajustam automaticamente para bloquear calor excessivo, reduzindo o uso de ar-condicionado em até 25%. O controle é feito por voz, aplicativo ou controle remoto dedicado.",
  },
  {
    q: "Como funciona o sistema de som multiroom?",
    a: "O áudio multiroom distribui música de alta qualidade por todos os ambientes da casa de forma independente. Cada cômodo pode tocar uma música diferente ou todos podem ser sincronizados para uma mesma playlist. Utilizamos caixas de som embutidas no teto ou parede, soundbars premium e subwoofers discretos. A integração com Spotify, Apple Music, Deezer e rádios online é nativa. O controle é feito por voz, aplicativo ou painéis na parede. Em festas, o modo 'Party' sincroniza toda a casa com equalizações personalizadas por ambiente.",
  },
  {
    q: "A automação residencial valoriza meu imóvel?",
    a: "Sim, significativamente! Estudos de mercado indicam que imóveis com automação residencial podem valorizar de 10% a 25% em relação a imóveis similares sem tecnologia. Compradores e locatários estão cada vez mais buscando casas inteligentes pelo conforto e economia que oferecem. A infraestrutura de automação é considerada uma benfeitoria permanente do imóvel. Além da valorização direta, a economia de energia proporcionada pelo sistema reduz os custos operacionais da residência, tornando-a ainda mais atrativa no mercado imobiliário.",
  },
  {
    q: "Quanto tempo leva para instalar um sistema completo de automação?",
    a: "O prazo varia conforme a complexidade do projeto. Para apartamentos com automação básica (iluminação e cortinas), a instalação leva de 1 a 2 dias úteis. Projetos de médio porte com múltiplos sistemas integrados ficam entre 3 e 7 dias úteis. Residências de alto padrão com automação completa podem levar de 10 a 20 dias úteis. Em reformas e construções novas, trabalhamos em paralelo com outros profissionais para otimizar o cronograma. Toda instalação é agendada para minimizar o impacto na rotina da família, e realizamos limpeza completa ao final.",
  },
  {
    q: "Como faço para solicitar um orçamento de automação residencial?",
    a: "O processo é simples e sem compromisso! Você pode solicitar um orçamento gratuito pelo WhatsApp, telefone ou formulário do site. Nossa equipe técnica agenda uma visita presencial à sua residência para entender suas necessidades, avaliar a infraestrutura existente e apresentar as melhores soluções. Em até 48 horas após a visita, enviamos uma proposta detalhada com escopo do projeto, equipamentos recomendados, prazo de instalação e valor do investimento com opções de parcelamento. A consultoria inicial é totalmente gratuita e sem compromisso.",
  },
];

const FAQ = () => {
  return (
    <section id="faq" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 max-w-4xl">
        <h2 className="text-clamp-h2 text-foreground text-center mb-4">Perguntas Frequentes</h2>
        <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
        <p className="text-muted-foreground text-center mb-12">
          Respostas para as dúvidas mais comuns sobre automação residencial.
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
            href="https://wa.me/5511975596711?text=Gostaria de tirar mais dúvidas sobre automação residencial"
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
};

export default FAQ;
