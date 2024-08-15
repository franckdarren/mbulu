import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    const url = new URL(req.url);
    let mot = url.searchParams.get('mot');
    // Vérifier si le mot est défini, sinon définir une chaîne vide
    mot = mot ? mot.toLowerCase().replace(/\s+/g, '') : '';
    const languageId = url.searchParams.get('languageId');

    try {
        const searchConditions = {
            OR: [
                { mot: { contains: mot } },
                { traduction: { contains: mot } },
            ],
        };

        if (languageId) {
            searchConditions.languageId = languageId;
        }

        console.log('Search Conditions:', searchConditions);

        const contributions = await prisma.contribution.findMany({
            where: searchConditions,
            include: {
                language: true,
            },
        });

        return new Response(JSON.stringify(contributions), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error fetching contributions:', error);
        return new Response(JSON.stringify({ error: 'Internal server error' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
