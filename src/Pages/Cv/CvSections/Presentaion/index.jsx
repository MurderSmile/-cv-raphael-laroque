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

            <ul>
                <li>Français</li>
                <li>27 ans</li>
                <li>Bordeaux, France</li>
                <li>Permis B</li>

                <li><a href="tel:+33628515565">
                    <i class="fas fa-chevron-right"></i>
                    06 28 51 55 65
                </a></li>

                <li><a href="mailto:raphael.Laroque@yahoo.fr">
                    <i class="fas fa-chevron-right"></i>
                    raphael.Laroque@yahoo.fr
                </a></li>

                <li><a href="https://www.linkedin.com/in/raphael-laroque/?originalSubdomain=fr">
                    <i class="fas fa-chevron-right"></i>
                    www.linkedin.com/in/raphael-laroque
                </a></li>
            </ul>

            <button><a href={Cv}><i className="fas fa-file-download"></i>Télécharger la Version Papier</a></button>

        </section>
    )
}

export default Presentation