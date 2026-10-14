import { Award, GraduationCap, Languages, MapPin } from "lucide-react";
import { about, certification, education, languages, site } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IconByName } from "@/components/ui/IconByName";

export function About() {
  const facts = [
    { icon: MapPin, label: "Based in", value: `${site.location} · open to Onsite , remote  ` },
    { icon: GraduationCap, label: "Degree", value: `B.Sc. Media Engineering Technology, GUC (${education.period})` },
    { icon: Award, label: "Certified", value: `${certification.name}, ${certification.issuer}` },
    { icon: Languages, label: "Languages", value: languages.map((l) => `${l.name} (${l.level})`).join(", ") },
  ];

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        title="I like building things people can actually use."
        subtitle="Mobile apps are my favorite place to start, and I enjoy taking an idea from a sketch to a working app."
      />

      <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr]">
        <Reveal className="space-y-5 text-base leading-relaxed text-muted">
          {about.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}

          <dl className="!mt-10 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
            {facts.map(({ icon: Icon, label, value }) => (
              <div key={label} className="flex gap-3">
                <Icon size={18} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                <div>
                  <dt className="text-xs text-muted">{label}</dt>
                  <dd className="mt-0.5 text-sm text-fg">{value}</dd>
                </div>
              </div>
            ))}
          </dl>
        </Reveal>

        <Reveal delay={0.1}>
          <ul className="glass divide-y divide-border overflow-hidden rounded-2xl">
            {about.highlights.map((h) => (
              <li key={h.title} className="group flex gap-4 p-6 transition hover:bg-white/[0.03]">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/25 to-accent-2/15 text-accent transition group-hover:scale-105">
                  <IconByName name={h.icon} />
                </span>
                <div>
                  <h3 className="text-lg font-semibold">{h.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-muted">{h.text}</p>
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-6">
            <p className="mb-3 text-sm text-muted">Roles I&apos;m looking for</p>
            <ul className="flex flex-wrap gap-2">
              {site.roles.map((r) => (
                <li key={r} className="rounded-full border border-border px-3 py-1.5 text-xs text-fg/90">
                  {r}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
