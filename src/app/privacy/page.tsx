"use client";
import { useEffect } from "react";

export default function PrivacyRedirect() {
  useEffect(() => {
    window.location.replace("/#privacy");
  }, []);
  return null;
}
