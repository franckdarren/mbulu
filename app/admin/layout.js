import { AdminNavbar } from "../_components/AdminNavbar";
import { Aside } from "../_components/Aside";
import "../main.css";

export default function Layout({ children }) {
    return (
        <div className="mt-5 ml-5">
            <Aside />
            <AdminNavbar />
            {children}
        </div>
    );
}