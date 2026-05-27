const markers = [
  { label: "India" },
  { label: "SF" },
];

export default function LocationMarkers() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed bottom-3 left-[72px] right-3 z-20 flex items-end justify-between sm:bottom-5 sm:right-6"
    >
      {markers.map((marker) => (
        <div
          key={marker.label}
          className="rounded-full border border-[#deded4] bg-[color:var(--background)]/82 px-3 py-1.5 font-mono-note text-[10px] uppercase tracking-[0.2em] text-[#74786a] shadow-sm backdrop-blur"
        >
          <span className="inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-[#b58a36]" />
            {marker.label}
          </span>
        </div>
      ))}
    </div>
  );
}
