import Presentation from "./CvSections/Presentaion";
import Profil from "./CvSections/Profil";
import Experiences from "./CvSections/Experiences";
import Formations from "./CvSections/Formations";
import Competences from "./CvSections/Competences";
import SoftSkills from "./CvSections/SoftSkills";
import Interets from "./CvSections/interets";
import Realisations from "./CvSections/Realisations";

function Cv() {
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
        </div>
    )
}

export default Cv