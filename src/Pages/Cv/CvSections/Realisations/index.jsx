import { useContext, useState } from "react"
import { ProjectContext } from "../../../../Utils/Context/index";
import { projects } from "../../../../Datas/index";


function Realisations() {

    const { setProject } = useContext(ProjectContext)
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div id="Realisations" onClick={() => setIsOpen(false)}>
            <h3>Réalisations</h3>
            <ul>
                {projects.map((project) =>
                    <li key={project.name} onClick={(e) => {
                        e.stopPropagation()
                        setProject(project)
                    }}>
                        {project.name}
                    </li>
                )}
            </ul>
        </div>
    )

        : (
            <div id="Realisations" onClick={() => setIsOpen(true)}>
                <h3>Réalisations</h3>
            </div>
        )
}

export default Realisations