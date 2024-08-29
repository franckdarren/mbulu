'use client'
import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";

export function AdminNavbar({ data }) {

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
                                    src={data?.image}
                                    alt="Image de l'utilisater"
                                    width={85}
                                    height={85}
                                    className="rounded-full"
                                />
                            </div>
                            <div className="is-user-name"><span>{data?.name}</span></div>
                            <span className="icon"><i className="mdi mdi-chevron-down"></i></span>
                        </a>
                        <div className="navbar-dropdown">
                            <a href="#" className="navbar-item hover:bg-slate-200">
                                <span className="icon"><i className="mdi mdi-account"></i></span>
                                <span>Mon compte</span>
                            </a>
                            <a className="navbar-item hover:bg-slate-200">
                                <span className="icon"><i className="mdi mdi-email"></i></span>
                                <span>Notifications</span>
                            </a>
                            <hr className="navbar-divider" />
                            <SignOutButton>
                                <button className="navbar-item hover:bg-slate-200 w-full">
                                    <span className="icon"><i className="mdi mdi-logout"></i></span>
                                    <span>Se déconnecter</span>
                                </button>
                            </SignOutButton>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}