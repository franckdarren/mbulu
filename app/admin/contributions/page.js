import AdminTitre from "@/app/_components/AdminTitre";

export default function Contributions() {
    return (
        <main>
            <AdminTitre titre="Contributions" />
            <table className="table bg-white border">
                {/* head */}
                <thead>
                    <tr>
                        <th>Mot ou expression</th>
                        <th>Traduction</th>
                        <th>Status</th>
                        <th>Contributeur</th>
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
                        <td>ENVOYE</td>
                        <td>Marc</td>
                        <td>test</td>
                        <td>test</td>
                        <td className="">
                            <div className="flex items-center justify-end">
                                <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#cf5500] hover:bg-[#fb9600] flex items-center justify-center border">Modifier</span>
                                <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#cf5500] hover:bg-[#fb9600] flex items-center justify-center border">Approuver</span>
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