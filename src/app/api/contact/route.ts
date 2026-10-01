import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, company, notes } = body;

    const webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL;

    if (webhookUrl) {
      // Post to Google Apps Script Webhook
      await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name || '',
          phone: phone || '',
          email: email || '',
          company: company || '',
          notes: notes || 'Website Contact Form Lead',
        }),
      });
    }

    return NextResponse.json({ success: true, message: 'Lead recorded successfully' });
  } catch (error: any) {
    console.error('Failed to forward lead to Google Sheet:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
