"use client"; // Ajouté pour rendre ce fichier côté client

import Image from "next/image";
import { Search } from "./Search";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Dictionnaire } from "./dictionnaire";
import { useState } from "react";

// Composant Dropdown pour la sélection de langue
function Dropdown({ selectedOption, handleChange }) {
    return (
        <div>
            <select
                id="dropdown"
                name="dropdown"
                className="mt-1 block w-[250px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm max-sm:w-[150px] mb-2"
                value={selectedOption}
                onChange={handleChange}
            > 
                <option value="FrancaisFang">Français - Fang</option> 
                <option value="FrancaisMyene">Français - Myene</option> 
                <option value="FrancaisPunu">Français - Punu</option> 
             
                
            </select>
        </div>
    );
}

// Composant principal pour la page du dictionnaire
export default function PageDictionnaire() {
    const [selectedOption, setSelectedOption] = useState('FrancaisPunu');

    // Fonction pour gérer les changements de sélection dans le Dropdown
    const handleChange = (e) => {
        setSelectedOption(e.target.value);
    }

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
                    <Dropdown selectedOption={selectedOption} handleChange={handleChange} />
                    <div>
                        <Search />
                    </div>
                    <div className="bg-[#FB9600] w-full pl-[20px] mt-[30px]">
                        Dictionnaire {selectedOption.split("-")[0]}
                    </div>
                </div>
            </div>

            <Dictionnaire titre="Bonjour" expression="Marambura" other="Lorem"/>

            <Footer />
        </main>
    );
}
