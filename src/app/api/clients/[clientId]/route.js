import { NextResponse } from "next/server";

export async function GET(req, { params }) {
  const { id } = await params;
  console.log("client id : " + id);
  return NextResponse.json({ success: true });
}
