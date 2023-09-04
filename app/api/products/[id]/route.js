import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export const GET = async (request, { params }) => {
  const productFound = await prisma.product.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(productFound, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};

export const PUT = async (request, { params }) => {
  try {
    const data = await request.json();
    const productUpdated = await prisma.product.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });

    return NextResponse.json(productUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const productRemoved = await prisma.product.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(productRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
