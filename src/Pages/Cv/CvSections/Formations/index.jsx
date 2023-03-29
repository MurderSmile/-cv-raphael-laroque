import { useState } from "react"

function Formations() {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <section id="Formations" className={isOpen ? "IsOpen" : null}>

            <div id="Formations__header" onClick={() => setIsOpen(isOpen ? false : true)}>

                <div id="Formations__header__title">
                    <i className="fas fa-user-graduate"></i>
                    <h3>Formations</h3>
                </div>

                <i className="fas fa-arrow-circle-up"></i>

            </div>

            <ul id="Formations__content">
                <li>
                    <div>
                        <div>
                            <h4>RNCP Niveau 5 (équivalent BAC+2) en développement web</h4>
                            <div>2021-2022</div>
                            <strong>OpenClassrooms</strong>
                        </div>
                        <p>
                            Formation basée sur des projets professionnalisants, mentorés par un expert :
                            <br />
                            Création d’un réseau social d’entreprise, optimisation SEO, création du backend pour un site de partage d’avis, création de la partie Js pour un site de vente, etc...
                            <br />
                            Portfolio sur https://github.com/MurderSmile
                        </p>
                    </div>
                </li>
                <li>
                    <div>
                        <div>
                            <h4>Bac Pro ELEEC</h4>
                            <div>2011-2014</div>
                            <strong>Lycée Jean Monnet, Libourne</strong>
                        </div>
                        <p>
                            Formation ayant permis l’acquisition de certaines compétences et soft skills :
                            <br />
                            Suivi du cahier des charges, sens du détail, état d’esprit consciencieux, etc…
                        </p>
                    </div>
                </li>
            </ul>

        </section>
    )

}

export default Formations