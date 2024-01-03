import Presentation from "./CvSections/Presentaion";
import Profil from "./CvSections/Profil";
import Experiences from "./CvSections/Experiences";
import Formations from "./CvSections/Formations";
import Competences from "./CvSections/Competences";
import SoftSkills from "./CvSections/SoftSkills";
import Interets from "./CvSections/Interets";
import Realisations from "./CvSections/Realisations";
import Project from "./CvSections/Project";


import { useContext } from "react";

import { ProjectContext } from "../../Utils/Context";


function Cv() {
    const { project } = useContext(ProjectContext)

    return (
        <main id="Cv">
            <Presentation />
            <Profil />
            <Experiences />
            <Formations />
            <Competences />
            <SoftSkills />
            <Interets />
            <Realisations />
            {project && project != null ? <Project /> : null}
        </main>
    )
}

export default Cv