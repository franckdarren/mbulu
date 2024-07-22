import { redirect, Redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { addUserToDatabases, getUserFromDatabase } from "@/services/userServices";
import Image from "next/image";

export default async function Dashboard() {

    const { userId } = auth()

    if (!userId) {
        redirect("/")
    }
    const user = await currentUser()

    if (userId && user) {
        const fullName = `${user.firstName} ${user.lastName}`
        const email = user.emailAddresses[0]?.emailAddress || "";
        const image = user.imageUrl || "";
        await addUserToDatabases(userId, fullName, email, image)
    }

    const data = await getUserFromDatabase(userId)

    return (
        <main className="">
            <h1>Tableau de bord</h1>
            <h2>Bienvenue {user?.firstName} {user.lastName}</h2>
            <p>Email: {user.emailAddresses[0].emailAddress}</p>
        </main>
    );
}
