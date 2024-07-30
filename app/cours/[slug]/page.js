import Image from "next/image";
import { getLangueBySlug } from '../../../services/langueServices'
import { Header } from "../Header";
import { CoursListe } from "../CoursListe";
import { Navbar } from "../../_components/Navbar";
import { Footer } from "../../_components/Footer";

export default function PageCours({ params }) {

    const { slug } = params
    let langue = getLangueBySlug(slug)

    return (
        <main className="">
            <Navbar />
            <Header image_langue={langue.image} image_gif={langue.gif} titreText={langue.titre} titreParagraph={langue.description} />
            <CoursListe />
            <Footer />
        </main>
    );
}
