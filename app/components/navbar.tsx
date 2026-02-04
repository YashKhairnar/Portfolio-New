'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/app/utils/cn';

interface NavbarProps {
    activeSection: string;
    scrollToSection: (section: string) => void;
}

export default function Navbar({ activeSection, scrollToSection }: NavbarProps) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = ['home', 'about', 'experience', 'projects', 'skills', 'achievements', 'contact'];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
                isScrolled ? "glass border-white/10 dark:border-white/5 py-3" : "bg-transparent py-5"
            )}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 flex justify-between items-center">
                {/* Logo */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100"
                >
                    Yash <span className="text-orange-600 dark:text-orange-500">Khairnar</span>
                </button>

                {/* Desktop Navigation */}
                <div className="hidden lg:flex items-center space-x-8">
                    {navLinks.map((section) => (
                        <button
                            key={section}
                            onClick={() => scrollToSection(section)}
                            className={cn(
                                "capitalize text-sm font-medium transition-colors duration-300 relative group",
                                activeSection === section
                                    ? "text-orange-600 dark:text-orange-500"
                                    : "text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200"
                            )}
                        >
                            {section}
                            <span className={cn(
                                "absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-600 dark:bg-orange-500 transition-all duration-300 group-hover:w-full",
                                activeSection === section ? "w-full" : ""
                            )} />
                        </button>
                    ))}

                    <div className="flex items-center space-x-4 border-l border-slate-200 dark:border-slate-800 pl-4">
                        <a
                            href="/Yash_Khairnar_Resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
                        >
                            Resume
                        </a>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <div className="lg:hidden flex items-center space-x-4">
                    <button
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        className="text-slate-900 dark:text-slate-100 p-2"
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 overflow-hidden"
                    >
                        <div className="px-4 py-6 space-y-4">
                            {navLinks.map((section) => (
                                <button
                                    key={section}
                                    onClick={() => {
                                        scrollToSection(section);
                                        setIsMobileMenuOpen(false);
                                    }}
                                    className={cn(
                                        "block w-full text-left py-2 px-3 rounded-lg text-sm font-medium transition-colors",
                                        activeSection === section
                                            ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-500"
                                            : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                                    )}
                                >
                                    {section}
                                </button>
                            ))}
                            <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                                <a
                                    href="/Yash_Khairnar_Resume.pdf"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center py-3 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 text-sm font-medium"
                                >
                                    Resume
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
