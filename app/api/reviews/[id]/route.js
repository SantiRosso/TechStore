import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async (request, { params }) => {
  const review = await prisma.review.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  return NextResponse.json(review);
};

export const PUT = async (request, { params }) => {
  try {
    const { title, description } = await request.json();
    await prisma.review.update({
      where: {
        id: Number(params.id),
      },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json({
      review: `Este es un PUT de 'review' ${params.id}`,
    });
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
