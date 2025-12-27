import "./aboutme.css"
import DMlogo from "/src/assets/logos/DM/logo-color.svg";
import GitHubLogoDark from "/src/assets/logos/github/github-icon-dark.svg";
import LinkedInlogo from "/src/assets/logos/linkedin/linkedin-icon.svg";
import reactLogo from "/src/assets/logos/tech-stack/React.svg";
import viteLogo from "/src/assets/logos/tech-stack/Vite.svg";
import css3Logo from "/src/assets/logos/tech-stack/CSS3.svg";
import html5Logo from "/src/assets/logos/tech-stack/HTML5.svg";
import godotLogo from "/src/assets/logos/tech-stack/Godot.svg";

export function AboutMe(){
    return (
        <section className="aboutme">
            <div className="aboutme-container">
                <div className="aboutme-text">
                    <h1 className="section-title">About Me</h1>
                    <p className="aboutme-text-full">Hello! My name is Daniel. I create websites and applications, focusing on bringing people's ideas to life and onto the Internet.
                        I have worked for 3 years in corporate environments, and am now venturing into my own freelance journey.</p>

                        <div className="aboutme-techstack">
                            <p>Here is a list of technologies I'm interested in and have worked with:</p>
                            <ul className="tech-stack-list">
                                <li>JavaScript</li>
                                <li>TypeScript</li>
                                <li>React</li>
                                <li>WordPress</li>
                                <li>C#</li>
                                <li>WebMethods</li>
                            </ul>
                        </div> 
                </div>
                <div className="aboutme-img">
                    <img src="src/assets/profile.png"></img>
                </div>
            </div>
        </section>
    )
}

export function AboutMeShort(){
    return(
        <section className="aboutme-short">
            <div className="aboutme-short-container">
                <p className="aboutme-short-intro">Hi! My name is</p>
                <p className="aboutme-short-name">Daniel Monteiro</p>
                <p className="aboutme-short-tag">Software Engineer</p>
                <p className="aboutme-short-text">
                    I'm a Software Engineer focused on building thoughtful, interactive web experiences.
                    I enjoy working at the intersection of design and engineering, turning ideas into performant, user-facing applications.
                </p>

                <div className="aboutme-short-cta">
                    <p>This site is a space where I experiment, learn, and share the projects I build along the way.
                        If you're curious about how I work or what I've been building, feel free to take a look.
                    </p>
                    <div className="tech-stack">
                        <img className="tech-icon" alt="React Logo" src={reactLogo}/>
                        <img className="tech-icon" alt="Vite Logo" src={viteLogo}/>
                        <img className="tech-icon" alt="CSS3 Logo" src={css3Logo}/>
                        <img className="tech-icon" alt="HTML5 Logo" src={html5Logo}/>
                        <img className="tech-icon" alt="Godot Logo" src={godotLogo}/>
                    </div>
                    <div className="cta-buttons">
                        <button className="tellmemore-button">More About Me</button>
                        <button className="tellmemore-button">See My Work</button>
                    </div>
                </div>
                <div>
                    <p className="aboutme-short-connect">Connect with me:</p>
                        <div className="social-links">
                            <a href="https://www.danielmonteiro.dev" target="_blank"><img src={DMlogo} alt="Daniel Monteiro Portfolio Logo"/></a>
                            <a href="https://www.linkedin.com/in/danielarmonteiro/" target="_blank"><img src={LinkedInlogo} alt="LinkedIn Logo"/></a>
                            <a href="https://github.com/dmont1735" target="_blank"><img src={GitHubLogoDark} alt="GitHub Logo"/></a>
                        </div>
                </div>
            </div>
        </section>
    );
}