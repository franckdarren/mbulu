import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const { mot, traduction, status, userId, languageId } = await req.json();

    try {
        const newContribution = await prisma.contribution.create({
            data: {
                mot,
                traduction,
                status,
                userId,
                languageId,
            },
        });
        return new Response(JSON.stringify(newContribution), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create contribution' }), { status: 500 });
    }
}

export async function GET() {
    return new Response("Method Not Allowed", { status: 405 });
}
