"use client";

import { useState } from "react";
import { CheckCircle2, Loader2, Mail, Send, TriangleAlert } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";

type Status = "idle" | "sending" | "success" | "error" | "mailto";
type Errors = Partial<Record<"name" | "email" | "message", string>>;

const field =
  "w-full rounded-xl border border-border bg-white/[0.03] px-4 py-3 text-sm text-fg placeholder:text-muted/70 transition focus:border-accent focus:outline-none aria-[invalid=true]:border-red-400/70";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [fallback, setFallback] = useState<{ name: string; message: string } | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("company")) return; // honeypot: bots fill this hidden field

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const next: Errors = {};
    if (name.length < 2) next.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) next.email = "Please enter a valid email address.";
    if (message.length < 10) next.message = "Please write at least 10 characters.";
    setErrors(next);
    if (Object.keys(next).length) return;

    // No delivery service configured: open the visitor's email app instead of faking a send.
    if (!site.contactFormEndpoint) {
      const subject = encodeURIComponent(`Portfolio message from ${name}`);
      const body = encodeURIComponent(`${message}\n\n${name}\n${email}`);
      window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(site.contactFormEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio message from ${name}`,
          _template: "table",
          _captcha: "false",
        }),
      });
      const json = await res.json().catch(() => null);
      if (!res.ok || !json || String(json.success) === "false") throw new Error("Request failed");
      form.reset();
      setErrors({});
      setStatus("success");
    } catch {
      setFallback({ name, message });
      setStatus("error");
    }
  }

  const social =
    "glass inline-flex items-center gap-3 rounded-xl px-5 py-4 text-sm transition hover:bg-white/[0.07]";

  return (
    <section id="contact" className="relative overflow-hidden px-5 py-28 sm:px-8">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />
      <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.05fr]">
        <Reveal>
          <h2 className="text-gradient text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            Have a project or opportunity in mind?
          </h2>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-muted">
            I&apos;m always interested in building useful technology, learning new things, and connecting with people
            working on interesting problems. Let&apos;s talk.
          </p>

          <div className="mt-8 flex flex-col gap-3">
            <a href={`mailto:${site.email}`} className={social}>
              <Mail size={18} className="text-accent" aria-hidden="true" />
              <span>
                <span className="block text-xs text-muted">Email</span>
                {site.email}
              </span>
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className={social}>
              <LinkedinIcon className="size-[18px] text-accent" />
              <span>
                <span className="block text-xs text-muted">LinkedIn</span>
                Omar Gharib
              </span>
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" className={social}>
              <GithubIcon className="size-[18px] text-accent" />
              <span>
                <span className="block text-xs text-muted">GitHub</span>
                GharibCodeNinja
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <form onSubmit={onSubmit} noValidate className="glass space-y-5 rounded-2xl p-6 sm:p-8">
            <div className="absolute -left-[9999px]" aria-hidden="true">
              <label>
                Company <input name="company" tabIndex={-1} autoComplete="off" />
              </label>
            </div>

            <div>
              <label htmlFor="name" className="mb-1.5 block text-sm">
                Name
              </label>
              <input
                id="name"
                name="name"
                autoComplete="name"
                className={field}
                placeholder="Your name"
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-err" : undefined}
              />
              {errors.name && (
                <p id="name-err" className="mt-1.5 text-xs text-red-300">
                  {errors.name}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="email" className="mb-1.5 block text-sm">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className={field}
                placeholder="you@company.com"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-err" : undefined}
              />
              {errors.email && (
                <p id="email-err" className="mt-1.5 text-xs text-red-300">
                  {errors.email}
                </p>
              )}
            </div>

            <div>
              <label htmlFor="message" className="mb-1.5 block text-sm">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                className={`${field} resize-y`}
                placeholder="Tell me about the role or project"
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-err" : undefined}
              />
              {errors.message && (
                <p id="message-err" className="mt-1.5 text-xs text-red-300">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={status === "sending"} className="w-full">
              {status === "sending" ? (
                <>
                  <Loader2 size={16} className="animate-spin" aria-hidden="true" /> Sending...
                </>
              ) : (
                <>
                  <Send size={16} aria-hidden="true" /> {site.contactFormEndpoint ? "Send message" : "Open in my email app"}
                </>
              )}
            </Button>

            <div role="status" aria-live="polite" className="min-h-5 text-sm">
              {status === "success" && (
                <p className="flex items-center gap-2 text-emerald-300">
                  <CheckCircle2 size={16} aria-hidden="true" /> Message sent. I&apos;ll get back to you soon.
                </p>
              )}
              {status === "error" && (
                <p className="flex items-center gap-2 text-red-300">
                  <TriangleAlert size={16} aria-hidden="true" /> Couldn&apos;t send your message. You can email me
                  directly instead:{" "}
                  <a className="underline" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                  {fallback && (
                    <>
                      {" "}or{" "}
                      <a
                        className="underline"
                        target="_blank"
                        rel="noopener noreferrer"
                        href={`https://mail.google.com/mail/?view=cm&to=${site.email}&su=${encodeURIComponent(
                          `Portfolio message from ${fallback.name}`,
                        )}&body=${encodeURIComponent(fallback.message)}`}
                      >
                        open Gmail
                      </a>
                    </>
                  )}
                  .
                </p>
              )}
              {status === "mailto" && (
                <p className="text-muted">Your email app should have opened with the message ready to send.</p>
              )}
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
