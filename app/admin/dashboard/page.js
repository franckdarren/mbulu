import AdminTitre from "../../../app/_components/AdminTitre";
import { getCountContributionFromDatabase, getCountFangContributionFromDatabase, getCountMyeneContributionFromDatabase, getCountPunuContributionFromDatabase, getCountContributionAttenteFromDatabase } from "../../../services/contributionServices";
import { getCountUsersFromDatabase } from "../../../services/userServices";
import ColumnChart from "../../_components/ColumnChart";
import PieChart from "../../_components/PieChart";


// Composant de carte de tableau de bord
function DashboardCard({ titre, counter }) {
    return (
        <div className="flex flex-col bg-whiteDashboardChart rounded-xl shadow-lg">
            <div className="px-6 py-8 sm:p-10 sm:pb-6">
                <div className="grid items-center justify-center w-full grid-cols-1 text-left">
                    <div>
                        <h2 className="text-lg font-medium tracking-tighter text-gray-600 lg:text-3xl">
                            {titre}
                        </h2>
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

// Fonction asynchrone de la page principale
export default async function Dashboard() {
    // Appels à la base de données pour obtenir les compteurs
    let contributions = await getCountContributionFromDatabase();
    let contributionsAttente = await getCountContributionAttenteFromDatabase();


    let countFangcontributions = await getCountFangContributionFromDatabase();
    let countMyenecontributions = await getCountMyeneContributionFromDatabase();
    let countPunucontributions = await getCountPunuContributionFromDatabase();

    let users = await getCountUsersFromDatabase();

    return (
        <main>
            <AdminTitre titre="Tableau de bord" />
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
                <DashboardCard titre="Contributions" counter={contributions} />
                <DashboardCard titre="En attente" counter={contributionsAttente} />
                <DashboardCard titre="Utilisateurs" counter={users} />
                <DashboardCard titre="Langues" counter="3" />
            </div>
            <div className="flex flex-col md:flex-row gap-5 mb-6 md:mb-0">
                <ColumnChart fang={countFangcontributions} myene={countMyenecontributions} punu={countPunucontributions} />
                <PieChart fang={countFangcontributions} myene={countMyenecontributions} punu={countPunucontributions} />
            </div>
        </main>
    );
}
