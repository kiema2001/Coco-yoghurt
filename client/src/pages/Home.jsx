export default function Home() {
  return (
    <section className="grid md:grid-cols-2 items-center gap-8 mt-8">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold">Nutritious Coconut Yoghurt for Coastal Kenya</h1>
        <p>
          A plant-based, probiotic-rich yoghurt developed with locally sourced coconuts.
          Our goal is to improve public health, sustainability, and livelihoods through
          affordable, high-quality functional foods.
        </p>
        <ul className="list-disc ml-6 text-gray-700">
          <li>Standardized fermentation protocol (8–12h at controlled temperatures)</li>
          <li>Locally sourced ingredients (coconut, sugar, starch)</li>
          <li>7–10 day refrigerated shelf life (pilot results)</li>
        </ul>
        <a href="/product" className="btn btn-primary inline-block">Explore the Product</a>
      </div>
      <div className="card">
        <img
          src="https://images.unsplash.com/photo-1542444459-db63c9f50898?q=80&w=1200&auto=format&fit=crop"
          alt="Coconut yoghurt" className="rounded-xl"/>
        <p className="mt-3 text-sm text-gray-500">Prototype imagery for illustration.</p>
      </div>
    </section>
  );
}

