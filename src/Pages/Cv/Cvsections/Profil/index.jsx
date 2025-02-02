import { useState } from "react";

function Profil() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="Profil" className={isOpen ? "IsOpen" : null}>
      <div id="Profil__header" onClick={() => setIsOpen(isOpen ? false : true)}>
        <div id="Profil__header__title">
          <i className="fas fa-user-circle"></i>
          <h3>Profil</h3>
        </div>

        <i className="fas fa-arrow-circle-up"></i>
      </div>

      <p id="Profil__content">
        Ayant obtenu récemment mon diplôme de "Développeur WEB" dans le cadre
        d’une reconversion, je souhaite investir et continuer à développer mes
        compétences tout en offrant un regard neuf auprès de mes employeurs.
      </p>
    </section>
  );
}

export default Profil;
