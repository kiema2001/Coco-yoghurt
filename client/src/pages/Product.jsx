export default function Product() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-semibold">Product Overview</h2>
      <p>
        Creamy, tangy coconut yoghurt cultured with beneficial probiotics. Ongoing R&D focuses
        on optimizing fat profile (lipase co-cultures), cost reduction via local starter cultures,
        and shelf-life enhancement with natural approaches.
      </p>
      <div className="grid md:grid-cols-3 gap-4">
        {['Probiotic-rich','Locally Sourced','Plant-Based'].map((t) => (
          <div key={t} className="card text-center">
            <h3 className="font-semibold text-lg">{t}</h3>
            <p className="text-sm text-gray-600">Key value pillar.</p>
          </div>
        ))}
      </div>
    </section>
  );
}

