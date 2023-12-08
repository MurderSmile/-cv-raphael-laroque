import { useContext } from "react"

import { ProjectContext } from "../../../../Utils/Context/index";

import { Link } from "react-router-dom";

function Project() {

    const { project, setProject } = useContext(ProjectContext)

    return (
        <section className="Project">

            <div className="Descriptif">

                <button className="Descriptif__exit" onClick={() => setProject(null)} aria-label="Quitter">
                    <i className="fas fa-times"></i>
                </button>

                <h2>{project.name}</h2>

                <div className="Apercu">

                    <video src={project.video} controls></video>

                    <div className="Apercu__details">

                        {project.description}

                        <div className="Apercu__details__tech">

                            {project.images}

                        </div>

                    </div>

                </div>

                <div className="acces">
                    <Link to={project.github}><button className="btnRealisation">GitHub</button></Link>
                </div>

            </div>

        </section>
    )
}

export default Project