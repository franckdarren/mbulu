import { PrismaClient } from '@prisma/client';
import { getAuth } from '@clerk/nextjs/server';

const prisma = new PrismaClient();

export async function GET(req, res) {
    const { userId } = getAuth(req);

    //Récupération du bon utilisateur
    const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
    });


    if (!userId) {
        return new Response(JSON.stringify({ error: 'Unauthorized' }), {
            status: 401,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    try {
        const contributions = await prisma.contribution.findMany({
            where: {
                userId: user.id, // Restriction des contributions à l'utilisateur connecté
            },
            include: {
                user: true, // Inclut les données de l'utilisateur associé
                language: true, // Inclut les données de la langue associée
            },
        });
        return new Response(JSON.stringify(contributions), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des contributions de l'utilisateur:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
