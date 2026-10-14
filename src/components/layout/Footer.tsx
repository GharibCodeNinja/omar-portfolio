import { Mail } from "lucide-react";
import { site } from "@/data/site";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

export function Footer() {
  const link = "grid size-10 place-items-center rounded-full text-muted transition hover:text-fg";
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-5 py-8 sm:flex-row sm:px-8">
        <p className="text-sm text-muted">
          © {site.copyrightYear} {site.name}. Built with Next.js and Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className={link}>
            <GithubIcon className="size-5" />
          </a>
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={link}>
            <LinkedinIcon className="size-5" />
          </a>
          <a href={`mailto:${site.email}`} aria-label="Email" className={link}>
            <Mail size={19} />
          </a>
        </div>
      </div>
    </footer>
  );
}
