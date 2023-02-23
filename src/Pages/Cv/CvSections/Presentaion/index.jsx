import PhotoProfil from "../../../../Assets/PhotoProfil.JPG";

function Presentation() {
    return (
        <div id="Presentation">
            <div id="PresentationName">
                <h1>Raphaël Laroque</h1>
                <h2>Développeur Web junior</h2>
            </div>
            <img src={PhotoProfil} alt="" />
        </div>
    )
}

export default Presentation