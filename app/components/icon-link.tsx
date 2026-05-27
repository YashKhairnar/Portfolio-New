import {
  BookOpen,
  ExternalLink,
  FileText,
  Github,
  Linkedin,
  Mail,
  NotebookText,
  type LucideIcon,
} from "lucide-react";

import { cn } from "@/app/utils/cn";

const iconMap: Record<string, LucideIcon> = {
  "case study": BookOpen,
  code: Github,
  cv: FileText,
  demo: ExternalLink,
  email: Mail,
  github: Github,
  linkedin: Linkedin,
  site: ExternalLink,
  writing: NotebookText,
};

export function getLinkIcon(label: string) {
  return iconMap[label.toLowerCase()] ?? ExternalLink;
}

export function IconLink({
  href,
  label,
  iconOnly = false,
  className,
}: {
  href: string;
  label: string;
  iconOnly?: boolean;
  className?: string;
}) {
  const isExternal = href.startsWith("http");
  const Icon = getLinkIcon(label);

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noreferrer" : undefined}
      aria-label={label}
      title={label}
      className={cn(
        "inline-flex items-center gap-1.5 underline decoration-[#9aa08f] decoration-1 underline-offset-[5px] transition hover:text-[#315f48] hover:decoration-[#315f48]",
        iconOnly &&
          "h-8 w-8 justify-center rounded-[4px] border border-[#d7d7cb] bg-[#fbfbf7] no-underline hover:border-[#315f48]",
        className
      )}
    >
      <Icon aria-hidden="true" size={iconOnly ? 16 : 14} strokeWidth={1.8} />
      {iconOnly ? <span className="sr-only">{label}</span> : <span>{label}</span>}
    </a>
  );
}
