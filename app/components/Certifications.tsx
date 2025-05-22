import React from 'react';

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
  return (
    <section id="certifications" className="min-h-screen flex items-center py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          Certifications
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto">
          Professional certifications and achievements that validate my expertise
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
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