import { PrismaClient } from '@prisma/client';
import { auth } from '@clerk/nextjs/server';

let prisma;
if (!global.prisma) {
    global.prisma = new PrismaClient();
}
prisma = global.prisma;

export async function PUT(req) {
    try {
        // Extraction des données de la requête
        const body = await req.json();
        let { mot, traduction, langue, userId, contributionId } = body;

        // Récupération du bon utilisateur
        const user = await prisma.user.findUnique({
            where: { clerkUserId: userId },
        });

        userId = user.id;

        // Validation des champs
        if (!mot || !traduction || !langue || !userId) {
            return new Response(JSON.stringify({ error: 'Tous les champs sont requis.' }), { status: 400 });
        }

        // Vérification si la contribution existe
        const existingContribution = await prisma.contribution.findUnique({
            where: {
                id: contributionId,
            },
        });

        if (!existingContribution) {
            return new Response(JSON.stringify({ error: 'Contribution non trouvée' }), { status: 404 });
        }

        // Mise à jour de la contribution
        const updatedContribution = await prisma.contribution.update({
            where: {
                id: contributionId,
            },
            data: {
                mot,
                traduction,
                status: 'ENVOYE',
                userId,
                languageId: langue,
            },
        });

        // Réponse réussie
        return new Response(JSON.stringify(updatedContribution), { status: 200 });
    } catch (error) {
        // Réponse d'erreur
        return new Response(JSON.stringify({ error: 'Erreur interne du serveur.' }), { status: 500 });
    }
}
