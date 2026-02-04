'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Clock, ArrowLeft } from 'lucide-react';
import BackgroundParticles from '../components/background';
import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';

export default function Blog() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [blogPosts, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);


  // Fetch once on mount
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/blog', { cache: 'no-store' });
        if (!res.ok) {
          const text = await res.text();
          throw new Error(`GET /api/blog ${res.status}: ${text}`);
        }
        const posts = await res.json();
        setBlogs(Array.isArray(posts) ? posts : []);
      } catch (e) {
        setErr(e.message || 'Failed to load blog posts');
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Mouse tracking
  useEffect(() => {
    const handleMouseMove = (e) => setMousePosition({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Load animation
  useEffect(() => {
    const t = setTimeout(() => setIsLoaded(true), 300);
    return () => clearTimeout(t);
  }, []);

  if (selectedPost) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
        <div
          className="fixed w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full pointer-events-none z-50 transition-transform duration-150"
          style={{ left: mousePosition.x, top: mousePosition.y, transform: 'translate(-50%, -50%)' }}
        />
        <BackgroundParticles />

        <nav className="fixed top-0 left-0 right-0 z-40 border-b bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-gray-100 dark:border-gray-800">
          <div className="max-w-6xl mx-auto px-6 py-5 flex justify-between items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Yash <span className="text-sky-900 dark:text-sky-400 font-bold">Khairnar</span>
            </Link>

            <div className="flex items-center gap-4">
              <button
                onClick={() => setSelectedPost(null)}
                className="flex items-center gap-2 text-sm font-medium text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200"
              >
                <ArrowLeft size={16} />
                Back to Blog
              </button>
            </div>
          </div>
        </nav>

        <div className="pt-24 pb-16 px-6">
          <div className="max-w-4xl mx-auto">
            <article className="prose prose-lg max-w-none">
              <header className="mb-12">
                <h1 className="text-4xl md:text-5xl font-light text-gray-900 mb-6 leading-tight">
                  {selectedPost.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 text-sm text-gray-500 mb-8">
                  <div className="flex items-center gap-2">
                    <span>By {selectedPost.author}</span>
                  </div>
                  {selectedPost.date && (
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      <span>
                        {new Date(selectedPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                    </div>
                  )}
                  {selectedPost.readTime && (
                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      <span>{selectedPost.readTime}</span>
                    </div>
                  )}
                </div>

                {Array.isArray(selectedPost.tags) && (
                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedPost.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </header>

              {/* If your `content` is markdown or plain text, avoid dangerouslySetInnerHTML.
                 If you must use HTML from CMS, ensure it's sanitized server-side. */}
              {selectedPost.content ? (
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: String(selectedPost.content) }}
                />
              ) : (
                <p className="text-gray-600">No content.</p>
              )}
            </article>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 overflow-x-hidden transition-colors duration-300">
      <div
        className="fixed w-1 h-1 bg-gray-400 dark:bg-gray-500 rounded-full pointer-events-none z-50 transition-transform duration-150"
        style={{ left: mousePosition.x, top: mousePosition.y, transform: 'translate(-50%, -50%)' }}
      />
      <BackgroundParticles />

      <nav className="fixed top-0 left-0 right-0 z-40 border-b bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm border-gray-100 dark:border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 sm:py-5 flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Yash <span className="text-sky-900 dark:text-sky-400 font-bold">Khairnar</span>
          </Link>

          <div className="hidden lg:flex items-center space-x-4 sm:space-x-6">

            <Link
              href="/"
              className="text-xs sm:text-sm font-semibold text-orange-500 hover:text-orange-600 transition"
            >
              Portfolio
            </Link>
          </div>

          <div className="lg:hidden flex items-center space-x-2">

            <button
              onClick={() => setIsMobileMenuOpen((s) => !s)}
              className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-100 transition-colors"
            >
              <span className="sr-only">Toggle menu</span>☰
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block w-full text-left py-2 px-3 rounded-md text-sm font-medium text-orange-500 hover:text-orange-600 hover:bg-orange-50 dark:hover:bg-orange-900/20"
              >
                Portfolio
              </Link>
              <div className="pt-2">
                <span className="block w-full py-2 px-3 rounded-md text-sm font-medium text-slate-900 dark:text-slate-100 bg-gray-100 dark:bg-gray-800">
                  Blog
                </span>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero */}
      <section className="relative min-h-screen flex items-center justify-center z-10 bg-white dark:bg-gray-900 overflow-hidden transition-colors duration-300">
        <div className="text-center space-y-8 px-4 sm:px-6 max-w-5xl">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
            <h1 className="p-6 sm:p-8 lg:p-10 text-4xl sm:text-6xl lg:text-7xl font-extrabold bg-clip-text text-transparent bg-[linear-gradient(to_right,theme(colors.green.300),theme(colors.green.100),theme(colors.sky.400),theme(colors.yellow.200),theme(colors.sky.400),theme(colors.green.100),theme(colors.green.300))] bg-[length:200%_auto] animate-gradient">
              Insights
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed font-light">
              My thoughts in written form as I explore technology and the world.
            </p>
            <div className="mt-12 animate-bounce">
              <ChevronDown className="w-6 h-6 text-gray-400 dark:text-gray-500 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          {loading && <p className="text-gray-500 dark:text-gray-400">Loading posts…</p>}
          {err && (
            <p className="text-red-600 dark:text-red-400">
              {err.includes('permission') ? 'Permission denied – check Firestore rules.' : err}
            </p>
          )}
          {!loading && !err && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {blogPosts.map((post) => (
                <article
                  key={post.id}
                  className="group bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:shadow-sm dark:hover:shadow-lg cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="p-4 sm:p-6 lg:p-8">
                    {post.featured && (
                      <div className="mb-3 sm:mb-4">
                        <span className="px-2 sm:px-3 py-1 bg-sky-100 dark:bg-sky-900/30 text-sky-800 dark:text-sky-300 text-xs font-medium rounded-full">
                          Featured
                        </span>
                      </div>
                    )}

                    <h2 className="text-lg lg:text-xl font-medium mb-3 text-gray-900 dark:text-gray-100 group-hover:text-gray-700 dark:group-hover:text-gray-300">
                      {post.title}
                    </h2>

                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-4 leading-relaxed line-clamp-3">{post.excerpt}</p>

                    <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400">
                      <span>{post.author}</span>
                    </div>
                  </div>
                </article>
              ))}
              {blogPosts.length === 0 && <p className="text-gray-500 dark:text-gray-400">No posts yet.</p>}
            </div>
          )}
        </div>
      </section>

      <footer className="py-12 sm:py-16 px-4 sm:px-6 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center space-y-6">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {[
                {
                  href: 'https://github.com/YashKhairnar',
                  label: 'GitHub',
                  color: 'hover:text-gray-900 dark:hover:text-gray-100'
                },
                {
                  href: 'https://www.linkedin.com/in/yashkhairnar11/',
                  label: 'LinkedIn',
                  color: 'hover:text-blue-600 dark:hover:text-blue-400'
                },
                {
                  href: 'https://x.com/I_esoteric',
                  label: 'Twitter/X',
                  color: 'hover:text-sky-500 dark:hover:text-sky-400'
                },
                {
                  href: 'mailto:yashkvk7@gmail.com',
                  label: 'Email',
                  color: 'hover:text-red-500 dark:hover:text-red-400'
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className={`text-gray-500 dark:text-gray-400 transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <SocialIcon
                    url={social.href}
                    className="h-5 w-5"
                  />
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-center text-xs sm:text-sm text-gray-500 dark:text-gray-400">© 2025 Yash Khairnar. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
