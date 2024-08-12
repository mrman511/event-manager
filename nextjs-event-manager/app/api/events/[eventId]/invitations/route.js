import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(){

}

export async function POST(req, { params }){
  console.log(params);
  const cookieStore = cookies();
  const token = cookieStore.get('token');
  if (!token){
    return NextResponse.json({success: false})
  };
  const path = `/my_events/${ params.eventId }/invitations/create/`;
  const formData = await req.formData();
  let res = await fetch(process.env.EXTERNAL_API_BASE_ROUTE + path, {
    headers: { Authorization: `Bearer ${token.value}` },
    method: 'POST',
    body: formData,
  });
  return NextResponse.json({ success: true })
}