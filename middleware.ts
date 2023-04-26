// middleware.ts
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.redirect(new URL('/404', request.url));
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: '/edit/:path*',
};
