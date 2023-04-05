import PhotoProfil from "../../../../Assets/PhotoProfil.JPG";
import Cv from "../../../../Assets/CV_Laroque_Raphaël.pdf";

import { Link } from "react-router-dom";

function getAge(date) {
    let diff = Date.now() - date.getTime();
    let age = new Date(diff);
    return Math.abs(age.getUTCFullYear() - 1970);
}

function Presentation() {

    return (
        <section id="Presentation">

            <div id="Presentation__profil">

                <img src={PhotoProfil} alt="Profil" />

                <ul id="Presentation__profil__description">

                    <li>
                        <i className="fas fa-user"></i>
                        <span>Français</span>
                    </li>

                    <li>
                        <i className="fas fa-calendar-alt"></i>
                        <span>{getAge(new Date(1995, 10, 25))}ans</span>
                    </li>

                    <li>
                        <i className="fas fa-home"></i>
                        <span><strong>Bordeaux</strong>, <strong>France</strong></span>
                    </li>

                    <li>
                        <i className="fas fa-car-side"></i>
                        <span>Permis B</span>
                    </li>

                    <li>
                        <Link to="tel:+33628515565">
                            <i className="fas fa-phone-square-alt"></i>
                            <span>06 28 51 55 65</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="mailto:raphael.laroque@yahoo.fr">
                            <i className="fas fa-envelope"></i>
                            <span><strong>raphael</strong>.<strong>laroque</strong>@yahoo.fr</span>
                        </Link>
                    </li>

                    <li>
                        <Link to="https://www.linkedin.com/in/raphael-laroque/?originalSubdomain=fr">
                            <i className="fab fa-linkedin"></i>
                            <span>www.linkedin.com/in/<strong>raphael</strong>-<strong>laroque</strong></span>
                        </Link>
                    </li>

                </ul>

            </div>

            <a href={Cv} aria-label="Télécharger la Version PDF">
                <button>
                    <i className="fas fa-file-download"></i>
                    Télécharger la Version PDF
                </button>
            </a>

        </section>
    )
}

export default Presentation