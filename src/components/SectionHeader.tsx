interface SectionHeaderProps {
  tag?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeader({
  tag,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? "mx-auto text-center" : ""} mb-10 md:mb-14`}>
      {tag && (
        <span
          className={`inline-block text-xs font-semibold uppercase tracking-widest mb-3 ${
            light ? "text-teal-300" : "text-teal-600"
          }`}
        >
          {tag}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-ocean-800"
        }`}
        style={{ fontFamily: "var(--font-heading)" }}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base md:text-lg leading-relaxed ${
            light ? "text-teal-100/80" : "text-ocean-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
