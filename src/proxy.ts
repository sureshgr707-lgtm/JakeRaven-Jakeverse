import { NextRequest, NextResponse } from "next/server";

const USERNAME = "suresh";

export function proxy(request: NextRequest) {
  const password = process.env.SITE_PASSWORD;

  // If no password is configured, don't lock anyone out.
  if (!password) {
    return NextResponse.next();
  }

  const authHeader = request.headers.get("authorization");

  if (authHeader?.startsWith("Basic ")) {
    const decoded = atob(authHeader.slice(6));
    const separatorIndex = decoded.indexOf(":");
    const user = decoded.slice(0, separatorIndex);
    const pass = decoded.slice(separatorIndex + 1);

    if (user === USERNAME && pass === password) {
      return NextResponse.next();
    }
  }

  return new NextResponse("Authentication required.", {
    status: 401,
    headers: {
      "WWW-Authenticate": 'Basic realm="Jakeverse", charset="UTF-8"',
    },
  });
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico).*)",
  ],
};
