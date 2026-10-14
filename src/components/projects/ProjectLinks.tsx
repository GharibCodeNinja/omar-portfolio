import { ExternalLink, Lock } from "lucide-react";
import type { Project } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { GithubIcon } from "@/components/ui/Icons";

export function ProjectLinks({ project, size = "sm" }: { project: Project; size?: "sm" | "md" }) {
  const cls = size === "sm" ? "!px-4 !py-2" : "";
  const dev = process.env.NODE_ENV !== "production";
  return (
    <div className="flex flex-wrap items-center gap-2.5">
      {project.github && (
        <Button href={project.github} target="_blank" rel="noopener noreferrer" variant="secondary" className={cls}>
          <GithubIcon className="size-4" /> GitHub
        </Button>
      )}
      {project.demo && (
        <Button href={project.demo} target="_blank" rel="noopener noreferrer" className={cls}>
          <ExternalLink size={15} /> Live demo
        </Button>
      )}
      {!project.github && project.private && (
        <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3.5 py-2 text-xs text-muted">
          <Lock size={13} aria-hidden="true" /> Private repository
        </span>
      )}
      {!project.github && !project.private && dev && (
        <span className="rounded-full border border-amber-400/40 px-3.5 py-2 text-xs text-amber-300">
          TODO: add GitHub URL in site.ts (hidden on live site)
        </span>
      )}
    </div>
  );
}
