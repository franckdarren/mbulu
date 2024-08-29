'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import { getCountUsersFromDatabase } from "../../services/userServices";
import { getCountContributionFromDatabase, getCountContributionUserFromDatabase } from "../../services/contributionServices";

export function AdminLink({ href, icone, counter, children }) {
    const pathname = usePathname();

    // Normalise les chemins pour une comparaison cohérente
    const normalizedPathname = pathname.replace(/\/+$/, '');  // Supprime les barres obliques finales
    const normalizedHref = href.replace(/\/+$/, '');  // Supprime les barres obliques finales

    // Vérifie si le lien est actif pour la page ou une sous-page
    const isActive =
        normalizedPathname === normalizedHref || // Actif si les chemins sont exactement égaux
        (normalizedPathname.startsWith(normalizedHref) && normalizedHref !== '/'); // Actif pour les sous-pages mais pas pour la racine

    return (
        <div className="flex items-center justify-between">
            <Link href={href} legacyBehavior>
                <a
                    className={`has-icon ${isActive ? '!text-[#D5711C]' : 'text-white'
                        } md:border-0 md:hover:text-[#22AAC6]`}
                >
                    <span className="icon"><i className={icone}></i></span>
                    <span className="menu-item-label">{children}</span>
                </a>
            </Link>
            {counter != null && ( // Vérifie si counter est défini
                <p className="flex items-center text-[9px] justify-center w-6 h-5 font-semibold text-blue-800 bg-blue-200 rounded-full mr-4">
                    {counter}
                </p>
            )}
        </div>
    );
}

export function Aside({ data }) {

    // const usersCount = await getCountUsersFromDatabase();
    // const contributionsCount = await getCountContributionFromDatabase();
    // const contributionsUserCount = await getCountContributionUserFromDatabase(data);

    return (
        <aside className="aside is-placed-left is-expanded">
            <div className="aside-tools">
                <div className="flex items-center gap-3">
                    <Image
                        src="/assets/logo.png"
                        alt="Logo de mbulu"
                        width={55}
                        height={55}
                        className="h-auto"
                    />
                    <b className="font-black">Mbulu</b>
                </div>
            </div>
            <div className="menu is-menu-main">

                {(data.role === "ADMIN" || data.role === "CONTRIBUTOR") && (
                    <>
                        <p className="menu-label">General</p>
                        <ul className="menu-list">
                            <li className="--set-active-index-html">
                                {/* <Link href="/admin/dashboard" legacyBehavior>
                                    <a className="has-icon">
                                        <span className="icon"><i className="mdi mdi-monitor-dashboard"></i></span>
                                        <span className="menu-item-label">Tableau de bord</span>
                                    </a>
                                </Link> */}
                                <AdminLink href="/admin/dashboard" icone="mdi mdi-monitor-dashboard">Tableau de bord</AdminLink>
                            </li>
                        </ul>
                    </>
                )}

                <>
                    <p className="menu-label mt-5">Apprendre une langue</p>
                    <ul className="menu-list">
                        <li className="--set-active-index-html">
                            {/* <Link href="/admin/cours" legacyBehavior>
                                <a className="has-icon">
                                    <span className="icon"><i className="mdi mdi-school"></i></span>
                                    <span className="menu-item-label">Cours</span>
                                </a>
                            </Link> */}
                            <AdminLink href="/admin/cours" icone="mdi mdi-school">Cours</AdminLink>
                        </li>
                    </ul>
                </>

                <ul className="menu-list">
                    {(data.role === "ADMIN" || data.role === "CONTRIBUTOR") && (
                        <>
                            <p className="menu-label mt-5">Dictionnaire</p>

                            <li className="--set-active-tables-html">
                                {/* <a href="/admin/contributions" className="has-icon flex items-center justify-center">
                                    <span className="icon"><i className="mdi mdi-format-list-bulleted-square"></i></span>
                                    <span className="menu-item-label">Contributions</span>
                                    <p className="flex items-center text-[9px] justify-center w-6 h-5 font-semibold text-blue-800 bg-blue-200 rounded-full mr-4">
                                    </p>
                                </a> */}
                                <AdminLink href="/admin/contributions" icone="mdi mdi-format-list-bulleted-square">Contributions</AdminLink>

                            </li>
                            <li className="--set-active-forms-html">
                                <AdminLink href="/admin/mes-contributions" icone="mdi mdi-file-document-check-outline">Mes contributions</AdminLink>
                            </li>
                        </>
                    )}

                </ul>



                {data.role === "ADMIN" && (
                    <>
                        <p className="menu-label mt-5">Administrateur</p>
                        <ul className="menu-list">
                            <li className="--set-active-profile-html">
                                <AdminLink href="/admin/utilisateurs" icone="mdi mdi-account-circle">Utilisateurs</AdminLink>
                            </li>
                        </ul>
                    </>
                )}
            </div>
        </aside>

    );
}
