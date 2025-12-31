// app/api/apply/route.ts
import { NextResponse } from "next/server";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  const data = await req.formData();

  const { error } = await supabase.from("loan_applications").insert({
    full_name: data.get("fullName"),
    phone: data.get("phone"),
    national_id: data.get("nationalId"),
    county: data.get("county"),
    amount: data.get("amount"),
  });

  if (error) {
    return NextResponse.json({ error: "Submission failed" }, { status: 500 });
  }

  return NextResponse.json({
    success: true,
    message: "Application received. Processing within 48–72 hours."
  });
}
