import Presentation from "./Cvsections/Presentaion";
import Profil from "./Cvsections/Profil";
import Experiences from "./Cvsections/Experiences";
import Formations from "./Cvsections/Formations";
import Competences from "./Cvsections/Competences";
import Softskills from "./Cvsections/Softskills/index.jsx";
import Interets from "./Cvsections/Interets";
import Realisations from "./Cvsections/Realisations";
import Project from "./Cvsections/Project";

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
