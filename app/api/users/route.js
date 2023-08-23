import { NextResponse } from "next/server";

export const GET = () => {
  return NextResponse.json({ users: "Esto es un GET de 'users'." });
};

export const POST = () => {
  return NextResponse.json({ users: "Esto es un POST de 'users'." });
};

export const PUT = () => {
  return NextResponse.json({ users: "Esto es un PUT de 'users'." });
};

export const DELETE = () => {
  return NextResponse.json({ users: "Esto es un DELETE de 'users'." });
};
