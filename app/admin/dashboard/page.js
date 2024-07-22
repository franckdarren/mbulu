import { redirect, Redirect } from "next/navigation";
import { auth, currentUser } from "@clerk/nextjs/server";
import { addUserToDatabases, getUserFromDatabase } from "@/services/userServices";

export default async function Dashboard() {

    // const { userId } = auth()

    // if (!userId) {
    //     redirect("/")
    // }
    // const user = await currentUser()

    
    return (
        <main className="">
            <h1>Tableau de bord</h1>
            {/* <h2>Bienvenue {data?.name}</h2>
            <p>Email: {data.email}</p>
            <Image src={data?.image} width="200" height="200" alt="avatar" />
            <SignOutButton /> */}
        </main>
    );
}
