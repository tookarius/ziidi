// app/api/apply/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.formData();

  // Here you would:
  // 1. Validate fields
  // 2. Store to database
  // 3. Trigger credit checks
  // 4. Trigger M-Pesa fee workflow if applicable

  return NextResponse.json({
    status: "received",
    message: "Application received. Processing takes up to 72 hours."
  });
}
