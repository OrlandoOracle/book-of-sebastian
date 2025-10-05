interface SectionHeaderProps {
  children: React.ReactNode;
}

export default function SectionHeader({ children }: SectionHeaderProps) {
  return (
    <h2 className="font-title text-center text-sm md:text-base uppercase tracking-biblical text-gold mb-8 md:mb-12">
      — • {children} • —
    </h2>
  );
}
