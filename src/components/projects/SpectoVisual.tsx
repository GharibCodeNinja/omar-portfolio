"use client";

import { useEffect, useRef } from "react";

/** Live-drawn spectrogram + waveform. Illustrative only: it is synthetic, not app footage. */
export function SpectoVisual({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let w = 0;
    let h = 0;
    let raf = 0;
    let t = 0;
    let last = 0;
    let running = true;

    const resize = () => {
      w = Math.max(1, Math.floor(canvas.clientWidth * dpr));
      h = Math.max(1, Math.floor(canvas.clientHeight * dpr));
      canvas.width = w;
      canvas.height = h;
      ctx.fillStyle = "#0a0918";
      ctx.fillRect(0, 0, w, h);
    };

    const energy = (x: number, time: number) => {
      const f0 = 0.1 + 0.05 * Math.sin(time * 0.7) + 0.03 * Math.sin(time * 0.23);
      let v = 0;
      for (let k = 1; k <= 5; k++) {
        const d = x - f0 * k;
        v += (1 / k) * Math.exp(-(d * d) / (2 * 0.0009));
      }
      return Math.min(1, v + Math.random() * 0.1 * (1 - x));
    };

    const colorFor = (v: number) => `hsl(${255 - v * 45} ${70 + v * 25}% ${6 + v * 62}%)`;

    const draw = () => {
      const wfH = Math.floor(h * 0.34);
      const specTop = wfH;
      const specH = h - wfH;
      const colW = Math.max(2, Math.round(2 * dpr));

      // Scroll spectrogram left
      ctx.drawImage(canvas, colW, specTop, w - colW, specH, 0, specTop, w - colW, specH);

      // New column on the right
      const bins = 56;
      const bh = specH / bins;
      for (let b = 0; b < bins; b++) {
        const x = b / bins;
        ctx.fillStyle = colorFor(energy(x, t));
        ctx.fillRect(w - colW, specTop + specH - (b + 1) * bh, colW, Math.ceil(bh) + 1);
      }

      // Waveform strip
      ctx.fillStyle = "#0a0918";
      ctx.fillRect(0, 0, w, wfH);
      ctx.beginPath();
      const amp = 0.25 + 0.2 * Math.sin(t * 0.9);
      for (let x = 0; x <= w; x += 3) {
        const p = x / w;
        const y =
          wfH / 2 +
          Math.sin(p * 38 + t * 6) * wfH * 0.28 * amp * Math.sin(p * Math.PI) +
          Math.sin(p * 91 - t * 9) * wfH * 0.1 * amp;
        if (x === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      const g = ctx.createLinearGradient(0, 0, w, 0);
      g.addColorStop(0, "#7c6cff");
      g.addColorStop(1, "#4f8cff");
      ctx.strokeStyle = g;
      ctx.lineWidth = 2 * dpr;
      ctx.stroke();
    };

    const frame = (now: number) => {
      if (!running) return;
      if (now - last > 33) {
        last = now;
        t += 0.033;
        draw();
      }
      raf = requestAnimationFrame(frame);
    };

    resize();
    if (reduce) {
      for (let i = 0; i < Math.ceil(w / (2 * dpr)); i++) {
        t += 0.05;
        draw();
      }
    } else {
      raf = requestAnimationFrame(frame);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Pause when off-screen
    const io = new IntersectionObserver(([e]) => {
      if (reduce) return;
      if (e.isIntersecting && !running) {
        running = true;
        raf = requestAnimationFrame(frame);
      } else if (!e.isIntersecting) {
        running = false;
        cancelAnimationFrame(raf);
      }
    });
    io.observe(canvas);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, []);

  return <canvas ref={ref} className={className} role="img" aria-label="Animated spectrogram and waveform illustration" />;
}
