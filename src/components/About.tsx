// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code2, Palette, Database, Globe, Users, Trophy, CheckCircle2, Zap, Target } from 'lucide-react';

// export const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const stats = [
//     { icon: <Code2 />, value: "6+", label: "Months Experience" },
//     { icon: <Users />, label: "Happy Clients", value: "2+" },
//     { icon: <Trophy />, label: "Awards Won", value: "0" },
//     { icon: <Globe />, label: "Countries", value: "2+" },
//   ];

//   const skills = [
//     {
//       category: "Frontend",
//       items: ["React", "TypeScript", "Next.js","Javascript", "Shadcn", "Tailwind CSS", "Redux"],
//       icon: <Code2 className="w-6 h-6" />,
//     },
//     {
//       category: "UI/UX",
//       items: ["Figma",  "User Research", "Prototyping", "Wireframing"],
//       icon: <Palette className="w-6 h-6" />,
//     },
//     {
//       category: "Backend",
//       items: ["Node.js", "Python",    "MongoDB","Express Js", "REST APIs"],
//       icon: <Database className="w-6 h-6" />,
//     },
//   ];

//   const achievements = [
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Problem Solver",
//       description: "Successfully delivered 2+ complex projects on time and within budget"
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Performance Expert",
//       description: "Improved application load times by 40% through optimization In BookNow"
//     },
//     {
//       icon: <CheckCircle2 className="w-6 h-6" />,
//       title: "Quality Focused",
//       description: "Maintained 98% test coverage across all projects"
//     }
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             Passionate full-stack developer and UI/UX designer with a proven track record of 
//             creating beautiful, functional, and user-centered digital experiences.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
//             <div className="space-y-4 text-gray-600 dark:text-gray-300">
//               <p>
//                 With over 6 Months of experience in web development, I specialize in building 
//                 scalable applications that solve real business problems. My approach combines 
//                 technical expertise with creative problem-solving.
//               </p>
//               <p>
//                 I've had the privilege of working with diverse clients across multiple industries, 
//                 from startups to enterprise solutions, delivering high-quality solutions that exceed 
//                 expectations.
//               </p>
//               <p>
//                 I'm passionate about staying current with emerging technologies and best practices, 
//                 regularly contributing to open-source projects and sharing knowledge with the 
//                 developer community.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="grid grid-cols-2 gap-6"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center transform transition-all duration-200 hover:shadow-lg"
//               >
//                 <div className="text-purple-600 dark:text-purple-400 mb-2">{stat.icon}</div>
//                 <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
//                 <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mb-20"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200"
//               >
//                 <div className="text-purple-600 dark:text-purple-400 mb-4">{achievement.icon}</div>
//                 <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 * index }}
//               whileHover={{ scale: 1.05 }}
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transform transition-all duration-200 hover:shadow-lg"
              
//             >
//               <div className="text-purple-600 dark:text-purple-400 mb-4">{skill.icon}</div>
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
              // <div className="flex flex-wrap gap-2">
              //   {skill.items.map((item, i) => (
              //     <span
              //       key={i}
              //       className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
              //     >
              //       {item}
              //     </span>
              //   ))}
              // </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// "use client"
// import { motion } from "framer-motion"
// import { useInView } from "react-intersection-observer"
// import { Code2, Palette, Database, Globe, Users, Trophy, CheckCircle2, Zap, Target } from "lucide-react"

// export const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   })

//   const stats = [
//     { icon: <Code2 />, value: "6+", label: "Months Experience" },
//     { icon: <Users />, label: "Happy Clients", value: "2+" },
//     { icon: <Trophy />, label: "Awards Won", value: "0" },
//     { icon: <Globe />, label: "Countries", value: "2+" },
//   ]

//   const skills = [
//     {
//       category: "Frontend",
//       items: ["React", "TypeScript", "Next.js", "Javascript", "Shadcn", "Tailwind CSS", "Redux"],
//       icon: <Code2 className="w-6 h-6" />,
//     },
//     {
//       category: "UI/UX",
//       items: ["Figma", "User Research", "Prototyping", "Wireframing"],
//       icon: <Palette className="w-6 h-6" />,
//     },
//     {
//       category: "Backend",
//       items: ["Node.js", "Python", "MongoDB", "Express Js", "REST APIs"],
//       icon: <Database className="w-6 h-6" />,
//     },
//   ]

//   const achievements = [
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Problem Solver",
//       description: "Successfully delivered 2+ complex projects on time and within budget",
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Performance Expert",
//       description: "Improved application load times by 40% through optimization In BookNow",
//     },
//     {
//       icon: <CheckCircle2 className="w-6 h-6" />,
//       title: "Quality Focused",
//       description: "Maintained 98% test coverage across all projects",
//     },
//   ]

