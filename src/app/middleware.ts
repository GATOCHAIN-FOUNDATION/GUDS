import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
export { default } from 'next-auth/middleware';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('__Secure-next-auth.session-token')?.value;
  const url = request.nextUrl;

  if (
    token &&
    (url.pathname.startsWith('/login') ||
      url.pathname.startsWith('/signup') ||
      url.pathname.startsWith('/forgotpassword') ||
      url.pathname.startsWith('/'))
  ) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }
  if (!token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
  return NextResponse.next();
}

// Middleware configuration to match specific paths
export const config = {
  matcher: [
    '/carddetails',
    '/checkout',
    '/checkout/cardcheckout',
    '/dashboard',
    '/fastbuy',
    '/nftconnect/:slug',
    '/orderprocessing',
    '/pools',
    '/profile',
    '/profile/camera',
    '/profile/countryandlanguage',
    '/profile/history',
    '/profile/order',
    '/profile/personalInfo',
    '/redirect',
    '/staking',
    '/success',
    '/swap',
    '/swappingoffer',
    '/swappingoffer/nftcloserlook',
    '/template',
    '/thankyou',
    '/',
    '/login',
    '/signup',
    '/forgotpassword',
  ],
};
