import AdminTitre from "@/app/_components/AdminTitre";
import Image from "next/image";
import { getAllUsersFromDatabase } from "@/services/userServices";

export default async function Utilisateurs() {
    // Recupères les utilisateurs
    const users = await getAllUsersFromDatabase();

    return (
        <>
            <AdminTitre titre="Utilisateurs" />
            <div className="">
                <table className="table bg-white border">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Nom(s) et prénom(s)</th>
                            <th>Email</th>
                            <th>Date de création</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* rows */}
                        {users.map((user) => (
                            <tr key={user.clerkUserId}>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="">
                                                <Image src={user.image}
                                                    alt="Avatar" width={50} height={50}
                                                    className="rounded-full" />
                                            </div>
                                        </div>
                                        <div>
                                            <div className="font-bold">{user.name}</div>
                                            <div className="text-sm opacity-50">{user.role}</div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {user.email}
                                </td>
                                <td>{user.createdAt.toLocaleDateString()}</td>
                            </tr>
                        ))}
                    </tbody>
                    {/* foot */}
                    <tfoot>
                        <tr>

                        </tr>
                    </tfoot>
                </table>
            </div >
        </>
    );
}