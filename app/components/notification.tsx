export default function InternshipStatus() {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-sky-200 dark:bg-sky-900 blur-xl opacity-40 animate-pulse" />

        {/* Main flickering box */}
        <div className="relative border border-sky-200 dark:border-sky-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-sm">
          <div className="flex items-center gap-3">
            {/* Flickering indicator dot */}
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-sky-400 dark:bg-sky-500 rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 bg-sky-500 dark:bg-sky-600 rounded-full relative" />
            </div>
            {/* Text with flicker animation */}
            <p className="text-sky-700 dark:text-sky-300 font-medium text-sm sm:text-base tracking-wide">
              Actively looking for Summer 2026 internships
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}