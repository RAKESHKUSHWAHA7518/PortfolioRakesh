// import React, { useState,Suspense } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';
// import { Code2, Palette, Database, Download, ExternalLink, Briefcase, ArrowRight, X } from 'lucide-react';
// import { Background3D } from './Background3D';
// import { Canvas } from '@react-three/fiber';
// export const Hero = () => {
//   const [showJobModal, setShowJobModal] = useState(false);

//   const downloadResume = () => {
//     // This would be replaced with your actual resume URL
//     const resumeUrl = 'https://drive.google.com/file/d/1IwfE1M8QKRtD_4CC5Fi-st8Lp1FnfD_1/view?usp=sharing';
//     window.open(resumeUrl, '_blank');
//   };

//   const container = {
//     hidden: { opacity: 0 },
//     show: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2,
//       },
//     },
//   };

//   const item = {
//     hidden: { opacity: 0, y: 20 },
//     show: { opacity: 1, y: 0 },
//   };

//   const jobHighlights = [
//     "Full Stack Development",
//     "UI/UX Design",
//     "Team Work",
//     "Agile Methodology",
//     "Performance Optimization",
     
//   ];

//   return (
//     <>
//       {/* <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-purple-50 dark:from-gray-900 dark:to-purple-900/20 transition-colors duration-500"> */}
//       <section className="relative min-h-screen overflow-hidden">
//       <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-purple-900/20 to-gray-900">
//           <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
//             <Suspense fallback={null}>
//               <Background3D />
//             </Suspense>
//           </Canvas>
//         </div>
//         <div className="relative z-10 min-h-screen flex items-center justify-center">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
//           <motion.div
//             variants={container}
//             initial="hidden"
//             animate="show"
//             className="text-center"
//           >
//             <motion.div
//               variants={item}
//               className="mb-6 inline-block"
//             >
//               <motion.button
//                 onClick={() => setShowJobModal(true)}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center gap-2 hover:bg-purple-200 dark:hover:bg-purple-900/70 transition-all duration-200"
//               >
//                 <Briefcase className="w-4 h-4" />
//                 <span>Available for Work</span>
//                 <ArrowRight className="w-4 h-4" />
//               </motion.button>
//             </motion.div>

//             <motion.h1
//               variants={item}
//               className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-white mb-6 transition-colors duration-200"
//             >
//               Full Stack Developer
//               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500 mt-2 animate-gradient">
//                 & UI/UX Designer
//               </span>
//             </motion.h1>

//             <motion.p
//               variants={item}
//               className="text-xl text-white dark:text-gray-300 mb-8 max-w-2xl mx-auto"
//             >
//               Transforming ideas into exceptional digital experiences with clean code and pixel-perfect design.
//               6 months of expertise in building scalable web applications.
//             </motion.p>

//             <motion.div
//               variants={item}
//               className="flex flex-wrap justify-center gap-4 mb-12"
//             >
//               <motion.button
//                 onClick={downloadResume}
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 bg-purple-600 dark:bg-purple-500 text-white rounded-lg font-medium hover:bg-purple-700 dark:hover:bg-purple-600 transition-all duration-200 flex items-center space-x-2 shadow-lg hover:shadow-xl"
//               >
//                 <Download className="w-5 h-5" />
//                 <span>Download Resume</span>
//               </motion.button>
              
//               <motion.a
//                 href="#contact"
//                 whileHover={{ scale: 1.05 }}
//                 whileTap={{ scale: 0.95 }}
//                 className="px-8 py-3 border-2 border-purple-600 dark:border-purple-500 text-purple-600 dark:text-purple-400 rounded-lg font-medium hover:bg-purple-50 dark:hover:bg-purple-900/30 transition-all duration-200 flex items-center space-x-2"
//               >
//                 <ExternalLink className="w-5 h-5" />
//                 <span>Let's Talk</span>
//               </motion.a>
//             </motion.div>

//             <motion.div
//               variants={container}
//               initial="hidden"
//               animate="show"
//               className="grid grid-cols-1 md:grid-cols-3 gap-6"
//             >
//               <SkillCard
//                 icon={<Code2 className="w-8 h-8" />}
//                 title="Frontend Development"
//                 description="React.js, TypeScript, Next.js"
//                 delay={0.2}
//               />
//               <SkillCard
//                 icon={<Palette className="w-8 h-8" />}
//                 title="UI/UX Design"
//                 description="Figma, User Research, Prototyping"
//                 delay={0.4}
//               />
//               <SkillCard
//                 icon={<Database className="w-8 h-8" />}
//                 title="Backend Development"
//                 description="Node.js, PostgreSQL, REST APIs"
//                 delay={0.6}
//               />
//             </motion.div>
//           </motion.div>
//         </div>
//         </div>
//       </section>

