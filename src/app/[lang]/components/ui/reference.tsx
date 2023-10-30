import Link from "next/link";

export default function Reference({
  href,
  children,
  className,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`w-fit text-reference-dark hover:text-reference-light ${className}`}
    >
      {children}
    </Link>
  );
}
