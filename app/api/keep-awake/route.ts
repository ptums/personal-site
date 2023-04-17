import prisma from "../../../prisma";
import { KEEP_ON_INT } from "utils/constants";

export async function GET() {
  try {
    let data = await prisma.keepAwake.create({
      data: {
        keepOn: KEEP_ON_INT,
      },
    });

    return new Response(JSON.stringify(data), {
      status: 200,
    });
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
