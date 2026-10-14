import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { Project } from "@/data/site";
import { Tag } from "@/components/ui/Tag";
import { SpectoVisual } from "./SpectoVisual";
import { ProjectLinks } from "./ProjectLinks";

export function SpectoFlagship({ project }: { project: Project }) {
  const shots = project.images ?? [];
  return (
    <article className="glass relative overflow-hidden rounded-3xl">
      <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/20 blur-[90px]" />

      <div className="grid lg:grid-cols-[1.15fr_1fr]">
        <div className="relative min-h-[260px] border-b border-border lg:min-h-[460px] lg:border-b-0 lg:border-r">
          <SpectoVisual className="absolute inset-0 size-full" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent" />
          <div className="absolute left-4 top-4 flex flex-wrap gap-2">
            {["FFT / STFT", "Hann window", "RMS", "TFLite"].map((c) => (
              <span key={c} className="rounded-full bg-black/55 px-3 py-1 font-mono text-[11px] text-white/85 backdrop-blur">
                {c}
              </span>
            ))}
          </div>
          <p className="absolute bottom-3 left-4 text-[11px] text-white/60">
            Illustrative preview, drawn live in your browser
          </p>
        </div>

        <div className="relative flex flex-col p-6 sm:p-8">
          <p className="w-fit rounded-full bg-gradient-to-r from-accent to-accent-2 px-3 py-1 text-xs font-medium text-white">
            Flagship project
          </p>
          <h3 className="mt-4 text-3xl font-semibold tracking-tight">{project.name}</h3>
          <p className="mt-1 text-accent">{project.tagline}</p>
          <p className="mt-4 text-sm leading-relaxed text-muted">{project.overview}</p>

          <ul className="mt-5 space-y-2.5">
            {project.highlights.map((h) => (
              <li key={h} className="flex gap-2.5 text-sm text-fg/90">
                <Check size={16} className="mt-0.5 shrink-0 text-accent" aria-hidden="true" />
                {h}
              </li>
            ))}
          </ul>

          <ul className="mt-5 flex flex-wrap gap-1.5">
            {project.tech.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center justify-between gap-3">
            <ProjectLinks project={project} />
            <Link
              href={`/projects/${project.slug}`}
              className="inline-flex items-center gap-1 text-sm font-medium text-fg transition hover:text-accent"
            >
              Read the case study <ArrowUpRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </div>

      {shots.length > 0 && (
        <div className="no-scrollbar flex gap-4 overflow-x-auto border-t border-border p-5">
          {shots.map((src, i) => (
            <Image
              key={src}
              src={src}
              alt={`Specto app screenshot ${i + 1}`}
              width={260}
              height={560}
              className="h-72 w-auto shrink-0 rounded-xl border border-border object-cover"
            />
          ))}
        </div>
      )}
    </article>
  );
}
