import Presentation from "./Cvsections/Presentaion/index.jsx";
import Profil from "./Cvsections/Profil/index.jsx";
import Experiences from "./Cvsections/Experiences/index.jsx";
import Formations from "./Cvsections/Formations/index.jsx";
import Competences from "./Cvsections/Competences/index.jsx";
import Softskills from "./Cvsections/Softskills/index.jsx";
import Interets from "./Cvsections/Interets/index.jsx";
import Realisations from "./Cvsections/Realisations/index.jsx";
import Project from "./Cvsections/Project/index.jsx";

import { useContext } from "react";

import { ProjectContext } from "../../Utils/Context";

function Cv() {
  const { project } = useContext(ProjectContext);

  return (
    <main id="Cv">
      <Presentation />
      <Profil />
      <Experiences />
      <Formations />
      <Competences />
      <Softskills />
      <Interets />
      <Realisations />
      {project && project != null ? <Project /> : null}
    </main>
  );
}

export default Cv;
