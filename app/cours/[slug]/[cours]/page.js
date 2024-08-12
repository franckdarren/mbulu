"use client";

import { Navbar } from "../../../_components/Navbar";
import { Footer } from "../../../_components/Footer";
import WordList from "../../../_components/WordList";

export default function Cours() {
  return (
    <main className="flex flex-col justify-between">
      <Navbar />
      <section className="flex flex-col py-[15px] items-center">
        <div className="">
          <h1 className="text-[25px] font-bold text-[#4F9AA9]">Titre cours</h1>
        </div>
        <div className="mt-6">
          <h1>Liste des mots</h1>
        </div>
      </section>

      <section className="px-[10%] md:px-[2%] md:flex md:justify-center md:items-center">
        <div className=" w-full md:flex md:items-center md:justify-center">
          <WordList />  
        </div>
      </section>
      <Footer />
    
    </main>
  );
}
