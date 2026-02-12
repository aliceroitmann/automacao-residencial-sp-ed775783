import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  benefits: string[];
  whatsappMsg: string;
  externalLink?: string;
}

const services: ServiceCard[] = [
  {
    icon: "💡",
    title: "Automação de Iluminação Inteligente",
    description:
      "Tenha controle absoluto sobre cada ponto de luz da sua residência com nossa automação de iluminação inteligente. Ajuste intensidade, temperatura de cor e crie cenários personalizados como Despertar Suave, Modo Cinema e Jantar Romântico. Nossa tecnologia LED de última geração proporciona economia de 65% a 70% na conta de energia, enquanto sensores de presença e movimento garantem que nenhuma lâmpada fique acesa desnecessariamente. Controle tudo pelo smartphone, comandos de voz ou geolocalização, com integração perfeita à decoração do seu ambiente em São Paulo.",
    benefits: [
      "Controle por smartphone e comandos de voz",
      "Cenários ilimitados personalizados",
      "Economia 65-70% energia elétrica",
      "Integração completa com casa inteligente",
      "Sensores de presença automáticos",
      "Temperatura de cor ajustável",
      "Programação de horários",
      "Simulação de presença",
    ],
    whatsappMsg: "Gostaria de um orçamento para Automação de Iluminação Inteligente",
    externalLink: "https://automacaoresidencial.app.br/servicos/automacao-iluminacao/",
  },
  {
    icon: "🪟",
    title: "Controle de Cortinas e Persianas Motorizadas",
    description:
      "Automatize suas cortinas e persianas com motores silenciosos e ultraduráveis, compatíveis com os mais diversos modelos de tecidos e materiais. Programe a abertura e fechamento conforme a posição do sol, proteja seus móveis contra raios UV e integre tudo com sensores meteorológicos inteligentes. Controle individualmente ou em grupo por aplicativo e voz, com baterias de longa duração e controles manuais de emergência. Instalação discreta que preserva a elegância dos seus ambientes.",
    benefits: [
      "Automação conforme horário do sol",
      "Controle individual ou em grupo",
      "Sensores meteorológicos integrados",
      "Integração com iluminação/climatização",
    ],
    whatsappMsg: "Gostaria de um orçamento para Controle de Cortinas e Persianas Motorizadas",
    externalLink: "https://automacaoresidencial.app.br/servicos/automacao-persianas-e-cortinas/",
  },
  {
    icon: "🎵",
    title: "Sistema de Áudio e Vídeo Multiroom",
    description:
      "Leve música e entretenimento de alta fidelidade para todos os ambientes da sua casa com nosso sistema multiroom. Controle o volume individualmente em cada cômodo, acesse plataformas como Spotify, Apple Music e Deezer, e desfrute de alto-falantes embutidos com design elegante. Monte seu home theater dos sonhos com qualidade 4K e Dolby Atmos, projetores e telas motorizadas. Sincronize áudio com iluminação para experiências imersivas e gerencie tudo por um aplicativo intuitivo.",
    benefits: [
      "Controle individual por ambiente",
      "Streaming todas plataformas",
      "Home theater Dolby Atmos 4K",
      "App centralizado intuitivo",
    ],
    whatsappMsg: "Gostaria de um orçamento para Sistema de Áudio e Vídeo Multiroom",
    externalLink: "https://automacaoresidencial.app.br/servicos/som-ambiente-automacao/",
  },
  {
    icon: "🎬",
    title: "Home Theater e Cinema em Casa",
    description:
      "Transforme um cômodo da sua residência em uma verdadeira sala de cinema com nosso projeto de home theater completo. Projetores 4K de última geração, telas motorizadas, sistemas de som surround Dolby Atmos 7.1.4 e tratamento acústico profissional. Integração total com automação de iluminação, cortinas e climatização para criar a experiência cinematográfica perfeita com um único comando. Projetos personalizados para salas dedicadas ou ambientes integrados.",
    benefits: [
      "Projetor 4K e tela motorizada",
      "Som surround Dolby Atmos",
      "Tratamento acústico profissional",
      "Integração total com automação",
    ],
    whatsappMsg: "Gostaria de um orçamento para Home Theater e Cinema em Casa",
    externalLink: "https://automacaoresidencial.app.br/servicos/home-theater-cinema/",
  },
  {
    icon: "❄️",
    title: "Controle de Climatização Inteligente",
    description:
      "Alcance o conforto térmico ideal em cada ambiente com gerenciamento centralizado de ar-condicionado e aquecedores. Compatível com as principais marcas do mercado, nosso sistema utiliza sensores de temperatura e umidade para ajuste automático e economia significativa de energia. Crie cenários como Modo Dormir, Modo Ausente e Modo Chegada. Monitore o consumo em tempo real pelo aplicativo e receba alertas inteligentes de manutenção preventiva.",
    benefits: [
      "Controle remoto por ambiente",
      "Programação para economia",
      "Sensores inteligentes",
      "Integração com cenários",
    ],
    whatsappMsg: "Gostaria de um orçamento para Controle de Climatização Inteligente",
    externalLink: "https://automacaoresidencial.app.br/servicos/automacao-de-ar-condicionado/",
  },
  {
    icon: "🔒",
    title: "Segurança Eletrônica Residencial",
    description:
      "Proteja sua família 24 horas por dia com câmeras HD com visão noturna, detecção de movimento por inteligência artificial e gravação em nuvem criptografada. Sensores perimetrais em portas e janelas, alarme de 120dB e alertas instantâneos no smartphone com imagens em tempo real. Sistema com backup de bateria por 24 horas e conexão 4G integrada para funcionar mesmo sem internet, além de simulação inteligente de presença quando você viaja.",
    benefits: [
      "Câmeras HD gravação nuvem",
      "Sensores abertura/movimento",
      "Alarme com notificações real-time",
      "Simulação de presença",
    ],
    whatsappMsg: "Gostaria de um orçamento para Segurança Eletrônica Residencial",
    externalLink: "https://automacaoresidencial.app.br/servicos/sistema-de-seguranca/",
  },
  {
    icon: "🚪",
    title: "Controle de Acesso Inteligente",
    description:
      "Substitua chaves tradicionais por fechaduras biométricas com reconhecimento facial, senhas personalizadas e abertura por aplicativo. Utilize tags RFID, reconhecimento de placas por OCR e crie senhas temporárias para visitantes. Acesse o histórico completo de entradas e saídas, integre portões com iluminação e ar-condicionado automaticamente, e conte com interfones de vídeo em HD. Toda a comunicação protegida por criptografia avançada de nível bancário.",
    benefits: [
      "Fechaduras biométricas/senhas",
      "Controle remoto portões",
      "Senhas temporárias visitantes",
      "Histórico completo com notificações",
    ],
    whatsappMsg: "Gostaria de um orçamento para Controle de Acesso Inteligente",
    externalLink: "https://automacaoresidencial.app.br/servicos/controle-de-acesso/",
  },
  {
    icon: "🎭",
    title: "Cenários Personalizados e Integração",
    description:
      "Os cenários são o coração da automação, permitindo controlar múltiplos dispositivos com um único comando. Configure o Modo Bom Dia para abrir cortinas, acender luzes, ligar a cafeteira e informar o clima e trânsito. O Modo Cinema ajusta iluminação, cortinas, som surround e temperatura. O Modo Jantar cria atmosfera intimista com luz e música. E o Modo Ausente ativa toda a segurança com simulação de presença. Controle por aplicativo, painéis touch ou voz com Alexa, Google e Siri.",
    benefits: [
      "Cenários Bom Dia/Cinema/Jantar/Ausente",
      "Controle app/touch/voz",
      "Integração completa sistemas",
      "Interfaces personalizadas",
    ],
    whatsappMsg: "Gostaria de um orçamento para Cenários Personalizados e Integração",
  },
  {
    icon: "📶",
    title: "Internet Cabeada e Wi-Fi de Alta Performance",
    description:
      "Construímos a infraestrutura de rede que sua casa inteligente merece. Cabeamento Cat 6A ou fibra óptica para conexões ultrarrápidas, Wi-Fi Mesh com cobertura total sem áreas mortas, tecnologia Wi-Fi 6/6E com velocidades de até 10 Gbps e baixa latência para jogos e streaming 4K/8K. Redes segregadas para dispositivos IoT e uso pessoal, QoS para priorização de tráfego, controle parental integrado e instalação limpa mesmo em retrofit, utilizando as melhores marcas do mercado.",
    benefits: [
      "Cabeamento Cat 6A/fibra óptica",
      "Wi-Fi Mesh sem áreas mortas",
      "Wi-Fi 6/6E velocidades ultra",
      "Redes segregadas segurança",
    ],
    whatsappMsg: "Gostaria de um orçamento para Internet Cabeada e Wi-Fi",
    externalLink: "https://automacaoresidencial.app.br/servicos/internet-cabeada-e-wi-fi/",
  },
  {
    icon: "🗣️",
    title: "Assistente de Voz Integrado",
    description:
      "Controle toda a sua casa inteligente com comandos de voz naturais através de assistentes como Alexa, Google Assistente e Siri. Configure rotinas personalizadas como 'Boa noite' para trancar portas, apagar luzes e ativar alarmes. Integração com todos os dispositivos de automação, controle de música, informações de clima e trânsito, e muito mais. Instalação de alto-falantes inteligentes estrategicamente posicionados para cobertura em todos os ambientes.",
    benefits: [
      "Alexa, Google e Siri integrados",
      "Rotinas por comando de voz",
      "Cobertura em todos os ambientes",
      "Integração total com automação",
    ],
    whatsappMsg: "Gostaria de um orçamento para Assistente de Voz Integrado",
    externalLink: "https://automacaoresidencial.app.br/servicos/assistente-de-voz/",
  },
  {
    icon: "🏠",
    title: "Automação para AIRBNB",
    description:
      "Maximize a rentabilidade do seu imóvel no Airbnb com automação inteligente. Check-in e check-out automatizados com fechaduras digitais e senhas temporárias por reserva. Controle remoto de climatização, iluminação e limpeza programada. Monitoramento de ruído para evitar festas não autorizadas e economia de energia entre estadias. Gestão simplificada de múltiplos imóveis pelo smartphone com relatórios de consumo e ocupação.",
    benefits: [
      "Check-in/out automatizado",
      "Senhas temporárias por reserva",
      "Monitoramento de ruído",
      "Gestão remota múltiplos imóveis",
    ],
    whatsappMsg: "Gostaria de um orçamento para Automação para AIRBNB",
    externalLink: "https://automacaoresidencial.app.br/servicos/automacao-airbnb/",
  },
  {
    icon: "🏨",
    title: "Automação para BOOKING",
    description:
      "Otimize a gestão do seu imóvel no Booking.com com soluções de automação dedicadas. Controle de acesso inteligente com códigos únicos por hóspede, climatização automática antes do check-in, iluminação de boas-vindas e monitoramento remoto completo. Economia de energia quando o imóvel está desocupado, alertas de manutenção preventiva e integração com plataformas de gestão de reservas para uma operação profissional e eficiente.",
    benefits: [
      "Códigos únicos por hóspede",
      "Climatização pré-check-in",
      "Economia entre reservas",
      "Integração com gestão de reservas",
    ],
    whatsappMsg: "Gostaria de um orçamento para Automação para BOOKING",
    externalLink: "https://automacaoresidencial.app.br/servicos/automacao-booking/",
  },
  {
    icon: "🏊",
    title: "Automação de Piscina e Jardim",
    description:
      "Automatize o cuidado com sua piscina e jardim com tecnologia inteligente. Controle de bombas, filtros e dosagem de produtos químicos da piscina pelo smartphone. Irrigação automatizada do jardim com sensores de umidade do solo e previsão meteorológica. Iluminação paisagística programável, controle de aquecimento da piscina e monitoramento da qualidade da água em tempo real. Economia de água e energia com programação inteligente.",
    benefits: [
      "Controle de piscina pelo app",
      "Irrigação inteligente com sensores",
      "Iluminação paisagística automatizada",
      "Monitoramento qualidade da água",
    ],
    whatsappMsg: "Gostaria de um orçamento para Automação de Piscina e Jardim",
    externalLink: "https://automacaoresidencial.app.br/automacao-piscina-e-jardim/",
  },
  {
    icon: "☀️",
    title: "Energia Solar com Automação",
    description:
      "Combine energia solar fotovoltaica com automação residencial para máxima eficiência energética. Monitoramento em tempo real da geração e consumo de energia, gestão inteligente de cargas para priorizar o uso da energia solar, integração com baterias de armazenamento e controle automatizado de dispositivos conforme a disponibilidade de energia. Reduza sua conta de luz em até 95% e acompanhe todo o sistema pelo smartphone.",
    benefits: [
      "Monitoramento geração em tempo real",
      "Gestão inteligente de cargas",
      "Integração com baterias",
      "Redução de até 95% na conta de luz",
    ],
    whatsappMsg: "Gostaria de um orçamento para Energia Solar com Automação",
    externalLink: "https://automacaoresidencial.app.br/servicos/energia-solar-com-automacao/",
  },
];

