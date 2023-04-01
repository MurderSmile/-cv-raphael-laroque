import SmilePicture from "../../Assets/Q3TWy2Hl_400x400.jpg";
import EmailPicture from "../../Assets/5d6347a976527a3e62ca8638bee35889.webp";

function loading() {
    return (
        <div id="loading">

            <div className="logo">

                <div className="logo__face logo__face__front">
                    <img src={SmilePicture} alt="Veuillez patienter" />
                </div>

                <div className="logo__face logo__face__back">
                    <img src={EmailPicture} alt="Chargement en cours" />
                </div>

            </div>

        </div>
    )
}

export default loading