import PhotoProfil from "../../../../Assets/Images/PhotoProfil.png";
import Cv from "../../../../Assets/Images/CV_Laroque_Raphaël.pdf";
import video from "../../../../Assets/Videos/courbures.mp4";

import { Link } from "react-router-dom";

import { useState, useEffect } from 'react';

function Age() {
    const [age, setAge] = useState(null);

    useEffect(() => {
        // Date de naissance (25/10/1995)
        const birthDate = new Date('1995-10-25');

        // Date actuelle
        const currentDate = new Date();

        // Calcul de l'âge en soustrayant l'année de naissance de l'année actuelle
        const ageInYears = currentDate.getFullYear() - birthDate.getFullYear();

        // Vérification si l'anniversaire est déjà passé cette année
        if (
            currentDate.getMonth() < birthDate.getMonth() ||
            (currentDate.getMonth() === birthDate.getMonth() &&
                currentDate.getDate() < birthDate.getDate())
        ) {
            setAge(ageInYears - 1); // Réduire l'âge de 1 si l'anniversaire n'a pas encore eu lieu cette année
        } else {
            setAge(ageInYears);
        }
    }, []);

    return age
}



function Presentation() {

    return (
        <section id="Presentation">

            <video src={video} autoPlay loop muted></video>

            <div id="Presentation__profil">

                <img src={PhotoProfil} alt="Profil" />

                <ul id="Presentation__profil__description">

                    <li>
                        <i className="fas fa-user"></i>
                        <span>Français</span>
                    </li>

                    <li>
                        <i className="fas fa-calendar-alt"></i>
                        <span>{Age()} ans</span>

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

            <div className="btnCv">
                <a href={Cv} aria-label="Télécharger la Version PDF">
                    <button>
                        <i className="fas fa-file-download"></i>
                        Télécharger la Version PDF
                    </button>
                </a>
            </div>

        </section>
    )
}

export default Presentation