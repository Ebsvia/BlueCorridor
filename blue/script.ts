import { PrismaClient } from "@prisma/client";
import { data } from "autoprefixer";

const prisma = new PrismaClient();

async function main() {
  const user = await prisma.user.create({
    
    data:{
      name: "Matt",
      email: "Matt@gmail.com",
      profiles: {
        create: {
          shortDesc: "london",
          fullDesc: "tester",
        },
      },
    },
  });
  console.log(user);

const userWithProfiles = await prisma.user.findMany({
    include: {
        profiles: true,
    },
})
console.dir(userWithProfiles, {depth: null })
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });

  export default data
