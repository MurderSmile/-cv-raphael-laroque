import { useState } from "react"

function SoftSkills() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div id="SoftSkills" onClick={() => setIsOpen(isOpen ? false : true)}>

            <h3>Softs Kills</h3>

            {isOpen &&
                <ul>
                    <li>Esprit de coopération</li>
                    <li>Consciencieux</li>
                    <li>Sens du détail</li>
                    <li>Empathique</li>
                    <li>Persévérant</li>
                    <li>Calme</li>
                </ul>}

        </div>
    )

}

export default SoftSkills