import { Briefcase } from "lucide-react";
import { experience } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Tag } from "@/components/ui/Tag";

export function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading title="Experience" subtitle="My first professional software role, completed alongside my degree." />

      <ol className="relative ml-4 border-l border-border">
        {experience.map((e) => (
          <li key={e.role} className="relative pb-2 pl-8 sm:pl-10">
            <span className="absolute -left-[17px] top-1 grid size-8 place-items-center rounded-full border border-border bg-bg text-accent">
              <Briefcase size={15} aria-hidden="true" />
            </span>
            <Reveal>
              <div className="glass rounded-2xl p-6 sm:p-8">
                <div className="flex flex-wrap items-start justify-between gap-2">
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{e.role}</h3>
                    <p className="mt-1 text-accent">{e.company}</p>
                  </div>
                  <div className="text-right text-sm text-muted">
                    <p>{e.period}</p>
                    <p>{e.location}</p>
                  </div>
                </div>
                <ul className="mt-5 space-y-3 text-sm leading-relaxed text-muted">
                  {e.points.map((p) => (
                    <li key={p} className="flex gap-3">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
                      {p}
                    </li>
                  ))}
                </ul>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {e.tech.map((t) => (
                    <li key={t}>
                      <Tag>{t}</Tag>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
}
