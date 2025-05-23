import React, { useEffect, useRef } from 'react';

interface Certification {
  title: string;
  issuer: string;
}

const certifications: Certification[] = [
  {
    title: 'AWS Academy Graduate - AWS Academy Cloud Foundations',
    issuer: 'Amazon AWS'
  },
  {
    title: 'AWS Certified Solutions Architect',
    issuer: 'Amazon AWS'
  },
  {
    title: 'Cybersecurity Essentials',
    issuer: 'Cybersecurity Essentials'
  },
  {
    title: 'CCNA: Introduction to Networks',
    issuer: 'Networks'
  },
  {
    title: 'Engineering: Masters Virtual Internship Platform',
    issuer: 'Fundamentals'
  },
  {
    title: 'Databases and SQL for Data Science',
    issuer: 'Databases and SQL for Data Science'
  }
];

const Certifications = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up-visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    const certCards = document.querySelectorAll('.cert-card');
    certCards.forEach((card, index) => {
      (card as HTMLElement).style.transitionDelay = `${index * 100}ms`;
      observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="certifications" className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white opacity-0 translate-y-10 animate-fade-up">
          Certifications
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto opacity-0 translate-y-10 animate-fade-up">
          Professional certifications and achievements that validate my expertise
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="cert-card bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700 opacity-0 translate-y-10"
            >
              <div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {cert.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  {cert.issuer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications; 