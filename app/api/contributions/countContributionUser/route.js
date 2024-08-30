import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


export async function GET(request) {
    try {
        const url = new URL(request.url);
        const userId = url.searchParams.get('userId');
        console.log(url)
        console.log(userId)

        if (!userId) {
            return new Response(JSON.stringify({ error: 'User ID is required' }), { status: 400 });
        }

        const count = await prisma.contribution.count({
            where: {
                userId: userId, // Assurez-vous que userId est de type number si nécessaire
            },
        });

        return new Response(JSON.stringify(count), { status: 200 });
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions", error);
        return new Response(JSON.stringify({ error: 'An error occurred' }), { status: 500 });
    }
}