import { useState } from "react"

function Interets() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div id="Interets" onClick={() => setIsOpen(false)}>
            <h3>Intérets</h3>
            <ul>
                <li>Films/séries</li>
                <li>Jeux Vidéos</li>
                <li>Romans Graphiques</li>
                <li>Musique</li>
            </ul>
        </div>
    )

        : (
            <div id="Interets" onClick={() => setIsOpen(true)}>
                <h3>Intérets</h3>
            </div>
        )
}

export default Interets