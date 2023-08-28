import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export const GET = async (request, { params }) => {
  const review = await prisma.review.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(review, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};

export const PUT = async (request, { params }) => {
  try {
    const data = await request.json();
    const reviewUpdated = await prisma.review.update({
      where: {
        id: Number(params.id),
      },
      data: data,
    });

    return NextResponse.json(reviewUpdated);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};

export const DELETE = async (request, { params }) => {
  try {
    const reviewRemoved = await prisma.review.delete({
      where: {
        id: Number(params.id),
      },
    });
    return NextResponse.json(reviewRemoved);
  } catch (error) {
    return NextResponse.json(error.message);
  }
};
