import { NextResponse } from 'next/server';

export async function POST() {
  const res = NextResponse.json({ success: true, message: 'Logged out successfully' });
  // Clear the login cookie
  res.cookies.set('isLoggedIn', '', { 
    httpOnly: false, 
    path: '/', 
    sameSite: 'lax',
    expires: new Date(0) // Set expiry to past date to delete cookie
  });
  return res;
}