'use client';

import React, { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-show');
        }
      });
    }, {
      threshold: 0.1
    });

    const hiddenElements = document.querySelectorAll('.reveal-hidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="pt-20 pb-8 bg-white dark:bg-gray-900 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white reveal-hidden">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-100">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Software Engineer | Cloud Solutions | Full Stack</h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                I craft software solutions that transform complex challenges into scalable, elegant systems. 
                Using modern technologies and best practices, I build applications that not only perform but evolve.
              </p>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                From developing robust backend systems to creating intuitive front-end experiences, 
                I specialize in full-stack development with various modern technologies and frameworks.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-200">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Experience</h4>
                <div className="flex items-center">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">3+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Years</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-300">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Projects</h4>
                <div className="flex items-center">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">40+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Completed</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-200">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Technologies</h4>
                <div className="flex items-center">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">20+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Mastered</p>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-300">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Certifications</h4>
                <div className="flex items-center">
                  <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>
                  <span className="text-3xl font-bold text-gray-900 dark:text-white">5+</span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mt-2">Achieved</p>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white reveal-hidden reveal-delay-100">Technical Skills</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-200">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Software Development</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>System Design
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Microservices
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>API Development
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Design Patterns
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-300">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">AI & Data Science</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Machine Learning
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Deep Learning
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>TensorFlow/PyTorch
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Data Analytics
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-200">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Cloud & DevOps</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>AWS
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Docker
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Kubernetes
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>CI/CD
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-300">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Tools</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Git
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>VS Code
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Postman
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Jira
                  </li>
                </ul>
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-200">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Frontend</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>React.js
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Next.js
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>TypeScript
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Tailwind CSS
                  </li>
                </ul>
              </div>
              
              <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 reveal-hidden reveal-delay-300">
                <h4 className="font-semibold mb-4 text-blue-600 dark:text-blue-400">Backend</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Node.js
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Python
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>Java
                  </li>
                  <li className="flex items-center">
                    <span className="mr-2 text-blue-600 dark:text-blue-400">▹</span>SQL
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 