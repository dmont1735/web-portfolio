export default function Services(){
    return(
        <section className="services">
                <h1 className="section-title">What I Offer</h1>
                <p className="section-intro">Fast, Modern Websites and Web Applications Focused on Clarity and Performance</p>
                <div className="cards-container">
                    <div className="card">
                        {/* <img className="card-logo" src="src/assets/landing-page-web-design-svgrepo-com.svg"/> */}
                        <div className="card-title">Landing Pages</div>
                        <div className="card-text">Clean, high-conversion one-page websites for personal brands, startups, and early-stage ideas.</div>
                        <div className="service-highlights">
                            <p>Mobile-first design</p>
                            <p>Fast loading</p>
                            <p>SEO-ready</p>
                        </div>
                    </div>
                    <div className="card">
                        {/* <img className="card-logo" src="src/assets/money-website-svgrepo-com.svg"/> */}
                        <div className="card-title">Business Websites</div>
                        <div className="card-text">Multi-page websites designed to clearly communicate your business, build trust, and convert visitors into clients.</div>
                        <div className="service-highlights">
                            <p>Home, About, Contact</p>
                            <p>Scalable structure</p>
                            <p>Professional branding</p>
                        </div>
                    </div>
                    <div className="card">
                        {/* <img className="card-logo"src="src/assets/website-optimization-window-cog-svgrepo-com.svg"/> */}
                        <div className="card-title">Custom Web Apps</div>
                        <div className="card-text">Tailored web applications built around your specific needs — dashboards, internal tools, or startup products.</div>
                        <div className="service-highlights">
                            <p>Custom logic</p>
                            <p>Scalable architecture</p>
                            <p>Performance-focused</p>
                        </div>
                    </div>
                </div>
                <p className="section-cta">Interested in working together? <strong>View pricing</strong></p>
        </section>
    );
}

