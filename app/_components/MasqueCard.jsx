import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";

export function MasqueCard({ titre, image }) {
    return (
        <div className="md:flex animate-levitate flex-row">
            <div className="transition ease-in-out delay-75 hover:-translate-y-1 hover:scale-110 duration-300 m-2 w-[220px] h-[250px] flex flex-col justify-around items-center rounded-lg bg-white shadow-lg shadow-gray-500 hover:bg-gray-200">
                <Image src={image}
                    width={100}
                    height={100}
                    className="h-[200px] w-auto"
                    alt="image"
                />
                <h3 className="text-[20px] font-bold pb-2">{titre}</h3>
            </div>
        </div>
    );
}

