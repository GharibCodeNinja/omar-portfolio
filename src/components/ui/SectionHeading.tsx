import { Reveal } from "./Reveal";

export function SectionHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <Reveal className="mb-12 max-w-2xl">
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
      {subtitle && <p className="mt-4 text-base leading-relaxed text-muted">{subtitle}</p>}
    </Reveal>
  );
}
