import { AdminNavbar } from "../_components/AdminNavbar";
import { Aside } from "../_components/Aside";
import "../main.css";
import { redirect, Redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { addUserToDatabases, getUserFromDatabase } from "@/services/userServices";
import Image from "next/image";
import { SignOutButton } from "@clerk/nextjs";

export default async function Layout({ children }) {

    const { userId } = auth()

    const user = await currentUser()
    
    if (!userId) {
        redirect("/")
    }

    console.log(userId);

    if (userId && user) {
        const name = `${user.firstName ?? ''} ${user.lastName ?? ''}`
        const email = user.emailAddresses[0]?.emailAddress || "";
        const image = user.imageUrl || "";
        await addUserToDatabases(userId, name, email, image)
    }
    
    const data = await getUserFromDatabase(userId)

    return (
        <div className="mt-5 ml-5">
            <Aside />
            <AdminNavbar data={data} />
            {children}
        </div>
    );
}