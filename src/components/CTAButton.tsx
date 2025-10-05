import Link from 'next/link';

interface CTAButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  external?: boolean;
  utmCampaign?: string;
}

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  external = false,
  utmCampaign = 'landing'
}: CTAButtonProps) {
  const baseClasses = "inline-block px-10 py-4 font-serif text-base font-semibold tracking-wide text-center transition-all duration-300 ease-in-out uppercase rounded";

  const variantClasses = {
    primary: "bg-royal-blue text-white border-2 border-royal-blue hover:bg-transparent hover:text-royal-blue",
    secondary: "bg-transparent text-dark-gray border-2 border-silver hover:bg-silver hover:text-black"
  };

  const finalHref = external && href.includes('substack.com')
    ? `${href}${href.includes('?') ? '&' : '?'}utm_source=website&utm_medium=cta&utm_campaign=${utmCampaign}`
    : href;

  if (external) {
    return (
      <a
        href={finalHref}
        className={`${baseClasses} ${variantClasses[variant]}`}
      >
        {children}
      </a>
    );
  }

  return (
    <Link
      href={finalHref}
      className={`${baseClasses} ${variantClasses[variant]}`}
    >
      {children}
    </Link>
  );
}
