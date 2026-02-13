const footerNav = [
  { label: "Nossos Serviços", href: "#servicos" },
  { label: "Nosso Portfolio", href: "#portfolio" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const footerServices = [
  "Automação de Iluminação",
  "Cortinas Motorizadas",
  "Áudio e Vídeo Multiroom",
  "Home Theater e Cinema",
  "Climatização Inteligente",
  "Segurança Eletrônica",
  "Controle de Acesso",
  "Cenários Personalizados",
  "Internet Cabeada e Wi-Fi",
  "Assistente de Voz",
  "Automação para AIRBNB",
  "Automação para BOOKING",
  "Automação de Piscina e Jardim",
  "Energia Solar com Automação",
];

const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
  e.preventDefault();
  const el = document.querySelector(href);
  if (el) {
    const top = el.getBoundingClientRect().top + window.scrollY - 80;
    window.scrollTo({ top, behavior: "smooth" });
  }
};

const Footer = () => (
  <footer className="bg-primary-dark text-white pt-16 pb-8">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
        {/* About */}
        <div>
          <h3 className="font-poppins font-bold text-lg mb-1">Automação Residencial Avançada</h3>
          <div className="w-10 h-1 bg-accent mb-4" />
          <p className="text-sm opacity-80 leading-relaxed">
            Somos especialistas em transformar residências em lares inteligentes utilizando tecnologia de ponta. Oferecemos conforto, segurança e praticidade para toda a região de São Paulo, com mais de 15 anos de experiência e centenas de projetos entregues com excelência.
          </p>
          <div className="flex gap-3 mt-4">
            {["📱", "▶️", "📘", "in"].map((icon, i) => (
              <span
                key={i}
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-sm hover:bg-accent hover:-translate-y-1 transition-all cursor-pointer"
              >
                {icon}
              </span>
            ))}
          </div>
        </div>

        {/* Nav */}
        <div>
          <h3 className="font-poppins font-bold text-lg mb-1">Navegação</h3>
          <div className="w-10 h-1 bg-accent mb-4" />
          <ul className="space-y-2">
            {footerNav.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent hover:pl-1 transition-all"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-poppins font-bold text-lg mb-1">Nossos Serviços</h3>
          <div className="w-10 h-1 bg-accent mb-4" />
          <ul className="space-y-2">
            {footerServices.map((s) => (
              <li key={s}>
                <a
                  href="#servicos"
                  onClick={(e) => handleClick(e, "#servicos")}
                  className="text-sm opacity-80 hover:opacity-100 hover:text-accent hover:pl-1 transition-all"
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="font-poppins font-bold text-lg mb-1">Entre em Contato</h3>
          <div className="w-10 h-1 bg-accent mb-4" />
          <ul className="space-y-3 text-sm opacity-80">
            <li>📍 São Paulo - SP, Brasil</li>
            <li>
              📱{" "}
              <a href="tel:+5511975596711" className="hover:text-accent transition-colors">
                (11) 97559-6711
              </a>
            </li>
            <li>✉️{" "}
              <a href="mailto:automacaoresidencialssp@gmail.com" className="hover:text-accent transition-colors">
                automacaoresidencialssp@gmail.com
              </a>
            </li>
            <li>🌐{" "}
              <a href="https://automacaoresidencial.app.br/" target="_blank" rel="noopener" className="hover:text-accent transition-colors">
                automacaoresidencial.app.br
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <p className="font-semibold text-sm mb-1">Área de Atendimento:</p>
            <p className="text-xs opacity-70 leading-relaxed">
              São Paulo Capital (todos os bairros), Grande SP (Guarulhos, Osasco, ABC), Interior (SJC, Jundiaí, Campinas, Ribeirão Preto), Litoral (Santos, Guarujá, Praia Grande).
            </p>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10 pt-6 text-center text-xs opacity-70">
        <p>2026 - Automação Residencial Avançada.</p>
        <p className="mt-1">
          Criação e Otimização SEO -{" "}
          <a
            href="https://www.fernandocoutinho.com/"
            rel="dofollow"
            target="_blank"
            className="text-accent underline"
          >
            Agência Mentoria SEO
          </a>{" "}
          | Política de Privacidade | Termos de Uso | Sitemap
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
