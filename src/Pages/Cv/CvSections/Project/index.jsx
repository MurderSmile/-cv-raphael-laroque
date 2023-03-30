import { useContext } from "react"

import { ProjectContext } from "../../../../Utils/Context/index";

function Project() {

    const { project, setProject } = useContext(ProjectContext)

    return (
        <section className="Project">

            <div className="Descriptif">

                <div className="Apercu">

                    <button className="Apercu__exit" onClick={() => setProject(null)}>
                        <i className="fas fa-times"></i>
                    </button>
                    <h2>{project.name}</h2>
                    <img src={project.image} alt="" />
                </div>

                {project.description}

                <div className="acces">
                    <button onClick={() => { window.location.href = project.github }}>GitHub</button>
                    {/* <button onClick={() => { window.location.href = project.network }}>Lien vers site</button>*/}
                </div>

            </div>

        </section>
    )
}

export default Project