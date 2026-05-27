export default function GoldenGateSketch() {
  const suspenders = [215, 250, 285, 345, 380, 415, 785, 820, 855, 915, 950, 985];

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed left-1/2 top-20 z-0 w-[min(1120px,112vw)] -translate-x-1/2 opacity-[0.14] sm:top-16"
    >
      <svg
        viewBox="0 0 1200 520"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto w-full"
      >
        <g stroke="#b58a36" strokeLinecap="round" strokeLinejoin="round">
          <path d="M72 324C266 296 477 304 625 302C786 300 947 298 1134 322" strokeWidth="2.4" />
          <path d="M102 336C296 308 480 314 628 313C790 311 948 310 1102 336" strokeWidth="1.2" opacity="0.55" />

          <path d="M126 292C250 188 328 126 425 118C544 109 659 159 774 118C868 84 973 172 1074 292" strokeWidth="3" />
          <path d="M130 300C252 199 333 138 427 130C542 121 663 171 772 130C867 96 970 183 1068 300" strokeWidth="1.2" opacity="0.65" />

          <g strokeWidth="2.3">
            <path d="M338 128V344" />
            <path d="M384 128V344" />
            <path d="M322 164H400" />
            <path d="M325 214H397" />
            <path d="M330 266H392" />
            <path d="M330 128H392" />
            <path d="M342 103H380" />
            <path d="M350 88H372" />
          </g>

          <g strokeWidth="2.3">
            <path d="M826 128V344" />
            <path d="M872 128V344" />
            <path d="M810 164H888" />
            <path d="M813 214H885" />
            <path d="M818 266H880" />
            <path d="M818 128H880" />
            <path d="M830 103H868" />
            <path d="M838 88H860" />
          </g>

          <g strokeWidth="1.15" opacity="0.62">
            {suspenders.map((x) => (
              <path key={x} d={`M${x} ${x < 600 ? 231 - Math.abs(x - 360) / 6 : 231 - Math.abs(x - 850) / 6}V318`} />
            ))}
          </g>

          <g strokeWidth="1.35" opacity="0.58">
            <path d="M112 322H1090" />
            <path d="M138 342H1062" />
            <path d="M168 322L210 342L252 322L294 342L336 322L378 342L420 322L462 342L504 322L546 342L588 322L630 342L672 322L714 342L756 322L798 342L840 322L882 342L924 322L966 342L1008 322L1050 342" />
          </g>

          <g strokeWidth="1.2" opacity="0.45">
            <path d="M74 394C170 384 264 387 360 398" />
            <path d="M432 404C536 391 648 392 752 405" />
            <path d="M830 394C926 384 1022 386 1130 399" />
          </g>
        </g>
      </svg>
    </div>
  );
}
