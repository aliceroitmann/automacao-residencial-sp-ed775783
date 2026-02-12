const Portfolio = () => (
  <section id="portfolio" className="py-20 gradient-hero text-white text-center">
    <div className="container mx-auto px-4">
      <h2 className="text-clamp-h2 font-poppins font-bold mb-4">Veja Nossos Projetos de Automação</h2>
      <p className="opacity-90 mb-8 max-w-xl mx-auto">
        Conheça alguns dos nossos trabalhos mais recentes transformando residências em lares inteligentes por toda São Paulo.
      </p>
      <img
        src="/images/portfolio.webp"
        alt="Projeto de Automação Residencial em Apartamento de Alto Padrão em São Paulo"
        loading="lazy"
        className="rounded-2xl shadow-2xl max-w-[800px] w-full mx-auto mb-8"
      />
      <a
        href="https://wa.me/5511975596711?text=Gostaria de ver mais projetos de automação residencial"
        rel="nofollow"
        target="_blank"
        className="inline-block bg-primary-vibrant text-white font-bold px-8 py-4 rounded-full hover:scale-[1.02] transition-transform"
      >
        SOLICITE SEU ORÇAMENTO
      </a>
    </div>
  </section>
);

export default Portfolio;
