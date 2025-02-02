import { useState } from "react";

function Interets() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="Interets" className={isOpen ? "IsOpen" : null}>
      <div
        id="Interets__header"
        onClick={() => setIsOpen(isOpen ? false : true)}
      >
        <div id="Interets__header__title">
          <i className="fas fa-gamepad"></i>
          <h3>Intérets</h3>
        </div>

        <i className="fas fa-arrow-circle-up"></i>
      </div>

      <ul id="Interets__content">
        <li>
          <span>Films/séries:</span> Horreur, divers, etc...
        </li>
        <li>
          <span>Jeux Vidéos:</span> Solo, Uchronie, divers, etc...
        </li>
        <li>
          <span>Romans Graphiques:</span> Thèmes divers...
        </li>
        <li>
          <span>Musiques:</span> Pop, Rock...
        </li>
      </ul>
    </section>
  );
}

export default Interets;
