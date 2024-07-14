import Image from "next/image";

export function AdminNavbar() {
    return (
        <nav id="navbar-main" className="navbar is-fixed-top">
            <div className="navbar-brand">
                <a className="navbar-item mobile-aside-button">
                    <span className="icon"><i className="mdi mdi-forwardburger mdi-24px"></i></span>
                </a>
                <div className="navbar-item">
                    <div className="control">
                        <input placeholder="Faire une recherche..." className="input" />
                    </div>
                </div>
            </div>
            <div className="navbar-brand is-right">
                <a className="navbar-item --jb-navbar-menu-toggle" data-target="navbar-menu">
                    <span className="icon"><i className="mdi mdi-dots-vertical mdi-24px"></i></span>
                </a>
            </div>
            <div className="navbar-menu" id="navbar-menu">
                <div className="navbar-end">
                    <div className="navbar-item dropdown has-divider has-user-avatar">
                        <a className="navbar-link">
                            <div className="user-avatar">
                                <Image
                                    src="/assets/profil.jpg"
                                    alt="Image de l'utilisateru"
                                    width={85}
                                    height={85}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="is-user-name"><span>Franck Darren</span></div>
                            <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
                        </a>
                        <div className="navbar-dropdown">
                            <a href="profile.html" className="navbar-item hover:bg-slate-200">
                                <span className="icon"><i className="mdi mdi-account"></i></span>
                                <span>Mon compte</span>
                            </a>
                            <a className="navbar-item hover:bg-slate-200">
                                <span className="icon"><i className="mdi mdi-email"></i></span>
                                <span>Notifications</span>
                            </a>
                            <hr className="navbar-divider" />
                            <a className="navbar-item hover:bg-slate-200">
                                <span className="icon"><i className="mdi mdi-logout"></i></span>
                                <span>Se déconnecter</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}