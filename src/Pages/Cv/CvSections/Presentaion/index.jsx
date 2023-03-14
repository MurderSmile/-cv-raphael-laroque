import PhotoProfil from "../../../../Assets/PhotoProfil.JPG";
import Cv from "../../../../Assets/CV_Laroque_Raphaël.pdf";

function Presentation() {
    return (
        <div id="Presentation">
            <img src={PhotoProfil} alt="" />
            <div id="PresentationName">
                <h1>Raphaël Laroque</h1>
                <h2>Développeur Web junior</h2>
            </div>
            <ul>
                <a href="mailto:raphael.Laroque@yahoo.fr"><li>raphael.Laroque@yahoo.fr</li></a>
                <a href="https://github.com/MurderSmile"><li>www.linkedin.com/in/raphael-laroque</li></a>
                <a href="tel:+33628515565"><li>06 28 51 55 65</li></a>
                <li>Bordeaux, France</li>
                <li>Permis B</li>
                <li>27 ans</li>
                <li>Français</li>
                <a href={Cv}><i className="fas fa-file-download"></i></a>
            </ul>
        </div>
    )
}

export default Presentation