'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    // Check initial dark mode preference
    if (typeof window !== 'undefined') {
      setIsDark(document.documentElement.classList.contains('dark'));
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 py-5`}>
      <div className="flex items-center justify-between px-4 md:pr-6">
        {/* AB Logo */}
        <div className="w-[320px] flex justify-end pr-8">
          <Link href="/" className="text-xl font-bold text-gray-900 dark:text-white hover:text-[#4A9EFF] dark:hover:text-[#4A9EFF] transition-colors">
            AB
          </Link>
        </div>

        <div className="flex items-center gap-10">
          {/* Navigation Links in Pill Container */}
          <div className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm px-8 py-3 rounded-full flex items-center gap-8">
            <Link href="/" className="text-[15px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded-full transition-all duration-200">
              Home
            </Link>
            <Link href="#about" className="text-[15px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded-full transition-all duration-200">
              About
            </Link>
            <Link href="#experience" className="text-[15px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded-full transition-all duration-200">
              Experience
            </Link>
            <Link href="#projects" className="text-[15px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded-full transition-all duration-200">
              Projects
            </Link>
            <Link href="#skills" className="text-[15px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded-full transition-all duration-200">
              Skills
            </Link>
            <Link href="#certifications" className="text-[15px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded-full transition-all duration-200">
              Certifications
            </Link>
            <Link href="#contact" className="text-[15px] text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 px-3 py-1 rounded-full transition-all duration-200">
              Contact
            </Link>
          </div>

          {/* Dark Mode Toggle */}
          <button
            onClick={toggleDarkMode}
            className="bg-white/70 dark:bg-gray-900/70 backdrop-blur-sm p-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-all duration-200 flex items-center justify-center"
            aria-label="Toggle dark mode"
          >
            {isDark ? (
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-gray-600 dark:text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 