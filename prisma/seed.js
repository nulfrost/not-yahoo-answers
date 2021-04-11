const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

async function main() {
  const categories = [
    "art",
    "technology",
    "business",
    "parenting",
    "news",
    "food",
    "pets",
    "sports",
    "travel",
    "education",
    "cars",
    "politics",
  ];

  await prisma.user.deleteMany({});

  const catArray = categories.map(
    async (category) =>
      await prisma.category.create({
        data: {
          name: category,
        },
      })
  );

  await Promise.all(catArray);
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
