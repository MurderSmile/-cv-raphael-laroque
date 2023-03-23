import PhotoProfil from "../../../../Assets/PhotoProfil.JPG";
import Cv from "../../../../Assets/CV_Laroque_Raphaël.pdf";

function Presentation() {
    return (
        <section id="Presentation">

            <div id="Presentation__name">

                <img src={PhotoProfil} alt="" />

                <div>
                    <h1>Raphaël Laroque</h1>
                    <h2>Développeur Web junior</h2>
                </div>

            </div>

            <ul id="Presentation__description">
                <li>Français</li>
                <li>27 ans</li>
                <li>Bordeaux, France</li>
                <li>Permis B</li>
            </ul>

            <ul id="Presentation__contacts">
                <li><i class="fas fa-phone-square-alt"></i><a href="tel:+33628515565">
                    06 28 51 55 65
                </a></li>

                <li><i class="fas fa-envelope"></i><a href="mailto:raphael.Laroque@yahoo.fr">
                    raphael.Laroque@yahoo.fr
                </a></li>

                <li><i className="fab fa-linkedin"></i><a href="https://www.linkedin.com/in/raphael-laroque/?originalSubdomain=fr">
                    www.linkedin.com/in/raphael-laroque
                </a></li>
            </ul>

            <button><a href={Cv}><i className="fas fa-file-download"></i>Télécharger la Version Papier</a></button>

        </section>
    )
}

export default Presentation