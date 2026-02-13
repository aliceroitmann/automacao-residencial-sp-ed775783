import { ChevronDown } from "lucide-react";

const WA_LINK = "https://api.whatsapp.com/send?phone=5511975596711&text=Venho+pelo+site+Automacao+Residencial+LB+Oficial.+Quero+informacoes+sobre+Orcamentos+e+seus+servicos.+Podemos+conversar?";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center text-white text-center px-4">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-clamp-h1 font-poppins font-bold leading-tight mb-6">
          Transforme Seus Ambientes com Iluminação Inteligente — Automação de Iluminação em Indaiatuba SP
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto font-inter font-light leading-relaxed">
          A Automação Residencial em Indaiatuba é referência em automação de iluminação residencial. Crie cenários personalizados, economize até 70% de energia e eleve o conforto e a sofisticação do seu lar com tecnologia de ponta.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href={WA_LINK}
            rel="nofollow"
            target="_blank"
            className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-[1.02] hover:-translate-y-0.5 transition-all min-w-[280px] justify-center shadow-lg"
          >
            💡 SOLICITAR ORÇAMENTO GRATUITO
          </a>
          <a
            href="#beneficios"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#beneficios")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all min-w-[280px] justify-center"
          >
            DESCUBRA OS BENEFÍCIOS
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white">
        <ChevronDown size={32} />
      </div>
    </section>
  );
};

export default Hero;