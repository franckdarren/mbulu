import Image from "next/image";
import Link from "next/link";
import { getCountUsersFromDatabase } from "../../services/userServices";
import { getCountContributionFromDatabase, getCountContributionUserFromDatabase } from "../../services/contributionServices";



export async function Aside({ data }) {

    const usersCount = await getCountUsersFromDatabase();
    const contributionsCount = await getCountContributionFromDatabase();
    const contributionsUserCount = await getCountContributionUserFromDatabase(data);


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
                <p className="menu-label">General</p>
                <ul className="menu-list">
                    <li className="--set-active-index-html">
                        <Link href="/admin/dashboard" legacyBehavior>
                            <a className="has-icon">
                                <span className="icon"><i className="mdi mdi-monitor-dashboard"></i></span>
                                <span className="menu-item-label">Tableau de bord</span>
                            </a>
                        </Link>
                    </li>
                </ul>
                <p className="menu-label mt-5">Contributeur</p>
                <ul className="menu-list">
                    <li className="--set-active-tables-html">
                        <Link href="/admin/contributions" legacyBehavior>
                            <a className="has-icon flex items-center justify-center">
                                <span className="icon"><i className="mdi mdi-content-save-edit-outline"></i></span>
                                <span className="menu-item-label">Contributions</span>
                                <p className="flex items-center justify-center w-5 h-5 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full mr-4">
                                    {contributionsCount}
                                </p>
                            </a>
                        </Link>
                    </li>
                    <li className="--set-active-forms-html">
                        <Link href="/admin/mes-contributions" legacyBehavior>
                            <a className="has-icon flex items-center justify-center">
                                <span className="icon"><i className="mdi mdi-file-document-check-outline"></i></span>
                                <span className="menu-item-label">Mes contributions</span>
                                <p className="flex items-center justify-center w-5 h-5 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full mr-4">
                                    {contributionsUserCount}
                                </p>
                            </a>
                        </Link>
                    </li>
                </ul>
                <p className="menu-label mt-5">Administrateur</p>
                <ul className="menu-list">
                    <li className="--set-active-profile-html">
                        <Link href="/admin/utilisateurs" legacyBehavior>
                            <a className="has-icon flex items-center justify-center">
                                <span className="icon"><i className="mdi mdi-account-circle"></i></span>
                                <span className="menu-item-label">Utilisateurs</span>
                                <p className="flex items-center justify-center w-5 h-5 text-xs font-semibold text-blue-800 bg-blue-200 rounded-full mr-4">
                                    {usersCount}
                                </p>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/admin/contributions" legacyBehavior>
                            <a className="has-icon">
                                <span className="icon"><i className="mdi mdi-content-save-edit-outline"></i></span>
                                <span className="menu-item-label">Contributions</span>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>

    );
}
