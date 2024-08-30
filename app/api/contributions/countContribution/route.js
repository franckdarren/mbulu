import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const count = await prisma.contribution.count();
        return new Response(JSON.stringify(count), { status: 200 });
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions", error);
        return new Response(JSON.stringify({ error: 'An error occurred' }), { status: 500 });
    }
}