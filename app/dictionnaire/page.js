import Image from "next/image";
import { Search } from "./Search";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Dictionnaire } from "./dictionnaire";

export default function PageDictionnaire() {
    return (
        <main className="">
            <Navbar />
            
            <div className="flex flex-row py-[15px]">
                <Image
                src="/assets/Group 1.svg"
                alt="logo"
                width={102}
                height={168}
                className="ml-[25px] md:ml-[150px]"
                />
                <div className="md:w-[65%] mt-[40px]">
                <div>
                    <select id="dropdown" name="dropdown" className="mt-1 block w-[250px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm max-sm:w-[150px] mb-2"> 
                        <option>Français - Punu</option> 
                        <option>Françcais - Fang</option> 
                        <option> Français - Myene</option> 
                     
                        </select>
                </div>
                    <Search/>
                </div>

               
            </div>
            <div className="bg-[#FB9600] w-full pl-[20px] mt-[30px]">Dictionnaire Français-Punu</div>

            <Dictionnaire titre="Bonjour" text="Marambura" other="Lorem"/>

            <Footer />
        </main>
    );
}
