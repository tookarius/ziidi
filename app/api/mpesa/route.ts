// app/api/mpesa/route.ts
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { phone, amount } = await req.json();

  // 1. Get OAuth token
  const tokenRes = await axios.get(
    "https://api.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
    {
      auth: {
        username: process.env.MPESA_CONSUMER_KEY!,
        password: process.env.MPESA_CONSUMER_SECRET!
      }
    }
  );

  const accessToken = tokenRes.data.access_token;
  const timestamp = new Date().toISOString().replace(/[^0-9]/g, "").slice(0,14);
  const password = Buffer.from(
    process.env.MPESA_SHORTCODE + process.env.MPESA_PASSKEY + timestamp
  ).toString("base64");

  // 2. STK Push
  const res = await axios.post(
    "https://api.safaricom.co.ke/mpesa/stkpush/v1/processrequest",
    {
      BusinessShortCode: process.env.MPESA_SHORTCODE,
      Password: password,
      Timestamp: timestamp,
      TransactionType: "CustomerPayBillOnline",
      Amount: amount,
      PartyA: phone,
      PartyB: process.env.MPESA_SHORTCODE,
      PhoneNumber: phone,
      CallBackURL: process.env.MPESA_CALLBACK,
      AccountReference: "Ziidi",
      TransactionDesc: "Loan Processing Fee"
    },
    {
      headers: { Authorization: `Bearer ${accessToken}` }
    }
  );

  return NextResponse.json(res.data);
}
