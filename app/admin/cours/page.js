'use client'

import AdminTitre from "../../_components/AdminTitre";
import WordList from "../../_components/WordList";

export default function CoursDashboard() {

    return (
        <main className="mb-10">
            <AdminTitre titre="Apprendre une langue" />
            <div className="">
                <section className="flex flex-col py-[15px] items-center">
                    <div className="">
                        <h1 className="text-[25px] font-bold text-[#4F9AA9]">Titre cours</h1>
                    </div>
                    <div className="flex flex-col items-center justify-center gap-3 mx-[10%] mt-6">
                        <h1 className="font-bold">Objectif spécifique du cours</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et neque vel felis scelerisque bibendum. Nulla facilisi. Vestibulum consequat, ipsum ac pulvinar tristique, est mauris sagittis tellus, at semper metus eros vel justo. Donec non neque vel felis scelerisque bibendum.</p>
                    </div>
                </section>

                <section className="px-[10%] md:px-[2%] md:flex md:justify-center md:items-center">
                    <div className=" w-full md:flex md:items-center md:justify-center">
                        <WordList />
                    </div>
                </section>
            </div>


        </main>
    );
}
