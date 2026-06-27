import { Link } from 'react-router-dom';

const services = [
  {
    title: 'AI Products',
    description: 'Intelligent copilots, automation flows, and product features that learn from your business.',
  },
  {
    title: 'Cloud Platforms',
    description: 'Scalable, secure platform solutions built for reliability, performance, and long-term evolution.',
  },
  {
    title: 'Digital Experiences',
    description: 'Elegant web and mobile experiences engineered for performance and conversions.',
  },
];

const projects = [
  {
    title: 'Northstar AI Copilot',
    tag: 'AI product',
    description: 'A multi-agent workspace that reduced manual review time by 62% for a fast-moving operations team.',
    impact: '62% faster review cycles',
  },
  {
    title: 'Cloud Platform Enablement',
    tag: 'Cloud architecture',
    description: 'A resilient platform foundation that enabled secure rollout, observability, and rapid release cadence.',
    impact: '41% less deployment overhead',
  },
  {
    title: 'Digital Experience Refresh',
    tag: 'Digital experience',
    description: 'A patient portal experience designed for a health insurance company, improving access, clarity, and self-service for members.',
    impact: 'Simplified member journeys and stronger digital engagement',
  },
];

const stats = [
  { value: '24/7', label: 'Delivery support' },
  { value: '99.9%', label: 'Platform reliability' },
  { value: '10x', label: 'Faster product cycles' },
  { value: 'AI', label: 'First approach' },
];

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__copy">
          <p className="eyebrow">Future-ready technology studio</p>
          <h1>We build intelligent products that move fast and scale confidently.</h1>
          <p className="hero__text">
            AST Digital combines strategy, software engineering, AI, and cloud architecture to help ambitious teams ship beautifully.
          </p>
          <div className="hero__actions">
            <Link className="btn btn-primary" to="/services">Explore services</Link>
            <Link className="btn btn-secondary" to="/contact">Book a discovery call</Link>
          </div>
        </div>

        <div className="hero__panel" aria-label="Company highlights">
          <div className="panel-card">
            <h2>Tech that feels premium</h2>
            <p>From intelligent products to resilient cloud infrastructure, every layer is designed for modern growth.</p>
          </div>
        </div>
      </section>

      <section className="stats-grid" aria-label="Key company metrics">
        {stats.map((stat) => (
          <div className="stat-card" key={stat.label}>
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </div>
        ))}
      </section>

      <section id="services" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">What we deliver</p>
          <h2>Modern systems for modern teams.</h2>
        </div>
        <div className="card-grid">
          {services.map((service) => (
            <article className="info-card" key={service.title}>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="work" className="section-block section-block--alt">
        <div className="section-heading">
          <p className="eyebrow">Our work</p>
          <h2>Thoughtful solutions built with clarity and purpose.</h2>
        </div>
        <div className="work-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.title}>
              <span className="project-card__tag">{project.tag}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <strong>{project.impact}</strong>
            </article>
          ))}
        </div>
      </section>

      <section id="about" className="section-block">
        <div className="section-heading">
          <p className="eyebrow">Why AST</p>
          <h2>Thoughtful product design, rigorous engineering, and steady execution.</h2>
        </div>
        <p className="section-copy">
          We blend product vision with technical depth to help businesses launch faster, operate smarter, and scale with confidence.
        </p>
      </section>
    </>
  );
}
