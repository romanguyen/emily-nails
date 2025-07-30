import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const isAuthenticated = request.cookies.get("authenticated")?.value === "true"
  const isAdminRoute = request.nextUrl.pathname.startsWith("/admin")

  if (isAdminRoute && !isAuthenticated) {
    // Redirect to login page if trying to access admin route without authentication
    return NextResponse.redirect(new URL("/login", request.url))
  }

  // Allow the request to proceed if not an admin route or if authenticated
  return NextResponse.next()
}

export const config = {
  matcher: ["/admin/:path*"], // Apply middleware to all paths under /admin
}
