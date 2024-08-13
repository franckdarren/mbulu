import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
    let { contributionId, newStatus, userId } = await req.json();

    //Récupération du bon utilisateur
    const user = await prisma.user.findUnique({
        where: { clerkUserId: userId },
    });

    userId = user.id;

    try {
        const updatedContribution = await prisma.contribution.update({
            where: { id: contributionId },
            data: {
                status: newStatus,
                validatorId: userId
            },
        });

        return res.status(200).json(updatedContribution);
    } catch (error) {
        console.error('Error updating contribution status:', error);
        return res.status(500).json({ error: 'Failed to update status' });
    }
}
