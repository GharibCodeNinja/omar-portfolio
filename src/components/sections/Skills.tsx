import { skillGroups } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { SpotCard } from "@/components/ui/SpotCard";
import { IconByName } from "@/components/ui/IconByName";
import { cn } from "@/lib/utils";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        title="Tools I build with"
        subtitle="Grouped by what I use them for, and all of them used in my projects or internship."
      />

      <Reveal>
        <div className="grid gap-4 lg:grid-cols-6">
          {skillGroups.map((g, i) => {
            const big = i === 0; // languages get the most visual weight
            return (
              <SpotCard key={g.title} className={cn("p-6", g.span)}>
                <div className="relative z-10">
                  <div className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg bg-white/[0.05] text-accent">
                      <IconByName name={g.icon} size={18} />
                    </span>
                    <h3 className="font-semibold">{g.title}</h3>
                  </div>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {g.items.map((item) => (
                      <li
                        key={item}
                        className={cn(
                          "rounded-lg border border-border bg-white/[0.03] text-fg/90 transition hover:border-accent/50 hover:bg-accent/10",
                          big ? "px-4 py-2 text-base font-medium" : "px-3 py-1.5 text-sm",
                        )}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </SpotCard>
            );
          })}
        </div>
      </Reveal>
    </section>
  );
}
