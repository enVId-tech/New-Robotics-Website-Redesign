import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  const body = await req.json();
  const { username, password } = body;
  const envUser = process.env.LOGIN_USER;
  const envPass = process.env.LOGIN_PASS;

  if (!envUser || !envPass) {
    return NextResponse.json({ message: 'Server misconfiguration' }, { status: 500 });
  }

  if (username === envUser && password === envPass) {
    // Set a cookie for login
    const res = NextResponse.json({ success: true });
    res.cookies.set('isLoggedIn', 'true', { httpOnly: false, path: '/', sameSite: 'lax' });
    return res;
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}
