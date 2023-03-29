import PhotoProfil from "../../../../Assets/PhotoProfil.JPG";
import Cv from "../../../../Assets/CV_Laroque_Raphaël.pdf";

function Presentation() {
    return (
        <section id="Presentation">

            <div id="Presentation__name">

                <img src={PhotoProfil} alt="" />

            </div>

            <ul id="Presentation__description">
                <li><i className="fas fa-user"></i>Français</li>
                <li><i className="fas fa-calendar-alt"></i>27 ans</li>
                <li><i className="fas fa-home"></i>Bordeaux, France</li>
                <li><i className="fas fa-car-side"></i>Permis B</li>
                <li><i className="fas fa-phone-square-alt"></i><a href="tel:+33628515565">
                    06 28 51 55 65
                </a></li>

                <li><i className="fas fa-envelope"></i><a href="mailto:raphael.laroque@yahoo.fr">
                    raphael.laroque@yahoo.fr
                </a></li>

                <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/raphael-laroque/?originalSubdomain=fr">
                    www.linkedin.com/in/raphael-laroque
                </a></li>

            </ul>

            <a href={Cv}><button><i className="fas fa-file-download"></i>Télécharger la Version Papier</button></a>

        </section>
    )
}

export default Presentation