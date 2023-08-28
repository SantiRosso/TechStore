import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export const GET = async () => {
  const reviews = await prisma.review.findMany();
  return NextResponse.json(reviews, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};

export const POST = async (request, { params }) => {
  const { title, description } = await request.json();
  const newReview = await prisma.review.create({
    data: {
      title,
      description,
    },
  });

  return NextResponse.json(newReview, {
    headers: {
      "Cache-Control": "no-cache",
    },
  });
};
