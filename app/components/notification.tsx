export default function InternshipStatus() {
  return (
    <div className="flex items-center justify-center p-2">
      <div className="relative">
        {/* Glowing background effect */}
        <div className="absolute inset-0 bg-emerald-200 blur-xl opacity-40 animate-pulse" />
        
        {/* Main flickering box */}
        <div className="relative border-2 border-emerald-300 dark:border-emerald-600 bg-white dark:bg-gray-800 px-6 py-4 rounded-lg shadow-lg">
          <div className="flex items-center gap-3">
            {/* Flickering indicator dot */}
            <div className="relative">
              <div className="w-3 h-3 bg-emerald-400 dark:bg-emerald-500 rounded-full animate-ping absolute" />
              <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-600 rounded-full relative" />
            </div>
            {/* Text with flicker animation */}
            <p className="text-emerald-700 dark:text-emerald-300 font-semibold text-lg tracking-wide flicker">
              Actively looking for Summer 2026 internships
            </p>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes flicker {
          0%, 100% { opacity: 1; }
          41% { opacity: 1; }
          42% { opacity: 0.8; }
          43% { opacity: 1; }
          45% { opacity: 0.9; }
          46% { opacity: 1; }
        }
        
        .flicker {
          animation: flicker 4s infinite;
        }
      `}</style>
    </div>
  );
}