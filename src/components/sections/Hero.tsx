"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, Download, MapPin } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";

type Seg = [text: string, color: string];

const K = "text-violet-300";
const V = "text-sky-300";
const S = "text-emerald-300";
const P = "text-muted";
const T = "text-fg";

const code: Seg[][] = [
  [["const ", K], ["omar", V], [" = {", T]],
  [["  role", T], [": ", P], ['"Software Developer"', S], [",", P]],
  [["  degree", T], [": ", P], ['"Media Engineering Tech."', S], [",", P]],
  [["  university", T], [": ", P], ['"GUC, Cairo"', S], [",", P]],
  [["  stack", T], [": [", P], ['"Java"', S], [", ", P], ['"Python"', S], [", ", P], ['"Flutter"', S], [",", P]],
  [["    ", T], ['"Next.js"', S], [", ", P], ['"Unity"', S], ["],", P]],
  [["  building", T], [": ", P], ['"real-time audio AI"', S], [",", P]],
  [["  openTo", T], [": [", P], ['"Remote"', S], [", ", P], ['"Relocation"', S], ["],", P]],
  [["};", T]],
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pb-16 pt-24">
      <div className="grid-bg absolute inset-0 -z-10" />
      <div className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-accent/15 blur-[120px]" />

      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.1fr_1fr]">
        <div>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass inline-flex items-center gap-2 rounded-full px-3.5 py-1.5 text-xs text-muted"
          >
            <span className="size-1.5 rounded-full bg-emerald-400" />
            Open to junior roles, remote and international
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08, duration: 0.6 }}
            className="mt-6 text-4xl font-bold uppercase leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl"
          >
            Omar Ahmed
            <br />
            Gharib
          </motion.h1>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16, duration: 0.6 }}
            className="mt-4 font-mono text-sm text-accent sm:text-base"
          >
            {site.title}
          </motion.p>

          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.24, duration: 0.6 }}
            className="text-gradient mt-6 text-2xl font-semibold leading-snug tracking-tight sm:text-3xl"
          >
            {site.headline}
          </motion.h2>

          <motion.p
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.32, duration: 0.6 }}
            className="mt-5 max-w-xl text-base leading-relaxed text-muted"
          >
            {site.intro}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <Button href="#projects">
              Explore My Work <ArrowDown size={16} />
            </Button>
            <Button href={site.cv} download variant="secondary">
              <Download size={16} /> Download My CV
            </Button>
            <div className="ml-1 flex items-center gap-1">
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
                className="grid size-10 place-items-center rounded-full text-muted transition hover:text-fg"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
                className="grid size-10 place-items-center rounded-full text-muted transition hover:text-fg"
              >
                <LinkedinIcon className="size-5" />
              </a>
            </div>
          </motion.div>

          <p className="mt-6 flex items-center gap-1.5 text-sm text-muted">
            <MapPin size={14} /> {site.location}
          </p>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative"
        >
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-tr from-accent/20 to-accent-2/10 blur-2xl" />
          <div className="glass overflow-hidden rounded-2xl shadow-2xl">
            <div className="flex items-center gap-2 border-b border-border px-4 py-3">
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="size-2.5 rounded-full bg-white/15" />
              <span className="ml-3 font-mono text-xs text-muted">omar.ts</span>
            </div>
            <pre className="overflow-x-auto p-5 font-mono text-[12.5px] leading-7 sm:text-sm">
              <code>
                {code.map((line, i) => (
                  <motion.div
                    key={i}
                    className="whitespace-pre"
                    initial={reduce ? false : { opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7 + i * 0.18, duration: 0.35 }}
                  >
                    {line.map(([text, color], j) => (
                      <span key={j} className={color}>
                        {text}
                      </span>
                    ))}
                    {i === code.length - 1 && <span className="caret ml-1 text-accent">▌</span>}
                  </motion.div>
                ))}
              </code>
            </pre>

            <div className="flex items-center gap-4 border-t border-border px-5 py-4">
              <div className="flex h-8 flex-1 items-end gap-[3px]" aria-hidden="true">
                {Array.from({ length: 32 }).map((_, i) => (
                  <span
                    key={i}
                    className="eq-bar w-full rounded-full bg-gradient-to-t from-accent to-accent-2"
                    style={{
                      height: "100%",
                      animationDelay: `${(i * 0.11) % 1.2}s`,
                      animationDuration: `${1 + ((i * 7) % 5) / 10}s`,
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-muted">FFT, STFT, TFLite</span>
            </div>
          </div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to About section"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-xs text-muted transition hover:text-fg md:flex"
      >
        Scroll
        <span className="h-8 w-px bg-gradient-to-b from-muted to-transparent" />
      </a>
    </section>
  );
}
