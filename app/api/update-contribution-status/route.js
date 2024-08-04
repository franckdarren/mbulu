import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req, res) {
    const { contributionId, newStatus } = await req.json();

    try {
        const updatedContribution = await prisma.contribution.update({
            where: { id: contributionId },
            data: { status: newStatus },
        });

        return res.status(200).json(updatedContribution);
    } catch (error) {
        console.error('Error updating contribution status:', error);
        return res.status(500).json({ error: 'Failed to update status' });
    }
}
