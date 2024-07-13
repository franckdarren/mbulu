import Image from "next/image";
import { Search } from "./Search";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";

export default function PageDictionnaire() {
    return (
        <main className="">
            <Navbar />
            <Search />
            <div>
                <p>Dictionnaire PUNU</p>
            </div>
            <Footer />
        </main>
    );
}
