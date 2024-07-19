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
    <div class="max-w-xl mx-auto bg-gradient-to-r from-orange-400 to-orange-500 rounded-xl shadow-md p-6 text-white">
  <div class="flex flex-col md:flex-row items-center">
    <Image
            src="/assets/___1_-removebg-preview.png"
            width={900}
            height={500}
            alt="image"
            class="rounded-full bg-white shadow h-48 w-48 mb-4 md:mb-0 md:mr-6"
          />
    <div>
      <h1 class="text-2xl font-bold mb-2">Interactive Announcement</h1>
      <p class="mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper. 
      </p>
      <p>
        Phaetra diam ut urna facilisis, et facilisis magna fringilla.
      </p>
    </div>
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