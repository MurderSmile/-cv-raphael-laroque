import { useState } from "react"

function Profil() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div id="Profil" onClick={() => setIsOpen(false)}>
            <h3>Profil</h3>
            <p>
                Ayant obtenu récemment mon diplôme de "Développeur WEB" dans le cadre d’une reconversion,
                je souhaite investir et continuer à développer mes compétences tout en offrant un regard neuf auprès de mes employeurs.
            </p>
        </div>
    )

        : (
            <div id="Profil" onClick={() => setIsOpen(true)}>
                <h3>Profil</h3>
            </div>
        )
}

export default Profil