import { NextRequest, NextResponse } from "next/server";
import {
  CheckIsAuthRoute,
  CheckIsPrivateRoute,
  CheckIsPublicRoute,
} from "./utils/route";
import { LOGIN, PRIVATE } from "./constants/path";

export default function authMiddleware(req: any) {
  let token = req.cookies.get("token");

  if (CheckIsPublicRoute(req.nextUrl.pathname)) {
    return NextResponse.next();
  }
  if (!token && CheckIsPrivateRoute(req.nextUrl.pathname)) {
    const absoluteURL = new URL(LOGIN, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  if (token && CheckIsAuthRoute(req.nextUrl.pathname)) {
    const absoluteURL = new URL(PRIVATE, req.nextUrl.origin);
    return NextResponse.redirect(absoluteURL.toString());
  }

  // return NextResponse.next();
}
