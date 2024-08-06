import { AdminNavbar } from "../_components/AdminNavbar";
import { Aside } from "../_components/Aside";
import "../main.css";
import { redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { addUserToDatabases, getUserFromDatabase } from "../../services/userServices";

export default async function Layout({ children }) {
    const { userId } = auth();

    if (!userId) {
        redirect("/");
        return null;
    }

    const user = await currentUser();

    if (userId && user) {
        const name = `${user.firstName ?? ''} ${user.lastName ?? ''}`;
        const email = user.emailAddresses[0]?.emailAddress || "";
        const image = user.imageUrl || "";
        await addUserToDatabases(userId, name, email, image);
    }

    const data = await getUserFromDatabase(userId);

    return (
        <div className="mt-5 mx-5">
            <Aside data={data} />
            <AdminNavbar data={data} />
            {children}
        </div>
    );
}
