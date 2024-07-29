import Image from "next/image";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { SectionCard } from "../_components/SectionCard";

export default function PageCours() {
    return (
        <main className="flex flex-col min-h-screen w-[100%] bg-cover bg-center" >
            <div className="flex-grow i bg-cover bg-center" style={{ backgroundImage: 'url(/assets/livre.gif)' }}>
                <Navbar />
                <div className="mt-5 flex bg-white bg-opacity-20 justify-center ">
                    <h1 className="md:w-[70%] px-[10px] text-[#093741] text-center text-[24px] md:text-[34px] font-bold">La méthode ludique pour apprendre une langue du Gabon</h1>
                </div>
                <SectionCard />
            </div>
            <Footer />
        </main>
    );
}