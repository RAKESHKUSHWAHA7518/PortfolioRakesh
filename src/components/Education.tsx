// import React, { useEffect, useState } from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { GraduationCap, Calendar } from 'lucide-react';

// export const Education = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   const education = [
   
//     {
//       degree: "Bachelor of    Technology",
//       institution: "Rajkiya Engineering College, Banda",
//       period: "2021 - 2025",
//       description: "Major in Computer Science with focus on Web Development,MERN Stack and UI/UX Design.",
//       achievements: [ "7.3 CGPA", "2+ Internship "]
//     } ,
//     {
//       degree: " 12th PCM",
//       institution: "Lala jangilal inter collage",
//       period: "2019 - 2021",
//       description: "Specialized in  PCM  ",
//       achievements: ["74.6",]
//     },
//   ];

//   return (
//     <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">Education</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400">Academic Background</p>
//         </motion.div>

//         <div className="space-y-8">
//           {education.map((edu, index) => (
//             <EducationCard key={index} education={edu} index={index} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// const EducationCard = ({ education, index }: { education: any; index: number }) => {
//   const [ref, inView] = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });
//   // const [angle, setAngle] = useState(0);

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     setAngle((prev) => (prev + 1) % 360);
//   //   }, 50);
//   //   return () => clearInterval(interval);
//   // }, []);

//   // const getBorderGradient = (startColor = "#8B5CF6", endColor = "#EC4899") => {
//   //   return `linear-gradient(${angle}deg, ${startColor}, ${endColor}, ${startColor})`;
//   // };

//   return (
//     <motion.div
//       ref={ref}
//       initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
//       animate={inView ? { opacity: 1, x: 0 } : {}}
//       transition={{ duration: 0.6, delay: index * 0.2 }}
//       className="bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 transition-colors duration-200"
//       // className="relative p-0.5 rounded-xl overflow-hidden"

//       // style={{
//       //   background: getBorderGradient("#3B82F6", "#10B981"),
//       //   backgroundSize: "400% 400%",
//       // }}
//     >
//       <div className="flex items-start gap-4">
//         <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
//           <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
//         </div>
//         <div className="flex-1">
//           <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{education.degree}</h3>
//           <p className="text-purple-600 dark:text-purple-400 font-medium">{education.institution}</p>
//           <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
//             <Calendar className="w-4 h-4" />
//             <span>{education.period}</span>
//           </div>
//           <p className="mt-4 text-gray-600 dark:text-gray-300">{education.description}</p>
//           <div className="flex flex-wrap gap-2 mt-4">
//             {education.achievements.map((achievement: string, i: number) => (
//               <span
//                 key={i}
//                 className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
//               >
//                 {achievement}
//               </span>
//             ))}
//           </div>
//         </div>
//       </div>
//     </motion.div>
//   );
// };


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Calendar } from 'lucide-react';

export const Education = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const education = [
    {
      degree: "Bachelor of Technology",
      institution: "Rajkiya Engineering College, Banda",
      period: "2021 - 2025",
      description:
        "Major in Computer Science with a focus on Web Development, MERN Stack, and UI/UX Design.",
      achievements: ["7.4 CGPA", "2+ Internships"],
    },
    {
      degree: "12th PCM",
      institution: "Lala Jangilal Inter College",
      period: "2019 - 2021",
      description: "Specialized in Physics, Chemistry, and Mathematics.",
      achievements: ["74.6%"],
    },
  ];

  return (
    <section
      id="education"
      className="py-20 bg-gray-100 dark:bg-gray-800 transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Academic Background
          </p>
        </motion.div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <EducationCard key={index} education={edu} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationCard = ({
  education,
  index,
}: {
  education: any;
  index: number;
}) => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getBorderGradient = (
    startColor = '#3B82F6',
    endColor = '#10B981'
  ) => {
    return `linear-gradient(${angle}deg, ${startColor}, ${endColor}, ${startColor})`;
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="relative p-0.5 rounded-xl overflow-hidden"
      style={{
        background: getBorderGradient(),
        backgroundSize: '400% 400%',
      }}
    >
      <div className="bg-white dark:bg-gray-900 rounded-xl p-6 transition-colors duration-200 flex items-start gap-4">
        <div className="p-3 bg-purple-100 dark:bg-purple-900 rounded-lg">
          <GraduationCap className="w-6 h-6 text-purple-600 dark:text-purple-400" />
        </div>
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
            {education.degree}
          </h3>
          <p className="text-purple-600 dark:text-purple-400 font-medium">
            {education.institution}
          </p>
          <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mt-1">
            <Calendar className="w-4 h-4" />
            <span>{education.period}</span>
          </div>
          <p className="mt-4 text-gray-600 dark:text-gray-300">
            {education.description}
          </p>
          <div className="flex flex-wrap gap-2 mt-4">
            {education.achievements.map((achievement: string, i: number) => (
              <span
                key={i}
                className="px-3 py-1 bg-purple-100 dark:bg-purple-900 text-purple-600 dark:text-purple-400 rounded-full text-sm"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};
