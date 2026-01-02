import ProjectCard from "./ProjectCard";
import fotofotoStartPage from "/src/assets/projects/fotofoto/start_page.png";
import reactLogo from "/src/assets/logos/tech-stack/React.svg";
import viteLogo from "/src/assets/logos/tech-stack/Vite.svg";
import css3Logo from "/src/assets/logos/tech-stack/CSS3.svg";
import html5Logo from "/src/assets/logos/tech-stack/HTML5.svg";

export default function Projects(){
    return (
        <section className="projects" id="projects">
            <div className="section-container">
                <h1 className="section-title">Featured Work</h1>
                {/* <p className="section-intro">Solo Projects</p> */}
                <div className="cards-container">
                        <ProjectCard
                            title="Foto-Foto Photobooth"
                            preview={fotofotoStartPage}
                            description="A browser-based photobooth app that captures and processes images in real time, built to explore performance, client-side workflows, and interaction design."
                            techStack={[
                                {name: "React", src: reactLogo }, 
                                {name: "Vite JS", src: viteLogo},
                                {name: "CSS3", src: css3Logo},
                                {name: "HTML5", src: html5Logo}
                            ]}
                            links={{
                                demo: "https://dmont1735.github.io/foto-foto-photobooth/",
                                case: "",
                                code: "https://github.com/dmont1735/foto-foto-photobooth"
                            }}
                        />
                    {/* <div className="card">
                        <p className="card-title">Jumpy Road</p>
                        <div className="project-preview">
                            <img src={null}></img>
                        </div>
                        <p className="card-text">2D Vertical Infinite Scroller Jumping Game made in Godot</p>
                        <a className="project-link" href="">View Project</a>
                    </div>
                    <div className="card">
                        <p className="card-title">Soaring Cow</p>
                        <div className="project-preview">
                            <img src={null}></img>
                        </div>
                        <p className="card-text">2D Vertical Infinite Scroller Flapping Game made in Godot</p>
                        <a className="project-link" href="">View Project</a>
                    </div>
                    <div className="card">
                        <p className="card-title">Exponentia</p>
                        <div className="project-preview">
                            <img src={null}></img>
                        </div>
                        <p className="card-text">2D Tile-Combining Game made in Godot</p>
                        <a className="project-link" href="">View Project</a>
                    </div> */}
                </div>
            </div>
        </section>
    );
}