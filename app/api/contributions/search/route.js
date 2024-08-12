import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    const url = new URL(req.url);
    const mot = url.searchParams.get('mot');
    const languageId = url.searchParams.get('languageId'); // Ajout du paramètre languageId

    try {
        // Préparer les conditions de recherche
        const searchConditions = {
            mot: {
                contains: mot,
                // mode: 'insensitive', // Décommentez si vous voulez rendre la recherche insensible à la casse
            },
        };

        // Ajouter le filtre de langue seulement si languageId est fourni
        if (languageId) {
            searchConditions.languageId = languageId;
        }

        const contributions = await prisma.contribution.findMany({
            where: searchConditions,
            include: {
                language: true, // Inclut les données de la langue associée
            },
        });

        return new Response(JSON.stringify(contributions), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
        // console.log(contributions); // Ne sera pas exécuté, mettez-le avant return si nécessaire

    } catch (error) {
        console.error('Error fetching contributions:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
