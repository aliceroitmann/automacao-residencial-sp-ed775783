import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

const WA_LINK = "https://api.whatsapp.com/send?phone=5511975596711&text=Venho+pelo+site+Automacao+Residencial+LB+Oficial.+Quero+informacoes+sobre+Orcamentos+e+seus+servicos.+Podemos+conversar?";

const FloatingButtons = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <a
        href={WA_LINK}
        rel="nofollow"
        target="_blank"
        aria-label="WhatsApp"
        className="fixed bottom-8 right-8 w-[60px] h-[60px] bg-whatsapp rounded-full flex items-center justify-center text-2xl shadow-lg z-[9999] animate-pulse hover:scale-110 hover:rotate-[10deg] transition-all"
      >
        💬
      </a>

      {showTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-[100px] right-8 w-[50px] h-[50px] bg-primary rounded-full flex items-center justify-center text-white shadow-lg z-[999] hover:bg-accent hover:-translate-y-1 transition-all"
          aria-label="Voltar ao topo"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </>
  );
};

export default FloatingButtons;