import { EmailTemplate } from "@/app/[lang]/components/email-template";
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const recipient = process.env.RESEND_RECIPIENT;

export async function POST(req: NextRequest) {
  const { email, message } = await req.json();
  try {
    const data = await resend.emails.send({
      from: "Portfolio <onboarding@resend.dev>",
      to: `${recipient}`,
      subject: `${email} has a message!`,
      react: EmailTemplate({ email: email, message: message }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
