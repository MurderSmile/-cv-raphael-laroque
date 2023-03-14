import { useState } from "react"

function Interets() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="Interets" onClick={() => setIsOpen(isOpen ? false : true)}>

            <h3>Intérets</h3>

            {isOpen &&
                <ul>
                    <li>Films/séries</li>
                    <li>Jeux Vidéos</li>
                    <li>Romans Graphiques</li>
                    <li>Musique</li>
                </ul>}

        </div>
    )

}

export default Interets