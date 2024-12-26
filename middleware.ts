import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req: request, res })
  const { data: { session } } = await supabase.auth.getSession()

  // Public routes that don't require authentication
  const publicRoutes = ['/', '/login', '/sign-up', '/forgot-password']
  const isPublicRoute = publicRoutes.includes(request.nextUrl.pathname)

  if (!session && !isPublicRoute) {
    // Redirect to login if trying to access protected route without session
    return NextResponse.redirect(new URL('/login', request.url))
  }

  if (session && isPublicRoute && request.nextUrl.pathname !== '/') {
    // Redirect to dashboard if trying to access auth pages while logged in
    return NextResponse.redirect(new URL('/protected', request.url))
  }

  return res
}

export const config = {
  matcher: [
    /*
     * Match all request paths except:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc)
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}
