"use client";

import { useEffect, useRef } from "react";

type Star = { x: number; y: number; r: number; phase: number; speed: number; base: number };
type Meteor = { x: number; y: number; vx: number; vy: number; life: number; max: number };

const readVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export default function Starfield() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const colorScheme = window.matchMedia("(prefers-color-scheme: dark)");
    let starColor = readVar("--star") || "255,255,255";
    let meteorColor = readVar("--meteor") || "255,99,105";

    let width = 0;
    let height = 0;
    let stars: Star[] = [];
    let meteor: Meteor | null = null;
    let nextMeteorAt = performance.now() + 4000 + Math.random() * 6000;
    let frame = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(140, (width * height) / 11000));
      stars = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.1 + 0.3,
        phase: Math.random() * Math.PI * 2,
        speed: 0.4 + Math.random() * 1.2,
        base: 0.25 + Math.random() * 0.55,
      }));
    };

    const spawnMeteor = () => {
      const fromLeft = Math.random() < 0.5;
      const speed = 9 + Math.random() * 5;
      const angle = (Math.PI / 180) * (20 + Math.random() * 20);
      meteor = {
        x: fromLeft ? Math.random() * width * 0.5 : width * 0.5 + Math.random() * width * 0.5,
        y: Math.random() * height * 0.35,
        vx: (fromLeft ? 1 : -1) * Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        life: 0,
        max: 55 + Math.random() * 25,
      };
    };

    const draw = (now: number, animate: boolean) => {
      ctx.clearRect(0, 0, width, height);
      const t = now / 1000;
      for (const s of stars) {
        const twinkle = animate ? 0.5 + 0.5 * Math.sin(t * s.speed + s.phase) : 0.7;
        ctx.globalAlpha = s.base * (0.35 + 0.65 * twinkle);
        ctx.fillStyle = `rgb(${starColor})`;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (!animate) return;
      if (!meteor && now > nextMeteorAt) spawnMeteor();
      if (meteor) {
        const m = meteor;
        m.x += m.vx;
        m.y += m.vy;
        m.life += 1;
        const fade = Math.sin((m.life / m.max) * Math.PI);
        const tailX = m.x - m.vx * 9;
        const tailY = m.y - m.vy * 9;
        const grad = ctx.createLinearGradient(m.x, m.y, tailX, tailY);
        grad.addColorStop(0, `rgba(${meteorColor},${0.9 * fade})`);
        grad.addColorStop(1, `rgba(${meteorColor},0)`);
        ctx.globalAlpha = 1;
        ctx.strokeStyle = grad;
        ctx.lineWidth = 1.4;
        ctx.lineCap = "round";
        ctx.beginPath();
        ctx.moveTo(m.x, m.y);
        ctx.lineTo(tailX, tailY);
        ctx.stroke();
        if (m.life >= m.max) {
          meteor = null;
          nextMeteorAt = now + 8000 + Math.random() * 7000;
        }
      }
      ctx.globalAlpha = 1;
    };

    const loop = (now: number) => {
      draw(now, true);
      frame = requestAnimationFrame(loop);
    };

    const start = () => {
      cancelAnimationFrame(frame);
      if (reduceMotion.matches || document.hidden) {
        draw(performance.now(), false);
      } else {
        frame = requestAnimationFrame(loop);
      }
    };

    const onScheme = () => {
      starColor = readVar("--star") || starColor;
      meteorColor = readVar("--meteor") || meteorColor;
      if (reduceMotion.matches) draw(performance.now(), false);
    };
    const onResize = () => {
      resize();
      if (reduceMotion.matches) draw(performance.now(), false);
    };

    resize();
    start();
    window.addEventListener("resize", onResize);
    document.addEventListener("visibilitychange", start);
    reduceMotion.addEventListener("change", start);
    colorScheme.addEventListener("change", onScheme);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", start);
      reduceMotion.removeEventListener("change", start);
      colorScheme.removeEventListener("change", onScheme);
    };
  }, []);

  return <canvas ref={canvasRef} className="starfield" aria-hidden="true" />;
}
