import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  // Only run for /admin route
  if (req.nextUrl.pathname.startsWith('/admin')) {
    // Check for a simple login cookie
    const isLoggedIn = req.cookies.get('isLoggedIn')?.value === 'true';
    if (!isLoggedIn) {
      // Redirect to home if not logged in
      return NextResponse.redirect(new URL('/', req.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
