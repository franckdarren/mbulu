'use client';
import { useState, useEffect } from 'react';
import AdminTitre from "@/app/_components/AdminTitre";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

const getStatusClass = (status) => {
    switch (status) {
        case 'APPROUVE':
            return 'bg-green-100 text-green-800 border-green-400'; // Vert pour approuvé
        case 'REJETE':
            return 'bg-red-100 text-red-800 border-red-400'; // Rouge pour rejeté
        case 'ENVOYE':
            return 'bg-gray-100 text-gray-800 border-gray-400'; // Gris pour envoyé
    }
};

export default function Contributions() {
    const [contributions, setContributions] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch('/api/contributions');
                if (!response.ok) throw new Error('Failed to fetch contributions');
                const data = await response.json();
                setContributions(data);
            } catch (error) {
                console.error('Erreur lors de la récupération des contributions:', error);
                setError(error.message);
            }
        };

        fetchContributions();
    }, []);

    if (error) {
        return <div>Erreur : {error}</div>;
    }

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
                    </tr>
                </thead>
                <tbody>
                    {/* rows */}
                    {contributions.map((contribution) => (
                        <tr key={contribution.id}>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div>
                                        <div className="font-bold">{contribution.mot}</div>
                                        <div className="text-sm opacity-50">{contribution.language.name}</div>
                                    </div>
                                </div>
                            </td>
                            <td>{contribution.traduction}</td>
                            <td>
                                <span className={`text-xs font-medium me-2 px-2.5 py-0.5 rounded border ${getStatusClass(contribution.status)}`}>
                                    {contribution.status}
                                </span>
                            </td>
                            <td>{contribution.user.name}</td>
                            <td>{format(new Date(contribution.createdAt), 'dd MMMM yyyy', { locale: fr })}</td>
                            <td className="">
                                <div className="flex items-center justify-end">
                                    <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border">Modifier</span>
                                    <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border">Approuver</span>
                                </div>
                            </td>


                        </tr>
                    ))}
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