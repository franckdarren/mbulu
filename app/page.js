import Image from "next/image";
import { Navbar } from "./_components/Navbar";
import { Footer } from "./_components/Footer";
import { Button } from "./_components/Button";
import { MasqueCard } from "./_components/MasqueCard";
import { workVideo } from "./_components/MasqueCard";
import { ButtonFaqs } from "./_components/ButtonFaqs";
import { auth } from "@clerk/nextjs/server"

export default function Home() {

  const { userId } = auth()

  if (userId) {
    redirect("/admin/dashboard")
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
      <Footer />
    </main>
  );
}

const Header = () => {
  return (
    <header class="flex items-center flex-col justify-center md:h-[628px] h-[280px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bgheader.png)' }}>
      <div class="flex items-center flex-col">
        <div class="mb-[46px]  w-[342px] md:h-[143px] md:w-[515px] md:flex md:justify-center md:items-center md:flex-col">
          <h1 class="text-white md:text-[48px] text-[20px] md:leading-tight text-center mb-[15px]">Apprendre les langues <br class="md:mt-[100px]"></br> naturellement</h1>
        </div>
        <div class="flex justify-between w-[100%] mb-[70px]">

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
    <div className="bg-[#03829c]">
     

      <h3 className="my-[15px] py-[30px] text-center text-[#fb9600] font-semibold text-[23px] md:text-[30px]">Obtenez des traduction<br /> instantanées dans plusieurs<br />  langues gabonaises</h3>

      <div className="flex flex-row justify-evenly items-center ">
        <Image src="/assets/KeywordSearch.gif"
          width={145}
          height={113}
          alt="gif"
          className=" rounded-lg  mb-[10px] md:w-[207px] md:h-[150px]"
        />

        <Button titreButton="Essayer une traduction" color="bg-[#FB9600] hover:bg-[#f7af44]" />
      </div>
    </div>
  );
};

const SectionCard = () => {
  return (
    <div className="my-[140px]">
      <h1 className="text-center text-[40px] font-blod md:text-[40px] mb-[50px]">Choisir la langue</h1>
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
      <div class="md:w-[95%] md:ml-8 flex flex-col gap-[15px]">
        <div>
          <h1 class="text-[#fb9600] leading-tight text-[20px] md:text-[50px]">Un panel de cours gratuits et adaptés à tous</h1>
        </div>
        <div>
          <p class="text-[white] text-[15px] md:text-[20px]">Mbulu, permettant aux utilisateurs d&apos;apprendre les langues gabonaises de manière ludique et interactive. L&apos;application utilise des technologies modernes pour offrir une expérience utilisateur fluide et accessible, même hors ligne.</p></div>
      </div>
      <div class="bg-cover bg-center flex justify-center items-center h-[300px] w-full">
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
    <div class="py-9 bg-[#fb9600]">
      <ButtonFaqs titreButtonFaqs="Qu&apos;est ce que MBULU?" paragraphFaqs="MBULU est un dictionnaire destiné à préserver et valoriser les langues et la culture gabonaises. il est conçu pour la jeunesse gabonaise ainsi que pour toute personne souhaitant apprendre une langue gabonaise." />
      <ButtonFaqs titreButtonFaqs="A qui s&apos;adresse MBULU?" paragraphFaqs="Le dictionnaie s&apos;adresse principalement aux jeunes Gabonais âgés de 15 à 25 ans. Mais il est également ouvert à toute personne intéressée par l&apos;apprentissage des langues gabonaises." />
      <ButtonFaqs titreButtonFaqs="Comment puis-je contribuer à MBULU?" paragraphFaqs="Les utilisateurs peuvent suggérer, ajouter et vérifier du contenu en se connectant à leur compte sur la plateforme." />
      <ButtonFaqs titreButtonFaqs="Quelles langues gabonaises sont inclues dans MBULU?" paragraphFaqs="MBULU couvre un large éventail de langues gabonaises, en prenant en compte les variations régionales et dialectales." />
    </div>
  );
};
