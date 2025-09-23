import { NextResponse } from 'next/server';
import { Resend } from 'resend';
const resend = new Resend(process.env.RESEND_API_KEY!);


export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: 'Missing fields' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: process.env.CONTACT_FROM || 'Portfolio <onboarding@resend.dev>',
      to: email, // so you can reply from your inbox
      subject: `New message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <div style="font-family: system-ui, -apple-system, Segoe UI, Roboto, sans-serif; line-height:1.6">
          <h2>New portfolio message</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Message:</b><br/>${message.replace(/\n/g, '<br/>')}</p>
        </div>
      `,
      headers: { 'X-Entity-Ref-ID': 'portfolio-contact' }
    });

    if (error) return NextResponse.json({ error }, { status: 500 });
    return NextResponse.json({ ok: true, id: data?.id });
  } catch (e) {
    return NextResponse.json({ error: 'Invalid request' }, { status: 400 });
  }
}
