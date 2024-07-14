import Image from "next/image";
import { Header } from "./Header";
import { CoursListe } from "./CoursListe";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

export default function PageCours() {
    return (
        <main className="">
            <Navbar />
            <Header />
            <CoursListe />
            <Footer />
        </main>
    );
}
