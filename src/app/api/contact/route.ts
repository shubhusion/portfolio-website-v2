import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, email, message } = await req.json();
  if (!name || !email || !message) {
    return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  }

  // Send email using Brevo (Sendinblue) API
  const apiKey = process.env.BREVO_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  if (!apiKey || !toEmail) {
    return NextResponse.json({ error: "Server misconfiguration" }, { status: 500 });
  }

  const brevoRes = await fetch("https://api.brevo.com/v3/smtp/email", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      sender: { name, email },
      to: [{ email: toEmail }],
      subject: `Portfolio Contact: ${name}`,
      htmlContent: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Message:</b><br/>${message}</p>`
    })
  });

  if (brevoRes.ok) {
    return NextResponse.json({ ok: true });
  } else {
    const error = await brevoRes.json();
    return NextResponse.json({ error: error.message || "Failed to send" }, { status: 500 });
  }
}
