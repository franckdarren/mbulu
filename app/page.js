import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import {Button} from "./_components/Button";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
    </main>
  );
}

const Header = () => {
  return (
    <header class="flex items-center flex-col justify-center md:h-[628px] h-[280px] bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/assets/bgheader.png)'}}>
        <div class="flex items-center flex-col">
          <div class="mb-[46px] w-[342px] md:h-[143px] md:w-[515px] md:flex md:justify-center md:items-center md:flex-col">
            <h1 class="text-white md:text-[48px] text-[20px] md:leading-tight text-center">Apprendre les langues <br class="md:mt-[100px]"></br> naturellement</h1>
          </div>
          <div class="flex justify-between w-[100%]">
            <Button titreButton="Apprendre une langue" color="bg-[#cf5500]" />
            <Button titreButton="Traduire une expression" color="bg-[#fb9600]"/>
          </div>
        </div>
    </header>
  );
};

const Section1 = () => {
  return (
    <p>Section 1</p>
  );
};

const Section2 = () => {
  return (
    <p>Section 2</p>
  );
};

const Section3 = () => {
  return (
    <p>Section 3</p>
  );
};

const Section4 = () => {
  return (
    <p>Section 4</p>
  );
};