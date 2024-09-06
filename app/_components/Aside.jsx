'use client';

import Image from "next/image";
import Link from "next/link";
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { getCountUsersFromDatabase } from "../../services/userServices";

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
    const [userContributionCount, setUserContributionCount] = useState(null);
    const [totalContributionCount, setTotalContributionCount] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const intervalId = setInterval(async () => {
            try {
                if (!data || !data.id) {
                    setError('User ID is required');
                    return;
                }

                const userResponse = await fetch(`/api/contributions/countContributionUser?userId=${data.id}`);
                const userData = await userResponse.json();
                if (!userResponse.ok) throw new Error(userData.error);
                setUserContributionCount(userData);

                const totalResponse = await fetch('/api/contributions/countContribution');
                const totalData = await totalResponse.json();
                if (!totalResponse.ok) throw new Error(totalData.error);
                setTotalContributionCount(totalData);
            } catch (err) {
                setError(err.message);
            }
        }, 5000);

        return () => clearInterval(intervalId);
    }, [data]);

    return (
        <aside className="aside is-placed-left h-full lg:fixed is-expanded">
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
                                <AdminLink href="/admin/dashboard" icone="mdi mdi-monitor-dashboard">Tableau de bord</AdminLink>
                            </li>
                        </ul>
                    </>
                )}

                <>
                    <p className="menu-label mt-5">Apprendre une langue</p>
                    <ul className="menu-list">
                        <li className="--set-active-index-html">
                            <AdminLink href="/admin/cours" icone="mdi mdi-school">Cours</AdminLink>
                        </li>
                    </ul>
                </>

                <ul className="menu-list">
                    {(data.role === "ADMIN" || data.role === "CONTRIBUTOR") && (
                        <>
                            <p className="menu-label mt-5">Dictionnaire</p>
                            <li className="--set-active-tables-html">
                                <AdminLink href="/admin/contributions" icone="mdi mdi-format-list-bulleted-square" counter={totalContributionCount}>Contributions</AdminLink>
                            </li>
                            <li className="--set-active-forms-html">
                                <AdminLink href="/admin/mes-contributions" icone="mdi mdi-file-document-check-outline" counter={userContributionCount}>Mes contributions</AdminLink>
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
