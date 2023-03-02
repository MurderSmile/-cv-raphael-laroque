import { useState } from "react"

function SoftSkills() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div id="SoftSkills" onClick={() => setIsOpen(false)}>
            <h3>Softs Kills</h3>
            <ul>
                <li>Esprit de coopération</li>
                <li>Consciencieux</li>
                <li>Sens du détail</li>
                <li>Empathique</li>
                <li>Persévérant</li>
                <li>Calme</li>
            </ul>
        </div>
    )

        : (
            <div id="SoftSkills" onClick={() => setIsOpen(true)}>
                <h3>Softs Kills</h3>
            </div>
        )
}

export default SoftSkills