//       <AnimatePresence>
//         {showJobModal && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex  items-center justify-center p-4"
//             onClick={() => setShowJobModal(false)}
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full shadow-xl"
//               onClick={e => e.stopPropagation()}
//             >
//               <div className="flex justify-between items-start mb-4">
//                 <div>
//                   <h3 className="text-2xl font-bold text-black dark:text-white">Looking for New Opportunities</h3>
//                   <p className="text-gray-600 dark:text-gray-400 mt-1">Currently available for full-time positions</p>
//                 </div>
//                 <button
//                   onClick={() => setShowJobModal(false)}
//                   className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
//                 >
//                   <X className="w-6 h-6" />
//                 </button>
//               </div>

//               <div className="space-y-4">
//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Expertise</h4>
//                   <div className="flex flex-wrap gap-2">
//                     {jobHighlights.map((highlight, index) => (
//                       <motion.span
//                         key={index}
//                         initial={{ opacity: 0, scale: 0.8 }}
//                         animate={{ opacity: 1, scale: 1 }}
//                         transition={{ delay: index * 0.1 }}
//                         className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
//                       >
//                         {highlight}
//                       </motion.span>
//                     ))}
//                   </div>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Preferred Roles</h4>
//                   <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
//                     <li> Full Stack Developer</li>
                   
//                     <li>Frontend  Developer</li>
//                     <li> Backend Developer</li>
//                     <li> Web Developer</li>
//                     <li> Bot Developer</li>
//                   </ul>
//                 </div>

//                 <div>
//                   <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
//                   <p className="text-gray-600 dark:text-gray-300">Available for immediate start</p>
//                   <p className="text-gray-600 dark:text-gray-300">Open to remote, hybrid, or on-site positions</p>
//                 </div>

//                 <div className="flex gap-4 mt-6">
//                   <motion.button
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     onClick={downloadResume}
//                     className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
//                   >
//                     Download Resume
//                   </motion.button>
//                   <motion.a
//                     whileHover={{ scale: 1.05 }}
//                     whileTap={{ scale: 0.95 }}
//                     href="#contact"
//                     onClick={() => setShowJobModal(false)}
//                     className="flex-1 px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200 text-center"
//                   >
//                     Contact Me
//                   </motion.a>
//                 </div>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   );
// };

// const SkillCard = ({ icon, title, description, delay }: { 
//   icon: React.ReactNode; 
//   title: string; 
//   description: string;
//   delay: number;
// }) => (
//   <motion.div
//     variants={{
//       hidden: { opacity: 0, y: 20 },
//       show: { 
//         opacity: 1, 
//         y: 0,
//         transition: {
//           delay
//         }
//       }
//     }}
//     whileHover={{ scale: 1.05, y: -5 }}
//     className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform group cursor-pointer"
//   >
//     <div className="text-purple-600 dark:text-purple-400 mb-4 transition-colors duration-200 group-hover:scale-110 transform transition-transform">
//       {icon}
//     </div>
//     <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-200">
//       {title}
//     </h3>
//     <p className="text-gray-600 dark:text-gray-300 transition-colors duration-200">
//       {description}
//     </p>
//   </motion.div>
// );

 import React, { useState, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code2, Database, Download, Briefcase, ArrowRight, X, Bot, Cloud } from 'lucide-react';
import { Background3D } from './Background3D';
import { Canvas } from '@react-three/fiber';

