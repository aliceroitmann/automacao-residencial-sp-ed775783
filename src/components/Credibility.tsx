const stats = [
  { number: "500+", label: "Projetos de Automação Realizados" },
  { number: "200+", label: "Residências Transformadas" },
  { number: "15+", label: "Anos de Experiência" },
  { number: "98%", label: "Satisfação dos Clientes" },
];

const Credibility = () => (
  <section className="bg-background py-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-4xl font-bold text-primary-vibrant font-poppins">{s.number}</p>
            <p className="text-foreground font-medium mt-1">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Credibility;
