import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  const res = await fetch(`https://reqres.in/api/users/${params.id}`);
  const data = await res.json();
  return NextResponse.json(data.data);
};
