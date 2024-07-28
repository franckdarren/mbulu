"use client";

import { AdminButton } from "@/app/_components/AdminButton";
import AdminTitre from "@/app/_components/AdminTitre";

import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useState } from "react";

export default function MesContributions() {
    const [openModal, setOpenModal] = useState(false);

    return (
        <main>
            <div className="flex justify-between items-end">
                <AdminTitre titre="Mes contributions" />
                <button onClick={() => setOpenModal(true)} className="p-2 mb-2 text-sm text-white rounded-md bg-[#1f2937] hover:bg-[#D5711C]" >Ajouter une contribution</button>
                <Modal 
                    show={openModal} 
                    onClose={() => setOpenModal(false)}
                >
                    <Modal.Header>Soumettre une contribution</Modal.Header>
                    <Modal.Body>
                        <div className="space-y-4">
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="text" value="Mot ou expression" />
                                </div>
                                <TextInput 
                                    id="text" 
                                    placeholder="" 
                                    required 
                                />
                            </div>
                            <div>
                                <div className="mb-2 block">
                                    <Label htmlFor="traduction" value="Traduction en francais" />
                                </div>
                                <TextInput 
                                    id="traduction" 
                                    type="text" 
                                    required 
                                />
                            </div>
                            <form className="max-w-sm">
                                <label for="langue" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Selectionner la langue</label>
                                <select id="langue" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    <option selected>Choisir la langue</option>
                                    <option value="US">FANG</option>
                                    <option value="CA">MYENE</option>
                                    <option value="FR">PUNU</option>
                                </select>
                            </form>
                            <button className="p-2 mb-2 text-sm text-white rounded-md bg-[#1f2937] hover:bg-[#D5711C]" >Ajouter une contribution</button>
                            
            
                        </div>
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
                        <th>Date modification</th>
                    </tr>
                </thead>
                <tbody>
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
                                <span className="text-xs text-white mx-1 p-2 rounded-md bg-[#1f2937] hover:bg-[#D5711C] flex items-center justify-center border">
                                    Modifier
                                </span>
                            </div>
                        </td>
                    </tr>
                </tbody>
                <tfoot>
                    <tr></tr>
                </tfoot>
            </table>
        </main>
    );
}
