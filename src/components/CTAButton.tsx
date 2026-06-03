import Link from "next/link";

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  external?: boolean;
  utmCampaign?: string;
}

export default function CTAButton({
  href,
  children,
  variant = "primary",
  external = false,
  utmCampaign = "landing",
}: CTAButtonProps) {
  const className = `btn ${variant === "primary" ? "btn-primary" : "btn-ghost"}`;

  const finalHref =
    external && href.includes("substack.com")
      ? `${href}${href.includes("?") ? "&" : "?"}utm_source=website&utm_medium=cta&utm_campaign=${utmCampaign}`
      : href;

  if (external) {
    return (
      <a href={finalHref} className={className}>
        {children}
      </a>
    );
  }

  return (
    <Link href={finalHref} className={className}>
      {children}
    </Link>
  );
}
