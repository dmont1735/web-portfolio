export default function Workflow() {
  return (
    <section className="workflow">
      <div className="section-container">
        <h1 className="section-title">My Workflow</h1>

        <div className="cards-container">
          <div className="card">
            <div className="card-title">01 · Discover</div>
            <div className="card-text">
              Understand goals, constraints, and the problem to be solved.
            </div>
          </div>

          <div className="card">
            <div className="card-title">02 · Plan</div>
            <div className="card-text">
              Define structure, user flows, and technical approach.
            </div>
          </div>

          <div className="card">
            <div className="card-title">03 · Build</div>
            <div className="card-text">
              Develop iteratively with clean code, testing, and feedback.
            </div>
          </div>

          <div className="card">
            <div className="card-title">04 · Refine</div>
            <div className="card-text">
              Polish details, ensure responsiveness, and prepare for delivery.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
