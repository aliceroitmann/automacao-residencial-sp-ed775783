const stats = [
  { number: "500+", label: "Projetos de Automação Realizados" },
  { number: "200+", label: "Residências Transformadas" },
  { number: "15+", label: "Anos de Experiência" },
  { number: "98%", label: "Taxa de Satisfação" },
];

const Stats = () => (
  <section className="py-20 bg-primary">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-5xl font-bold text-accent font-poppins">{s.number}</p>
            <p className="text-white font-medium mt-2">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;
