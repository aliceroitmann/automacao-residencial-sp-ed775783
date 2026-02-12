import { useState } from "react";
import { Plus, Minus } from "lucide-react";

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
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

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
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between bg-primary text-white p-5 text-left font-semibold text-sm md:text-base"
              >
                <span>{faq.q}</span>
                <span className="gradient-cta w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ml-3">
                  {open === i ? <Minus size={16} /> : <Plus size={16} />}
                </span>
              </button>
              {open === i && (
                <div className="bg-card p-5 text-muted-foreground text-sm leading-relaxed">
                  {faq.a}
                </div>
              )}
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
