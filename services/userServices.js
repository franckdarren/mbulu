import { prisma } from '../lib/db.js';

export const addUserToDatabases = async (clerkUserId, name, email, image) => {
    try {
        const user = await prisma.user.upsert({
            where: { clerkUserId },
            update: {
                name,
                email,
                image,
            },
            create: {
                clerkUserId,
                name,
                email,
                image,
            }
        });
        return user;
    } catch (error) {
        console.error("Une erreur est survenue lors de la création de l'utilisateur", error);
        throw error;
    }
}

export const getUserFromDatabase = async (clerkUserId) => {
    try {
        const user = await prisma.user.findUnique({
            where: { clerkUserId }
        });
        return user;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération de l'utilisateur", error);
        throw error;
    }

}

export const getAllUsersFromDatabase = async () => {
    try {
        const users = await prisma.user.findMany();
        return users;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération de tous les utilisateurs", error);
        throw error;
    }
}

export const getCountUsersFromDatabase = async () => {
    try {
        const count = await prisma.user.count();
        return count;
    } catch (error) {
        console.error("Une erreur est survenue lors de la récupération du nombre d'utilisateurs", error);
        throw error;
    }
}