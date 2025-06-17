import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json();

    console.log("📩 Sending email from:", email);

    const { data, error } = await resend.emails.send({
      from: 'onboarding@resend.dev', // Must be a Resend test or verified domain
      to: ['gtiyasha274@gmail.com'],  // Receiver (your Gmail)
      reply_to: email,
      subject: subject,
      html: `
        <div style="font-family: sans-serif; padding: 10px;">
          <h2>📬 New Portfolio Message</h2>
          <p><strong>From:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <p><strong>Message:</strong><br/>${message}</p>
        </div>
      `,
    });

    if (error) {
      console.error("❌ Resend API error:", error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, data });
  } catch (err) {
    console.error("❌ Email sending failed:", err);
    return NextResponse.json(
      { error: "Something went wrong while sending email" },
      { status: 400 }
    );
  }
}
