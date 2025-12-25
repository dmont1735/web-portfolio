import "./aboutme.css"
import DMlogo from "/src/assets/logos/DM/logo-color.svg";
import GitHubLogoDark from "/src/assets/logos/github/github-icon-dark.svg";
import LinkedInlogo from "/src/assets/logos/linkedin/linkedin-icon.svg";

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
                <p className="aboutme-short-text">I am a Software Engineer dedicated to designing and developing original and impactful interactive experiences.
                                                I create websites and applications, focusing on bringing ideas to life and onto the Internet.</p>
                <div className="aboutme-short-cta">
                    <p>Welcome to my personal page! Here, I showcase my own personal projects, and offer a variety of services related to web development. Feel free to check it out and reach out!</p>
                    <div className="cta-buttons">
                        <button className="tellmemore-button">Tell me More!</button>
                        <button className="tellmemore-button">Check my Work!</button>
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