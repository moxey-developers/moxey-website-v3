import { LOCALES } from "@/config/regions";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
