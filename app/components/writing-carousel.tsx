"use client";

import { useRef } from "react";
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { notes } from "../data/portfolio";

export default function WritingCarousel() {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * Math.min(520, window.innerWidth * 0.78), behavior: "smooth" });

  return <div className="writing-carousel">
    <div className="writing-controls"><button onClick={() => move(-1)} aria-label="Previous articles"><ChevronLeft size={18} /></button><span>DRAG / SCROLL</span><button onClick={() => move(1)} aria-label="Next articles"><ChevronRight size={18} /></button></div>
    <div className="writing-track" ref={track}>
      {notes.map((note, index) => <article className="writing-card" key={note.title}>
        <a href={note.href} target="_blank" rel="noreferrer" className="writing-image"><img src={note.image} alt="" /><span>ESSAY {String(index + 1).padStart(2, "0")}</span></a>
        <div className="writing-copy"><p>MEDIUM / AI NOTES</p><h3>{note.title}</h3><p>{note.detail}</p><a href={note.href} target="_blank" rel="noreferrer">READ ARTICLE <ArrowUpRight size={14} /></a></div>
      </article>)}
    </div>
  </div>;
}
