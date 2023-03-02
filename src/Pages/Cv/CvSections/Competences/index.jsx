import { useState } from "react"

function Competences() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div id="Competences" onClick={() => setIsOpen(false)}>
            <h3>Compétences</h3>
            <ul>
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
        </div>
    )

        : (
            <div id="Competences" onClick={() => setIsOpen(true)}>
                <h3>Compétences</h3>
            </div>
        )
}

export default Competences