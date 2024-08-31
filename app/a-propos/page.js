import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import Image from "next/image";
import Team from "../../public/assets/Teamwork.gif";
import kik from "../../public/assets/kikonda.jpeg";
import cha from "../../public/assets/charlie.jpeg";
import jean from "../../public/assets/jean.jpeg";
import chr from "../../public/assets/mando.jpeg";
import jar from "../../public/assets/jarold.jpeg";




export default function Apropos() {
    return (
        <main>
            <Navbar />
            <div>
                <div className="flex items-center flex-col justify-center md:h-[428px] h-[280px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bgheader.png)' }}>
                    <div className="flex items-center flex-col mb-[46px]  w-[342px] md:h-[143px] md:w-[515px] md:flex md:justify-center md:items-center md:flex-col">
                        <h1 className="text-white md:text-[58px] text-[45px] md:leading-tight text-center">A Propos de nous</h1>
                    </div>
                </div>
                <div className="flex md:flex-row flex-col justify-center items-center px-2 my-4">
                    <div className="px-[7%] md:px-[2%] md:w-[750px]">
                        <h1 className="text-[20px] md:text-[40px] font-bold">Notre Histoire</h1>
                        <p className="md:text-[18px]">Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper.</p>
                    </div>
                    <div className="md:bg-black">
                        <Image
                            src={Team}
                            width={500}
                            height={300}
                            alt="image"
                            className="md:bg-black md:w-[500px] md:h-[350px]"
                        />
                    </div>
                </div>

                <div className="bg-[#012d36] p-2 md:flex flex-col justify-center items-center gap-7">
                    <div className="px-[7%] mt-4 flex flex-col items-center justify-center md:px-[2%] md:w-[750px]">
                        <h1 className="text-[20px] text-white md:text-[40px] font-bold">Notre Equipe</h1>
                        <p className="md:text-[18px] text-white text-center">Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper.</p>
                    </div>
                    <div className=" md:grid md:grid-cols-3 ">
                        <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 mt-8 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src={kik}
                                    width={170}
                                    height={200}
                                    alt="image"
                                    className="md:bg-black  rounded-lg md:w-[200px] md:h-[250px]"
                                />
                            </div>
                            <div className="items-center flex flex-col ">
                                <h3 className="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Développeur Fullstack</h3>
                                <h1 className="text-[15px] text-amber-500 md:text-[25px] text-center">KIKONDA Franck</h1>
                            </div>
                        </div>
                        <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 mt-8 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src={cha}
                                    width={170}
                                    height={200}
                                    alt="image"
                                    className="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                                />
                            </div>
                            <div className="items-center flex flex-col ">
                                <h3 className="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Chef de projet</h3>
                                <h1 className="text-[15px] text-amber-500 md:text-[25px] text-center">MALABI Lée-Charlie </h1>
                            </div>
                        </div>
                        <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 mt-8 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src={jean}
                                    width={170}
                                    height={200}
                                    alt="image"
                                    className="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                                />
                            </div>
                            <div className="items-center flex flex-col ">
                                <h3 className="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Développeur front-end</h3>
                                <h1 className="text-[15px] text-amber-500 md:text-[25px] text-center">SPERANDEZI Jean-claude</h1>
                            </div>
                        </div>
                        <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 lg:mx-[50px] mt-8 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src={chr}
                                    width={170}
                                    height={200}
                                    alt="image"
                                    className="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                                />
                            </div>
                            <div className="items-center flex flex-col ">
                                <h3 className="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Designer UI/ Développeur front-end</h3>
                                <h1 className="text-[15px] text-amber-500 md:text-[25px] text-center">MANDO Christ-Of-Fair</h1>
                            </div>
                        </div>
                        <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 mt-8 flex flex-col justify-center items-center">
                            <div>
                                <Image
                                    src={jar}
                                    width={170}
                                    height={200}
                                    alt="image"
                                    className="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                                />
                            </div>
                            <div className="items-center flex flex-col ">
                                <h3 className="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Interprète/ Développeur front-end</h3>
                                <h1 className="text-[15px] text-amber-500 md:text-[25px] text-center">BUSSUHU Jarold</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    );
}