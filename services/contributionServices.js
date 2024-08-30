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

export const contributionUserApprouve = async (data) => {
    try {
        const count = await prisma.contribution.count({
            where: {
                AND: [
                    {
                        userId: data.id,
                    },
                    {
                        status: 'APPROUVE',
                    }
                ],
            },
        });
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions", error);
        throw error;
    }

}

export const contributionUserAttente = async (data) => {
    try {
        const count = await prisma.contribution.count({
            where: {
                AND: [
                    {
                        userId: data.id,
                    },
                    {
                        status: 'ENVOYE',
                    }
                ],
            },
        });
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions", error);
        throw error;
    }

}

export const getCountContributionAttenteFromDatabase = async () => {
    try {
        const count = await prisma.contribution.count({
            where: {
                status: "ENVOYE",
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

export const getCountFangContributionFromDatabase = async () => {
    try {
        const count = await prisma.contribution.count({
            where: {
                languageId: "66ae7545c443269e80e9770e",
            },
        });
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions fang", error);
        throw error;
    }
}

export const getCountMyeneContributionFromDatabase = async () => {
    try {
        const count = await prisma.contribution.count({
            where: {
                languageId: "66ae757cc443269e80e9770f",
            },
        });
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions myene", error);
        throw error;
    }
}

export const getCountPunuContributionFromDatabase = async () => {
    try {
        const count = await prisma.contribution.count({
            where: {
                languageId: "66ae7588c443269e80e97710",
            },
        });
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre de contributions punu", error);
        throw error;
    }
}