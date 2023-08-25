import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data.data);
};

export const PUT = () => {
  return NextResponse.json({ users: `Esto es un PUT de 'user' ${params.id}.` });
};

export const DELETE = () => {
  return NextResponse.json({
    users: `Esto es un DELETE de 'user' ${params.id}.`,
  });
};
