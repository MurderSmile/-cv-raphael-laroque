import Presentation from "./CvSections/Presentaion";
import Profil from "./CvSections/Profil";
import Experiences from "./CvSections/Experiences";
import Formations from "./CvSections/Formations";
import Competences from "./CvSections/Competences";
import SoftSkills from "./CvSections/SoftSkills";
import Interets from "./CvSections/interets";
import Realisations from "./CvSections/Realisations";
import Descriptif from "./CvSections/Descriptif";

import { useContext } from "react";
import { ProjectContext } from "../../Utils/Context/index";


function Cv() {

    const { project } = useContext(ProjectContext)

    return (
        <div id="Cv">
            <Presentation />
            <Profil />
            <Experiences />
            <Formations />
            <Competences />
            <SoftSkills />
            <Interets />
            <Realisations />
            {project && project != null ? <Descriptif /> : null}
        </div>
    )
}

export default Cv