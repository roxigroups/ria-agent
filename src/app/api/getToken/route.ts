import { NextRequest, NextResponse } from 'next/server';
import { AccessToken } from 'livekit-server-sdk';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name') || 'Guest User';
  let room = searchParams.get('room');

  if (!room) {
    room = 'room-' + Math.random().toString(36).substring(2, 10);
  }

  const apiKey = process.env.LIVEKIT_API_KEY;
  const apiSecret = process.env.LIVEKIT_API_SECRET;

  try {
    if (apiKey && apiSecret) {
      const at = new AccessToken(apiKey, apiSecret, {
        identity: name,
        name: name,
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
