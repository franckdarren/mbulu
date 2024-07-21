import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import Image from "next/image";
export default function Apropos() {
    return (
        <main>
            <Navbar />
            <div>
                <div class="flex items-center flex-col justify-center md:h-[628px] h-[280px] bg-cover bg-center" style={{ backgroundImage: 'url(/assets/bgheader.png)' }}> 
                        <div class="flex items-center flex-col mb-[46px]  w-[342px] md:h-[143px] md:w-[515px] md:flex md:justify-center md:items-center md:flex-col">
                            <h1 class="text-white md:text-[58px] text-[45px] md:leading-tight text-center">A Propos de nous</h1>
                        </div>
                </div>
                <div class="flex md:flex-row flex-col justify-center items-center px-2 my-4">
                    <div class="px-[7%] md:px-[2%] md:w-[750px]">
                        <h1 class="text-[20px] md:text-[40px] font-bold">Notre Histoire</h1>
                        <p class="md:text-[18px]">Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper.</p>
                    </div>
                    <div class="md:bg-black">
                        <Image
                            src="/assets/Teamwork!.gif"
                            width={500}
                            height={300}
                            alt="image"
                            class="md:bg-black md:w-[500px] md:h-[350px]"
                        />
                    </div>
                </div>
                <div class=" bg-amber-500 flex md:flex-row flex-col-reverse justify-center items-center px-2">
                    <div class="">
                        <Image
                            src="/assets/charlie.jpeg"
                            width={300}
                            height={200}
                            alt="image"
                            class=" rounded-lg md:w-[200px] md:h-[250px]"
                        />
                    </div>
                    <div class="my-7 px-[7%] md:px-[2%] md:w-[700px]">
                        <h3 class="text-[15px] text-sky-700 md:text-[20px] font-bold">Chef de projet</h3>
                        <h1 class="text-[20px] text-sky-950 md:text-[40px]">MALABI Lée-Charlie</h1>
                        <p class="md:text-[18px]">Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper.</p>
                    </div>
                </div>
                <div class="bg-amber-500 flex md:flex-row flex-col justify-center items-center px-2 mb-2">
                    <div class="my-7 px-[7%] md:px-[2%] md:w-[750px]">
                        <h3 class="text-[15px] text-sky-700 md:text-[20px] font-bold">Scrum Master/ Developpeur Back-end</h3>
                        <h1 class="text-[20px] text-sky-950 md:text-[40px]">KIKONDA Franck</h1>
                        <p class="md:text-[18px]">Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper.</p>
                    </div>

                    <div class="md:bg-black">
                        <Image
                            src="/assets/kikonda.jpeg"
                            width={300}
                            height={200}
                            alt="image"
                            class="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                        />
                    </div>
                </div>
                <div class="bg-sky-800 p-2 md:flex flex-col justify-center items-center gap-7">
                    <div class="px-[7%] mt-4 flex flex-col items-center justify-center md:px-[2%] md:w-[750px]">
                        <h1 class="text-[20px] md:text-[40px] font-bold">Notre Equipe</h1>
                        <p class="md:text-[18px] text-center">Lorem ipsumLorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada. Nullam ac erat ante. Pellentesque eget venenatis purus. Nullam vitae lacus sit amet eros vestibulum ullamcorper.</p>
                    </div>
                    <div class=" md:flex ">
                    <div class="mt-8 flex flex-col justify-center items-center">
                        <div>
                            <Image
                                src="/assets/jean.jpeg"
                                width={170}
                                height={200}
                                alt="image"
                                class="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                            />
                        </div>
                        <div class="items-center flex flex-col ">
                            <h3 class="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Developpeur front-end</h3>
                            <h1 class="text-[15px] text-amber-500 md:text-[25px] text-center">SPERANDEZI Jean-claude</h1>
                        </div>
                    </div>
                    <div class="lg:mx-[50px] mt-8 flex flex-col justify-center items-center">
                        <div>
                            <Image
                                src="/assets/mando.jpeg"
                                width={170}
                                height={200}
                                alt="image"
                                class="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                            />
                        </div>
                        <div class="items-center flex flex-col ">
                            <h3 class="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Designer UI/ Developpeur front-end</h3>
                            <h1 class="text-[15px] text-amber-500 md:text-[25px] text-center">MANDO Christ-Of-Fair</h1>
                        </div>
                    </div>
                    <div class="mt-8 flex flex-col justify-center items-center">
                        <div>
                            <Image
                                src="/assets/jarold.jpeg"
                                width={170}
                                height={200}
                                alt="image"
                                class="md:bg-black rounded-lg md:w-[200px] md:h-[250px]"
                            />
                        </div>
                        <div class="items-center flex flex-col ">
                            <h3 class="text-[10px] text-slate-100 md:text-[20px] font-bold text-center">Interprète/ Developpeur front-end</h3>
                            <h1 class="text-[15px] text-amber-500 md:text-[25px] text-center">BUSSUHU Jarold</h1>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <Footer />
        </main>

    );
}