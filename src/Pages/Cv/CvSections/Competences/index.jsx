import { useState } from "react"

function Competences() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="Competences" className={isOpen ? "IsOpen" : null}>

            <div id="Competences__header" onClick={() => setIsOpen(isOpen ? false : true)}>

                <div id="Competences__header__title">
                    <i className="fas fa-fist-raised"></i>
                    <h3>Compétences</h3>
                </div>

                <i className="fas fa-arrow-circle-up"></i>

            </div>

            <ul id="Competences__content">
                <li>
                    <div>Html 5 - Css 3</div>
                </li>
                <li>
                    <div>Javascript</div>
                </li>
                <li>
                    <div>React.js</div>
                </li>
                <li>
                    <div>GitHub</div>
                </li>
                <li>
                    <div>Node.Js</div>
                </li>
            </ul>

        </section>
    )
}

export default Competences