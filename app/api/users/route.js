import { NextResponse } from "next/server";

const fetchUsers = async () => {
  const res = await fetch("https://reqres.in/api/users");
  const data = await res.json();
  return data.data;
};

export const GET = async () => {
  const users = await fetchUsers();
  return NextResponse.json(users);
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
