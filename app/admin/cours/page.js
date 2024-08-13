import AdminTitre from "../../_components/AdminTitre";
import { SectionCard } from "../../_components/SectionCard";

export default async function CoursDashboard() {

    return (
      
            

            <main className="flex flex-col min-h-screen w-[100%] bg-cover bg-center" >
                <AdminTitre titre="Apprendre une langue" />
            <div className="flex-grow i bg-cover bg-center" style={{ backgroundImage: 'url(/assets/livre.gif)' }}>
                
                <div className="mt-10 flex bg-white bg-opacity-20 justify-center ">
                    <h1 className="md:w-[70%] px-[10px] py-5 text-[#093741] text-center text-[24px] md:text-[34px] font-bold">La méthode ludique pour apprendre une langue du Gabon</h1>
                </div>
                <SectionCard/>
            </div>
        </main>

        
    );
}
