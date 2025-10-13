import { NextRequest, NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(request: NextRequest) {
  try {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get('admin_session');

    if (!sessionCookie) {
      return NextResponse.json({
        authenticated: false,
      });
    }

    // Verify session token (basic validation)
    // In production, use proper JWT verification
    const sessionToken = sessionCookie.value;
    
    if (sessionToken && sessionToken.length > 0) {
      return NextResponse.json({
        authenticated: true,
      });
    }

    return NextResponse.json({
      authenticated: false,
    });
  } catch (error) {
    console.error('Session check error:', error);
    return NextResponse.json({
      authenticated: false,
    });
  }
}