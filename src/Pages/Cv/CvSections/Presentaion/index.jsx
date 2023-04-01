import PhotoProfil from "../../../../Assets/PhotoProfil.JPG";
import Cv from "../../../../Assets/CV_Laroque_Raphaël.pdf";

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
                    <li><i className="fas fa-user"></i>Français</li>
                    <li><i className="fas fa-calendar-alt"></i>{getAge(new Date(1995, 10, 25))}ans</li>
                    <li><i className="fas fa-home"></i><strong>Bordeaux</strong>, <strong>France</strong></li>
                    <li><i className="fas fa-car-side"></i>Permis B</li>
                    <li><i className="fas fa-phone-square-alt"></i><a href="tel:+33628515565">
                        06 28 51 55 65
                    </a></li>

                    <li><i className="fas fa-envelope"></i><a href="mailto:raphael.laroque@yahoo.fr">
                        <strong>raphael</strong>.<strong>laroque</strong>@yahoo.fr
                    </a></li>

                    <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/raphael-laroque/?originalSubdomain=fr">
                        www.linkedin.com/in/<strong>raphael</strong>-<strong>laroque</strong>
                    </a></li>

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