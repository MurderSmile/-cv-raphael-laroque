import { useState } from "react"

function Competences() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="Competences" onClick={() => setIsOpen(isOpen ? false : true)}>

            <h3>Compétences</h3>

            {isOpen &&
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
                </ul>}

        </div>
    )
}

export default Competences