import OhmyfoodPicture from "../Assets/Ohmyfood.png";
import KanapPicture from "../Assets/Kanap.png";
import PantherePicture from "../Assets/Panthere.png";
import PiiquantePicture from "../Assets/Piiquante.png";
import GroupomaniaPicture from "../Assets/GroupomaniaOrange.png";

export const projects = [
    {
        name: 'Ohmyfood',
        image: OhmyfoodPicture,
        description: `Le client est une startup sur le marché de la restauration du nom de Ohmyfood.
        La commande est une maquette intéractive mobile-first, composé d'un index listant les restaurants participants, et de 4 pages restaurant/menu.`,
        github: 'https://github.com/MurderSmile/OC_Ohmyfood.git',
        //network:
    },

    {
        name: 'Agence la Panthère',
        image: PantherePicture,
        description: `Agence la panthère est une agence de Web design qui souhaite obtenir un meilleur référencement SEO.
        Pour cela il était nécessaire de procéder à plusieurs modifications sur les 2 pages du site:
        
            1- Correction du contraste.
            2- Fournir une description alternative aux images(alt).
            3- Remplacer des images de texte par du texte.
            4- Corriger l'absence de mots-clés adaptés dans les balises "Title", "description" et "p".
            5- Supprimer les balises obsolètes.
            6- Compresser les images non-minifiées
            7- Adapter le responsive du site
            8- Corriger de l'aspect CSS entre les 2 pages qui est trop éloigné.
            8- Renommage de la page "Page2" en "Contact".
            9- Suppression de toutes les tactiques "Black hat" (keyword stuffing, liens non pértinants).`,
        github: 'https://github.com/MurderSmile/OC_Agence_la_Panthere.git',
        //network:
    },

    {
        name: 'Kanap',
        image: KanapPicture,
        description: `Kanap, une entreprise de vente de canapés en boutique, souhaite avoir une plateforme de commerce en plus de sa boutique physique pour vendre ses produits sur Internet.
        La partie HTML, CSS et Backend ont déjà été conçues.
        L'objectif est de créer la partie javascript et les fonctionnalités qui feront les liens entre le frontend et le Backend du site.`,
        github: 'https://github.com/MurderSmile/OC_Kanap.git',
        //network:
    },

    {
        name: 'Piiquante',
        image: PiiquantePicture,
        description: `Piiquante une marque de condiments à base de piment, veut développer une application web de critique des sauces piquantes appelée « Hot Takes » .
        La partie frontend a déjà été conçue.
        L'objectif est de créer la partie backend en javascript et de la relier à un serveur (MongoDB pour ce projet).`,
        github: 'https://github.com/MurderSmile/OC_Piiquante.git',
        //network:
    },

    {
        name: 'Groupomania',
        image: GroupomaniaPicture,
        description: `Groupomania, un groupe spécialisé dans la grande distribution, voudrait mettre en place un réseau social d'entreprise, pour facilité la communication et amélioré le relationnel entres les employés.

        - L'objectif est de créer le Frontend et le backend du site.
        - Le Frontend sera éditer en one-page avec le framework Js React.
        - Le Backend sera éditer en Javascript et communiquera avec un serveur MongoDB.
        - Le site sera composé d'un rendu pour la partie connexion/inscription, d'une page "Accueil" pour afficher, modifier, liker et supprimer un post.
        - Un compte Administrateur aura la possibilité de modifier et de supprimer tout les posts.`,
        github: 'https://github.com/MurderSmile/OC_Groupomania.git',
        //network:
    },
]