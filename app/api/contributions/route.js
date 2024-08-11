import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req, res) {
    try {
        const contributions = await prisma.contribution.findMany({
            orderBy: {
                createdAt: 'desc',
            },
            include: {
                user: true, // Inclut les données de l'utilisateur associé
                language: true, // Inclut les données de la langue associée
                validator: true, // Inclut les données du validateur associé
            },
        });

        return new Response(JSON.stringify(contributions), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération des contributions:", error);
        return new Response(JSON.stringify({ error: "Internal Server Error" }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
export const dynamic = "force-dynamic";