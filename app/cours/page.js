import Image from "next/image";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { MasqueCard } from "../_components/MasqueCard";

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
            <Header Image2="/assets/punu.png"  Image1="/assets/mot.gif" titreText="Punu" titreParagraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute  eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
            <CoursListe />
            <Footer />
        </main>
    );
}
