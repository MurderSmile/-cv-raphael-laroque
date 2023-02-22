import Presentaion from "./CvSections/Presentaion";
import Profil from "./CvSections/Profil";
import Experiences from "./CvSections/Experiences";
import Formations from "./CvSections/Formations";
import Competences from "./CvSections/Competences";
import SoftKills from "./CvSections/SoftsKills";
import Interets from "./CvSections/interets";

function Cv() {
    return (
        <div>
            <Presentaion />
            <Profil />
            <Experiences />
            <Formations />
            <Competences />
            <SoftKills />
            <Interets />
        </div>
    )
}

export default Cv