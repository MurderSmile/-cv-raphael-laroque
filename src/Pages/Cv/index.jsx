import Presentation from "./CvSections/Presentaion";
import Profil from "./CvSections/Profil";
import Experiences from "./CvSections/Experiences";
import Formations from "./CvSections/Formations";
import Competences from "./CvSections/Competences";
import SoftSkills from "./CvSections/SoftSkills";
import Interets from "./CvSections/interets";
import Realisations from "./CvSections/Realisations";

import { useContext } from "react";

import Project from "./CvSections/Project";

import { ProjectContext } from "../../Utils/Context";


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
            {project && project != null ? <Project /> : null}
        </div>
    )
}

export default Cv