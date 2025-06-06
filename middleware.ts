import { NextResponse, NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  
  // Check if URL doesn't have trailing slash and is not a file
  if (!url.pathname.endsWith('/') && !url.pathname.includes('.')) {
    // Add trailing slash and redirect with 301 status
    url.pathname += '/'
    return NextResponse.redirect(url, 301)
  }
}

export const config = {
  matcher: [
    // Match all paths except static files and API routes
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}