import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(req){
  try{
    const cookieStore = cookies();
    const token = cookieStore.get('token');
    return NextResponse.json({ success: token ? true : false });
  } catch (err) {
    return NextResponse.json({ success: false, error: err });
  }
  
}

export async function DELETE(req){
  try{
    console.log('here');
    cookies().delete('token')
    return NextResponse.json({ success: true, })
  } catch (err){
    return NextResponse.json({ success: false, error: err })
  }
}