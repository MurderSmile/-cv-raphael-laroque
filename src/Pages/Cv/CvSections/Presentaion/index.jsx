import PhotoProfil from "../../../../Assets/PhotoProfil.JPG";

function Presentation() {
    return (
        <div id="Presentation">
            <img src={PhotoProfil} alt="" />
            <div id="PresentationName">
                <h1>Raphaël Laroque</h1>
                <h2>Développeur Web junior</h2>
            </div>
            <ul>
                <li>Raphael.Laroque@yahoo.fr</li>
                <li>www.linkedin.com/in/raphael-laroque</li>
                <li>06 28 51 55 65</li>
                <li>Bordeaux, France</li>
                <li>Permis B</li>
                <li>27 ans</li>
                <li>Français</li>
            </ul>
        </div>
    )
}

export default Presentation