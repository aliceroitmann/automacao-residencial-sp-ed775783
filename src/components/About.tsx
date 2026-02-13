const About = () => (
  <section id="sobre" className="py-20 bg-secondary">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 text-foreground text-center mb-4">Sobre a Automação Residencial Avançada</h2>
      <div className="w-[70px] h-1 bg-accent mx-auto mb-4" />
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Referência em soluções inteligentes para residências em toda a região de São Paulo.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-5 text-muted-foreground leading-relaxed text-sm">
          <p>
            Somos uma <a href="https://automacaoresidencial.app.br/" target="_blank" rel="noopener" className="text-primary-vibrant hover:underline font-medium">empresa especializada em soluções inteligentes personalizadas para residências</a>, com mais de 15 anos de experiência no mercado paulista. Reconhecida como referência em automação residencial em São Paulo, nossa trajetória é marcada pela entrega de projetos que combinam inovação tecnológica, estética sofisticada e funcionalidade excepcional.
          </p>
          <p>
            Nossa missão é transformar cada residência em um lar inteligente que proporciona conforto absoluto, segurança reforçada e economia expressiva de energia. Desenvolvemos projetos sob medida que respeitam a identidade de cada família, adaptando a tecnologia ao cotidiano dos moradores.
          </p>
          <p>
            Contamos com uma equipe multidisciplinar de engenheiros eletrônicos, técnicos certificados pelas principais fabricantes globais e designers especializados em integração tecnológica. Investimos constantemente em capacitação e mantemos parcerias estratégicas com as maiores marcas mundiais de automação.
          </p>
          <p>
            Nossos diferenciais incluem atendimento consultivo desde o primeiro contato, visualização 3D do projeto antes da execução, equipe própria de instalação, garantia estendida em todos os equipamentos, suporte técnico disponível 7 dias por semana e treinamento completo para toda a família.
          </p>
          <p>
            Atuamos estrategicamente em toda a capital paulista, região metropolitana, principais cidades do interior — como São José dos Campos, Campinas e Ribeirão Preto — e litoral de São Paulo, incluindo Santos e Guarujá.
          </p>
          <p>
            Atendemos os mais variados perfis de residências: apartamentos de luxo, casas de alto padrão, condomínios fechados e reformas completas. Cada projeto recebe dedicação exclusiva, contribuindo significativamente para a valorização do imóvel no mercado.
          </p>
          <p>
            Entre em contato conosco pelo WhatsApp <strong>(11) 97559-6711</strong> e agende uma visita técnica gratuita. Será um prazer apresentar como a automação pode revolucionar o seu dia a dia.
          </p>
          <a
            href="https://wa.me/5511975596711?text=Gostaria de saber mais sobre a Automação Residencial Avançada"
            rel="nofollow"
            target="_blank"
            className="inline-block gradient-cta text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform mt-4"
          >
            ORÇAMENTO PELO WHATSAPP - AQUI!
          </a>
        </div>
        <div className="rounded-2xl h-[350px] lg:h-[450px] overflow-hidden">
          <img
            src="/images/about-living-room.webp"
            alt="Sala de estar ampla com automação residencial inteligente em São Paulo"
            loading="lazy"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
    </div>
  </section>
);

export default About;
