/* eslint-disable */
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const bcrypt = require("bcrypt");

const seedAdmin = async () => {
  const admin = await prisma.admin.findUnique({
    where: { email: "admin@telekvis.com" },
  });
  if (!admin) {
    console.log("Seeding admin...");
    await prisma.admin.create({
      data: {
        name: "Admin",
        email: "admin@telekvis.com",
        password: await bcrypt.hash("12345678", 10),
      },
    });
  } else {
    console.log("Admin already exists");
  }
};

const main = async () => {
  await seedAdmin();    
  process.exit(0);
};

main();

