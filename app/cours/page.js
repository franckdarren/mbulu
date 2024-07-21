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
        <main className="flex flex-col min-h-screen w-[100%]">
            <div className="flex-grow">  
                <Navbar />
                    <div class="mt-5 flex justify-center "> 
                        <h1 className="md:w-[70%] px-[10px] text-center text-[24px] md:text-[34px] font-bold">La méthode ludique pour apprendre une langue du Gabon</h1>
                    </div>
                    <div class="flex flex-col justify-center mb-2 items-center">
                        <Image
                            src="/assets/livre.gif"
                            width={270}
                            height={300}
                            alt="image"
                            class="rounded-lg md:w-[550px] md:h-[450px]"
                        />
                    </div>
                <SectionCard />
            </div>
            <Footer />
        </main>
    );
}
