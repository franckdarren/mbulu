import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import {Button} from "./_components/Button";



export default function Home() {
  return (
    <main class="">
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
    <header class="flex items-center flex-col justify-center md:h-[628px] h-[280px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bgheader.png)'}}>
        <div class="flex items-center flex-col">
          <div class="mb-[46px]  w-[342px] md:h-[143px] md:w-[515px] md:flex md:justify-center md:items-center md:flex-col">
            <h1 class="text-white md:text-[48px] text-[20px] md:leading-tight text-center">Apprendre les langues <br class="md:mt-[100px]"></br> naturellement</h1>
          </div>
          <div class="flex justify-between w-[100%]">
            <Button titreButton="Apprendre une langue" color="bg-[#cf5500] hover:bg-[#e08e49]" />
            <Button titreButton="Traduire une expression" color="bg-[#fb9600] hover:bg-[#f7af44]"/>
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
    <div class="flex items-center text-center bg-orange-500 justify-center">
      <div class="flex bg-orange-500 w-3/4 justify-center text-center justify-between w-16 md:w-32">
        <div>
          <Image
            src="/USER/Desktop/Projet%20Mbulu/mbulu/public/assets/___1_-removebg-preview.png?version%3D1721311552006"
            width={500}
            height={500}
            alt="image"
            class="w-3/4 items-center"
          />
        </div>  
          <h3 class="w-3/4 text-center items-center content-center text-wrap ">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum
                  vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus.
                  Nullam vitae lacus sit amet eros vestibulum ullamcorper. pharetra diam ut urna facilisis, et facilisis
                  magna fringilla.
          </h3>
      </div>
    </div>
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