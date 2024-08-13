"use client";

import Image from "next/image";
import { Navbar } from "../_components/Navbar";
import { Footer } from "../_components/Footer";
import { Dictionnaire } from "./dictionnaire";
import { useState } from "react";
import { ClipLoader } from "react-spinners";

// Composant Dropdown pour la sélection de langue
function Dropdown({
  selectedOption,
  selectedLanguageId,
  handleChange,
  handleLanguageChange,
}) {
  return (
    <div>
      <select
        id="dropdown"
        name="dropdown"
        className="mt-1 block w-[250px] py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm max-sm:w-[150px] mb-2"
        value={selectedLanguageId}
        onChange={(e) => {
          handleLanguageChange(e);
          handleChange(e); // Mettez à jour selectedOption
        }}
      >
        <option value="">Toutes les langues</option>
        <option value="66ae7545c443269e80e9770e">Français - Fang</option>
        <option value="66ae757cc443269e80e9770f">Français - Myene</option>
        <option value="66ae7588c443269e80e97710">Français - Punu</option>
      </select>
    </div>
  );
}

export default function PageDictionnaire() {
  const [selectedOption, setSelectedOption] = useState("Français - Fang");
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [selectedLanguageId, setSelectedLanguageId] = useState("");

  // Fonction pour gérer le changement d'option dans le Dropdown
  const handleChange = (e) => {
    const selectElement = e.target;
    const selectedIndex = selectElement.selectedIndex;
    const selectedText = selectElement.options[selectedIndex].text;
    setSelectedOption(selectedText);
  };

  // Fonction pour gérer le changement de langue
  const handleLanguageChange = (e) => {
    setSelectedLanguageId(e.target.value);
  };

  // Fonction de recherche de mot
  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      console.log("Search term is empty");
      setResults([]);
      setErrorMessage("");
      return;
    }

    setLoading(true);
    setErrorMessage("");
    try {
      const encodedSearchTerm = encodeURIComponent(searchTerm);
      const url = `/api/contributions/search?mot=${encodedSearchTerm}&languageId=${selectedLanguageId}`;
      console.log("Fetching URL:", url);
      const response = await fetch(url, {
        headers: {
          "Cache-Control": "no-cache",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      console.log("Search results:", data);

      if (data.length === 0) {
        setErrorMessage("Aucun résultat trouvé pour le mot recherché.");
      }

      setResults(data);
    } catch (error) {
      console.error("Error fetching search results:", error);
      setErrorMessage("Erreur lors de la recherche.");
    } finally {
      setLoading(false);
    }
  };

  // Fonction pour gérer le changement de texte
  const handleTextChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <main className="flex flex-col min-h-screen md:gap-y-2 justify-between ">
      
      <div className="flex flex-col gap-12" > 
        <Navbar />
      <div className="flex items-center justify-center py-5 px-5">
        <Image
          src="/assets/Group 1.svg"
          alt="logo"
          width={102}
          height={168}
          className=""
        />
        <div className="md:w-[65%] mt-[40px]">
          <Dropdown
            selectedOption={selectedOption}
            selectedLanguageId={selectedLanguageId}
            handleChange={handleChange}
            handleLanguageChange={handleLanguageChange}
          />

          <div className="flex w-full max-w-[700px] ">
            <input
              type="text"
              className="border border-black w-full rounded-l-lg md:w-full peer"
              value={searchTerm}
              onChange={handleTextChange}
              placeholder="Rechercher un mot"
            />
            <button
              onClick={handleSearch}
              className="h-auto hidden text-[#FB9600] md:flex items-center justify-center bg-[#164048] rounded-r-lg px-2 hover:bg-[#447a85]"
            >
              Rechercher
            </button>
            <button
              onClick={handleSearch}
              className="h-auto md:hidden flex items-center justify-center text-white bg-[#164048] rounded-r-lg px-2 hover:bg-[#447a85]"
            >
              <Image
                src="/assets/tabler_search.svg"
                alt="logo"
                width={50}
                height={50}
                className=""
              />
            </button>
          </div>
        </div>
      </div>
      
      <div className="bg-[#FB9600] w-full py-2 px-[5%]">
        Dictionnaire {selectedOption}
      </div>
      <div className="flex flex-col justify-center items-center md:flex-row ">
        {loading ? (
          <div className="flex justify-center mt-4">
            <ClipLoader color="#164048" size={50} />
          </div>
        ) : (
          <>
            {errorMessage && (
              <div className="text-red-500 mt-4 text-center">
                {errorMessage}
              </div>
            )}
            {results.length > 0 && (
              <ul className="">
                {results.map((contribution) => (
                  <li key={contribution.id}>
                    <Dictionnaire
                      titre={contribution.mot}
                      traduction={contribution.traduction}
                      langue={contribution.language.name}
                    />
                  </li>
                ))}
              </ul>
            )}
          </>
        )}
        <Image
          src="/assets/dico.gif"
          alt="logo"
          width={200}
          height={200}
          className=""
        />
      </div>
      </div>
      

      <Footer />
    </main>
  );
}
