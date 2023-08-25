import { NextResponse } from "next/server";

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
};

export const GET = async (request, { params }) => {
  //search params
  // console.log(request);
  // const { searchParams } = new URL(request.url);
  // console.log(searchParams);
  // const first_name = searchParams.get("first_name");
  // const last_name = searchParams.get("last_name");
  // console.log(first_name, last_name);

  const users = await fetchUsers();
  return NextResponse.json(users);
};

export const POST = async (request) => {
  //request body
  // const data = await request.json();
  // console.log(data);
  return NextResponse.json({ users: "Esto es un POST de 'users'." });
};
