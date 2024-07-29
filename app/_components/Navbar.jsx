"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "../../public/assets/logo.png";
import { Button } from "./Button";
import ActiveLink from "./ActiveLink";
import { usePathname } from "next/navigation";

export function Navbar() {
   
    return (
        <nav className="bg-[#D5711C]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a
                    href="/"
                    className="flex items-center space-x-3 rtl:space-x-reverse"
                >
                    <Image
                        src={logo}
                        alt="logo Mbulu"
                        className="object-cover h-[50px] w-auto"
                    />
                </a>
                <button
                    data-collapse-toggle="navbar-default"
                    type="button"
                    className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="navbar-default"
                    aria-expanded="false"
                >
                    <span className="sr-only">Open main menu</span>
                    <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 17 14"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 1h15M1 7h15M1 13h15"
                        />
                    </svg>
                </button>


                <div
                    className="hidden w-full md:block md:w-auto"
                    id="navbar-default"
                >
                    <ul className="absolute bg-[#D5711C] w-[55%] right-0 top-[55px] md:relative md:right-auto md:top-auto md:w-full md:bg-transparent font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
                        <li>
                            <ActiveLink href="/">Accueil</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/dictionnaire">Traduction</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/cours">Cours</ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/a-propos">A propos</ActiveLink>
                        </li>
                        <li>
                            <a
                                href="/sign-up"
                                className="md:hidden block py-2 px-3 text-white rounded  md:border-0 md:hover:text-[#22AAC6] md:p-0 "
                            >
                                S&apos;inscrire
                            </a>
                        </li>
                        <li>
                            <a
                                href="/sign-in"
                                className="md:hidden block py-2 px-3 text-white rounded  md:border-0 md:hover:text-[#22AAC6] md:p-0 "
                            >
                                Se connecter
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="md:flex md:gap-3 hidden">
                    <a href="/sign-up">
                        <Button titreButton="S'inscrire" color="bg-[#22AAC6] hover:bg-[#61B3C3]" />
                    </a>
                    <a href="/sign-in">
                        <Button titreButton="Se connecter" color="bg-[#093741] hover:bg-[#35727E]" />
                    </a>
                </div>

            </div>
        </nav>
    );
}
