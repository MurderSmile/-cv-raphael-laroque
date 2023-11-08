import { useState } from "react"

function SoftSkills() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="SoftSkills" className={isOpen ? "IsOpen" : null}>

            <div id="SoftSkills__header" onClick={() => setIsOpen(isOpen ? false : true)}>

                <div id="SoftSkills__header__title">
                    <i className="fas fa-star"></i>
                    <h3>Softs Kills</h3>
                </div>

                <i className="fas fa-arrow-circle-up"></i>

            </div>


            <ul id="SoftSkills__content">
                <li>Esprit de coopération</li>
                <li>Rigoureux</li>
                <li>Sens du détail</li>
                <li>Empathique</li>
                <li>Persévérant</li>
                <li>Curieux</li>
            </ul>

        </section>
    )

}

export default SoftSkills