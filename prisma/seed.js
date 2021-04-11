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

  categories.forEach((category) => console.log(category));
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
