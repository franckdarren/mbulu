import Image from "next/image";
import { Header } from "./Header";
import { CoursListe } from "./CoursListe";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

export default function PageCours() {
    return (
        <main className="">
            <Navbar />
            <Header Image2="/assets/punu.png"  Image1="/assets/mot.gif" titreText="Punu" titreParagraph="Les origines des Punu sont assez controversées, mais nous pouvons retenir que les Punu viendraient de Bunguri Kassai suite à des guerres , par la suite ils ont fondé Ndunde, puis ils arrivèrent a Divenié au XV e siècle et de Diviniéils se sont séparés avec les quatre clans en prenant des trajets différents. Ils ont cohabité avec les Lumbu et les Vili. Ils trouvèrent les Lumbu sur cette région. Les Vili vinrent par la suite trouver les Lumbu et les Punu installés sur cette partie, région du mont Fuari." />
            <CoursListe />
            <Footer />
        </main>
    );
}
