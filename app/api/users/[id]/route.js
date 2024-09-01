import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function PUT(req, { params }) {
    const { id } = params;

    try {
        const { role } = await req.json();

        // Vérifiez si le rôle est valide
        if (!["USER", "CONTRIBUTOR", "ADMIN"].includes(role)) {
            return NextResponse.json({ error: "Rôle invalide" }, { status: 400 });
        }

        // Mettre à jour le rôle de l'utilisateur
        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: { role: role },
        });

        return NextResponse.json(updatedUser, { status: 200 });
    } catch (error) {
        console.error('Erreur lors de la mise à jour de l’utilisateur:', error);
        return NextResponse.json({ error: 'Erreur lors de la mise à jour de l’utilisateur' }, { status: 500 });
    }
}
export const dynamic = "force-dynamic";