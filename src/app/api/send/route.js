//import { EmailTemplate } from '../../../components/EmailTemplate';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail=process.env.FROM_EMAIL;

export async function POST(req) {
  const {email,subject,message}=await req.json();
  console.log(email,subject,message);
  try {
    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: ['gtiyasha274@resend.dev'],
      subject: subject,
      react: (
        <>
        <p>Thank you for contacting me!</p>
        <p>New message submitted:</p>
        <p>{message}</p>
        </>
      ), 
    });
    if (error) {
      console.error("Resend API error:", error);
      return Response.json({ error: error.message }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    console.error("Email sending failed:", error);
    return Response.json({ error }, { status: 500 });
  }
}