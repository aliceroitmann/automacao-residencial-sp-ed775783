const About = () => (
  <section id="sobre" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">Sobre a Automations São Paulo</h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Referência em automação de iluminação inteligente para residências em toda a região de São Paulo.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
          <p>
            A <a href="https://automacaoresidencial.app.br/" target="_blank" rel="dofollow" className="text-primary-vibrant hover:underline font-medium">Automations São Paulo</a> é uma empresa especializada em automação de iluminação residencial, com mais de 12 anos de experiência no mercado paulista. Reconhecida como referência em iluminação inteligente em São Paulo, nossa trajetória é marcada pela entrega de projetos que combinam inovação tecnológica, estética sofisticada e funcionalidade excepcional.
          </p>
          <p>
            Nossa missão é transformar cada ambiente através da luz — criando atmosferas personalizadas que elevam o conforto, a economia energética e a sofisticação de casas e apartamentos em toda São Paulo e região metropolitana.
          </p>
          <p>
            Contamos com uma equipe multidisciplinar de engenheiros eletrônicos, técnicos certificados e designers especializados em integração de iluminação com arquitetura moderna. Cada projeto é desenvolvido sob medida, respeitando a identidade do espaço e as preferências dos moradores.
          </p>
          <p>
            Nosso atendimento consultivo abrange desde a análise inicial do ambiente até o suporte pós-instalação, com garantia estendida em todos os equipamentos e treinamento completo para toda a família. Trabalhamos com as melhores marcas globais de automação de iluminação.
          </p>
          <p>
            Atuamos em toda a capital paulista, região metropolitana, ABC Paulista, principais cidades do interior — como Campinas, São José dos Campos e Jundiaí — e litoral de São Paulo, incluindo Santos e Guarujá.
          </p>
          <a
            href="https://wa.me/5511975596711?text=Gostaria de saber mais sobre a Automations São Paulo"
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
            alt="Sala de estar com iluminação inteligente automatizada em São Paulo"
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;