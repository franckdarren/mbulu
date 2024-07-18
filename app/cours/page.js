import Image from "next/image";
import { Header } from "./Header";
import { CoursListe } from "./CoursListe";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

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
