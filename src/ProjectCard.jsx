export default function ProjectCard({title, preview, description,techStack,links}){
    return (
        <div className="card">
            <p className="card-title">{title}</p>
            <img className="project-preview" src={preview}></img>
            <p className="card-text">{description}</p>
            <div className="tech-stack">
                {techStack.map((t, i)=>{
                    return <img className="tech-icon" alt={`${t.name} Logo`} src={t.src}/>
                })}
            </div>
            <div className="project-cta">
                <a className="primary" href={links.demo}>Live Demo</a>
                <a className="secondary" href={links.case}>Project Breakdown</a>
                <a className="tertiary" href={links.code}>Source Code</a>
            </div>
        </div>
    );
}