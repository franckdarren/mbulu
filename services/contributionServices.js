import { prisma } from '../lib/db.js';

export const getCountContributionUserFromDatabase = async (data) => {
    try {
        const count = await prisma.contribution.count({
            where: {
                userId: data.id, // Filtre pour les contributions de l'utilisateur spécifique
            },
        });
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions", error);
        throw error;
    }

}

export const getCountContributionFromDatabase = async () => {
    try {
        const count = await prisma.contribution.count();
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions", error);
        throw error;
    }
}