import AdminTitre from "../../../app/_components/AdminTitre";
import { getCountContributionFromDatabase } from "../../../services/contributionServices";
import { getCountUsersFromDatabase } from "../../../services/userServices";



export function DashboardCard({ titre, counter }) {

    return (
        <div className="flex flex-col bg-white rounded-xl shadow-lg">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>
                        <h2
                            className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl"
                        >
                            {titre}
                        </h2>
                        {/* <p className="mt-2 text-sm text-gray-500">Suitable to grow steadily.</p> */}
                    </div>
                    <div className="mt-6">
                        <p>
                            <span className="text-5xl font-light tracking-tight text-black">
                                {counter}
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default async function Dashboard() {
    let contributions = await getCountContributionFromDatabase()
    let users = await getCountUsersFromDatabase()



    return (
        <main className="">
            <AdminTitre titre="Tableau de bord" />
            <div className="grid grid-cols-4 gap-5">
                <DashboardCard titre="Contributions" counter={contributions} />
                <DashboardCard titre="Utilisateurs" counter={users} />
                <DashboardCard titre="Langues" counter="3" />
            </div>

        </main>
    );
}
