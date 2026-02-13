const footerNav = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Casas de Alto Padrão", href: "#casas" },
  { label: "Apartamentos", href: "#apartamentos" },
  { label: "Sobre Nós", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Perguntas Frequentes", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const footerServices = [
  { label: "Automação de Iluminação", url: "https://automacaoresidencial.app.br/servicos/automacao-iluminacao/" },
  { label: "Home Theater e Cinema", url: "https://automacaoresidencial.app.br/servicos/home-theater-cinema/" },
  { label: "Som Ambiente", url: "https://automacaoresidencial.app.br/servicos/som-ambiente-automacao/" },
  { label: "Sistema de Segurança", url: "https://automacaoresidencial.app.br/servicos/sistema-de-seguranca/" },
  { label: "Ar Condicionado", url: "https://automacaoresidencial.app.br/servicos/automacao-de-ar-condicionado/" },
  { label: "Controle de Acesso", url: "https://automacaoresidencial.app.br/servicos/controle-de-acesso/" },
  { label: "Automação Airbnb", url: "https://automacaoresidencial.app.br/servicos/automacao-airbnb/" },
  { label: "Automação Booking", url: "https://automacaoresidencial.app.br/servicos/automacao-booking/" },
  { label: "Persianas e Cortinas", url: "https://automacaoresidencial.app.br/servicos/automacao-persianas-e-cortinas/" },
  { label: "Internet e Wi-Fi", url: "https://automacaoresidencial.app.br/servicos/internet-cabeada-e-wi-fi/" },
  { label: "Assistente de Voz", url: "https://automacaoresidencial.app.br/servicos/assistente-de-voz/" },
  { label: "Piscina e Jardim", url: "https://automacaoresidencial.app.br/automacao-piscina-e-jardim/" },
  { label: "Energia Solar", url: "https://automacaoresidencial.app.br/servicos/energia-solar-com-automacao/" },
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
        <div>
          <h3 className="font-poppins font-bold text-lg mb-1">Automação Residencial em Indaiatuba</h3>
          <div className="w-10 h-1 bg-accent mb-4" />
          <p className="text-sm opacity-80 leading-relaxed">
            Especialistas em automação de iluminação inteligente residencial. Transformamos ambientes com tecnologia de ponta, proporcionando conforto, economia e sofisticação para Indaiatuba e toda a região.
          </p>
        </div>

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

        <div>
          <h3 className="font-poppins font-bold text-lg mb-1">Nossos Serviços</h3>
          <div className="w-10 h-1 bg-accent mb-4" />
          <ul className="space-y-2">
            {footerServices.map((s) => (
              <li key={s.label}>
                <a href={s.url} target="_blank" rel="dofollow" className="text-sm opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-poppins font-bold text-lg mb-1">Entre em Contato</h3>
          <div className="w-10 h-1 bg-accent mb-4" />
          <ul className="space-y-3 text-sm opacity-80">
            <li>📍 Indaiatuba - SP, Brasil</li>
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
              <a href="https://automacaoresidencial.app.br/" target="_blank" rel="dofollow" className="hover:text-accent transition-colors">
                automacaoresidencial.app.br
              </a>
            </li>
          </ul>
          <div className="mt-4">
            <p className="font-semibold text-sm mb-1">Área de Atendimento:</p>
            <p className="text-xs opacity-70 leading-relaxed">
              Indaiatuba, Itu, Campinas, Salto, Americana, Sumaré, Hortolândia, Paulínia, Jaguariúna, Holambra, Vinhedo e Valinhos.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 pt-6 text-center text-xs opacity-70">
        <p>2026 - Automação Residencial em Indaiatuba. Todos os direitos reservados.</p>
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
          | Política de Privacidade | Termos de Uso
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;