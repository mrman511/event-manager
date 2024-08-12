import { NextResponse } from "next/server";

import { cookies } from "next/headers";


export async function GET(req){
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  if (!token){
    return NextResponse.json({success: false})
  };
  const path = process.env.EXTERNAL_API_BASE_ROUTE + '/my_events/';
  let res = await fetch(path, {
    headers: { Authorization: `Bearer ${token.value}` }
  });
  res = await res.json();
  return NextResponse.json({success: true, events: res});
}

export async function POST(req){
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  if (!token){
    return NextResponse.json({success: false})
  };
  
  const formData = await req.formData();
  const path = process.env.EXTERNAL_API_BASE_ROUTE + '/my_events/create/';
  let res = await fetch(path, {
    method: 'POST',
    headers: { Authorization: `Bearer ${token.value}` },
    body: formData
  });
  return NextResponse.json({success: true})
}