const ServiceCardComponent = ({ service }: { service: ServiceCard }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="bg-card rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden flex flex-col">
      <div className="gradient-card-1 h-[180px] flex items-center justify-center text-6xl">
        {service.icon}
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-clamp-h3 text-foreground mb-3">
          {service.externalLink ? (
            <a href={service.externalLink} target="_blank" rel="noopener" className="hover:text-primary-vibrant transition-colors">
              {service.title}
            </a>
          ) : (
            service.title
          )}
        </h3>
        <p className={`text-muted-foreground text-sm leading-relaxed mb-4 ${!expanded ? "line-clamp-4" : ""}`}>
          {service.description}
        </p>
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-primary-vibrant text-sm font-medium flex items-center gap-1 mb-4 hover:underline"
        >
          {expanded ? "Ver menos" : "Ver mais"} {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        {expanded && (
          <ul className="space-y-2 mb-4">
            {service.benefits.map((b) => (
              <li key={b} className="text-sm text-foreground flex items-start gap-2">
                <span className="text-success mt-0.5">✓</span> {b}
              </li>
            ))}
          </ul>
        )}
        {service.externalLink && (
          <a
            href={service.externalLink}
            target="_blank"
            rel="noopener"
            className="text-primary-vibrant text-sm font-medium mb-4 inline-block hover:underline"
          >
            Saiba mais sobre este serviço →
          </a>
        )}
        <a
          href={`https://wa.me/5511975596711?text=${encodeURIComponent(service.whatsappMsg)}`}
          rel="nofollow"
          target="_blank"
          className="mt-auto gradient-cta text-white font-bold text-center py-3 rounded-full hover:scale-[1.02] transition-transform"
        >
          ORÇAMENTO PELO WHATSAPP - AQUI!
        </a>
      </div>
    </div>
  );
};

const Services = () => (
  <section id="servicos" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-clamp-h2 text-foreground mb-4">
          Nossos Serviços de Automação Residencial Avançada
        </h2>
        <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Soluções completas e integradas para transformar sua residência em um lar verdadeiramente inteligente, com tecnologia de ponta e atendimento personalizado.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((s) => (
          <ServiceCardComponent key={s.title} service={s} />
        ))}
      </div>
    </div>
  </section>
);

export default Services;
