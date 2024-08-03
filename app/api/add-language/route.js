import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const { name, description } = await req.json();

    try {
        const newLanguage = await prisma.language.create({
            data: {
                name,
                description,
            },
        });
        return new Response(JSON.stringify(newLanguage), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create language' }), { status: 500 });
    }
}