//   // Animation variants
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1,
//         delayChildren: 0.3,
//       },
//     },
//   }

//   const itemVariants = {
//     hidden: { y: 20, opacity: 0 },
//     visible: {
//       y: 0,
//       opacity: 1,
//       transition: { type: "spring", stiffness: 100 },
//     },
//   }

//   const floatAnimation = {
//     y: [0, -10, 0],
//     transition: {
//       duration: 3,
//       repeat: Number.POSITIVE_INFINITY,
//       repeatType: "reverse",
//       ease: "easeInOut",
//     },
//   }

//   const pulseAnimation = {
//     scale: [1, 1.05, 1],
//     transition: {
//       duration: 2,
//       repeat: Number.POSITIVE_INFINITY,
//       repeatType: "reverse",
//       ease: "easeInOut",
//     },
//   }

//   const skillItemVariants = {
//     hidden: { scale: 0.8, opacity: 0 },
//     visible: { scale: 1, opacity: 1 },
//   }

//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200 overflow-hidden">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16 relative"
//         >
//           {/* Decorative elements */}
//           <motion.div
//             className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-purple-500/10 z-0"
//             animate={{
//               scale: [1, 1.2, 1],
//               rotate: [0, 180, 360],
//             }}
//             transition={{
//               duration: 20,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "linear",
//             }}
//           />
//           <motion.div
//             className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-purple-500/10 z-0"
//             animate={{
//               scale: [1, 1.3, 1],
//               rotate: [360, 180, 0],
//             }}
//             transition={{
//               duration: 25,
//               repeat: Number.POSITIVE_INFINITY,
//               ease: "linear",
//             }}
//           />

//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
//             <motion.span
//               initial={{ opacity: 0, y: -20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 }}
//             >
//               About Me
//             </motion.span>
//           </h2>
//           <motion.p
//             className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto relative z-10"
//             initial={{ opacity: 0, y: 20 }}
//             animate={inView ? { opacity: 1, y: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             Passionate full-stack developer and UI/UX designer with a proven track record of creating beautiful,
//             functional, and user-centered digital experiences.
//           </motion.p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             className="relative"
//           >
//             <motion.div
//               className="absolute -z-10 w-40 h-40 rounded-full bg-purple-300/20 blur-3xl"
//               animate={{
//                 x: [0, 30, 0],
//                 y: [0, 20, 0],
//               }}
//               transition={{
//                 duration: 8,
//                 repeat: Number.POSITIVE_INFINITY,
//                 repeatType: "reverse",
//                 ease: "easeInOut",
//               }}
//             />

