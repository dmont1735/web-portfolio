export default function Pricing() {
  return (
    <section className="pricing">
      <h2 className="section-title">Pricing Overview</h2>
      <div className="cards-container">
        <div className="card">
          <div className="card-title">Simple Landing Page</div>
          <div className="card-text">
            Clean, fast, one-page website — ideal for personal brands or early-stage
            projects.
          </div>
          <div className="card-highlight">80€ - 150€</div>
        </div>

        <div className="card">
          <div className="card-title">Enhanced Landing Page</div>
          <div className="card-text">
            One-page website with animations, custom sections, and interactive
            elements.
          </div>
          <div className="card-highlight">150€ - 250€</div>
        </div>

        <div className="card">
          <div className="card-title">Business Website</div>
          <div className="card-text">
            Multi-page website (3-5 pages) including Home, About, and Contact — suitable for small businesses.
          </div>
          <div className="card-highlight">250€ - 400€</div>
        </div>

        <div className="card">
          <div className="card-title">Custom Web App</div>
          <div className="card-text"> Fully tailored web applications with custom functionality and user interactions — ideal for startups, dashboards, or internal tools.</div>
          <div className="card-highlight">Consultation Required</div>
        </div>

        <div className="card">
          <div className="card-title">Maintenance & Updates</div>
          <div className="card-text">
            Content updates, small fixes, and performance improvements as needed.
          </div>
          <div className="card-highlight">15€/hour</div>
        </div>
        <div className="section-note">
          <p>All projects include mobile-friendly design, basic SEO setup, and fast-loading performance.</p>
          <p>Prices are starting estimates and may vary depending on project scope and complexity.</p>
        </div>
      </div>
      
    </section>
  );
}
