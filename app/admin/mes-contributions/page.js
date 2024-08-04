"use client";

import { AdminButton } from "@/app/_components/AdminButton";
import AdminTitre from "@/app/_components/AdminTitre";
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useAuth } from '@clerk/nextjs';

const getStatusClass = (status) => {
    switch (status) {
        case 'APPROUVE':
            return 'bg-green-100 text-green-800 border-green-400'; // Vert pour approuvé
        case 'REJETE':
            return 'bg-red-100 text-red-800 border-red-400'; // Rouge pour rejeté
        case 'ENVOYE':
            return 'bg-gray-100 text-gray-800 border-gray-400'; // Gris pour envoyé
        default:
            return '';
    }
};

export default function MesContributions() {
    const [openModal, setOpenModal] = useState(false);
    const [contributions, setContributions] = useState([]);
    const [error, setError] = useState(null);
    const { userId } = useAuth();

    useEffect(() => {
        const fetchContributions = async () => {
            try {
                const response = await fetch('/api/contributions/user');
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

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = async (data) => {
        try {
            const response = await axios.post('/api/add-contribution', {
                ...data,
                userId: userId // Assurez-vous que userId est correctement récupéré de useAuth
            });
            console.log('Contribution added:', response.data);
            setOpenModal(false); // Fermer le modal après la soumission
        } catch (error) {
            console.error('Error adding contribution:', error.response?.data || error.message);
        }
    };

    if (error) {
        return <div>Erreur : {error}</div>;
    }

    return (
        <main>
            <div className="flex justify-between items-end">
                <AdminTitre titre="Mes contributions" />
                <button onClick={() => setOpenModal(true)} className="p-2 mb-2 text-sm text-white rounded-md bg-[#1f2937] hover:bg-[#D5711C]">
                    Ajouter une contribution
                </button>
                <Modal show={openModal} onClose={() => setOpenModal(false)}>
                    <Modal.Header>Soumettre une contribution</Modal.Header>
                    <Modal.Body>
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="text" value="Mot ou expression" />
                                </div>
                                <TextInput
                                    id="text"
                                    placeholder=""
                                    required
                                    {...register('mot', { required: 'Ce champ est requis' })}
                                />
                                {errors.mot && <span className="text-red-600">{errors.mot.message}</span>}
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="traduction" value="Traduction en francais" />
                                </div>
                                <Textarea
                                    id="traduction"
                                    placeholder=""
                                    required
                                    rows={4}
                                    {...register('traduction', { required: 'Ce champ est requis' })}
                                />
                                {errors.traduction && <span className="text-red-600">{errors.traduction.message}</span>}
                            </div>
                            <div>
                                <label htmlFor="langue" className="block mb-2 text-sm font-medium text-gray-900">
                                    Sélectionner la langue
                                </label>
                                <select
                                    id="langue"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                    {...register('langue', { required: 'Ce champ est requis' })}
                                    defaultValue=""
                                >
                                    <option value="" disabled>Choisir la langue</option>
                                    <option value="66ae7545c443269e80e9770e">FANG</option>
                                    <option value="66ae757cc443269e80e9770f">MYENE</option>
                                    <option value="66ae7588c443269e80e97710">PUNU</option>
                                </select>
                                {errors.langue && <span className="text-red-600">{errors.langue.message}</span>}
                            </div>
                            <button
                                type="submit"
                                className="p-2 mb-2 text-sm text-[#1f2937] rounded-md bg-[#1f2937] hover:bg-[#D5711C]"
                            >
                                Ajouter une contribution
                            </button>
                        </form>
                    </Modal.Body>
                </Modal>
            </div>
            <table className="table bg-white border">
                <thead>
                    <tr>
                        <th>Mot ou expression</th>
                        <th>Traduction</th>
                        <th>Status</th>
                        <th>Date création</th>
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
                            <td className="">
                                <div className="flex items-center justify-end">
                                    <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border">Modifier</span>
                                    <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border">Approuver</span>
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
        </main>
    );
}
