import { connectionStr } from "@/app/lib/dbConnect";
import { Client } from "@/app/lib/models/clientModel";
import { NextResponse } from "next/server";
import mongoose from "mongoose";

export async function POST(req) {
  const payload = await req.json();
  console.log(payload);
  let success = false;
  await mongoose.connect(connectionStr);
  const client = new Client(payload);
  const result = await client.save();
  if (result) {
    success = true;
  }
  return NextResponse.json({ result, success });
}
export async function GET() {
  await mongoose.connect(connectionStr);
  const clients = await Client.find({});

  return NextResponse.json({ clients });
}
