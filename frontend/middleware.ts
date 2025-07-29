import { NextRequest, NextResponse } from 'next/server'

const MAINTENANCE_MODE = process.env.NEXT_PUBLIC_MAINTENANCE_MODE === 'true'
const DEV_AUTH_COOKIE = 'auth-cookie'

export function middleware(req: NextRequest) {
  const isLoggedInDev = req.cookies.get(DEV_AUTH_COOKIE)?.value === 'true'
  const isAdminLoginPage = req.nextUrl.pathname === '/admin-login'
  const isMaintenancePage = req.nextUrl.pathname === '/maintenance'
  const isApiRoute = req.nextUrl.pathname.startsWith('/api/')

  if (!MAINTENANCE_MODE) {
    return NextResponse.next()
  }

  if (isLoggedInDev || isAdminLoginPage || isMaintenancePage || isApiRoute) {
    return NextResponse.next()
  }

  const maintenanceUrl = req.nextUrl.clone()
  maintenanceUrl.pathname = '/maintenance'
  return NextResponse.redirect(maintenanceUrl)
}

export const config = {
  matcher: ['/:path*'],
}