import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["en", "ar", "tr"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/", "/(ar|en|tr)/:path*"],
};
