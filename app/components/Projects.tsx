import React from 'react';
import Image from 'next/image';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  imageUrl: string;
  githubUrl: string;
}

const projects: Project[] = [
  {
    title: "Streaming Analytics Platform",
    description: "Real-time data processing and analytics platform built with modern cloud technologies.",
    technologies: ["BigQuery", "Google Cloud Platform", "Dataflow", "Python"],
    imageUrl: "/projects/Netflix.png",
    githubUrl: "https://github.com/ajit3620/Netflix-Data-Pipeline"
  },
  {
    title: "LLM-Powered Knowledge Base with RAG",
    description: "Knowledge base system using Large Language Models and Retrieval-Augmented Generation for enhanced information retrieval and response generation.",
    technologies: ["LangChain", "OpenAI", "Vector DB", "Python"],
    imageUrl: "/projects/RAG.png",
    githubUrl: "https://github.com/ajit3620/RAG-knowledge-base"
  },
  {
    title: "Waste Classification with Transfer Learning",
    description: "Image classifier distinguishing nine types of waste using transfer learning on pre-trained CNNs (ResNet50, ResNet101, EfficientNetB0, VGG16).",
    technologies: ["PyTorch", "Transfer Learning", "CNN", "Computer Vision"],
    imageUrl: "/projects/Waste.png",
    githubUrl: "https://github.com/ajit3620/Waste-Classification-with-Transfer-Learning"
  },
  {
    title: "AI-Based Image Recognition for Medical Diagnosis",
    description: "Deep learning system for medical image analysis and disease detection using advanced computer vision techniques.",
    technologies: ["TensorFlow", "Deep Learning", "Medical Imaging", "Python"],
    imageUrl: "/projects/med.png",
    githubUrl: "https://github.com/ajit3620/AI-Medical-Image"
  },
  {
    title: "MayDay- Automated Home Security System using IoT",
    description: "Smart home security system leveraging IoT sensors, real-time monitoring, and automated alert mechanisms for enhanced home protection.",
    technologies: ["IoT", "Raspberry Pi", "Python", "MQTT"],
    imageUrl: "/projects/mayday.png",
    githubUrl: "https://github.com/ajit3620/Mayday-System/blob/main/itmconf_icacc2022_01007.pdf"
  }
];

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl transform hover:-translate-y-2 flex flex-col h-full">
      <div className="relative h-48 w-full bg-[#000000] overflow-hidden">
        <Image
          src={project.imageUrl}
          alt={project.title}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          priority={project.title === "Streaming Analytics Platform"}
        />
      </div>
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{project.description}</p>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-blue-50 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 rounded-full text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-auto">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full px-6 py-3 bg-black dark:bg-black text-white rounded-md hover:bg-gray-900 transition-colors duration-200 text-sm font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
            View on GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-4 text-gray-900 dark:text-white animate-fade-in">Featured Projects</h2>
        <p className="text-gray-600 dark:text-gray-300 text-center mb-12 max-w-2xl mx-auto animate-fade-in-delay">
          A showcase of my recent work, featuring projects built with modern technologies and best practices.
        </p>
        <div className="grid gap-8 animate-fade-in-delay-2">
          {/* First row with 3 projects */}
          <div className="grid md:grid-cols-3 gap-8">
            {projects.slice(0, 3).map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
          {/* Second row with 2 centered projects */}
          <div className="grid md:grid-cols-2 gap-8 md:w-2/3 mx-auto">
            {projects.slice(3, 5).map((project, index) => (
              <ProjectCard key={index + 3} project={project} />
            ))}
          </div>
        </div>
        <div className="text-center mt-12 animate-fade-in-delay-3">
          <a
            href="https://github.com/ajit3620"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-blue-600 dark:bg-blue-500 text-white rounded-lg hover:bg-blue-700 dark:hover:bg-blue-600 transition transform hover:scale-105 group"
          >
            View More Projects
            <svg 
              className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects; 