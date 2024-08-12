import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req){
  const formData = await req.formData();

  const path=process.env.EXTERNAL_API_BASE_ROUTE + '/users/token/'
  let res = await fetch(path, {
    method: 'POST',
    body: formData
  });
  res = await res.json();

  cookies().set('token', res.access, {
    httpOnly: true,
    maxAge: 60 * 60 * 72,
    // check sameSite
    sameSite: "strict",
    path: "/"
  })

  return NextResponse.json({ success: true })
};

