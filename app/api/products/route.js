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

export const POST = async (request, { params }) => {
  const { name, description, stock, image, category } = await request.json();
  const newProduct = await prisma.prduct.create({
    data: {
      name,
      description,
      stock,
      image,
      category,
    },
  });

  return NextResponse.json(newProduct, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};