//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
//             <motion.div
//               className="space-y-4 text-gray-600 dark:text-gray-300"
//               variants={containerVariants}
//               initial="hidden"
//               animate={inView ? "visible" : "hidden"}
//             >
//               <motion.p variants={itemVariants}>
//                 With over 6 Months of experience in web development, I specialize in building scalable applications that
//                 solve real business problems. My approach combines technical expertise with creative problem-solving.
//               </motion.p>
//               <motion.p variants={itemVariants}>
//                 I've had the privilege of working with diverse clients across multiple industries, from startups to
//                 enterprise solutions, delivering high-quality solutions that exceed expectations.
//               </motion.p>
//               <motion.p variants={itemVariants}>
//                 I'm passionate about staying current with emerging technologies and best practices, regularly
//                 contributing to open-source projects and sharing knowledge with the developer community.
//               </motion.p>
//             </motion.div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="grid grid-cols-2 gap-6"
//             variants={containerVariants}
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{
//                   scale: 1.08,
//                   boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                   transition: { type: "spring", stiffness: 300 },
//                 }}
//                 className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center transform transition-all duration-200"
//               >
//                 <motion.div
//                   className="text-purple-600 dark:text-purple-400 mb-2 flex justify-center"
//                   animate={floatAnimation}
//                 >
//                   {stat.icon}
//                 </motion.div>
//                 <motion.div
//                   className="text-3xl font-bold text-gray-900 dark:text-white mb-1"
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{
//                     type: "spring",
//                     stiffness: 260,
//                     damping: 20,
//                     delay: 0.1 + index * 0.1,
//                   }}
//                 >
//                   {stat.value}
//                 </motion.div>
//                 <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mb-20"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
//           <motion.div
//             className="grid grid-cols-1 md:grid-cols-3 gap-8"
//             variants={containerVariants}
//             initial="hidden"
//             animate={inView ? "visible" : "hidden"}
//           >
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 whileHover={{
//                   scale: 1.05,
//                   boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//                   backgroundColor: "rgba(139, 92, 246, 0.05)",
//                 }}
//                 className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300"
//               >
//                 <motion.div
//                   className="text-purple-600 dark:text-purple-400 mb-4 flex justify-center"
//                   animate={pulseAnimation}
//                 >
//                   {achievement.icon}
//                 </motion.div>
//                 <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
//                 <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
//               </motion.div>
//             ))}
//           </motion.div>
//         </motion.div>

//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-8"
//           variants={containerVariants}
//           initial="hidden"
//           animate={inView ? "visible" : "hidden"}
//         >
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               variants={itemVariants}
//               whileHover={{
//                 scale: 1.05,
//                 boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
//               }}
//               className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transform transition-all duration-300"
//             >
//               <motion.div
//                 className="text-purple-600 dark:text-purple-400 mb-4"
//                 animate={{
//                   rotate: [0, 10, 0, -10, 0],
//                   transition: {
//                     duration: 5,
//                     repeat: Number.POSITIVE_INFINITY,
//                     ease: "easeInOut",
//                     delay: index * 0.5,
//                   },
//                 }}
//               >
//                 {skill.icon}
//               </motion.div>
//               <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
//               <motion.div
//                 className="flex flex-wrap gap-2"
//                 variants={containerVariants}
//                 initial="hidden"
//                 animate="visible"
//               >
//                 {skill.items.map((item, i) => (
//                   <motion.span
//                     key={i}
//                     variants={skillItemVariants}
//                     transition={{
//                       delay: 0.5 + i * 0.05,
//                       type: "spring",
//                       stiffness: 260,
//                       damping: 20,
//                     }}
//                     whileHover={{
//                       scale: 1.1,
//                       backgroundColor: "rgba(139, 92, 246, 0.3)",
//                       color: "#fff",
//                     }}
//                     className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm transition-colors duration-300"
//                   >
//                     {item}
//                   </motion.span>
//                 ))}
//               </motion.div>
//             </motion.div>
//           ))}
//         </motion.div>
//       </div>
//     </section>
//   )
// }


import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Code2, Database, Globe, Users, Briefcase, CheckCircle2, Zap, Target, Bot, Cloud } from 'lucide-react';

export const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [angle, setAngle] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAngle((prev) => (prev + 1) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  const getBorderGradient = (startColor = "#8B5CF6", endColor = "#EC4899") => {
    return `linear-gradient(${angle}deg, ${startColor}, ${endColor}, ${startColor})`;
  };

  const stats = [
    { icon: <Briefcase />, value: "1+", label: "Years Experience" },
    { icon: <Users />, label: "Happy Clients", value: "3+" },
    { icon: <Globe />, label: "Projects Shipped", value: "10+" },
    { icon: <Code2 />, label: "Technologies", value: "20+" },
  ];

  const skills = [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "TypeScript", "JavaScript", "Shadcn/ui", "Tailwind CSS", "Redux", "Framer Motion"],
      icon: <Code2 className="w-6 h-6" />,
    },
    {
      category: "Backend & Cloud",
      items: ["Node.js", "Express.js", "MongoDB", "Python", "Firebase", "AWS Lambda", "AWS EC2", "AWS S3", "AWS Cognito", "Docker"],
      icon: <Cloud className="w-6 h-6" />,
    },
    {
      category: "AI & Voice Agents",
      items: ["OpenAI", "Gemini", "RAG", "ElevenLabs", "Retell AI", "Vapi.ai", "Voiceflow", "LLM APIs", "AWS Comprehend"],
      icon: <Bot className="w-6 h-6" />,
    },
    {
      category: "Database & Tools",
      items: ["MongoDB", "Firebase", "Git", "GitHub", "Postman", "Jira", "VS Code", "Bolt.new", "V0"],
      icon: <Database className="w-6 h-6" />,
    },
  ];

  const achievements = [
    {
      icon: <Target className="w-6 h-6" />,
      title: "Voice AI Pioneer",
      description: "Achieved 20% improvement in voice accuracy via ElevenLabs, Retell & Vapi integration at Mindcraft Labs"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Performance Expert",
      description: "Reduced page load time by 40% at BookNow through React optimization and code splitting"
    },
    {
      icon: <CheckCircle2 className="w-6 h-6" />,
      title: "Content Creator",
      description: "Founded Rkcoder.tech — grew to 10k monthly views within 5 months sharing dev tutorials"
    }
  ];

  // Card animation variants
  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.h2 
            initial={{ opacity: 0, y: -20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 dark:text-white mb-4"
          >
            About Me
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.4 }}
            className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto"
          >
            Software Developer specializing in full-stack web development and AI-powered voice agents.
            Building scalable applications and LLM-driven conversational systems at Mindcraft Labs.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative p-1 rounded-xl"
            style={{
              background: getBorderGradient(),
              backgroundSize: "400% 400%",
            }}
          >
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
              <div className="space-y-4 text-gray-600 dark:text-gray-300">
                <p>
                  Software Developer with 1+ year of experience building full-stack web applications
                  and AI-powered voice agents. Currently at Mindcraft Labs, I pioneer voice AI integrations
                  using ElevenLabs, Retell AI, and Vapi.ai — achieving a 20% improvement in voice accuracy.
                </p>
                <p>
                  I've worked across healthcare (HMS systems), e-commerce, and AI SaaS products — delivering
                  scalable solutions using React.js, Next.js, Node.js, MongoDB, and AWS cloud services.
                </p>
                <p>
                  I also founded Rkcoder.tech, a coding platform that grew to 10k monthly views within
                  5 months, and I'm passionate about sharing knowledge with the developer community.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: 0.1 * index }}
                // className="relative rounded-xl overflow-hidden"
                // style={{
                //   border: '4px solid',
                //   borderImage: 'linear-gradient(45deg, #f3ec78, #af4261) 1'
                // }}
                // className=" rounded-xl transform transition-all duration-200 hover:shadow-lg"
                // style={{
                //   border: '4px solid',
                //   borderImage: 'linear-gradient(45deg, #f3ec78, #af4261) 1',
                //   borderRadius: '0.75rem'
                // }}
                className="relative p-0.5 rounded-xl overflow-hidden"

                style={{
                  background: getBorderGradient("#3B82F6", "#10B981"),
                  backgroundSize: "400% 400%",
                }}
              >
                
                <div className="bg-purple-50 dark:bg-purple-900 p-6 rounded-xl text-center h-full">
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={inView ? { scale: 1, opacity: 1 } : {}}
                    transition={{ delay: 0.2 + 0.1 * index }}
                    className="text-purple-600 dark:text-purple-400 mb-2"
                  >
                    {stat.icon}
                  </motion.div>
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                whileHover="hover"
                transition={{ delay: 0.2 * index }}
                className="relative p-0.5 rounded-xl"
                style={{
                  background: getBorderGradient("#EC4899", "#8B5CF6"),
                  backgroundSize: "400% 400%",
                }}
              >
                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl h-full">
                  <motion.div
                    animate={{ rotate: [0, 10, 0, -10, 0] }}
                    transition={{ duration: 2, delay: 1 + index * 0.3, repeat: 0 }}
                    className="text-purple-600 dark:text-purple-400 mb-4"
                  >
                    {achievement.icon}
                  </motion.div>
                  <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
                  <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ scale: 1.05 }}
              className="relative p-0.5 rounded-xl overflow-hidden"
              style={{
                background: getBorderGradient("#3B82F6", "#10B981"),
                backgroundSize: "400% 400%",
              }}
            >
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl h-full">
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    color: ["#8B5CF6", "#EC4899", "#8B5CF6"] 
                  }}
                  transition={{ duration: 3, delay: index * 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="text-purple-600 dark:text-purple-400 mb-4"
                >
                  {skill.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
                {/* <div className="flex flex-wrap gap-2">
                  {skill.items.map((item, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={inView ? { opacity: 1, scale: 1 } : {}}
                      transition={{ delay: 0.5 + (0.05 * i) + (0.2 * index) }}
                      whileHover={{ scale: 1.1, backgroundColor: "#a78bfa" }}
                      className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div> */}
                              <div className="flex flex-wrap gap-2">
                {skill.items.map((item, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};


// import React from 'react';
// import { motion } from 'framer-motion';
// import { useInView } from 'react-intersection-observer';
// import { Code2, Palette, Database, Globe, Users, Trophy, CheckCircle2, Zap, Target } from 'lucide-react';

// export const About = () => {
//   const [ref, inView] = useInView({
//     triggerOnce: true,
//     threshold: 0.1,
//   });

//   const stats = [
//     { icon: <Code2 />, value: "6+", label: "Months Experience" },
//     { icon: <Users />, label: "Happy Clients", value: "2+" },
//     { icon: <Trophy />, label: "Awards Won", value: "0" },
//     { icon: <Globe />, label: "Countries", value: "2+" },
//   ];

//   const skills = [
//     {
//       category: "Frontend",
//       items: ["React", "TypeScript", "Next.js", "Javascript", "Shadcn", "Tailwind CSS", "Redux"],
//       icon: <Code2 className="w-6 h-6" />,
//     },
//     {
//       category: "UI/UX",
//       items: ["Figma", "User Research", "Prototyping", "Wireframing"],
//       icon: <Palette className="w-6 h-6" />,
//     },
//     {
//       category: "Backend",
//       items: ["Node.js", "Python", "MongoDB", "Express Js", "REST APIs"],
//       icon: <Database className="w-6 h-6" />,
//     },
//   ];

//   const achievements = [
//     {
//       icon: <Target className="w-6 h-6" />,
//       title: "Problem Solver",
//       description: "Successfully delivered 2+ complex projects on time and within budget",
//     },
//     {
//       icon: <Zap className="w-6 h-6" />,
//       title: "Performance Expert",
//       description: "Improved application load times by 40% through optimization in BookNow",
//     },
//     {
//       icon: <CheckCircle2 className="w-6 h-6" />,
//       title: "Quality Focused",
//       description: "Maintained 98% test coverage across all projects",
//     },
//   ];

//   return (
//     <section id="about" className="py-20 bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <motion.div
//           ref={ref}
//           initial={{ opacity: 0, y: 20 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6 }}
//           className="text-center mb-16"
//         >
//           <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">About Me</h2>
//           <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
//             Passionate full-stack developer and UI/UX designer with a proven track record of 
//             creating beautiful, functional, and user-centered digital experiences.
//           </p>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Professional Journey</h3>
//             <div className="space-y-4 text-gray-600 dark:text-gray-300">
//               <p>
//                 With over 6 Months of experience in web development, I specialize in building 
//                 scalable applications that solve real business problems. My approach combines 
//                 technical expertise with creative problem-solving.
//               </p>
//               <p>
//                 I've had the privilege of working with diverse clients across multiple industries, 
//                 from startups to enterprise solutions, delivering high-quality solutions that exceed 
//                 expectations.
//               </p>
//               <p>
//                 I'm passionate about staying current with emerging technologies and best practices, 
//                 regularly contributing to open-source projects and sharing knowledge with the 
//                 developer community.
//               </p>
//             </div>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, x: 50 }}
//             animate={inView ? { opacity: 1, x: 0 } : {}}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="grid grid-cols-2 gap-6"
//           >
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="gradient-border p-1 rounded-xl" // gradient border wrapper
//               >
//                 <div className="bg-purple-50 dark:bg-purple-900/20 p-6 rounded-xl text-center transform transition-all duration-200 hover:shadow-lg">
//                   <div className="text-purple-600 dark:text-purple-400 mb-2">{stat.icon}</div>
//                   <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
//                   <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
//                 </div>
//               </motion.div>
//             ))}
//           </motion.div>
//         </div>

//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={inView ? { opacity: 1, y: 0 } : {}}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           className="mb-20"
//         >
//           <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Key Achievements</h3>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//             {achievements.map((achievement, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{ scale: 1.05 }}
//                 className="gradient-border p-1 rounded-xl" // gradient border wrapper
//               >
//                 <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-200">
//                   <div className="text-purple-600 dark:text-purple-400 mb-4">{achievement.icon}</div>
//                   <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h4>
//                   <p className="text-gray-600 dark:text-gray-300">{achievement.description}</p>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           {skills.map((skill, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={inView ? { opacity: 1, y: 0 } : {}}
//               transition={{ duration: 0.6, delay: 0.2 * index }}
//               whileHover={{ scale: 1.05 }}
//               className="gradient-border p-1 rounded-xl" // gradient border wrapper
//             >
//               <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl transform transition-all duration-200 hover:shadow-lg">
//                 <div className="text-purple-600 dark:text-purple-400 mb-4">{skill.icon}</div>
//                 <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{skill.category}</h3>
//                 <div className="flex flex-wrap gap-2">
//                   {skill.items.map((item, i) => (
//                     <span
//                       key={i}
//                       className="px-3 py-1 bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 rounded-full text-sm"
//                     >
//                       {item}
//                     </span>
//                   ))}
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Custom CSS for animated gradient border */}
//       <style >{`
//         .gradient-border {
//           position: relative;
//           border-radius: 12px;
//           background: linear-gradient(270deg, #a855f7, #ec4899, #9f46e5);
//           background-size: 600% 600%;
//           animation: gradientAnimation 8s ease infinite;
//         }
//         @keyframes gradientAnimation {
          
         
           
//         }
//       `}</style>
//     </section>
//   );
// };
