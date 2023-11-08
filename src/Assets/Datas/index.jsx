import OhmyfoodPicture from "../Images/Ohmyfood.png";
import KanapPicture from "../Images/Kanap.png";
import PantherePicture from "../Images/Panthere.png";
import PiiquantePicture from "../Images/Piiquante.png";
import GroupomaniaPicture from "../Images/iconCouleurPrimary.png";

export const projects = [
    {
        name: 'Ohmyfood',
        image: OhmyfoodPicture,
        icon: <i className="fas fa-utensils"></i>,
        description:
            <div className="Apercu__description">
                <p>
                    Le client est une startup sur le marché de la restauration du nom de Ohmyfood.
                    La commande est une maquette intéractive mobile-first, composé d'un index listant les restaurants participants, et de 4 pages restaurant/menu.
                </p>
            </div>,
        github: 'https://github.com/MurderSmile/OC_Ohmyfood.git',
        //network:
    },

    {
        name: 'Agence la Panthère',
        image: PantherePicture,
        icon: <i className="fas fa-cat"></i>,
        description:
            <div className="Apercu__description">
                <p>
                    Agence la panthère est une agence de Web design qui souhaite obtenir un meilleur référencement SEO.
                    Pour cela il était nécessaire de procéder à plusieurs modifications sur les 2 pages du site:
                </p>
                <ol>
                    <li>Correction du contraste.</li>
                    <li>Fournir une description alternative aux images(alt).</li>
                    <li>Remplacer des images de texte par du texte.</li>
                    <li>Corriger l'absence de mots-clés adaptés dans les balises "Title", "description" et "p".</li>
                    <li>Supprimer les balises obsolètes.</li>
                    <li>Compresser les images non-minifiées.</li>
                    <li>Adapter le responsive du site.</li>
                    <li>Corriger de l'aspect CSS entre les 2 pages qui est trop éloigné.</li>
                    <li>Renommage de la page "Page2" en "Contact".</li>
                    <li>Suppression de toutes les tactiques "Black hat" (keyword stuffing, liens non pértinants).</li>
                </ol>
            </div>,
        github: 'https://github.com/MurderSmile/OC_Agence_la_Panthere.git',
        //network:
    },

    {
        name: 'Kanap',
        image: KanapPicture,
        icon: <i className="fas fa-couch"></i>,
        description:
            <div className="Apercu__description">
                <p>
                    Kanap, une entreprise de vente de canapés en boutique, souhaite avoir une plateforme de commerce en plus de sa boutique physique pour vendre ses produits sur Internet.
                    La partie HTML, CSS et Backend ont déjà été conçues.
                    L'objectif est de créer la partie javascript et les fonctionnalités qui feront les liens entre le frontend et le Backend du site.
                </p>
            </div>,
        github: 'https://github.com/MurderSmile/OC_Kanap.git',
        //network:
    },

    {
        name: 'Piiquante',
        image: PiiquantePicture,
        icon: <i className="fas fa-pepper-hot"></i>,
        description:
            <div className="Apercu__description">
                <p>
                    Piiquante une marque de condiments à base de piment, veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .
                    La partie frontend a déjà été conçue.
                    L'objectif est de créer la partie backend en javascript et de la relier à un serveur (MongoDB pour ce projet).
                </p>
            </div>,
        github: 'https://github.com/MurderSmile/OC_Piiquante.git',
        //network:

    },

    {
        name: 'Groupomania',
        image: GroupomaniaPicture,
        icon: <i className="fas fa-globe"></i>,
        description:
            <div className="Apercu__description">
                <p>
                    Groupomania, un groupe spécialisé dans la grande distribution, voudrait mettre en place un réseau social d'entreprise, pour facilité la communication et amélioré le relationnel entres les employés.
                </p>
                <ul>
                    <li>L'objectif est de créer le Frontend et le backend du site.</li>
                    <li>Le Frontend sera éditer en one-page avec le framework Js React.</li>
                    <li>Le Backend sera éditer en Javascript et communiquera avec un serveur MongoDB.</li>
                    <li>Le site sera composé d'un rendu pour la partie connexion/inscription, d'une page "Accueil" pour afficher, modifier, liker et supprimer un post.</li>
                    <li>Un compte Administrateur aura la possibilité de modifier et de supprimer tout les posts.</li>
                </ul>
            </div>,
        github: 'https://github.com/MurderSmile/OC_Groupomania.git',
        //network:
    },
]