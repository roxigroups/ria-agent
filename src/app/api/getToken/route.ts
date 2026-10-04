import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';
import { getCloudflareContext } from '@opennextjs/cloudflare';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = (searchParams.get('name') || '').trim().slice(0, 60) || 'Guest User';
  let room = searchParams.get('room');

  // Optional Indian mobile number from the live demo; the agent saves it as a lead
  const rawPhone = (searchParams.get('phone') || '').replace(/\D/g, '');
  const phone = rawPhone.length === 12 && rawPhone.startsWith('91') ? rawPhone.slice(2) : rawPhone;
  if (phone && !/^[6-9]\d{9}$/.test(phone)) {
    return NextResponse.json({ error: 'Please enter a valid 10-digit mobile number.' }, { status: 400 });
  }

  if (!room) {
    room = 'room-' + Math.random().toString(36).substring(2, 10);
  }

  // Attempt to read from Cloudflare context (workerd runtime) as well as process.env
  let cfEnv: any = {};
  try {
    const ctx = await getCloudflareContext({ async: true });
    cfEnv = ctx?.env || {};
  } catch {
    // Fallback when running outside Cloudflare runtime (e.g. local next dev)
  }

  const apiKey =
    cfEnv.LIVEKIT_API_KEY ||
    process.env.LIVEKIT_API_KEY ||
    process.env.NEXT_PUBLIC_LIVEKIT_API_KEY ||
    process.env.LK_API_KEY ||
    'API972YHDQx3aRr';

  const apiSecret =
    cfEnv.LIVEKIT_API_SECRET ||
    process.env.LIVEKIT_API_SECRET ||
    process.env.LK_API_SECRET ||
    'bZG4vEQ5MGIj3w48xgpnh3ZxmzMQMvzzjZLYy6gfuJb';

  try {
    if (apiKey && apiSecret) {
      const at = new AccessToken(apiKey, apiSecret, {
        // Unique identity so two visitors with the same name never collide
        identity: 'visitor-' + Math.random().toString(36).substring(2, 10),
        name: name,
        metadata: JSON.stringify({ phone: phone ? '+91' + phone : '' }),
      });
      at.addGrant({
        roomJoin: true,
        room: room,
        canPublish: true,
        canSubscribe: true,
      });

      const token = await at.toJwt();
      return new NextResponse(token, {
        status: 200,
        headers: {
          'Content-Type': 'text/plain',
          'Cache-Control': 'no-store, max-age=0',
        },
      });
    }

    // Fallback: proxy to Python token server on port 5001 if available
    const pythonRes = await fetch(
      `http://127.0.0.1:5001/getToken?name=${encodeURIComponent(name)}&room=${encodeURIComponent(room)}`
    );
    if (pythonRes.ok) {
      const pyToken = await pythonRes.text();
      return new NextResponse(pyToken, {
        status: 200,
        headers: { 'Content-Type': 'text/plain' },
      });
    }

    throw new Error('No LiveKit credentials configured');
  } catch (error: any) {
    console.error('Error generating LiveKit token:', error);
    return NextResponse.json(
      { error: error?.message || 'Failed to generate token' },
      { status: 500 }
    );
  }
}
