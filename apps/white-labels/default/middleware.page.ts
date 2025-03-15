// middleware.ts
import { logger } from '@otiuming/utils-logging'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// RegExp for public files
const PUBLIC_FILE = /\.(.*)$/ // Files

export async function middleware(req: NextRequest) {
  // Clone the URL
  const url = req.nextUrl.clone()

  // Skip public files
  if (
    PUBLIC_FILE.test(url.pathname) ||
    url.pathname.includes('_next') ||
    url.pathname.includes('healthz')
    // || url.hostname.includes('localhost')
  ) {
    return NextResponse.next()
  }

  const host = req.headers.get('host')
  const sanitizedDomain = getSanitizedDomain(host)

  if (sanitizedDomain) {
    logger.debug({
      eventId: 'MIDDLEWARE_REWRITE',
      from: url.pathname,
      to: `/sites/${sanitizedDomain}${url.pathname}`,
      sanitizedDomain,
    })

    url.pathname = `/sites/${sanitizedDomain}${url.pathname}`
  }

  return NextResponse.rewrite(url)
}

export const getSanitizedDomain = (host?: string | null) => {
  if (!host && typeof window !== 'undefined') {
    // On client side, get the host from window
    host = window.location.host
  }

  if (host.includes('localhost')) {
    return 'handy-4-you.otiuming.com'
  }

  return host
}
