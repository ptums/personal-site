import { keepAwake } from "@prisma/client";
import prisma from "../../../prisma";

const KEEP_ON_INT = 199;

export async function GET() {
  try {
    const getKeepAwakeRecord = await prisma.keepAwake.findMany({
      where: {
        keepOn: KEEP_ON_INT,
      },
    });

    getKeepAwakeRecord.forEach(async (record: keepAwake) => {
      await prisma.keepAwake.delete({
        where: {
          id: record?.id,
        },
      });
    });

    return new Response(
      JSON.stringify({
        message: `All records with  ${KEEP_ON_INT} id have been delete.d`,
      }),
      {
        status: 204,
      }
    );
  } catch (error) {
    console.error(error);

    return new Response(JSON.stringify(error), {
      status: 500,
    });
  } finally {
    await prisma.$disconnect();
  }
}
