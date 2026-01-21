import createMiddleware from "next-intl/middleware";
import { LOCALES } from "./config/regions";
import { NextResponse } from "next/server";

const intlMiddleware = createMiddleware({
  locales: LOCALES,
  defaultLocale: "en-ae",
});

export default function middleware(request) {
  const { pathname } = request.nextUrl;

  // Custom Geo-Location Redirection for Root Path
  if (pathname === "/") {
    const country =
      request.geo?.country || request.headers.get("x-vercel-ip-country");

    // Determine preferred language (default to 'en')
    const acceptLanguage = request.headers.get("accept-language") || "";
    const preferredLang = acceptLanguage.includes("ar") ? "ar" : "en";

    if (country === "SA") {
      const url = request.nextUrl.clone();
      url.pathname = `/${preferredLang}-sa`;
      return NextResponse.redirect(url);
    }

    if (country === "AE") {
      const url = request.nextUrl.clone();
      url.pathname = `/${preferredLang}-ae`;
      return NextResponse.redirect(url);
    }

    // Fallback logic could go here, or let intlMiddleware handle it
  }

  return intlMiddleware(request);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ["/", "/(ar-ae|en-ae|ar-sa|en-sa)/:path*"],
};
