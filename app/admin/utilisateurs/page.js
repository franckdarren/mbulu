"use client";

import AdminTitre from "../../_components/AdminTitre";
import Image from "next/image";
import { getAllUsersFromDatabase } from "../../../services/userServices";
import { ClipLoader } from 'react-spinners';
import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { Button, Label, Modal, TextInput, Textarea } from "flowbite-react";
import { useAuth } from '@clerk/nextjs';

export default function Utilisateurs() {

    const [openModal, setOpenModal] = useState(false);
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);
    const [loadingUsers, setLoadingUsers] = useState(true);
    const [loadingSubmit, setLoadingSubmit] = useState(false);
    const [selectedUser, setSelectedUser] = useState(null); // État pour l'utilisateur sélectionné

    const { register, handleSubmit, setValue, formState: { errors } } = useForm();

    const fetchUsers = useCallback(async () => {
        setLoadingUsers(true);
        try {
            const response = await fetch('/api/users');
            if (!response.ok) throw new Error('Failed to fetch users');
            const data = await response.json();
            setUsers(data);
        } catch (error) {
            console.error('Erreur lors de la récupération des utilisateurs:', error);
            setError(error.message);
        } finally {
            setLoadingUsers(false);
        }
    }, []);

    useEffect(() => {
        fetchUsers();
    }, [fetchUsers]);

    // Fonction pour ouvrir la modale d'édition
    const openEditModal = (user) => {
        setSelectedUser(user);
        setOpenModal(true);
        setValue('role', user.role); // Préremplir le champ "role" avec la valeur actuelle de l'utilisateur
    };

    // Fonction pour soumettre les modifications
    const onSubmit = async (data) => {
        setLoadingSubmit(true);
        try {
            await axios.put(`/api/users/${selectedUser.id}`, { role: data.role });
            fetchUsers(); // Recharger les utilisateurs après mise à jour
            setOpenModal(false);
        } catch (error) {
            console.error('Erreur lors de la mise à jour du rôle:', error);
            setError(error.message);
        } finally {
            setLoadingSubmit(false);
        }
    };

    return (
        <>
            <AdminTitre titre="Utilisateurs" />
            <div className="">
                <div>
                    <Modal show={openModal} onClose={() => setOpenModal(false)}>
                        <Modal.Header>{"Modifier le rôle de l'utilisateur"}</Modal.Header>
                        <Modal.Body>
                            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                                <div>
                                    <Label htmlFor="role" value="Rôle de l'utilisateur" />
                                    <select
                                        id="role"
                                        {...register('role', { required: 'Ce champ est requis' })}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                        defaultValue={selectedUser?.role || ""}
                                    >
                                        <option value="USER">Utilisateur</option>
                                        <option value="CONTRIBUTOR">Contributeur</option>
                                        <option value="ADMIN">Admin</option>
                                    </select>
                                    {errors.role && <span className="text-red-600">{errors.role.message}</span>}
                                </div>
                                <button
                                    type="submit"
                                    className="p-2 mb-2 text-sm text-[#1f2937] rounded-md bg-[#1f2937] hover:bg-[#D5711C]"
                                    disabled={loadingSubmit}
                                >
                                    {loadingSubmit ? <ClipLoader size={20} color={"#1f2937"} /> : "Modifier"}
                                </button>
                            </form>
                        </Modal.Body>
                    </Modal>
                </div>
                {loadingUsers ? (
                    <div className="flex justify-center items-center h-64">
                        <ClipLoader size={50} color={"#1f2937"} />
                    </div>
                ) : (
                    <table className="table bg-white border">
                        <thead>
                            <tr>
                                <th className="text-[15px] ">Nom(s) et prénom(s)</th>
                                <th className="text-[15px] ">Email</th>
                                <th className="text-[15px] ">Date de création</th>
                                <th className="text-[15px] flex justify-end ">Actions</th>
                            </tr>
                        </thead>
                        <tbody >
                            {users.map((user) => (
                                <tr key={user.clerkUserId}>
                                    <td className="text-[15px]">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <Image src={user.image} alt="Avatar" width={50} height={50} className="rounded-full" />
                                            </div>
                                            <div>
                                                <div className="font-bold">{user.name}</div>
                                                <div className="text-sm opacity-50">{user.role}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="text-[15px]">{user.email}</td>
                                    <td className="text-[15px]">{new Date(user.createdAt).toLocaleDateString()}</td>
                                    <td className="text-[15px]">
                                        <div className="flex items-center justify-end">
                                            <span
                                                onClick={() => openEditModal(user)}
                                                className="text-[12px] text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border cursor-pointer"
                                            >
                                                Modifier
                                            </span>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </div>
        </>
    );
}
