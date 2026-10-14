import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, Lock } from "lucide-react";
import { projects, site } from "@/data/site";
import { isTodo, visible } from "@/lib/utils";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { Tag } from "@/components/ui/Tag";
import { Button } from "@/components/ui/Button";
import { ProjectVisual } from "@/components/projects/ProjectVisual";
import { SpectoVisual } from "@/components/projects/SpectoVisual";
import { ProjectLinks } from "@/components/projects/ProjectLinks";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const p = projects.find((x) => x.slug === slug);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.tagline}`,
    description: p.overview,
    openGraph: { title: `${p.name} | ${site.name}`, description: p.overview },
  };
}

function List({ title, items }: { title: string; items: string[] }) {
  const shown = visible(items);
  if (!shown.length) return null;
  return (
    <section>
      <h2 className="text-xl font-semibold tracking-tight">{title}</h2>
      <ul className="mt-4 space-y-3">
        {shown.map((t) => (
          <li key={t} className={`flex gap-3 text-sm leading-relaxed ${isTodo(t) ? "text-amber-300" : "text-muted"}`}>
            <span className="mt-2 size-1.5 shrink-0 rounded-full bg-accent" aria-hidden="true" />
            {t}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default async function ProjectPage({ params }: Params) {
  const { slug } = await params;
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) notFound();

  const p = projects[index];
  const prev = projects[(index - 1 + projects.length) % projects.length];
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main id="main" className="mx-auto max-w-4xl px-5 pb-24 pt-28 sm:px-8">
        <Link href="/#projects" className="inline-flex items-center gap-2 text-sm text-muted transition hover:text-fg">
          <ArrowLeft size={15} aria-hidden="true" /> All projects
        </Link>

        <div className="relative mt-6 aspect-[16/8] overflow-hidden rounded-3xl border border-border">
          {p.slug === "specto" ? (
            <SpectoVisual className="absolute inset-0 size-full" />
          ) : (
            <ProjectVisual slug={p.slug} className="absolute inset-0 size-full" />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
        </div>

        <header className="mt-8">
          <p className="text-sm text-accent">{p.categoryLabel}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">{p.name}</h1>
          <p className="mt-2 text-lg text-muted">{p.tagline}</p>
          <ul className="mt-5 flex flex-wrap gap-1.5">
            {p.tech.map((t) => (
              <li key={t}>
                <Tag>{t}</Tag>
              </li>
            ))}
          </ul>
          <div className="mt-6">
            <ProjectLinks project={p} size="md" />
          </div>
        </header>

        <div className="mt-12 space-y-12">
          <section>
            <h2 className="text-xl font-semibold tracking-tight">Overview</h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted">{p.overview}</p>
            {p.private && !p.github && (
              <p className="mt-4 flex items-center gap-2 text-sm text-muted">
                <Lock size={14} aria-hidden="true" /> The source code is private. Get in touch and I&apos;ll walk you
                through it.
              </p>
            )}
          </section>

          <List title="What I built" items={p.highlights} />
          <List title="Technical challenges" items={p.challenges} />
          <List title="What I learned" items={p.learned} />

          {(p.images?.length ?? 0) > 0 && (
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Screenshots</h2>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {p.images!.map((src, i) => (
                  <Image
                    key={src}
                    src={src}
                    alt={`${p.name} screenshot ${i + 1}`}
                    width={390}
                    height={844}
                    className="h-auto w-full rounded-xl border border-border"
                  />
                ))}
              </div>
            </section>
          )}

          {(p.videos?.length ?? 0) > 0 && (
            <section>
              <h2 className="text-xl font-semibold tracking-tight">Demo video</h2>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {p.videos!.map((src) => (
                  <video key={src} src={src} controls preload="none" className="w-full rounded-xl border border-border" />
                ))}
              </div>
            </section>
          )}
        </div>

        <div className="mt-16 grid gap-4 border-t border-border pt-8 sm:grid-cols-2">
          <Link href={`/projects/${prev.slug}`} className="glass group rounded-2xl p-5 transition hover:bg-white/[0.06]">
            <span className="flex items-center gap-2 text-xs text-muted">
              <ArrowLeft size={14} aria-hidden="true" /> Previous
            </span>
            <span className="mt-1 block font-medium">{prev.name}</span>
          </Link>
          <Link
            href={`/projects/${next.slug}`}
            className="glass group rounded-2xl p-5 text-right transition hover:bg-white/[0.06]"
          >
            <span className="flex items-center justify-end gap-2 text-xs text-muted">
              Next <ArrowRight size={14} aria-hidden="true" />
            </span>
            <span className="mt-1 block font-medium">{next.name}</span>
          </Link>
        </div>

        <div className="mt-10 text-center">
        </div>
      </main>
      <Footer />
    </>
  );
}
