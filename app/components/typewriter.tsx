"use client";

import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useEffect, useState } from "react";

export interface TypewriterProps {
    words: string[];
    className?: string;
    cursorClassName?: string;
}

export default function Typewriter({
    words,
    className,
    cursorClassName,
}: TypewriterProps) {
    const [index, setIndex] = useState(0);
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        words[index].slice(0, latest)
    );
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        const anim = animate(count, words[index].length, {
            type: "tween",
            duration: words[index].length * 0.05, // Adjust speed here
            ease: "linear",
            onComplete: () => {
                setIsWaiting(true);
                setTimeout(() => {
                    const deleteAnim = animate(count, 0, {
                        type: "tween",
                        duration: words[index].length * 0.03, // Faster delete
                        ease: "linear",
                        onComplete: () => {
                            setIndex((prev) => (prev + 1) % words.length);
                            setIsWaiting(false);
                        },
                    });
                }, 1500); // Wait before deleting
            },
        });
        return anim.stop;
    }, [index, words]);

    return (
        <span className={`inline-flex items-center whitespace-nowrap ${className}`}>
            <motion.span>{displayText}</motion.span>
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={`inline-block h-[1em] w-[2px] bg-sky-500 ml-1 ${cursorClassName}`}
            />
        </span>
    );
}
