'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaLightbulb,
  FaComments,
  FaUsers,
  FaBrain,
  FaHandshake,
  FaTasks,
  FaClock,
  FaLaptopCode,
  FaDatabase,
  FaNodeJs,
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaFigma,
} from 'react-icons/fa'
import {
  SiMongodb,
  SiNextdotjs,
  SiTailwindcss,
  SiFirebase,
  SiJavascript,
  SiExpress,
  SiAxios,
} from 'react-icons/si'
import { TbBrandRedux } from 'react-icons/tb'

// Skeleton Loader Components
const EducationSkeleton = () => (
  <div className="p-4 rounded-lg border border-white/20 bg-white/5 animate-pulse">
    <div className="h-6 bg-gray-700/40 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-700/40 rounded w-1/2 mb-2"></div>
    <div className="h-4 bg-gray-700/40 rounded w-full"></div>
  </div>
)

const ExperienceSkeleton = () => (
  <div className="p-4 rounded-lg border border-white/20 bg-white/5 animate-pulse">
    <div className="h-6 bg-gray-700/40 rounded w-3/4 mb-2"></div>
    <div className="h-4 bg-gray-700/40 rounded w-1/2 mb-3"></div>
    <div className="space-y-2">
      <div className="h-4 bg-gray-700/40 rounded w-full"></div>
      <div className="h-4 bg-gray-700/40 rounded w-5/6"></div>
      <div className="h-4 bg-gray-700/40 rounded w-4/6"></div>
    </div>
  </div>
)

const SkillCardSkeleton = () => (
  <div className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3 animate-pulse">
    <div className="w-5 h-5 bg-gray-700/40 rounded"></div>
    <div className="h-4 bg-gray-700/40 rounded w-24"></div>
  </div>
)

const SkillsSectionSkeleton = () => (
  <div className="space-y-10">
    {[1, 2, 3, 4, 5].map((section) => (
      <div key={section}>
        <div className="h-6 bg-gray-700/40 rounded w-32 mb-4"></div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[1, 2, 3, 4].map((item) => (
            <SkillCardSkeleton key={item} />
          ))}
        </div>
      </div>
    ))}
  </div>
)

