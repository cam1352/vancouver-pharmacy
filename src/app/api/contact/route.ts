import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In a production environment, you would use Resend, SendGrid, or Nodemailer here.
    // For Zero-API mode, we simulate a successful email dispatch to the owner.
    console.log("=== NEW CONTACT FORM SUBMISSION ===");
    console.log(`To: owner@pharmacyvancouver.ca`);
    console.log(`From: ${body.name} <${body.email}>`);
    console.log(`Message: ${body.message}`);
    console.log("===================================");

    return NextResponse.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    return NextResponse.json({ success: false, error: "Failed to send email" }, { status: 500 });
  }
}
