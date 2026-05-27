"use client";

import { useState } from "react";

const prompts = [
  {
    command: "whoami",
    output: "yash: mscs student, builder, occasionally overcaffeinated",
  },
  {
    command: "ls interests",
    output: "world-models/ rag/ agents/ computer-vision/ game-theory/",
  },
  {
    command: "cat current_thought.txt",
    output: "evaluating agents is harder than making them sound confident",
  },
  {
    command: 'grep -r "hard part" projects/',
    output: "data plumbing, queue semantics, edge cases, naming things",
  },
  {
    command: "uptime",
    output: "online, reading papers, tuning something probably",
  },
];

export default function FooterTerminal() {
  const [index, setIndex] = useState(0);
  const prompt = prompts[index];

  return (
    <button
      type="button"
      aria-label="Cycle terminal prompt"
      onClick={() => setIndex((current) => (current + 1) % prompts.length)}
      className="group mt-5 block w-full rounded-[6px] border border-[#deded4] bg-[#fbfbf7] px-4 py-3 text-left font-mono-note text-xs leading-6 text-[#50544a] transition hover:border-[#315f48] hover:text-[#242620]"
    >
      <span className="block text-[#74786a]">
        <span className="text-[#315f48]">&gt;</span> {prompt.command}
      </span>
      <span aria-live="polite" className="block text-[#303229]">
        {prompt.output}
      </span>
    </button>
  );
}
