"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Lock } from "lucide-react";
import { otherProjects, projectFilters, projects, type ProjectCategory } from "@/data/site";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SpectoFlagship } from "@/components/projects/SpectoFlagship";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = useState<"all" | ProjectCategory>("all");

  const list = projects.filter((p) => filter === "all" || p.category === filter);
  const featured = list.find((p) => p.featured);
  const rest = list.filter((p) => !p.featured);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
      <SectionHeading
        title="Projects"
        subtitle="Real-time audio AI, a full-stack travel site, and games in Java, C and Unity. Each one has a case study with what I built and what I learned."
      />

      <div role="group" aria-label="Filter projects" className="no-scrollbar -mx-5 mb-8 flex gap-2 overflow-x-auto px-5 sm:mx-0 sm:px-0">
        {projectFilters.map((f) => {
          const on = filter === f.value;
          return (
            <button
              key={f.value}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f.value)}
              className={cn(
                "shrink-0 rounded-full border px-4 py-2 text-sm transition",
                on
                  ? "border-transparent bg-gradient-to-r from-accent to-accent-2 text-white"
                  : "border-border text-muted hover:border-white/20 hover:text-fg",
              )}
            >
              {f.label}
            </button>
          );
        })}
      </div>
      <p className="sr-only" aria-live="polite">
        Showing {list.length} {list.length === 1 ? "project" : "projects"}
      </p>

      <AnimatePresence mode="popLayout">
        {featured && (
          <motion.div
            key={featured.slug}
            layout
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="mb-6"
          >
            <SpectoFlagship project={featured} />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {rest.map((p) => (
            <motion.div
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.97 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.3 }}
            >
              <ProjectCard project={p} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {filter === "all" && (
        <div className="mt-14">
          <h3 className="text-lg font-semibold">Academic projects</h3>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            {otherProjects.map((o) => (
              <div key={o.name} className="rounded-2xl border border-border p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="font-medium">{o.name}</p>
                    <p className="text-xs text-accent">{o.kind}</p>
                  </div>
                  {o.private && (
                    <span className="inline-flex shrink-0 items-center gap-1 text-xs text-muted">
                      <Lock size={12} aria-hidden="true" /> Private
                    </span>
                  )}
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted">{o.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  );
}
