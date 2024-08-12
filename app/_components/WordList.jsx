// components/WordList.js
import { useState, useRef, useEffect } from "react";
import WordDetail from "./WordDetail";


const WordList = () => {
  const words = ["mot1", "mot2", "mot3", "mot4", "mot5", "mot6", "mot7", "mot8", "mot9", "mot10", "mot11", "mot12"]; // Ajoutez vos mots ici

  // Initialise le premier mot comme sélectionné par défaut au chargement
  const [selectedWord, setSelectedWord] = useState(words[0]);
  const wordListRef = useRef(null);

  // Gestion des clics sur les mots
  const handleWordClick = (word) => {
    setSelectedWord((prevSelectedWord) =>
      prevSelectedWord === word ? null : word
    );
  };

  // Optionnel : Désélectionner le mot lorsque l'utilisateur clique en dehors de la liste
  const handleClickOutside = (event) => {
    if (wordListRef.current && !wordListRef.current.contains(event.target)) {
      // Ne rien faire, pour ne pas désélectionner lorsque l'on clique en dehors
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeDetail = () => {
    setSelectedWord(null);
  };

  return (
    <div className="md:flex md:flex-row-reverse md:justify-center md:w-full" ref={wordListRef}>
      <div className="md:w-[50%]">
        {selectedWord && <WordDetail selectedWord={selectedWord} closeDetail={closeDetail} />}
      </div>
      <ul className="border-black md:w-[30%]">
        {words.map((word) => (
          <li
            key={word}
            onClick={() => handleWordClick(word)}
            className="border-2 w-full border-[#d9d9d9] px-5 py-3 text-[#4F9AA9]"
            style={{
              cursor: 'pointer',
              color: selectedWord === word ? '#F69F1D' : '#4F9AA9',
              backgroundColor: selectedWord === word ? '#4F9AA9' : 'white',
              fontWeight: selectedWord === word ? 'bold' : 'normal',
            }}
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
