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
                    <strong>Html 5 - Css 3</strong>
                    <div className="progressbar-wrapper">
                        <div className="progressbar seventy">70%</div>
                    </div>
                </li>
                <li>
                    <strong>Javascript</strong>
                    <div className="progressbar-wrapper">
                        <div className="progressbar seventy">70%</div>
                    </div>
                </li>
                <li>
                    <strong>React.js</strong>
                    <div className="progressbar-wrapper">
                        <div className="progressbar sixty">60%</div>
                    </div>
                </li>
                <li>
                    <strong>GitHub</strong>
                    <div className="progressbar-wrapper">
                        <div className="progressbar fifty">50%</div>
                    </div>
                </li>
                <li>
                    <strong>Node.Js</strong>
                    <div className="progressbar-wrapper">
                        <div className="progressbar fifty">50%</div>
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Competences