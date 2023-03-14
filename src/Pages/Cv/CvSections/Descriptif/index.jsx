import { useContext } from "react"

import { ProjectContext } from "../../../../Utils/Context/index";

function Descriptif() {

    const { project, setProject } = useContext(ProjectContext)

    return (
        <div className="fond">
            <div className="Descriptif">

                <div className="apercu">
                    <div className="exit" onClick={() => setProject(null)}>X</div>
                    <h2>{project.name}</h2>
                    <img src={project.image} alt="" />
                </div>
                <p>{project.description}</p>
                <div className="acces">
                    <button onClick={() => { window.location.href = project.github }}>GitHub</button>
                    {/* <button onClick={() => { window.location.href = project.network }}>Lien vers site</button>*/}
                </div>
            </div>
        </div>
    )
}

export default Descriptif