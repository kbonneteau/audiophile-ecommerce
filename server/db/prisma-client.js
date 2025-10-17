const { PrismaClient } = require('@prisma/client');

let prisma = null;

/**
 * Get Prisma Client instance (singleton pattern)
 * @returns {PrismaClient} Prisma Client instance
 */
const getPrismaClient = () => {
  if (!prisma) {
    prisma = new PrismaClient({
      log: ['query', 'info', 'warn', 'error'],
    });
  }
  return prisma;
};

/**
 * Disconnect Prisma Client
 * Call this when shutting down the application
 */
const disconnectPrisma = async () => {
  if (prisma) {
    await prisma.$disconnect();
    prisma = null;
  }
};

module.exports = {
  getPrismaClient,
  disconnectPrisma,
};
