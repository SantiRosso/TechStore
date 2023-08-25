import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ reviews: "Este es un GET de reviews" });
};

export const POST = () => {
  return NextResponse.json({ reviews: "Este es un POST de reviews" });
};

export const PUT = () => {
  return NextResponse.json({ reviews: "Este es un PUT de reviews" });
};

export const DELETE = () => {
  return NextResponse.json({ reviews: "Este es un DELETE de reviews" });
};
