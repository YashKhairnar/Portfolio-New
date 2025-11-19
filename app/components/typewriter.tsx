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
    const baseText = useMotionValue("");
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const displayText = useTransform(rounded, (latest) =>
        baseText.get().slice(0, latest)
    );
    const [isWaiting, setIsWaiting] = useState(false);

    useEffect(() => {
        const anim = animate(count, 60, {
            type: "tween",
            duration: 0,
            ease: "easeIn",
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1,
            onUpdate: (latest) => {
                if (isWaiting) return;

                const currentText = words[index];
                const currentLength = currentText.length;

                // We manually control the animation steps here for more complex logic
                // but for a simple typewriter, we can just use a recursive timeout approach
                // or a simpler Framer Motion setup.
                // Let's switch to a simpler useEffect based approach for better control over the "wait" phase.
            },
        });
        return anim.stop;
    }, [index, isWaiting, words]);

    // Simpler approach using pure React state + timeouts for the logic, 
    // and just rendering the string.
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);
    const [wordIndex, setWordIndex] = useState(0);

    useEffect(() => {
        const currentWord = words[wordIndex % words.length];
        const typeSpeed = isDeleting ? 50 : 100;
        const deleteSpeed = 30;
        const pauseDuration = 2000;

        const timeout = setTimeout(() => {
            if (!isDeleting) {
                // Typing
                if (text.length < currentWord.length) {
                    setText(currentWord.slice(0, text.length + 1));
                } else {
                    // Finished typing, wait then delete
                    setTimeout(() => setIsDeleting(true), pauseDuration);
                }
            } else {
                // Deleting
                if (text.length > 0) {
                    setText(currentWord.slice(0, text.length - 1));
                } else {
                    // Finished deleting, move to next word
                    setIsDeleting(false);
                    setWordIndex((prev) => prev + 1);
                }
            }
        }, isDeleting ? deleteSpeed : typeSpeed);

        return () => clearTimeout(timeout);
    }, [text, isDeleting, wordIndex, words]);

    return (
        <span className={className}>
            {text}
            <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className={`inline-block h-full w-[2px] bg-sky-500 ml-1 align-middle ${cursorClassName}`}
            />
        </span>
    );
}