const Resume = () => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  const skillCardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.4,
      },
    },
  }

  const languages = [{ name: 'JavaScript', icon: <SiJavascript /> }]

  const frontend = [
    { name: 'React', icon: <FaReact /> },
    { name: 'Next.js', icon: <SiNextdotjs /> },
    { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    { name: 'REST APIs', icon: <SiAxios /> },
    { name: 'HTML5', icon: <FaHtml5 /> },
    { name: 'CSS3', icon: <FaCss3Alt /> },
  ]

  const backend = [
    { name: 'Node.js', icon: <FaNodeJs /> },
    { name: 'Express', icon: <SiExpress /> },
    { name: 'MongoDB', icon: <SiMongodb /> },
    { name: 'JWT', icon: <FaDatabase /> },
  ]

  const tools = [
    { name: 'Git', icon: <FaGitAlt /> },
    { name: 'Firebase', icon: <SiFirebase /> },
    { name: 'TanStack Query', icon: <TbBrandRedux /> },
    { name: 'Axios', icon: <SiAxios /> },
    { name: 'Figma', icon: <FaFigma /> },
  ]

  const softSkills = [
    { name: 'Problem Solving', icon: <FaLightbulb /> },
    { name: 'Communication', icon: <FaComments /> },
    { name: 'Teamwork', icon: <FaUsers /> },
    { name: 'Critical Thinking', icon: <FaBrain /> },
    { name: 'Collaboration', icon: <FaHandshake /> },
    { name: 'Project Management', icon: <FaTasks /> },
    { name: 'Time Management', icon: <FaClock /> },
    { name: 'Adaptability', icon: <FaLaptopCode /> },
  ]

  return (
    <section className="px-4 md:px-12 lg:px-20 pb-8" id="resume">
      <div
        className="max-w-6xl mx-auto rounded-xl pb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{
            background: 'linear-gradient(90deg, #FF6B6B, #FF4E88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Skills
        </motion.h2>

        {isLoading ? (
          <>
            {/* Education Skeleton */}
            <div className="mb-12">
              <div className="h-6 bg-gray-700/40 rounded w-32 mb-6"></div>
              <EducationSkeleton />
            </div>

            {/* Experience Skeleton */}
            <div className="mb-12">
              <div className="h-6 bg-gray-700/40 rounded w-32 mb-6"></div>
              <ExperienceSkeleton />
            </div>

            {/* Skills Skeleton */}
            <div>
              <div className="h-6 bg-gray-700/40 rounded w-24 mb-6"></div>
              <SkillsSectionSkeleton />
            </div>
          </>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* ===== Education ===== */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Education
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-lg border border-white/20 bg-white/5"
                >
                  <h4 className="text-lg font-semibold text-[#4BB8FF]">
                    Islamia Degree College, Chittagong
                  </h4>
                  <span className="text-white/70 text-sm">
                    Jan 2020 – Dec 2022
                  </span>
                  <p className="text-white/80">
                    Higher Secondary Certificate (HSC)
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* ===== Experience ===== */}
            <motion.div
              variants={itemVariants}
              className="mb-12"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">
                Experience
              </h3>
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 rounded-lg border border-white/20 bg-white/5"
                >
                  <h4 className="text-lg font-semibold text-[#FFB74B]">
                    MERN Stack Developer (Trainee) – Programming Hero
                  </h4>
                  <span className="text-white/70 text-sm">
                    Dec 2024 – Aug 2025
                  </span>
                  <p className="text-white/80">
                    Completed an intensive 6-month MERN Stack development
                    program covering React.js, Node.js, Express.js, MongoDB, and
                    REST APIs. Built multiple full-stack projects, implemented
                    JWT authentication, and deployed applications to live
                    servers. Collaborated in team projects using Git and GitHub.
                  </p>
                </motion.div>
              </div>
            </motion.div>

            {/* ===== Skills Section ===== */}
            <motion.div
              variants={itemVariants}
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
              <div className="space-y-10">
                {/* ===== Languages ===== */}
                <motion.div
                  variants={itemVariants}
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Languages
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {languages.map((lang, idx) => (
                      <motion.div
                        key={idx}
                        variants={skillCardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3 cursor-pointer"
                      >
                        <span className="text-[#FF4E88] text-xl">
                          {lang.icon}
                        </span>
                        <p className="text-white/80 text-sm">{lang.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* ===== Frontend ===== */}
                <motion.div
                  variants={itemVariants}
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Frontend
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {frontend.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={skillCardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3 cursor-pointer"
                      >
                        <span className="text-[#9C6BFF] text-xl">
                          {item.icon}
                        </span>
                        <p className="text-white/80 text-sm">{item.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* ===== Backend ===== */}
                <motion.div
                  variants={itemVariants}
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Backend
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {backend.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={skillCardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3 cursor-pointer"
                      >
                        <span className="text-[#FF6B6B] text-xl">
                          {item.icon}
                        </span>
                        <p className="text-white/80 text-sm">{item.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* ===== Tools ===== */}
                <motion.div
                  variants={itemVariants}
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Tools
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {tools.map((item, idx) => (
                      <motion.div
                        key={idx}
                        variants={skillCardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3 cursor-pointer"
                      >
                        <span className="text-[#4BB8FF] text-xl">
                          {item.icon}
                        </span>
                        <p className="text-white/80 text-sm">{item.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>

                {/* ===== Soft Skills ===== */}
                <motion.div
                  variants={itemVariants}
                  data-aos="fade-up"
                  data-aos-delay="500"
                >
                  <h3 className="text-xl font-semibold text-white mb-4">
                    Soft Skills
                  </h3>
                  <motion.div
                    variants={containerVariants}
                    className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
                  >
                    {softSkills.map((skill, idx) => (
                      <motion.div
                        key={idx}
                        variants={skillCardVariants}
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ duration: 0.2 }}
                        className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3 cursor-pointer"
                      >
                        <span className="text-[#FFB74B] text-xl">
                          {skill.icon}
                        </span>
                        <p className="text-white/80 text-sm">{skill.name}</p>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default Resume