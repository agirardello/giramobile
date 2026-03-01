"use client";
import { useEffect } from "react";

export default function TermsRedirect() {
  useEffect(() => {
    window.location.replace("/#terms");
  }, []);
  return null;
}
