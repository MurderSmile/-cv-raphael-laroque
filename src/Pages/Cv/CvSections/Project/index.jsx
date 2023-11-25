import { useContext } from "react"

import { ProjectContext } from "../../../../Utils/Context/index";

import { Link } from "react-router-dom";

// function Panorama(project) {

//     const [index, setIndex] = useState(0);

//     const handleClickLeft = () => {
//         setIndex((index - 1 + project.length) % project.length);
//     };

//     const handleClickRight = () => {
//         setIndex((index + 1) % project.length);
//     };

//     return (
//         <div className="panorama">
//             <img src={project[index]} alt={project[index]} />
//             <div className="directions">
//                 <i className="fas fa-arrow-left" onClick={handleClickLeft}></i>
//                 <i className="fas fa-arrow-right" onClick={handleClickRight}></i>
//             </div>
//         </div>
//     );
// }

function Project() {

    const { project, setProject } = useContext(ProjectContext)

    return (
        <section className="Project">

            <div className="Descriptif">

                <div className="Apercu">

                    <button className="Apercu__exit" onClick={() => setProject(null)} aria-label="Quitter">
                        <i className="fas fa-times"></i>
                    </button>

                    <h2>{project.name}</h2>

                    <video src={project.video} controls></video>

                    {/* {Panorama(project.images)} */}

                </div>

                {project.description}

                <div className="acces">
                    <Link to={project.github}><button className="btnRealisation">GitHub</button></Link>
                </div>

            </div>

        </section>
    )
}

export default Project