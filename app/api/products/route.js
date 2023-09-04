import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export const GET = async () => {
  const products = await prisma.products.findMany();
  return NextResponse.json(products, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};
