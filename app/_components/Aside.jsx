import Image from "next/image";


export function Aside() {
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
                        <a href="/admin/dashboard">
                            <span className="icon"><i className="mdi mdi-monitor-dashboard"></i></span>
                            <span className="menu-item-label">Tableau de bord</span>
                        </a>
                    </li>
                </ul>
                <p className="menu-label mt-5">Contributeur</p>
                <ul className="menu-list">
                    <li className="--set-active-tables-html">
                        <a href="/admin/contributions">
                            <span className="icon"><i className="mdi mdi-content-save-edit-outline"></i></span>
                            <span className="menu-item-label">Contributions</span>
                        </a>
                    </li>
                    <li className="--set-active-forms-html">
                        <a href="/admin/mes-contributions">
                            <span className="icon"><i className="mdi mdi-file-document-check-outline"></i></span>
                            <span className="menu-item-label">Mes contributions</span>
                        </a>
                    </li>
                </ul>
                <p className="menu-label mt-5">Administrateur</p>
                <ul className="menu-list">
                    <li className="--set-active-profile-html">
                        <a href="/admin/utilisateurs">
                            <span className="icon"><i className="mdi mdi-account-circle"></i></span>
                            <span className="menu-item-label">Utilisateurs</span>
                        </a>
                    </li>
                    <li>
                        <a href="/admin/contributions" className="has-icon">
                            <span className="icon"><i className="mdi mdi-content-save-edit-outline"></i></span>
                            <span className="menu-item-label">Contributions</span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>

    );
}
