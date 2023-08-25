import { NextResponse } from "next/server";
import { prisma } from "@/libs/prisma";

export const GET = async () => {
  const reviews = await prisma.review.findMany();
  console.log(reviews);
  return NextResponse.json(reviews);
};

export const POST = async (request, { params }) => {
  const { title, description } = await request.json();

  return NextResponse.json(
    await prisma.review.create({
      data: {
        title: title,
        description: description,
      },
    })
  );
};
