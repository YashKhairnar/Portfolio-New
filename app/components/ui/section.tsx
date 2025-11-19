'use client';

import { motion } from 'framer-motion';
import { cn } from '@/app/utils/cn';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function Section({ id, children, className, delay = 0 }: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-32 px-4 sm:px-6 relative z-10 transition-colors duration-300",
        className
      )}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.7, delay, ease: "easeOut" }}
        className="max-w-6xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
}
