'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import ParticleBackground from './ParticleBackground';

const Hero = () => {
  const [text, setText] = useState('');
  const fullText = "Hi I'm Ajit Bhandarkar";
  const prefix = "Hi I'm ";
  
  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(interval);
        // Reset after a delay
        setTimeout(() => {
          setText('');
          currentIndex = 0;
        }, 3000); // Wait 3 seconds before restarting
      }
    }, 150); // Slower typing speed for better visibility

    return () => clearInterval(interval);
  }, [text.length === 0]); // Restart when text is cleared

  const renderText = () => {
    if (text.length <= prefix.length) {
      return <span className="text-gray-900 dark:text-white">{text}</span>;
    }
    return (
      <>
        <span className="text-gray-900 dark:text-white">{prefix}</span>
        <span className="text-blue-600 dark:text-[#4A9EFF]">
          {text.slice(prefix.length)}
        </span>
      </>
    );
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center text-center px-4 pb-20">
      <ParticleBackground />

      {/* Background pattern - visible in light mode */}
      <div className="absolute inset-0 overflow-hidden dark:hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* Starry background - visible in dark mode */}
      <div className="absolute inset-0 overflow-hidden hidden dark:block">
        <div className="stars"></div>
        <div className="stars2"></div>
        <div className="stars3"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto mt-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {renderText()}
          <span className="animate-blink">|</span>
        </h1>
        
        <p className="text-gray-700 dark:text-gray-300 text-lg md:text-xl mb-12 leading-relaxed whitespace-pre-line">
          I forge intelligent systems where data meets imagination,<br/>
          translating real-world problems into code that learns, adapts, and scales.<br/>
          With Python and TensorFlow as my toolkit and AWS as my playground,<br/>
          I launch machine-learning–driven services that anticipate needs and grow with demand.
        </p>

        <div className="flex justify-center gap-6 mb-12">
          <Link href="https://github.com/ajit3620" target="_blank" rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </Link>
          
          <Link href="https://www.linkedin.com/in/ajitbhandarkar" target="_blank" rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
            </svg>
          </Link>

          <Link href="https://medium.com/@ajitdink" target="_blank" rel="noopener noreferrer"
            className="bg-white dark:bg-gray-900 p-4 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M2.846 6.887c.03-.295-.083-.586-.303-.784l-2.24-2.7v-.403h6.958l5.378 11.795 4.728-11.795h6.633v.403l-1.916 1.837c-.165.126-.247.333-.213.538v13.498c-.034.204.048.411.213.537l1.871 1.837v.403h-9.412v-.403l1.939-1.882c.19-.19.19-.246.19-.537v-10.91l-5.389 13.688h-.728l-6.275-13.688v9.174c-.052.385.076.774.347 1.052l2.521 3.058v.404h-7.148v-.404l2.521-3.058c.27-.279.39-.67.325-1.052v-10.608z"/>
            </svg>
          </Link>
        </div>

        <div className="flex justify-center gap-6 mb-16">
          <Link href="#projects" 
            className="bg-blue-600 dark:bg-[#4A9EFF] text-white px-8 py-3 rounded-full hover:bg-blue-700 dark:hover:bg-blue-600 transition-colors">
            View Projects
          </Link>
          <Link href="/resume.pdf" target="_blank"
            className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white px-8 py-3 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors flex items-center gap-2">
            Resume
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
          </Link>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-600 dark:text-[#4A9EFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="2"/>
                  <path d="M8 10L12 14L16 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-[#4A9EFF]">20+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Data Pipelines</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-600 dark:text-[#4A9EFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 3h18v18H3V3z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 7h10v10H7V7z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-[#4A9EFF]">100TB+</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Data Processed</div>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg transform hover:scale-105 transition-transform">
            <div className="flex flex-col items-center">
              <div className="mb-4">
                <svg className="w-12 h-12 text-blue-600 dark:text-[#4A9EFF]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="text-4xl font-bold text-blue-600 dark:text-[#4A9EFF]">99.9%</div>
              <div className="text-gray-600 dark:text-gray-300 mt-2">Pipeline Reliability</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 