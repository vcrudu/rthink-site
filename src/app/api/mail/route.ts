import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

type ContactUsForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  const contactUsForm = (await request.json()) as ContactUsForm;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: contactUsForm.email,
    to: process.env.CONTACTUS_TO,
    subject: contactUsForm.subject,
    text: contactUsForm.message,
  };
  try {
    await transporter.sendMail(mailOptions);
  } catch (e) {
    if (e instanceof Error) console.log(e.message);
    console.log("Unkown error: ", e);
  }
  transporter.sendMail(mailOptions);
  return NextResponse.json({ message: "Email sent", status: 200 });
}
