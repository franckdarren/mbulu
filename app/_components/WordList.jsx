// components/WordList.js
import { useState, useRef, useEffect } from "react";
import WordDetail from "./WordDetail";


const WordList = () => {
  const words = ["mot1", "mot2", "mot3", "mot4", "mot5", "mot6", "mot7", "mot8", "mot9", "mot10", "mot11", "mot12"]; // Ajoutez vos mots ici

 

  return (
    <div className="md:flex md:flex-row-reverse md:justify-center md:w-full" >
      <div className="">
  <WordDetail />
      </div>
      <ul className="border-black md:w-[30%]">
        {words.map((word) => (
          <li
            key={word}
            className="border-2 w-full border-[#d9d9d9] px-5 py-3 text-[#4F9AA9]"
          >
            {word}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WordList;
