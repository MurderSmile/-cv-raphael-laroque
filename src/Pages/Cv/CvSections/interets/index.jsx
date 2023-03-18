import { useState } from "react"

function Interets() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="Interets" className={isOpen ? "IsOpen" : null}>

            <div id="Interets__header" onClick={() => setIsOpen(isOpen ? false : true)}>

                <div id="Interets__header__title">
                    <i className="fas fa-fist-raised"></i>
                    <h3>Intérets</h3>
                </div>

                <i className="fas fa-arrow-circle-up"></i>

            </div>

            <ul id="Interets__content">
                <li>Films/séries</li>
                <li>Jeux Vidéos</li>
                <li>Romans Graphiques</li>
                <li>Musique</li>
            </ul>

        </section>
    )

}

export default Interets