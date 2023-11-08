import { useContext, useState } from "react"
import { ProjectContext } from "../../../../Utils/Context/index";
import { projects } from "../../../../Assets/Datas";


function Realisations() {

    const { setProject } = useContext(ProjectContext)
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="Realisations" className={isOpen ? "IsOpen" : null}>

            <div id="Realisations__header" onClick={() => setIsOpen(isOpen ? false : true)}>

                <div id="Realisations__header__title">
                    <i className="fas fa-trophy"></i>
                    <h3>Réalisations</h3>
                </div>

                <i className="fas fa-arrow-circle-up"></i>

            </div>

            <ul id="Realisations__content">
                {projects.map((project) =>

                    <li key={project.name}>

                        <button className="btn" onClick={() => { setProject(project) }}>
                            {project.icon} {project.name}
                        </button>

                    </li>

                )}
            </ul>

        </section>
    )
}

export default Realisations