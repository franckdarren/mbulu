import { AdminButton } from "@/app/_components/AdminButton";
import AdminTitre from "@/app/_components/AdminTitre";


export default function MesContributions() {
    return (
        <main>
            <div className="flex justify-between items-end">
                <AdminTitre titre="Mes contributions" />
                <AdminButton titreButton="Ajouter une contribution" color="bg-[#1f2937] hover:bg-[#fb9600]" />
            </div>
            <table className="table bg-white border">
                {/* head */}
                <thead>
                    <tr>
                        <th>Mot ou expression</th>
                        <th>Traduction</th>
                        <th>Status</th>
                        <th>Date création</th>
                        <th>Date modification</th>
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {/* {users.map((user) => ( */}
                    {/* <tr key={user.clerkUserId}> */}
                    <tr>
                        <td>
                            <div className="flex items-center gap-3">
                                <div>
                                    <div className="font-bold">Mbolo</div>
                                    <div className="text-sm opacity-50">FANG</div>
                                </div>
                            </div>
                        </td>
                        <td>Bonjour</td>
                        <td>APPROUVE</td>
                        <td>test</td>
                        <td>test</td>
                        <td className="">
                            <div className="flex items-center justify-end">
                                <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#cf5500] hover:bg-[#fb9600] flex items-center justify-center border">Modifier</span>
                            </div>
                        </td>

                    </tr>
                    {/* ))} */}
                </tbody>
                {/* foot */}
                <tfoot>
                    <tr>

                    </tr>
                </tfoot>
            </table>
        </main>
    );
}