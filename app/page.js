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
    <div class=" md:h-[400px] md:mx-[10%] bg-gradient-to-r my-7 from-orange-400 to-orange-500 rounded-xl text-white">
        <div class="flex justify-center px-1">
              <div class="md:h-[400px] md:flex md:flex-col md:justify-end md:items-baseline ">
                <Image
                  src="/assets/___1_-removebg-preview.png"
                  width={212}
                  height={106}
                  alt="image"
                  class=" w-[100%] h-[100%] "
                />
              </div>
          <div class="md:flex md:flex-col md:justify-center w-[70%] px-4">
            <h1 class="text-2xl font-bold my-2">Interactive Announcement</h1>
            <p class="my-2 text-[15px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper. 
            </p>
          </div>
        </div>
  </div>
  );
};

const Section2 = () => {
  return (
    <div className="bg-[#03829c]">
      <Image src="/assets/WeWork — Rebecca Mock.gif"
        width={145}
        height={113}
        className="relative left-[210px] top-[15px]  rounded-lg md:w-[284px] md:h-[152px] md:left-[60%]"
      />

      <h3 className="my-[15px] text-center text-[#fb9600] font-semibold text-[23px] md:text-[30px]">Obtenez des traduction<br /> instantanées dans plusieurs<br />  langues gabonaises</h3>

      <div className="flex flex-row justify-evenly items-center ">
        <Image src="/assets/KeywordSearch.gif"
          width={145}
          height={113}
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
  <div class="bg-[#012d36] md:flex py-[20px] md:flex-row flex-col items-center md:justify-around px-6">
    <div class="md:w-[95%] md:ml-8">
      <div>
        <h1 class="text-[#fb9600] leading-tight text-[20px] md:text-[50px]">Un panel de cours gratuits et adaptés à tous</h1>
      </div>
      <div>
        <p class="text-[white] text-[10px] md:text-[20px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper.</p></div>
      </div>  
    <div class="bg-cover bg-center flex justify-center items-center h-[300px] w-full">
      <Image src="/assets/img family.png"
        width={285}
        height={253}
        className="relative top-[15px]  rounded-lg md:w-[400px] md:h-[307px]"/>
    </div>
  </div>
  );
};