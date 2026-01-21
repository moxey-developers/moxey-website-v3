import { LOCALES } from "@/config/regions";
import HomePage from "@/module/homepage";
import { setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return LOCALES.map((locale) => ({ locale }));
}

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return <HomePage locale={locale} />;
}
