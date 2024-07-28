import Link from "next/link";
import { MasqueCard } from "./MasqueCard";
import { getAllLangues } from "@/services/langueServices";

export function SectionCard() {

    const langues = getAllLangues();

    return (
        <div>
            <h1 className="text-center text-[23px] font-extrabold md:text-[30px]  md: my-[25px]">Choisir la langue</h1>
            <div
                className="flex flex-col items-center mt-[10px] mb-[10px] md:flex md:flex-row md:items-center md:justify-center md:gap-[15px]">
                {
                    langues.map((langue) => (
                        <Link href={`/cours/${langue.slug}`} key={langue.id}>
                            <MasqueCard titre={langue.titre} image={langue.image} />
                        </Link>
                    ))
                }

            </div>
        </div>
    );
}
