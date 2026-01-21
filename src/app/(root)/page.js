"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function RootPage() {
  const router = useRouter();

  useEffect(() => {
    // Basic client-side redirect.
    // You could add logic here to check navigator.language if desired.
    router.replace("/en-ae");
  }, [router]);

  return null;
}
