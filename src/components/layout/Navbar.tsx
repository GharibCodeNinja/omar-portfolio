"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Download, Menu, X } from "lucide-react";
import { navLinks, site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const pathname = usePathname();
  const onHome = pathname === "/";
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const href = (h: string) => (onHome ? h : `/${h}`);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!onHome) return;
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" },
    );
    navLinks.forEach((l) => {
      const el = document.getElementById(l.href.slice(1));
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [onHome]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition duration-300",
        scrolled || open ? "border-b border-border bg-bg/80 backdrop-blur-xl" : "bg-transparent",
      )}
    >
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href={href("#home")} className="font-mono text-sm font-semibold tracking-tight" aria-label="Home">
          <span className="text-accent">&lt;</span>omar<span className="text-accent">/&gt;</span>
        </a>

        <ul className="hidden items-center gap-1 lg:flex">
          {navLinks.map((l) => {
            const isActive = onHome && active === l.href.slice(1);
            return (
              <li key={l.href}>
                <a
                  href={href(l.href)}
                  aria-current={isActive ? "page" : undefined}
                  className={cn(
                    "relative rounded-full px-3.5 py-2 text-sm transition",
                    isActive ? "text-fg" : "text-muted hover:text-fg",
                  )}
                >
                  {l.label}
                  {isActive && (
                    <span className="absolute inset-x-3.5 -bottom-0.5 h-px bg-gradient-to-r from-accent to-accent-2" />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-2">
          <Button href={site.cv} download className="hidden !py-2 sm:inline-flex">
            <Download size={15} /> Download CV
          </Button>
          <button
            type="button"
            className="glass grid size-10 place-items-center rounded-full lg:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-border bg-bg/95 px-5 pb-6 pt-2 lg:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a
                  href={href(l.href)}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "block border-b border-border py-3.5 text-lg",
                    onHome && active === l.href.slice(1) ? "text-fg" : "text-muted",
                  )}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <Button href={site.cv} download className="mt-5 w-full">
            <Download size={16} /> Download CV
          </Button>
        </div>
      )}
    </header>
  );
}
