import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    try {
        let { mot, traduction, langue, userId } = await req.json();

        //Récupération du bon utilisateur
        const user = await prisma.user.findUnique({
            where: { clerkUserId: userId },
        });

        userId = user.id;

        // Validation des champs
        if (!mot || !traduction || !langue || !userId) {
            return new Response(JSON.stringify({ error: 'Tous les champs sont requis.' }), { status: 400 });
        }

        const newContribution = await prisma.contribution.create({
            data: {
                mot,
                traduction,
                status: 'ENVOYE', // Ou tout autre statut par défaut
                userId,
                languageId: langue,
            },
        });

        return new Response(JSON.stringify(newContribution), { status: 200 });
    } catch (error) {
        console.error('Erreur lors de la création de la contribution:', error);
        return new Response(JSON.stringify({ error: 'Erreur interne du serveur.' }), { status: 500 });
    }
}

export async function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