export const Hero = () => {
  const [showJobModal, setShowJobModal] = useState(false);

  const downloadResume = () => {
    const resumeUrl = 'https://drive.google.com/file/d/1IwfE1M8QKRtD_4CC5Fi-st8Lp1FnfD_1/view?usp=sharing';
    window.open(resumeUrl, '_blank');
  };

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const jobHighlights = [
    "Full Stack Development",
    "AI Voice Agents",
    "LLM Integration",
    "Agile Methodology",
    "Performance Optimization",
  ];

  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0 z-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900 via-purple-900/20 to-gray-900">
          <Canvas camera={{ position: [0, 0, 1], fov: 75 }}>
            <Suspense fallback={null}>
              <Background3D />
            </Suspense>
          </Canvas>
        </div>

        <div className="relative z-10 min-h-screen flex items-center justify-center">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            >
              {/* Left Side - Name, Photo, Resume */}
              <motion.div variants={item} className="text-center md:text-left">
                <img
                  src="https://avatars.githubusercontent.com/u/RAKESHKUSHWAHA7518"
                  alt="Rakesh Kushwaha"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=Rakesh+Kushwaha&background=7c3aed&color=fff&size=160';
                  }}
                  className="w-40 h-40 rounded-full mx-auto md:mx-0 mb-6 border-4 border-purple-500 shadow-lg object-cover"
                />
                <h2 className="text-3xl font-bold text-white mb-1">
                  Rakesh Kushwaha
                </h2>
                <p className="text-lg text-purple-400 font-medium mb-2">
                  Software Developer
                </p>
                <p className="text-sm text-gray-400 mb-6">
                  Full Stack · AI / Voice Agent Engineer
                </p>
                <div className="flex flex-wrap gap-3 justify-center md:justify-start">
                  <motion.button
                    onClick={downloadResume}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-all duration-200 flex items-center space-x-2"
                  >
                    <Download className="w-5 h-5" />
                    <span>Download Resume</span>
                  </motion.button>
                  <motion.a
                    href="#contact"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-3 border-2 border-purple-500 text-purple-400 rounded-lg font-medium hover:bg-purple-900/30 transition-all duration-200 flex items-center space-x-2"
                  >
                    <span>Let's Talk</span>
                  </motion.a>
                </div>
              </motion.div>

              {/* Right Side */}
              <motion.div variants={container} className="text-center md:text-left">
                <motion.button
                  onClick={() => setShowJobModal(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-2 rounded-full text-sm font-medium bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center gap-2 hover:bg-purple-200 dark:hover:bg-purple-900/70 transition-all duration-200 mx-auto md:mx-0 mb-4"
                >
                  <Briefcase className="w-4 h-4" />
                  <span>Available for Work</span>
                  <ArrowRight className="w-4 h-4" />
                </motion.button>

                <motion.p
                  variants={item}
                  className="text-xl text-white dark:text-gray-300 mb-8 max-w-xl"
                >
                  Building full-stack web apps and AI-powered voice agents — from React frontends
                  to LLM-driven conversational systems. Currently at Mindcraft Labs.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <SkillCard
                    icon={<Code2 className="w-8 h-8" />}
                    title="Frontend Development"
                    description="React.js, Next.js, TypeScript, Tailwind CSS"
                    delay={0.2}
                  />
                  <SkillCard
                    icon={<Database className="w-8 h-8" />}
                    title="Backend Development"
                    description="Node.js, MongoDB, Express.js, REST APIs"
                    delay={0.4}
                  />
                  <SkillCard
                    icon={<Bot className="w-8 h-8" />}
                    title="AI & Voice Agents"
                    description="OpenAI, RAG, Gemini, Retell AI, Vapi.ai, ElevenLabs, Voiceflow"
                    delay={0.6}
                  />
                  <SkillCard
                    icon={<Cloud className="w-8 h-8" />}
                    title="Cloud & DevOps"
                    description="AWS Lambda, EC2, S3, Cognito, Firebase, Docker"
                    delay={0.8}
                  />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <AnimatePresence>
        {showJobModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setShowJobModal(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-lg w-full shadow-xl"
              onClick={e => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Looking for New Opportunities</h3>
                  <p className="text-gray-600 dark:text-gray-400 mt-1">Available for full-time positions</p>
                </div>
                <button
                  onClick={() => setShowJobModal(false)}
                  className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Key Expertise</h4>
                  <div className="flex flex-wrap gap-2">
                    {jobHighlights.map((highlight, index) => (
                      <motion.span
                        key={index}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: index * 0.1 }}
                        className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                      >
                        {highlight}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Preferred Roles</h4>
                  <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-1">
                    <li>AI Software Developer</li>
                    <li>Voice Agent Developer</li>
                    <li>Full Stack Developer</li>
                    <li>Frontend Developer</li>
                    <li>Conversational AI Engineer</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Availability</h4>
                  <p className="text-gray-600 dark:text-gray-300">Available for immediate start</p>
                  <p className="text-gray-600 dark:text-gray-300">Open to remote, hybrid, or on-site positions</p>
                </div>

                <div className="flex gap-4 mt-6">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={downloadResume}
                    className="flex-1 px-4 py-2 bg-purple-600 text-white rounded-lg font-medium hover:bg-purple-700 transition-colors duration-200"
                  >
                    Download Resume
                  </motion.button>
                  <motion.a
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#contact"
                    onClick={() => setShowJobModal(false)}
                    className="flex-1 px-4 py-2 border-2 border-purple-600 text-purple-600 rounded-lg font-medium hover:bg-purple-50 transition-colors duration-200 text-center"
                  >
                    Contact Me
                  </motion.a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const SkillCard = ({ icon, title, description, delay }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20 },
      show: {
        opacity: 1,
        y: 0,
        transition: { delay },
      },
    }}
    whileHover={{ scale: 1.05, y: -5 }}
    className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group cursor-pointer"
  >
    <div className="text-purple-600 dark:text-purple-400 mb-4 group-hover:scale-110 transition-transform">
      {icon}
    </div>
    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
      {title}
    </h3>
    <p className="text-gray-600 dark:text-gray-300">
      {description}
    </p>
  </motion.div>
);
