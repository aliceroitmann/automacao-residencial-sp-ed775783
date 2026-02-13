import { Phone } from "lucide-react";

const WA_LINK = "https://api.whatsapp.com/send?phone=5511975596711&text=Venho+pelo+site+Automacao+Residencial+LB+Oficial.+Quero+informacoes+sobre+Orcamentos+e+seus+servicos.+Podemos+conversar?";

const Contact = () => (
  <section id="contato" className="py-24 gradient-hero text-white text-center">
    <div className="container mx-auto px-4 max-w-2xl">
      <h2 className="text-clamp-h2 font-poppins font-bold mb-4">
        Pronto para Transformar a Iluminação da Sua Residência em Indaiatuba?
      </h2>
      <p className="opacity-90 mb-4 text-lg">
        A Automação Residencial em Indaiatuba é a escolha certa para quem busca excelência em automação de iluminação inteligente. Projetos exclusivos, tecnologia de ponta e atendimento premium em Indaiatuba e toda a região.
      </p>
      <p className="opacity-80 mb-8 text-base">
        Solicite agora sua consultoria gratuita e descubra como a iluminação inteligente pode revolucionar o conforto, a economia e a sofisticação do seu lar.
      </p>
      <p className="text-4xl font-bold font-poppins mb-2 flex items-center justify-center gap-3">
        📱 (11) 97559-6711
      </p>
      <p className="opacity-80 mb-8">Horário Comercial</p>
      <div className="flex flex-col items-center gap-4">
        <a
          href={WA_LINK}
          rel="nofollow"
          target="_blank"
          className="inline-flex items-center gap-2 bg-whatsapp text-white font-bold text-lg px-8 py-4 rounded-full hover:scale-[1.02] transition-transform min-w-[280px] justify-center shadow-lg"
        >
          💡 SOLICITAR ORÇAMENTO GRATUITO
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