import { NextResponse } from "next/server";

// Protect routes: /addWorkout, /manageWorkouts, /profile
export function proxy(request) {
  // Read the cookie
  const authCookie = request.cookies.get("authUser");

  if (!authCookie) {
    // User not logged in → redirect to login page
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // User is logged in → allow access
  return NextResponse.next();
}

// Apply to protected routes
export const config = {
  matcher: ["/addWorkout/:path*", "/manageWorkouts/:path*", "/profile/:path*"],
};
