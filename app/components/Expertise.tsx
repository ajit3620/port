import React from 'react';
import Image from 'next/image';

interface Skill {
  name: string;
  icon: string;
  description: string;
}

const skills: Skill[] = [
  { name: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', description: 'Backend development, Data Science, Automation' },
  { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg', description: 'Enterprise Applications, Android Development' },
  { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg', description: 'Frontend Development, Node.js' },
  { name: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', description: 'In-Memory Data Store, Caching' },
  { name: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', description: 'Cloud Infrastructure, Serverless' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', description: 'Cloud Services, Big Data' },
  { name: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', description: 'Containerization, DevOps' },
  { name: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain-wordmark.svg', description: 'Container Orchestration' },
  { name: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', description: 'Infrastructure as Code' },
  { name: 'CircleCI', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/circleci/circleci-plain.svg', description: 'Continuous Integration' },
  { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg', description: 'Linux System Administration' },
  { name: 'C++', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg', description: 'System Programming' },
  { name: 'R', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg', description: 'Statistical Computing' },
  { name: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', description: 'Server-side JavaScript' },
  { name: 'Jenkins', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg', description: 'CI/CD Pipeline' },
  { name: 'Git', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg', description: 'Version Control' },
  { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg', description: 'Relational Database' },
  { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', description: 'Advanced Relational Database' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', description: 'NoSQL Database' },
  { name: 'Django', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', description: 'Python Web Framework' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', description: 'Node.js Web Framework' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', description: 'Frontend Library' },
  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', description: 'Frontend Framework' },
  { name: 'Vue', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg', description: 'Progressive JavaScript Framework' },
  { name: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', description: 'React Framework' },
  { name: 'Spring', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Java Framework' },
  { name: 'Flask', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg', description: 'Python Microframework' },
  { name: 'Nginx', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg', description: 'Web Server, Reverse Proxy' },
  { name: 'Spring Boot', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg', description: 'Java Framework' },
  { name: 'TensorFlow', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original-wordmark.svg', description: 'Deep Learning & AI Development' },
  { name: 'Apache Kafka', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original-wordmark.svg', description: 'Distributed Event Streaming' },
  { name: 'OpenAI & LangChain', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original-wordmark.svg', description: 'LLM Development & AI Integration' }
];

const Expertise = () => {
  return (
    <section id="skills" className="pt-32 pb-64 bg-gray-50 dark:bg-gray-900/50">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white">
          My Expertise
        </h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Hover over the skills to explore my technical proficiencies
        </p>
        
        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="group relative flex items-center justify-center p-4 bg-white dark:bg-gray-800/80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer border border-gray-100 dark:border-gray-700 dark:backdrop-blur-sm dark:hover:bg-gray-700/90"
            >
              <div className="relative w-12 h-12 dark:bg-gray-700/50 rounded-lg p-2 dark:shadow-[0_0_15px_rgba(255,255,255,0.1)] dark:group-hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                <Image
                  src={skill.icon}
                  alt={skill.name}
                  fill
                  className="object-contain transition-transform group-hover:scale-110 dark:filter dark:brightness-125 dark:contrast-125 dark:saturate-150"
                />
              </div>
              
              {/* Tooltip with enhanced visibility */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900/95 dark:bg-gray-700/95 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 whitespace-nowrap z-10 backdrop-blur-sm shadow-xl">
                <div className="font-medium">{skill.name}</div>
                <div className="text-xs text-gray-300">{skill.description}</div>
                {/* Arrow */}
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full">
                  <div className="border-8 border-transparent border-t-gray-900/95 dark:border-t-gray-700/95" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Expertise; 