'use client';

import { SocialIcon } from 'react-social-icons';

export default function Footer() {
    const socialLinks = [
        { href: 'https://github.com/YashKhairnar', label: 'GitHub', color: 'hover:text-gray-900 dark:hover:text-white' },
        { href: 'https://www.linkedin.com/in/yashkhairnar11/', label: 'LinkedIn', color: 'hover:text-blue-600 dark:hover:text-blue-400' },
        { href: 'https://x.com/I_esoteric', label: 'Twitter/X', color: 'hover:text-sky-500 dark:hover:text-sky-400' },
        { href: 'mailto:yashkvk7@gmail.com', label: 'Email', color: 'hover:text-red-500 dark:hover:text-red-400' }
    ];

    return (
        <footer className="py-12 px-4 sm:px-6 border-t border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/50">
            <div className="max-w-4xl mx-auto flex flex-col items-center space-y-6">
                <div className="flex space-x-6">
                    {socialLinks.map((social, index) => (
                        <SocialIcon
                            key={index}
                            url={social.href}
                            target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                            rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                            className={`h-8 w-8 transition-transform duration-300 hover:scale-110`}
                            bgColor="transparent"
                            fgColor="currentColor"
                            style={{ height: 32, width: 32 }}
                        />
                    ))}
                </div>

                <div className="text-center space-y-2">
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        © {new Date().getFullYear()} Yash Khairnar. All rights reserved.
                    </p>
                    <p className="text-xs text-slate-400 dark:text-slate-500">
                        Built with Next.js, Tailwind CSS, and Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
