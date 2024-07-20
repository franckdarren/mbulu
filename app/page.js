import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { Button } from "./_components/Button";
import { MasqueCard } from "./_components/MasqueCard";
import { workVideo } from "./_components/MasqueCard";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <SectionCard />
      <Section4 />
      <Footer />
    </main>
  );
}

const Header = () => {
  return (
    <header class="flex items-center flex-col justify-center md:h-[628px] h-[280px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bgheader.png)' }}>
      <div class="flex items-center flex-col">
        <div class="mb-[46px]  w-[342px] md:h-[143px] md:w-[515px] md:flex md:justify-center md:items-center md:flex-col">
          <h1 class="text-white md:text-[48px] text-[20px] md:leading-tight text-center">Apprendre les langues <br class="md:mt-[100px]"></br> naturellement</h1>
        </div>
        <div class="flex justify-between w-[100%]">
          <a href="/cours">
            <Button titreButton="Apprendre une langue" color="bg-[#cf5500] hover:bg-[#e08e49]" />
          </a>
          <a href="/dictionnaire">
            <Button titreButton="Traduire une expression" color="bg-[#fb9600] hover:bg-[#f7af44]" />
          </a>
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
    <div className="bg-[#03829c]">
      <Image src="/assets/WeWork — Rebecca Mock.gif"
        width={185}
        height={153}
        className="relative left-[210px] top-[15px]  rounded-lg md:w-[284px] md:h-[152px] md:left-[60%]"
      />

      <h3 className="my-[15px] text-center text-[#fb9600] font-semibold text-[23px] md:text-[30px]">Obtenez des traduction<br /> instantanées dans plusieurs<br />  langues gabonaises</h3>

      <div className="flex flex-row justify-evenly items-center ">
        <Image src="/assets/Keyword search.gif"
          width={185}
          height={153}
          className=" rounded-lg  mb-[10px] md:w-[207px] md:h-[150px]"
        />

        <Button titreButton="Essayer une traduction" color="bg-[#FB9600] hover:bg-[#f7af44]" />
      </div>
    </div>
  );
};

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

const Section4 = () => {
  return (
    <p>Section 4</p>
  );
};