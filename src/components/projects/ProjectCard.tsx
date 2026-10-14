import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/site";
import { SpotCard } from "@/components/ui/SpotCard";
import { Tag } from "@/components/ui/Tag";
import { ProjectVisual } from "./ProjectVisual";
import { ProjectLinks } from "./ProjectLinks";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <SpotCard className="group flex h-full flex-col">
      <div className="relative aspect-[5/3] overflow-hidden rounded-t-2xl">
        <ProjectVisual
          slug={project.slug}
          className="size-full transition duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
        <span className="absolute bottom-3 left-4 rounded-full bg-black/50 px-3 py-1 text-xs text-white/90 backdrop-blur">
          {project.categoryLabel}
        </span>
      </div>

      <div className="relative z-10 flex flex-1 flex-col p-6">
        <h3 className="text-xl font-semibold tracking-tight">
          <Link
            href={`/projects/${project.slug}`}
            className="after:absolute after:inset-0 after:content-[''] hover:text-accent"
          >
            {project.name}
          </Link>
        </h3>
        <p className="mt-1 text-sm text-accent">{project.tagline}</p>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted">{project.overview}</p>

        <ul className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <li key={t}>
              <Tag>{t}</Tag>
            </li>
          ))}
        </ul>

        <div className="relative z-20 mt-5 flex flex-wrap items-center justify-between gap-3">
          <ProjectLinks project={project} />
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 text-sm text-muted transition hover:text-fg"
          >
            Case study <ArrowUpRight size={15} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </SpotCard>
  );
}
