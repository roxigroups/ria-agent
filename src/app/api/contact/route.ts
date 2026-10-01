import { NextRequest, NextResponse } from 'next/server';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, company, notes } = body;

    let webhookUrl = process.env.GOOGLE_SHEET_WEBHOOK_URL || process.env.GOOGLE_SHEET_WEBHOOK;

    try {
      const cf = await getCloudflareContext({ async: true });
      if (cf?.env) {
        webhookUrl = (cf.env as any).GOOGLE_SHEET_WEBHOOK_URL || (cf.env as any).GOOGLE_SHEET_WEBHOOK || webhookUrl;
      }
    } catch {
      // Fallback for local dev environments where Cloudflare context is not initialized
    }

    console.log('[Contact API] Received lead:', { name, phone, email, company });
    console.log('[Contact API] Webhook URL configured:', !!webhookUrl);

    if (webhookUrl) {
      const payload = JSON.stringify({
        name: name || '',
        phone: phone || '',
        email: email || '',
        company: company || '',
        notes: notes || 'Website Contact Form Lead',
      });

      // Post to Google Apps Script Webhook with redirect following
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'text/plain;charset=utf-8' },
        body: payload,
        redirect: 'follow',
      });

      const responseText = await response.text();
      console.log('[Contact API] Google Sheet response status:', response.status, responseText);
      return NextResponse.json({ success: true, message: 'Lead recorded successfully' });
    } else {
      console.warn('[Contact API] Warning: GOOGLE_SHEET_WEBHOOK_URL is not set in environment or Cloudflare context!');
      return NextResponse.json({ success: false, error: 'Webhook URL not configured' }, { status: 500 });
    }
  } catch (error: any) {
    console.error('[Contact API] Failed to forward lead to Google Sheet:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}
