const offerings = [
  {
    title: 'Product Strategy',
    body: 'Roadmaps, product discovery, and service design for ambitious digital initiatives.',
  },
  {
    title: 'Web & Mobile Engineering',
    body: 'High-performance applications across web, iOS, Android, and cross-platform frameworks.',
  },
  {
    title: 'AI & Automation',
    body: 'Custom AI workflows, integrations, and intelligent interfaces tailored to your operations.',
  },
  {
    title: 'Cloud & Security',
    body: 'Reliable cloud foundations, DevOps enablement, and systems designed with safety in mind.',
  },
];

export default function Services() {
  return (
    <section className="page-shell">
      <div className="section-heading">
        <p className="eyebrow">Services</p>
        <h1>We shape products that are elegant, reliable, and future-ready.</h1>
      </div>
      <div className="card-grid card-grid--stacked">
        {offerings.map((item) => (
          <article className="info-card" key={item.title}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
