import { Phone } from "lucide-react";

const Contact = () => (
  <section id="contato" className="py-24 gradient-hero text-white text-center">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-clamp-h2 font-poppins font-bold mb-4">
        Pronto para Transformar Sua Residência em um Lar Inteligente?
      </h2>
      <p className="opacity-90 mb-8 text-lg">
        Entre em contato com nossa equipe especializada e receba um projeto personalizado para sua casa ou apartamento em São Paulo.
      </p>
      <p className="text-4xl font-bold font-poppins mb-2 flex items-center justify-center gap-3">
        📱 (11) 97559-6711
      </p>
      <p className="opacity-80 mb-8">Segunda a Sexta: 9h - 18h | Sábados: 9h - 13h</p>
      <div className="flex flex-col items-center gap-4">
        <a
          href="https://wa.me/5511975596711?text=Olá! Vim pelo site e gostaria de solicitar um orçamento para automação residencial."
          rel="nofollow"
          target="_blank"
          className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-[1.02] transition-transform min-w-[280px] justify-center shadow-lg"
        >
          📱 ORÇAMENTO PELO WHATSAPP - AQUI!
        </a>
        <a
          href="tel:+5511975596711"
          className="inline-flex items-center gap-2 border-2 border-white text-white font-bold text-lg px-8 py-4 rounded-full hover:bg-white/10 transition-all min-w-[280px] justify-center"
        >
          <Phone size={20} /> LIGUE AGORA
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
