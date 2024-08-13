import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { Button } from "./_components/Button";
import { ButtonFaqs } from "./_components/ButtonFaqs";
import { redirect, Redirect } from "next/navigation";
import { auth } from "@clerk/nextjs/server";
import { SectionCard } from "./_components/SectionCard"

export default function Home() {

  const { userId } = auth()

  if (userId) {
    redirect("/admin/cours")
  }

  return (
    <main className="">
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <SectionCard />
      <Section4 />
      <SectionFaqs />
      <SectionWhatsapp />
      <Footer />
    </main>
  );
}

const Header = () => {
  return (
    <header className="flex items-center flex-col justify-center md:h-[628px] h-[280px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bgheader.png)' }}>
      <div className="flex items-center flex-col">
        <div className="mb-[46px]  w-[342px] md:h-[143px] md:w-[515px] md:flex md:justify-center md:items-center md:flex-col">
          <h1 className="text-white md:text-[48px] text-[20px] md:leading-tight text-center">Apprendre les langues <br className="md:mt-[100px]"></br> naturellement</h1>
        </div>
        <div className="flex justify-between w-[100%]">

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

    <div className="bg-[#fb9600] md:h-[400px] my-[50px] md:my-[66px]  md:mx-[10%] rounded-xl  text-white bg-cover bg-center " style={{ backgroundImage: 'url(/assets/___1_-removebg-preview.png)' }} >
      <div className="flex rounded-[10px] bg-black bg-opacity-60 shadow-overlay justify-center px-1 relative z-10">
        <div className="md:h-[400px] md:flex md:flex-col md:justify-end md:items-baseline">
        </div>
        <div className="md:flex md:flex-col md:justify-center w-[80%] py-2 px-3">
          <h1 className="text-2xl font-bold my-2">Le Dictionnaire Numérique Interactif des Langues Gabonaises</h1>
          <p className="my-2 text-[15px]">
            Bienvenue sur Mbulu !
            Nous sommes ravis de vous accueillir sur le premier dictionnaire numérique interactif dédié aux langues gabonaises. Mbulu a été conçu pour préserver et promouvoir la richesse linguistique et culturelle du Gabon. Que vous soyez un jeune Gabonais désireux de reconnecter avec vos racines ou un passionné de langues en quête de nouvelles découvertes, vous êtes au bon endroit.
          </p>
        </div>
      </div>
    </div>
  );
};



const Section2 = () => {
  return (
    <div className="my-11 py-8 justify-center h-[300px] md:h-[400px] lg:h-[450px] lg:px-[10%] px-4 gap-1 bg-center bg-cover flex" style={{ backgroundImage: 'url(/assets/keywordSearch.gif)' }}>
      {/* <Image src="/assets/WeWork — Rebecca Mock.gif"
        width={145}
        height={113}
        alt="gif"
        className="relative left-[210px] top-[15px]  rounded-lg md:w-[284px] md:h-[152px] md:left-[60%]"
      /> */}

      {/* <Image src="/assets/KeywordSearch.gif"
          width={145}
          height={113}
          alt="gif"
          className=" rounded-lg  mb-[10px] h-[150px] md:w-full max-w-[400px] md:h-full"
        /> */}

      <div className="flex md:mb-0 mb-3 lg:py-5 flex-col gap-5 md:gap-10 justify-between p-2 items-center ">
        <h3 className=" text-center text-[#012d36] font-semibold text-[18px] md:text-[30px]">Obtenez des traduction instantanées dans plusieurs langues gabonaises</h3>


        <Button titreButton="Essayer une traduction" color="bg-[#FB9600] hover:bg-[#f7af44]" />
      </div>

    </div>
  );
};


const Section4 = () => {
  return (
    <div className="bg-[#012d36] md:flex py-11 mt-[100px] md:flex-row flex-col items-center md:justify-around px-6">
      <div className="md:w-[95%] md:ml-8">
        <div>
          <h1 className="text-[#fb9600] leading-[50px] text-[20px] md:text-[50px] mb-5">Un panel de cours gratuits et adaptés à tous</h1>
        </div>
        <div>
          <p className="text-[white] text-[10px] md:text-[20px]">Mbulu, permettant aux utilisateurs d&apos;apprendre les langues gabonaises de manière ludique et interactive. L&apos;application utilise des technologies modernes pour offrir une expérience utilisateur fluide et accessible, même hors ligne.</p></div>
      </div>
      <div className="bg-cover bg-center flex justify-center items-center h-[300px] w-full">
        <Image src="/assets/img family.png"
          width={285}
          height={253}
          alt="image"
          className="relative top-[15px]  rounded-lg md:w-[400px] md:h-[307px]" />
      </div>
    </div>
  );
};

const SectionFaqs = () => {
  return (
    <div className="py-11 bg-[#fb9600]">
      <h1 className="text-center text-white text-[23px] font-semibold md:text-[30px]  md:my-[25px]">Questions fréquentes</h1>
      <ButtonFaqs titreButtonFaqs="Qu&apos;est ce que MBULU?" paragraphFaqs="MBULU est un dictionnaire destiné à préserver et valoriser les langues et la culture gabonaises. il est conçu pour la jeunesse gabonaise ainsi que pour toute personne souhaitant apprendre une langue gabonaise." />
      <ButtonFaqs titreButtonFaqs="A qui s&apos;adresse MBULU?" paragraphFaqs="Le dictionnaie s&apos;adresse principalement aux jeunes Gabonais âgés de 15 à 25 ans. Mais il est également ouvert à toute personne intéressée par l&apos;apprentissage des langues gabonaises." />
      <ButtonFaqs titreButtonFaqs="Comment puis-je contribuer à MBULU?" paragraphFaqs="Les utilisateurs peuvent suggérer, ajouter et vérifier du contenu en se connectant à leur compte sur la plateforme." />
      <ButtonFaqs titreButtonFaqs="Quelles langues gabonaises sont inclues dans MBULU?" paragraphFaqs="MBULU couvre un large éventail de langues gabonaises, en prenant en compte les variations régionales et dialectales." />
    </div>
  );
};

const SectionWhatsapp = () => {
  return (
    <div className="py-11 bg-white  ">
      <div className="mx-[15%] flex flex-col gap-y-6 rounded-[15px] py-5 px-2 bg-[#012d36] " >
        <h1 className="text-center text-[white] text-[18px] font-semibold md:text-[26px]  md:my-[20px] md:mx-4">Découvrez la Richesse des Langues Gabonaises avec Notre Application de Traduction</h1>
        <div >

          <p className="text-[white] text-center text-[12px] md:text-[17px] md:mx-3">Contactez-nous dès aujourd&apos;hui pour découvrir comment notre application peut vous aider à traduire efficacement des textes en plusieurs langues gabonaises, et à explorer la richesse linguistique du pays..</p>
        </div>
        <div className="flex lg:my-[25px] justify-center animate-levitate items-center gap-5">
          <Image src="/assets/whatsapp-logo.svg"
            width={50}
            height={50}
            alt="image"
            className="" />
          <Button titreButton="Nous contacter via Whatsapp" color="bg-[#fb9600] hover:bg-[#f7af44]" />
        </div>
      </div>


    </div>


  );
};
