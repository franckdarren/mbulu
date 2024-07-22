import Image from "next/image";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { MasqueCard } from "../_components/MasqueCard";
import { Header } from "./Header";
import { CoursListe } from "./CoursListe";

const SectionCard = () => {
    return (
      <div>
        <h1 className="text-center text-[16px] font-normal md:text-[20px] md:font-normal md: my-[25px]">Choisir la langue</h1>
        <div className="flex flex-col items-center mt-[10px] mb-[10px] md:flex md:flex-row md:items-center md:justify-center md:gap-[15px]">
  
          <MasqueCard titre="Fang" image="/assets/masque-fang.png" />
          <MasqueCard titre="Punu" image="/assets/masque-punu.png" />
          <MasqueCard titre="Myene" image="/assets/masque-myene.png" />
  
        </div>
      </div>
    );
  };

export default function PageCours() {
    return (
        <main className="">
            <Navbar />
            <Header image1="/assets/punu.png"  image2="/assets/mot.gif" titreText="Punu" titreParagraph=" Les origines des Punu sont assez controversées, mais nous pouvons retenir que les Punu viendraient de Bunguri Kassai suite à des guerres , par la suite ils ont fondé Ndunde, puis ils arrivèrent a Divenié au XV e siècle et de Diviniéils se sont séparés avec les quatre clans en prenant des trajets différents. Ils ont cohabité avec les Lumbu et les Vili. Ils trouvèrent les Lumbu sur cette région. Les Vili vinrent par la suite trouver les Lumbu et les Punu installés sur cette partie, région du mont Fuari." />
            <CoursListe />
            <Footer />
        </main>
    );
}
