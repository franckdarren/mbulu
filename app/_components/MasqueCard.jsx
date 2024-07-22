import { Button } from "./Button";
import Image from "next/image";
import Link from "next/link";

export function MasqueCard({titre, image}) {
    return (
        <div className="md:flex flex-row">
            <a href=""  className="m-2 w-[140px] h-[140px] flex flex-col justify-around items-center rounded-lg shadow-lg shadow-gray-500 hover:bg-gray-200 md:w-[150px] md:h-[156px] ">
                <Image src={image}
                width={100}
                height={100}
                className="h-[110px] w-auto"
                alt="image"
                />
                <h3 className="text-[18px] font-normal">{titre}</h3>
            </a>
        </div>
    );
}

