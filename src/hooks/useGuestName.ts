"use client";

import { useSearchParams } from "next/navigation";
import { useMemo } from "react";
import { decodeGuestName } from "@/lib/utils";

export function useGuestName(fallback = "Tamu Undangan") {
  const searchParams = useSearchParams();

  const guestName = useMemo(() => {
    const rawTo = searchParams?.get("to") || searchParams?.get("guest") || searchParams?.get("u");
    return decodeGuestName(rawTo, fallback);
  }, [searchParams, fallback]);

  return guestName;
}
