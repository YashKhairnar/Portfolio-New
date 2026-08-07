"use client";

import { track } from "@vercel/analytics";
import { useEffect } from "react";

export default function RefVisitTracker({ reference }: { reference: string }) {
  useEffect(() => {
    track("portfolio_ref_visit", { reference });
  }, [reference]);

  return null;
}
