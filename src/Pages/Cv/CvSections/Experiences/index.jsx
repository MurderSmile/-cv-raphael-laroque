import { useState } from "react"

function Experiences() {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div id="Experiences" onClick={() => setIsOpen(false)}>
            <h3>Expériences</h3>
            <ul>
                <li>
                    <div>
                        <div>
                            <h4>Intérim</h4>
                            <div>2015-2021</div>
                            <strong>Libourne, Bordeaux -France</strong>
                        </div>
                        <ul>
                            <li>
                                <div>
                                    <h5>DARTESS embouteillage</h5>
                                    <p>Travailler à la chaîne au sein d’une équipe.</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h5>O.I. manufacturing</h5>
                                    <p>Préparer des palettes en binôme.</p>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <h5>OENOALLIANCE</h5>
                                    <p>Déchargement de livraison en petit effectif.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </li>
                <li>
                    <div>
                        <div>
                            <h4>Service Civique</h4>
                            <div>2017-2018</div>
                            <strong>Libourne -France</strong>
                        </div>
                        <p>Service civique avec l’association <strong>"Les Cygnes de vie"</strong>:</p>
                        <ul>
                            <li>
                                <h5>L'AUBERGE DU CŒUR</h5>
                                <p>Équipe de triage des denrées, distribution.</p>
                            </li>
                        </ul>
                    </div>
                </li>
            </ul>
        </div>
    )

        : (
            <div id="Experiences" onClick={() => setIsOpen(true)}>
                <h3>Expériences</h3>
            </div>
        )
}

export default Experiences