'use client';

import React, { useState, useEffect } from 'react';
import { ChevronDown, Calendar, Clock, ArrowLeft, ArrowRight } from 'lucide-react';
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
        {/* Gradient Background Orbs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[15%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-orange-200/30 via-amber-100/20 to-transparent dark:from-orange-900/20 dark:via-amber-800/10 blur-3xl animate-pulse" style={{ animationDuration: '4s' }} />
          <div className="absolute top-[20%] -right-[15%] w-[50%] h-[50%] rounded-full bg-gradient-to-bl from-sky-200/25 via-blue-100/15 to-transparent dark:from-sky-900/15 dark:via-blue-800/10 blur-3xl animate-pulse" style={{ animationDuration: '5s', animationDelay: '1s' }} />
          <div className="absolute -bottom-[20%] left-[20%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-emerald-200/20 via-green-100/10 to-transparent dark:from-emerald-900/10 dark:via-green-800/5 blur-3xl animate-pulse" style={{ animationDuration: '6s', animationDelay: '2s' }} />
        </div>

        <div className="relative text-center space-y-8 px-4 sm:px-6 max-w-5xl">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-orange-200/50 dark:border-orange-800/30 bg-orange-50/50 dark:bg-orange-900/20 backdrop-blur-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-orange-500 mr-2 animate-pulse" />
              <span className="text-xs font-medium text-orange-700 dark:text-orange-300 tracking-wide uppercase">Blog & Articles</span>
            </div>

            {/* Title */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white">
                Insights
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`text-lg sm:text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed font-light transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              Exploring the intersection of <span className="font-medium text-slate-900 dark:text-white">AI, Machine Learning</span>, and modern software engineering.
            </p>


            {/* CTA Button */}
            <div className={`mt-16 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100' : 'opacity-0 translate-y-4'}`}>
              <button
                onClick={() => document.getElementById('posts')?.scrollIntoView({ behavior: 'smooth' })}
                className="group inline-flex items-center gap-3 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-semibold text-sm hover:bg-slate-800 dark:hover:bg-slate-100 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5"
              >
                Read Articles
                <ChevronDown className="w-5 h-5 group-hover:translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Posts */}
      <section id="posts" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 bg-white dark:bg-gray-900 transition-colors duration-300">
        <div className="max-w-6xl mx-auto">
          {loading && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[1, 2, 3].map(i => (
                <div key={i} className="animate-pulse bg-gray-100 dark:bg-gray-800 rounded-2xl h-80" />
              ))}
            </div>
          )}
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
                  className="group bg-white dark:bg-gray-900 border border-zinc-200 dark:border-zinc-800 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer flex flex-col"
                  onClick={() => post.source === 'medium' ? window.open(post.link, '_blank') : setSelectedPost(post)}
                >
                  <div className="relative aspect-[16/9] overflow-hidden bg-zinc-100 dark:bg-zinc-800">
                    {post.imageUrl ? (
                      <img
                        src={post.imageUrl}
                        alt={post.title}
                        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                    ) : (
                      <div className="absolute inset-0 flex items-center justify-center text-zinc-400">
                        <Calendar size={32} strokeWidth={1} />
                      </div>
                    )}
                    {post.source === 'medium' && (
                      <div className="absolute top-4 right-4">
                        <span className="px-2 py-1 bg-black/60 backdrop-blur-md text-white text-[10px] font-medium rounded-md uppercase tracking-wider">
                          Medium
                        </span>
                      </div>
                    )}
                  </div>

                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center gap-2 mb-3 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                      <span>
                        {post.date ? new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        }) : 'Recent'}
                      </span>
                      {post.tags?.[0] && (
                        <>
                          <span className="w-1 h-1 rounded-full bg-zinc-300 dark:bg-zinc-600" />
                          <span className="text-orange-600 dark:text-orange-500">{post.tags[0]}</span>
                        </>
                      )}
                    </div>

                    <h2 className="text-xl font-bold mb-3 text-zinc-900 dark:text-zinc-100 group-hover:text-orange-600 dark:group-hover:text-orange-500 transition-colors line-clamp-2">
                      {post.title}
                    </h2>


                    <div className="mt-auto flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-zinc-200 dark:bg-zinc-700 flex items-center justify-center text-[10px] font-bold">
                          {post.author?.[0] || 'Y'}
                        </div>
                        <span className="text-xs font-medium text-zinc-500 dark:text-zinc-400">{post.author || 'Yash Khairnar'}</span>
                      </div>
                      <div className="text-orange-600 dark:text-orange-500 group-hover:translate-x-1 transition-transform">
                        <ArrowRight size={16} />
                      </div>
                    </div>
                  </div>
                </article>
              ))}
              {blogPosts.length === 0 && <p className="text-gray-500 dark:text-gray-400 col-span-full text-center py-12">No posts yet.</p>}
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
                <SocialIcon
                  key={index}
                  url={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel={social.href.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                  className={`h-5 w-5 transition-colors duration-300 ${social.color}`}
                  aria-label={social.label}
                  bgColor="transparent"
                  fgColor="currentColor"
                />
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
