'use client';

import React, { useState, useEffect, useRef } from 'react';

interface Experience {
  title: string;
  company: string;
  location: string;
  period: string;
  type: string;
  description: string;
  technologies: string[];
}

interface Education {
  degree: string;
  school: string;
  location: string;
  period: string;
  gpa: string;
  description: string;
  courses: string[];
}

const experiences: Experience[] = [
  {
    title: "Software Programmer Analyst",
    company: "Cognizant Technology Solutions",
    location: "Mumbai, India",
    period: "October 2022 - July 2024",
    type: "Full-time",
    description: "Led development of microservices and APIs for insurance solutions, improving efficiency by 30%.",
    technologies: ["AWS", "Microservices", "RESTful APIs", "CI/CD", "Agile"]
  },
  {
    title: "Software Developer Intern",
    company: "Cognizant Technology Solutions",
    location: "Mumbai, India",
    period: "March 2022 - July 2022",
    type: "Internship",
    description: "Led development of streamlined workflow and responsive web designs, increasing task completion rates by 10% and traffic by 25%.",
    technologies: ["HTML", "CSS", "JavaScript", "Team Leadership", "UI/UX"]
  },
  {
    title: "Web Developer Intern",
    company: "Sparkle Foundation",
    location: "Mumbai, India",
    period: "February 2021 - March 2021",
    type: "Internship",
    description: "Developed real-time payment gateway system enhancing user experience and boosting website's user base by 40%.",
    technologies: ["HTML5", "CSS3", "PHP", "Payment Gateway", "Web Development"]
  }
];

const education: Education[] = [
  {
    degree: "Master of Science in Computer Science",
    school: "University of Southern California",
    location: "Los Angeles, United States of America",
    period: "August 2024-May 2026",
    gpa: "",
    description: "Focused on Analysis of Algorithms, Database Systems, Machine Learning for Data Science, and Information Retrieval",
    courses: [
      "Analysis of Algorithms",
      "Database Systems",
      "Machine Learning for Data Science",
      "Information Retrieval"
    ]
  },
  {
    degree: "Bachelor of Engineering in Information Technology",
    school: "University of Mumbai",
    location: "Mumbai, India",
    period: "August 2018-May 2022",
    gpa: "3.74/10",
    description: "Specialized in Data Structure & Analysis, Database Management Systems, Operating System, Cloud Computing & Services",
    courses: [
      "Data Structure & Analysis",
      "Database Management Systems",
      "Operating System",
      "Cloud Computing & Services"
    ]
  }
];

const TimelineItem = ({ data, index, type, isLast }: { data: any; index: number; type: 'experience' | 'education'; isLast: boolean }) => {
  return (
    <div className={`flex gap-8 relative mb-16 animate-fade-in`}>
      {/* Timeline dot */}
      <div className="flex flex-col items-center relative w-4">
        <div className={`w-4 h-4 rounded-full bg-gray-900 dark:bg-gray-300 z-10`} />
      </div>

      {/* Content */}
      <div className="flex-1 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl 
                    transition-all duration-300 border border-gray-100 dark:border-gray-700">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              {type === 'experience' ? data.title : data.degree}
            </h3>
            <p className="text-gray-600 dark:text-gray-400">
              {type === 'experience' ? data.company : data.school} • {data.location}
            </p>
          </div>
          <div className="mt-2 md:mt-0 text-right">
            <p className="text-gray-600 dark:text-gray-300">{data.period}</p>
            {type === 'experience' ? (
              <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-300 
                           rounded-full text-sm font-medium inline-block">
                {data.type}
              </span>
            ) : (
              data.gpa && <p className="text-gray-900 dark:text-gray-400">GPA: {data.gpa}</p>
            )}
          </div>
        </div>

        {type === 'experience' ? (
          <p className="text-gray-600 dark:text-gray-300 mb-4">{data.description}</p>
        ) : (
          <>
            <p className="text-gray-600 dark:text-gray-300 mb-4">{data.description}</p>
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">Key Courses:</h4>
              <div className="flex flex-wrap gap-2">
                {data.courses.map((course: string, courseIndex: number) => (
                  <span key={courseIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                                   text-gray-900 dark:text-gray-300 rounded-full text-sm font-medium">
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </>
        )}

        {type === 'experience' && (
          <div className="flex flex-wrap gap-2">
            {data.technologies.map((tech: string, techIndex: number) => (
              <span key={techIndex} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 
                                             text-gray-900 dark:text-gray-300 rounded-full text-sm font-medium">
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');
  const [isVisible, setIsVisible] = useState(false);
  const timelineRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    if (timelineRef.current) {
      observer.observe(timelineRef.current);
    }

    // Handle scroll for timeline line
    const handleScroll = () => {
      if (timelineRef.current && lineRef.current) {
        const timelineRect = timelineRef.current.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        
        // Calculate the visible portion of the timeline
        const timelineStart = timelineRect.top;
        const timelineEnd = timelineRect.bottom;
        const timelineHeight = timelineRect.height;
        
        // Calculate the start and end positions relative to the viewport
        const startPosition = Math.max(0, -timelineStart);
        const visibleLength = Math.min(timelineHeight, viewportHeight - timelineStart) - startPosition;
        
        // Update both top position and height of the line
        if (timelineStart <= 0 && timelineEnd >= viewportHeight) {
          // Timeline spans more than viewport
          lineRef.current.style.top = `${startPosition}px`;
          lineRef.current.style.height = `${visibleLength}px`;
        } else if (timelineStart > 0) {
          // Timeline is below viewport top
          lineRef.current.style.top = '0px';
          lineRef.current.style.height = `${visibleLength}px`;
        } else {
          // Timeline is above viewport bottom
          lineRef.current.style.top = `${startPosition}px`;
          lineRef.current.style.height = `${visibleLength}px`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section id="experience" className="pt-20 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white animate-fade-in">
          Experience & Education
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 animate-fade-in-delay">
          My professional journey and academic background
        </p>

        {/* Toggle Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-100 dark:bg-gray-800 rounded-full p-1 inline-flex shadow-lg">
            <button
              onClick={() => setActiveTab('experience')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'experience'
                ? 'bg-gray-900 text-white dark:bg-gray-600'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === 'education'
                ? 'bg-gray-900 text-white dark:bg-gray-600'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="mt-12 relative" ref={timelineRef}>
          {isVisible && (
            <div className="timeline-line-container">
              <div className="timeline-line" ref={lineRef} />
            </div>
          )}
          
          {activeTab === 'experience' ? (
            experiences.map((exp, index) => (
              <TimelineItem 
                key={index} 
                data={exp} 
                index={index} 
                type="experience"
                isLast={index === experiences.length - 1} 
              />
            ))
          ) : (
            education.map((edu, index) => (
              <TimelineItem 
                key={index} 
                data={edu} 
                index={index} 
                type="education"
                isLast={index === education.length - 1} 
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience; 