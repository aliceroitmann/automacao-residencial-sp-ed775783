import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const WA_LINK = "https://api.whatsapp.com/send?phone=5511975596711&text=Venho+pelo+site+Automacao+Residencial+LB+Oficial.+Quero+informacoes+sobre+Orcamentos+e+seus+servicos.+Podemos+conversar?";

const navLinks = [
  { label: "Benefícios", href: "#beneficios" },
  { label: "Casas", href: "#casas" },
  { label: "Apartamentos", href: "#apartamentos" },
  { label: "Processo", href: "#processo" },
  { label: "Sobre", href: "#sobre" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 80;
      window.scrollTo({ top, behavior: "smooth" });
    }
    setMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-300 ${
        scrolled ? "bg-primary-dark shadow-lg" : "bg-transparent"
      }`}
      style={{ height: "80px" }}
    >
      <div className="container mx-auto px-4 h-full flex items-center justify-between">
        <a href="#" className="font-poppins font-bold text-xl md:text-2xl text-white">
          Automação Residencial <span className="text-accent">Indaiatuba</span>
        </a>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-white hover:text-accent transition-colors duration-200 text-sm font-medium relative after:content-[''] after:absolute after:w-full after:scale-x-0 after:h-0.5 after:bottom-0 after:left-0 after:bg-accent after:origin-bottom-right after:transition-transform after:duration-300 hover:after:scale-x-100 hover:after:origin-bottom-left"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <span className="text-white flex items-center gap-1 text-sm">
            <Phone size={14} /> (11) 97559-6711
          </span>
          <a
            href={WA_LINK}
            rel="nofollow"
            target="_blank"
            className="gradient-cta text-white font-bold text-xs px-4 py-2 rounded-full hover:scale-105 transition-transform"
          >
            SOLICITAR ORÇAMENTO
          </a>
        </div>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-white p-2"
          aria-label="Menu"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {menuOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-primary-dark/95 z-[999] animate-fade-in-up">
          <nav className="flex flex-col items-center gap-6 pt-10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-white text-lg hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href={WA_LINK}
              rel="nofollow"
              target="_blank"
              className="gradient-cta text-white font-bold px-6 py-3 rounded-full mt-4"
            >
              SOLICITAR ORÇAMENTO
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;