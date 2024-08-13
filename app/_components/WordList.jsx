// components/WordList.js
import { useState, useRef, useEffect } from "react";
import WordDetail from "./WordDetail";


const WordList = () => {
  const words = ["mot1", "mot2", "mot3", "mot4", "mot5", "mot6"];



  return (
    <div className="md:flex md:flex-row-reverse md:justify-between md:w-full" >
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
