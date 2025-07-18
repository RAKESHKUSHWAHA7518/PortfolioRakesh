import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Code2, Layout, Database, ChevronDown } from 'lucide-react';

export const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const projects = [
    {
      title: " ShopNow Project",
      description: " A comprehensive e-commerce platform designed for scalability and performance",
      image: "https://i.postimg.cc/HsdS4wLz/shopNow.png",
      tags: ["React", "Node.js", "mongodb ", "Redux","Express Js","GitHub","Git"],
      github: "https://github.com/RAKESHKUSHWAHA7518/E-com-Full-Stack-Project",
      demo: "https://e-com-full-stack-project-9jpg.vercel.app",
      details: {
        overview: "A full-stack e-commerce solution built with modern technologies, An E-commerce platform with 3 panels User, Admin, and Superadmin panels. Users can browse, add to cart,and purchase and admins manage products and inventory.• Built with React.js, Node.js, Express.js, and MongoDB, offering responsive design and it has 3 role-based access control",
        features: [
          "User authentication and authorization",
          "Product catalog with advanced filtering",
          "Real-time shopping cart updates",
          "Multi Role Access",
          "3 Panel User,Admin,SuperAdmin"
          
        ],
        techStack: {
          frontend: ["React", "Redux", "Tailwind CSS"],
          backend: ["Node.js", "Express", "Mongodb"],
          deployment: [ "Vercel"]
        }
      }
    },
     {
      title: "AskMyDoc",
      description: "Real-time Answer according to your Documents",
      image: "https://iili.io/Fhtlf2V.png",
      tags: ["React", "Firebase", "Tailwind CSS","GitHub","Git","Gemini API"],
      github: "https://github.com/RAKESHKUSHWAHA7518/Rag-application-with-VectorDB",
      demo: "https://askmydoc-ten.vercel.app/",
      details: {
        overview: "An application that allows users to upload a PDF document, processes and embeds its content, and enables a chat-based Q&A interface to query the document's knowledge base using a large language model.",
        features: [
          "Real-time Answer according to your Documents ",
          " Gen AI ",
          " Vector DB",
          " PDF Upload and Processing",
          " Chat-based Q&A Interface",
          "Gemini API Integration",
          "Responsive Design with Tailwind CSS"
           
          
        ],
        techStack: {
          frontend: ["React", "Context API", "Tailwind CSS","Gemini API"],
          backend: ["Firebase", "Cloud Functions"],
          deployment: ["Vercel"]
        }
      }
    },
     {
      title: "AI Coding Assistant",
      description: "Real-time Answer  AI Coding Assistant",
      image: "https://iili.io/FhtjzHG.png",
      tags: ["React", "Firebase", "Tailwind CSS","GitHub","Git","Gemini API"],
      github: "https://github.com/RAKESHKUSHWAHA7518/coding-assistant",
      demo: "https://coding-assistant-seven.vercel.app/",
      details: {
        overview: "An application that allows users to upload a PDF document, processes and embeds its content, and enables a chat-based Q&A interface to query the document's knowledge base using a large language model.",
        features: [
          "Real-time Answer  AI Coding Assistant",
          " Gen AI ",
          "Codeing Assistant",
          "Gemini API Integration",
          "Responsive Design with Tailwind CSS"
           
          
        ],
        techStack: {
          frontend: ["React", "Context API", "Tailwind CSS","Gemini API"],
          backend: ["Firebase", "Cloud Functions"],
          deployment: ["Vercel"]
        }
      }
    },
    {
      title: " Food Application",
      description: "Real-time collaborative Cart management system",
      image: "https://i.postimg.cc/9fWNmy6z/Food-Application.png",
      tags: ["React", "Firebase", "Tailwind CSS","GitHub","Git"],
      github: "https://github.com/RAKESHKUSHWAHA7518/swigy-project",
      demo: "https://vocal-kataifi-155663.netlify.app/",
      details: {
        overview: "I design Swiggy-like application using React js. Designed 3 key features restaurant display, menu display, and cart management. I used swiggy api with cros • Demonstrated expertise in 3 key areas React.js,Redux and API integration for real-time updates ",
        features: [
          "Real-time updates and collaboration",
          "Order assignment ",
          " CRED Operation",
           
          
        ],
        techStack: {
          frontend: ["React", "Context API", "Tailwind CSS"],
          backend: ["Firebase", "Cloud Functions"],
          deployment: ["Vercel"]
        }
      }
    },
    {
      title: " NetflixGPT",
      description: " Redesigned the user interface for a streaming application using React and Tailwind CSS .",
      image: "https://i.postimg.cc/tg4QS0Cr/movies-GPT.png",
      tags: ["React", "D3.js", "Firebase","Tailwind Css"],
      github: "https://github.com/RAKESHKUSHWAHA7518/NetflixGPT.github.io",
      demo: "https://github.com/RAKESHKUSHWAHA7518/NetflixGPT.github.io",
      // details: {
      //   overview: " Redesigned the user interface for a streaming application using React and Tailwind CSS . Implemented content loading, user authentication, and personalized recommendations 10 moviesIncorporated a unique feature utilizing GPT-3.5 for movie name identification in case of uncertainty",
      //   features: [
          // "Interactive data  Design",
          // "GPT 3.5 Integration",
          // "Real-time  Movies Trailer",
          // "Multi Language",
          // "Firebase Login"
      //   ],
      //   techStack: {
      //     frontend: ["React", "Firebase", "Tailwind Css","Context API"],
      //     // backend: ["Node.js", "MongoDB"],
      //     deployment: ["Netlify"]
      //   }
      // }
      details: {
        overview: "Redesigned the user interface for a streaming application using React and Tailwind CSS . Implemented content loading, user authentication, and personalized recommendations 10 moviesIncorporated a unique feature utilizing GPT-3.5 for movie name identification in case of uncertainty",
        features: [
          "Interactive data  Design",
          "GPT 3.5 Integration",
          "Real-time  Movies Trailer",
          "Multi Language",
          "Firebase Login"
          
        ],
        techStack: {
          frontend: ["React", "Firebase", "Tailwind Css","Context API"],
          backend: ["Node.js", "Express", "Mongodb"],
          deployment: [ "Vercel"]
        }
      }
    },
    {
      title: "Weather Application",
      description: " This weather application providing temperature finding and cloud description features on a city-wise basis",
      image: "https://i.postimg.cc/PqPVvdqk/weather.png",
      tags: ["React", "D3.js", "Firebase","Tailwind Css","GitHub","Git"],
      github: "https://github.com/RAKESHKUSHWAHA7518/Weatherios.github.io",
      demo: "https://rakeshkushwaha7518.github.io/Weatherios.github.io/##/weather?lat=25.4381302&lon=81.8338005",
      details: {
        overview: "This weather application providing temperature finding and cloud description features on a city-wise basis.  Proficient in integrating real-time weather data, location-based services, and presenting intuitive cloud descriptions",
        features: [
        "Interactive data  Design",
          "Real-Time Weather Data Integration",
          "Intuitive Cloud Descriptions",
          "Responsive and Modern UI Design",
          "Location-Based Services",
          "City-Wise Temperature Monitoring"
        ],
        techStack: {
          frontend: ["JavaScript","html", "CSS", "Tailwind Css","Weather Api"],
          backend: [ ],
          deployment: ["GitHub"]
        }
      }
      // details: {
      //   overview: "A full-stack e-commerce solution built with modern technologies, An E-commerce platform with 3 panels User, Admin, and Superadmin panels. Users can browse, add to cart,and purchase and admins manage products and inventory.• Built with React.js, Node.js, Express.js, and MongoDB, offering responsive design and it has 3 role-based access control",
      //   features: [
      //     "User authentication and authorization",
      //     "Product catalog with advanced filtering",
      //     "Real-time shopping cart updates",
      //     "Multi Role Access",
      //     "3 Panel User,Admin,SuperAdmin"
          
      //   ],
      //   techStack: {
      //     frontend: ["React", "Redux", "Tailwind CSS"],
      //     backend: ["Node.js", "Express", "Mongodb"],
      //     deployment: [ "Vercel"]
      //   }
      // }
    },
    {
      title: " Speech Text Reader",
      description: "  Led the creation of a dynamic web tool enabling text-to-speech conversion",
      image: "https://i.postimg.cc/7YnWpBRj/Screenshot-2025-04-06-151022.png",
      tags: ["Html",   "Firebase","Tailwind Css","GitHub","Git"],
      github: "https://github.com/RAKESHKUSHWAHA7518/text.github.io",
      demo: "https://rakeshkushwaha7518.github.io/text-to-voice.github.io",
      details: {
        overview: " Led the creation of a dynamic web tool enabling text-to-speech conversion Leveraged Web Speech API to enrich the user experience with auditory content",
        features: [
        "User Experience Enrichment:",
          "Web Speech API Integration",
          "Dynamic Text-to-Speech Web Tool",
          
        ],
        techStack: {
          frontend: ["JavaScript","html", "CSS", "Tailwind Css"," Speech Api"],
          backend: [ ],
          deployment: ["GitHub"]
        }
      }
       
    }
    ,
    {
      title: "Image Search Engine Copy Right Free",
      description: "  Led the creation of a dynamic web tool enabling Image search with Name and copy right free",
      image: "https://i.postimg.cc/yd6qbM1Q/imagesearch.png",
      tags: ["Html",   " JavaScript","Css","GitHub","Git", "API"],
      github: "https://github.com/RAKESHKUSHWAHA7518/Image-search-Engine.github.io",
      demo: "https://rakeshkushwaha7518.github.io/Image-search-Engine.github.io/",
      details: {
        overview: "Led the creation of a dynamic web tool enabling Image search with Name and copy right free all image come form unsplash api and all image are copy right free",
        features: [
        "User Experience Enrichment:",
          "Web  KeyName Search Integration",
          "Dynamic  Image Search Web Tool",
          
        ],
        techStack: {
          frontend: ["JavaScript","html", "CSS", "unsplash Api"],
          backend: [ ],
          deployment: ["GitHub"]
        }
      }
       
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 transition-colors duration-200">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 transition-colors duration-200">
            Showcasing my expertise in full-stack development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: any; index: number }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden transition-all duration-200 hover:shadow-xl"
    >
      <div className="relative h-48 overflow-hidden group">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
          {project.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4 transition-colors duration-200">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag: string, i: number) => (
            <span
              key={i}
              className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm transition-colors duration-200"
            >
              {tag}
            </span>
          ))}
        </div>

        <motion.button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full text-left mb-4 flex items-center justify-between text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors duration-200"
        >
          <span>View Details</span>
          <ChevronDown
            className={`w-5 h-5 transform transition-transform duration-200 ${
              isExpanded ? 'rotate-180' : ''
            }`}
          />
        </motion.button>

        <motion.div
          initial={false}
          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          {isExpanded && (
            <div className="space-y-4 mb-4">
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                  Overview
                </h4>
                <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {project.details.overview}
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                  Key Features
                </h4>
                <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 transition-colors duration-200">
                  {project.details.features.map((feature: string, i: number) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
                  Tech Stack
                </h4>
                <div className="space-y-2">
                  <TechStackRow
                    icon={<Layout className="w-4 h-4" />}
                    title="Frontend"
                    items={project.details.techStack.frontend}
                  />
                  <TechStackRow
                    icon={<Database className="w-4 h-4" />}
                    title="Backend"
                    items={project.details.techStack.backend}
                  />
                  <TechStackRow
                    icon={<Code2 className="w-4 h-4" />}
                    title="Deployment"
                    items={project.details.techStack.deployment}
                  />
                </div>
              </div>
            </div>
          )}
        </motion.div>

        <div className="flex space-x-4 pt-4 border-t border-gray-200 dark:border-gray-700">
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            <Github className="w-5 h-5 mr-2" />
            Code
          </motion.a>
          <motion.a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors duration-200"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            Live Demo
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

const TechStackRow = ({ icon, title, items }: { icon: React.ReactNode; title: string; items: string[] }) => (
  <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
    <span className="text-purple-600 dark:text-purple-400">{icon}</span>
    <span className="font-medium">{title}:</span>
    <span>{items.join(', ')}</span>
  </div>
);