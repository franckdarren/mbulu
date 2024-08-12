import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
    if (req.method !== 'GET') {
        return res.status(405).json({ message: 'Method not allowed' });
    }

    const { mot } = req.query;

    try {
        // Requête de recherche dans la base de données
        const contributions = await prisma.contribution.findMany({
            where: {
                mot: {
                    contains: mot, // Recherche partielle
                    mode: 'insensitive', // Sensible à la casse
                },
            },
            include: {
                user: true,       // Inclure les relations nécessaires
                language: true,
            },
        });

        res.status(200).json(contributions);
    } catch (error) {
        console.error('Error fetching contributions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
}
