import Link from "next/link";

export default function FooterHomeButton() {
  return (
    <Link href="/" className="hover:text-[#1D1D1F] transition-colors">
      Home
    </Link>
  );
}
