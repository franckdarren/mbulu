import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req) {
    const url = new URL(req.url);
    const mot = url.searchParams.get('mot');
    const languageId = url.searchParams.get('languageId');

    console.log('Mot:', mot);
    console.log('Language ID:', languageId);

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
