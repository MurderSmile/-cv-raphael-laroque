import { useState } from "react"

import { projects } from "../../../../Datas/index";

function Realisations() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div id="Realisations" onClick={() => setIsOpen(false)}>
            <h3>Réalisations</h3>
            <ul>
                {projects.map((project) =>
                    <li onClick={() => console.log(project)}>
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