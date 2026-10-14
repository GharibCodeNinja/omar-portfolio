import { Award, GraduationCap } from "lucide-react";
import { certification, education, languages } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-5 pb-24 sm:px-8">
      <SectionHeading title="Education & certification" />

      <Reveal className="grid gap-6 lg:grid-cols-2">
        <div className="glass rounded-2xl p-6 sm:p-8">
          <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-2/15 text-accent">
            <GraduationCap size={20} aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-xl font-semibold tracking-tight">{education.school}</h3>
          <p className="mt-1 text-accent">{education.degree}</p>
          <p className="mt-1 text-sm text-muted">{education.period}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{education.text}</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {languages.map((l) => (
              <li key={l.name} className="rounded-full border border-border px-3 py-1.5 text-xs text-fg/90">
                {l.name} · {l.level}
              </li>
            ))}
          </ul>
        </div>

        <div className="glass rounded-2xl p-6 sm:p-8">
          <span className="grid size-11 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-2/15 text-accent">
            <Award size={20} aria-hidden="true" />
          </span>
          <h3 className="mt-5 text-xl font-semibold tracking-tight">{certification.name}</h3>
          <p className="mt-1 text-accent">Issued by {certification.issuer}</p>
          <p className="mt-1 text-sm text-muted">
            {certification.issued} · Expires {certification.expires}
          </p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{certification.text}</p>
        </div>
      </Reveal>
    </section>
  );
}
