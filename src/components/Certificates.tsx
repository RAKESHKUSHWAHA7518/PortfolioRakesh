import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink } from 'lucide-react';

export const Certificates = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const certificates = [
    {
      title: "Namaste React",
      issuer: "Akshay Saini",
      description: "In-depth React.js course covering hooks, performance optimization, Redux, and modern React patterns.",
      link: "https://namastedev.com/",
      color: "#61DAFB",
    },
    {
      title: "Namaste Node.js",
      issuer: "Akshay Saini",
      description: "Comprehensive Node.js course covering event loop, streams, Express.js, databases, and backend architecture.",
      link: "https://namastedev.com/",
      color: "#68A063",
    },
    {
      title: "Mastering Data Structures & Algorithms (C/C++)",
      issuer: "Udemy",
      description: "Complete DSA course covering arrays, trees, graphs, dynamic programming, and problem-solving techniques.",
      link: "https://www.udemy.com/",
      color: "#EC5252",
    },
    {
      title: "Complete Web Development Bootcamp 2024",
      issuer: "Udemy",
      description: "Full-stack web development bootcamp covering HTML, CSS, JavaScript, React, Node.js, and databases.",
      link: "https://www.udemy.com/",
      color: "#A435F0",
    },
    {
      title: "Complete JavaScript Course",
      issuer: "Udemy",
      description: "Advanced JavaScript course covering ES6+, async/await, closures, prototypes, and modern JS patterns.",
      link: "https://www.udemy.com/",
      color: "#F7DF1E",
    },
  ];

  return (
    <section id="certificates" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Certificates</h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">Continuous learning and skill development</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificateCard = ({
  cert,
  index,
  inView,
}: {
  cert: any;
  index: number;
  inView: boolean;
}) => {
  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getBorderGradient = () => {
    return `linear-gradient(${angle}deg, #8B5CF6, #EC4899, #8B5CF6)`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.03 }}
      className="relative p-0.5 rounded-xl overflow-hidden"
      style={{ background: getBorderGradient() }}
    >
      <div className="bg-white dark:bg-gray-800 rounded-xl p-6 h-full flex flex-col">
        <div className="flex items-start gap-4 mb-4">
          <div
            className="p-3 rounded-lg flex-shrink-0"
            style={{ backgroundColor: `${cert.color}20` }}
          >
            <Award className="w-6 h-6" style={{ color: cert.color }} />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white leading-tight">
              {cert.title}
            </h3>
            <p className="text-sm text-purple-600 dark:text-purple-400 font-medium mt-1">
              {cert.issuer}
            </p>
          </div>
        </div>

        <p className="text-gray-600 dark:text-gray-300 text-sm flex-1 mb-4">
          {cert.description}
        </p>

        <motion.a
          href={cert.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-sm text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium"
        >
          <ExternalLink className="w-4 h-4" />
          View Certificate
        </motion.a>
      </div>
    </motion.div>
  );
};
