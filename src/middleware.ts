import { NextRequest, NextResponse } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isPublic = path === "/user/login" || path === "/user/signup";
  const secret = process.env.JWT_SECRET as string;
  const token = request.cookies.get("token")?.value || "";

  if (isPublic && token) {
    // If trying to access login/signup and token is present, redirect to "/"
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublic && !token) {
    // If trying to access private routes and token is missing, redirect to "/user/login"
    return NextResponse.redirect(new URL("/user/login", request.nextUrl));
  }

  return NextResponse.next(); // Continue processing if no redirection is needed
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/", "/user/login", "/user/signup"],
};
