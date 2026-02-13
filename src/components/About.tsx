const WA_LINK = "https://api.whatsapp.com/send?phone=5511975596711&text=Venho+pelo+site+Automacao+Residencial+LB+Oficial.+Quero+informacoes+sobre+Orcamentos+e+seus+servicos.+Podemos+conversar?";

const About = () => (
  <section id="sobre" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">Sobre a Automação Residencial em Indaiatuba</h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Referência em automação de iluminação inteligente para residências em Indaiatuba e toda a região.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
          <p>
            A <a href="https://automacaoresidencial.app.br/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline font-medium">Automação Residencial em Indaiatuba</a> é uma empresa especializada em automação de iluminação residencial, com mais de 12 anos de experiência no mercado. Reconhecida como referência em iluminação inteligente em Indaiatuba SP, nossa trajetória é marcada pela entrega de projetos que combinam inovação tecnológica, estética sofisticada e funcionalidade excepcional.
          </p>
          <p>
            Nossa missão é transformar cada ambiente através da luz — criando atmosferas personalizadas que elevam o conforto, a economia energética e a sofisticação de casas e apartamentos em Indaiatuba e região.
          </p>
          <p>
            Contamos com uma equipe multidisciplinar de engenheiros eletrônicos, técnicos certificados e designers especializados em integração de iluminação com arquitetura moderna. Cada projeto é desenvolvido sob medida, respeitando a identidade do espaço e as preferências dos moradores.
          </p>
          <p>
            Nosso atendimento consultivo abrange desde a análise inicial do ambiente até o suporte pós-instalação, com garantia estendida em todos os equipamentos e treinamento completo para toda a família. Trabalhamos com as melhores marcas globais de automação de iluminação.
          </p>
          <p>
            Atuamos em Indaiatuba, Itu, Campinas, Salto, Americana, Sumaré, Hortolândia, Paulínia, Jaguariúna, Holambra, Vinhedo e Valinhos.
          </p>
          <p className="text-xs">
            Conheça também nossos outros serviços:{" "}
            <a href="https://automacaoresidencial.app.br/servicos/automacao-iluminacao/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Automação de Iluminação</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/home-theater-cinema/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Home Theater</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/som-ambiente-automacao/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Som Ambiente</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/sistema-de-seguranca/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Sistema de Segurança</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/automacao-de-ar-condicionado/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Ar Condicionado</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/controle-de-acesso/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Controle de Acesso</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/automacao-airbnb/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Automação Airbnb</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/automacao-booking/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Automação Booking</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/automacao-persianas-e-cortinas/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Persianas e Cortinas</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/internet-cabeada-e-wi-fi/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Internet e Wi-Fi</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/assistente-de-voz/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Assistente de Voz</a>,{" "}
            <a href="https://automacaoresidencial.app.br/automacao-piscina-e-jardim/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Piscina e Jardim</a>,{" "}
            <a href="https://automacaoresidencial.app.br/servicos/energia-solar-com-automacao/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline">Energia Solar</a>.
          </p>
          <a
            href={WA_LINK}
            rel="nofollow"
            target="_blank"
            className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform mt-4"
          >
            AGENDAR VISITA TÉCNICA GRATUITA
          </a>
        </div>
        <div className="rounded-2xl h-[350px] lg:h-[450px] overflow-hidden">
          <img
            src="/images/about-living-room.webp"
            alt="Sala de estar com iluminação inteligente automatizada em Indaiatuba"
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;