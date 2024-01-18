import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer>

            <Link to="tel:+33628515565" aria-label="Contacter par téléphone">
                <i className="fas fa-phone-square-alt"></i>
            </Link>

            <Link to="mailto:raphael.laroque@yahoo.fr" aria-label="Contacter par mail">
                <i className="fas fa-envelope"></i>
            </Link>

            <Link to="https://www.linkedin.com/in/raphael-laroque/?originalSubdomain=fr" aria-label="Visiter l'espace linkedin">
                <i className="fab fa-linkedin"></i>
            </Link>

            <Link to="https://www.linkedin.com/in/raphael-laroque/?originalSubdomain=fr" aria-label="Visiter l'espace linkedin">
                <i className="fab fa-github"></i>
            </Link>

        </footer>
    )
}

export default Footer