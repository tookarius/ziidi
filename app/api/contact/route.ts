// app/api/contact/route.ts
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const form = await req.formData();

  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS
    }
  });

  await transporter.sendMail({
    to: "africka@mail.com",
    subject: "Ziidi Support Message",
    text: `
Name: ${form.get("name")}
Email: ${form.get("email")}
Message:
${form.get("message")}
`
  });

  return NextResponse.redirect(new URL("/", req.url));
}
