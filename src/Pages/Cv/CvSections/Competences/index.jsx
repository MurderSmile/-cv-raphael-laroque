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
                    <span>Html 5 - Css 3</span>
                    <div className="progressbar-wrapper">
                        <div className="progressbar seventy">70%</div>
                    </div>
                </li>
                <li>
                    <span>Javascript</span>
                    <div className="progressbar-wrapper">
                        <div className="progressbar seventy">70%</div>
                    </div>
                </li>
                <li>
                    <span>React.js</span>
                    <div className="progressbar-wrapper">
                        <div className="progressbar sixty">60%</div>
                    </div>
                </li>
                <li>
                    <span>GitHub</span>
                    <div className="progressbar-wrapper">
                        <div className="progressbar fifty">50%</div>
                    </div>
                </li>
                <li>
                    <span>Node.Js</span>
                    <div className="progressbar-wrapper">
                        <div className="progressbar fifty">50%</div>
                    </div>
                </li>
            </ul>

        </section>
    )
}

export default Competences