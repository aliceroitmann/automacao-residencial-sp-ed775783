import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen gradient-hero flex items-center justify-center text-white text-center px-4">
      <div className="max-w-4xl mx-auto animate-fade-in-up">
        <h1 className="text-clamp-h1 font-poppins font-bold leading-tight mb-6">
          Transforme Sua Casa em um Lar Inteligente com Automação Residencial de Última Geração em São Paulo
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-8 max-w-3xl mx-auto font-inter font-light leading-relaxed">
          Descubra como nossas soluções personalizadas de automação residencial elevam o conforto, a segurança e a economia energética da sua residência. Projetos sob medida para casas e apartamentos em toda São Paulo, com tecnologia que se adapta ao seu estilo de vida.
        </p>

        <div className="flex flex-col items-center gap-4">
          <a
            href="https://wa.me/5511975596711?text=Olá! Vim pelo site e gostaria de solicitar um orçamento para automação residencial."
            rel="nofollow"
            target="_blank"
            className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-[1.02] hover:-translate-y-0.5 transition-all min-w-[280px] justify-center shadow-lg"
          >
            📱 ORÇAMENTO PELO WHATSAPP - AQUI!
          </a>
          <a
            href="#servicos"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all min-w-[280px] justify-center"
          >
            CONHEÇA NOSSOS SERVIÇOS
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
