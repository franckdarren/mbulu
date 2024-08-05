'use client';
import AdminTitre from "@/app/_components/AdminTitre";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useAuth } from '@clerk/nextjs';
import { ClipLoader } from 'react-spinners';

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
    const [openModal, setOpenModal] = useState(false);
    const [contributions, setContributions] = useState([]);
    const [error, setError] = useState(null);
    const [loadingContributions, setLoadingContributions] = useState(true); // État de chargement des contributions
    const [loadingSubmit, setLoadingSubmit] = useState(false); // État de chargement de la soumission
    const [loadingApprove, setLoadingApprove] = useState({}); // État de chargement de l'approbation


    // Recupérer les contributions de l'utilisateur connecté
    const fetchContributions = useCallback(async () => {
        setLoadingContributions(true); // Démarrer le chargement
        try {
            const response = await fetch('/api/contributions/');
            if (!response.ok) throw new Error('Failed to fetch contributions');
            const data = await response.json();
            setContributions(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des contributions:', error);
            setError(error.message);
        } finally {
            setLoadingContributions(false); // Arrêter le chargement
        }
    }, []);

    useEffect(() => {
        fetchContributions();
    }, [fetchContributions]);

    // Approuver une contribution
    const handleApprove = async (contributionId) => {
        setLoadingApprove((prevState) => ({ ...prevState, [contributionId]: true })); // Démarrer le chargement de l'approbation
        try {
            const response = await axios.post('/api/update-contribution-status', {
                contributionId,
                newStatus: 'APPROUVE'
            });
            console.log('Contribution approved:', response.data);
            fetchContributions(); // Assurez-vous que fetchContributions est bien appelé et attend la réponse
        } catch (error) {
            console.error('Error approving contribution:', error.response?.data || error.message);
        } finally {
            setLoadingApprove((prevState) => ({ ...prevState, [contributionId]: false })); // Arrêter le chargement de l'approbation
        }
    };

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <main>
            <AdminTitre titre="Contributions" />
            {loadingContributions ? (
                <div className="flex justify-center items-center h-64">
                    <ClipLoader size={50} color={"#1f2937"} />
                </div>
            ) : (
                <table className="table bg-white border">
                    <thead>
                        <tr>
                            <th>Mot ou expression</th>
                            <th>Traduction</th>
                            <th>Status</th>
                            <th>Date création</th>
                            <th>Contributeur</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
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
                                <td>{format(new Date(contribution.createdAt), 'dd MMMM yyyy', { locale: fr })}</td>
                                <td>{contribution.user.name}</td>
                                <td className="">
                                    <div className="flex items-center justify-end">
                                        <span
                                            className="text-xs text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border cursor-pointer"
                                        >
                                            Modifier
                                        </span>
                                        {/* Afficher le bouton "Approuver" seulement si le statut n'est pas 'APPROUVE' ou 'REJETE' */}
                                        {contribution.status !== 'APPROUVE' && contribution.status !== 'REJETE' && (
                                            <span
                                                onClick={() => handleApprove(contribution.id)}
                                                className="text-xs text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border cursor-pointer"
                                            >
                                                {loadingApprove[contribution.id] ? <ClipLoader size={15} color={"#ffffff"} /> : "Approuver"}
                                            </span>
                                        )}
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                    <tfoot>
                        <tr>
                            {/* Footer content if needed */}
                        </tr>
                    </tfoot>
                </table>
            )}
        </main>
    );
}