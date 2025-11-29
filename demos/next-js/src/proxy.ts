import type { NextRequest } from "next/server";
import type { Route } from "next";

import { getSessionCookie } from "better-auth/cookies";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const sessionCookie = getSessionCookie(request);

  if (!sessionCookie) {
    return NextResponse.redirect(new URL("/sign-in" as Route, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/protected"],
};
