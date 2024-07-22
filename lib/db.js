const { PrismaClient } = require('@prisma/client');

const prismaClientSingleton = () => {
    return new PrismaClient();
};

// Utilisation d'une variable globale pour stocker le singleton PrismaClient
if (!global.prisma) {
    global.prisma = prismaClientSingleton();
}

const prisma = global.prisma;

module.exports = { prisma };
