import { NextResponse } from "next/server";

export const GET = (request, { params }) => {
  return NextResponse.json({
    review: `Este es un GET de 'review' ${params.id}`,
  });
};

export const PUT = (request, { params }) => {
  return NextResponse.json({
    review: `Este es un PUT de 'review' ${params.id}`,
  });
};

export const DELETE = (request, { params }) => {
  return NextResponse.json({
    review: `Este es un DELETE de 'review' ${params.id}`,
  });
};
