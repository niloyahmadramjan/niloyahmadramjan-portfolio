'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaProjectDiagram,
} from 'react-icons/fa'

// Skeleton Loader Components
const TextSkeleton = ({ width = 'w-full' }) => (
  <div className={`h-4 bg-gray-700/40 rounded ${width} animate-pulse`}></div>
)

const CardSkeleton = () => (
  <div
    className="p-4 sm:p-6 rounded-xl shadow-lg animate-pulse"
    style={{
      background: 'rgba(255, 255, 255, 0.15)',
      border: '1px solid rgba(255, 255, 255, 0.25)',
      backdropFilter: 'blur(10px)',
    }}
  >
    <div className="w-10 h-10 bg-gray-700/40 rounded-full mb-4"></div>
    <div className="h-5 bg-gray-700/40 rounded w-3/4 mb-2"></div>
    <div className="space-y-2">
      <div className="h-3 bg-gray-700/40 rounded w-full"></div>
      <div className="h-3 bg-gray-700/40 rounded w-5/6"></div>
    </div>
  </div>
)

const AboutMe = () => {
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
        staggerChildren: 0.15,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  const services = [
    {
      icon: (
        <FaCode className="text-[#FFB74B] text-3xl sm:text-4xl mb-4" />
      ),
      title: 'Frontend Development',
      desc: 'Crafting dynamic, interactive, and user-friendly interfaces using React.js and modern UI libraries.',
    },
    {
      icon: (
        <FaServer className="text-[#FF6B6B] text-3xl sm:text-4xl mb-4" />
      ),
      title: 'Backend Development',
      desc: 'Building robust, scalable backend systems with Express.js and Node.js, managing databases efficiently.',
    },
    {
      icon: (
        <FaLaptopCode className="text-[#4BB8FF] text-3xl sm:text-4xl mb-4" />
      ),
      title: 'Full Stack Development',
      desc: 'Building end-to-end web applications with expertise in both frontend and backend.',
    },
    {
      icon: (
        <FaDatabase className="text-[#9C6BFF] text-3xl sm:text-4xl mb-4" />
      ),
      title: 'Database Management',
      desc: 'Managing and optimizing databases using MongoDB, ensuring data security and performance.',
    },
    {
      icon: (
        <FaProjectDiagram className="text-[#FF4E88] text-3xl sm:text-4xl mb-4" />
      ),
      title: 'API Integrations',
      desc: 'Connecting applications seamlessly with third-party APIs for enhanced features and automation.',
    },
    {
      icon: (
        <FaCode className="text-[#5BBDF2] text-3xl sm:text-4xl mb-4" />
      ),
      title: 'Real-time Applications',
      desc: 'Implementing live features like chat, notifications, and collaborative tools using WebSockets and real-time APIs.',
    },
  ]

  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-8" id="about">
      <div
        className="max-w-6xl mx-auto rounded-t-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white"
          style={{
            background: 'linear-gradient(90deg, #FF6B6B, #FF4E88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </motion.h2>

        {isLoading ? (
          <>
            {/* Text Skeleton */}
            <div className="space-y-4 mb-10">
              <TextSkeleton width="w-full" />
              <TextSkeleton width="w-5/6" />
              <TextSkeleton width="w-full" />
              <TextSkeleton width="w-4/6" />
              <TextSkeleton width="w-full" />
              <TextSkeleton width="w-3/4" />
            </div>

            {/* Title Skeleton */}
            <div className="h-6 bg-gray-700/40 rounded w-48 mb-8 animate-pulse"></div>

            {/* Cards Skeleton */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <CardSkeleton key={item} />
              ))}
            </div>
          </>
        ) : (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Intro */}
            <motion.p
              variants={itemVariants}
              className="text-white/90 text-base sm:text-lg leading-relaxed mb-6"
            >
              I am{' '}
              <span className="font-semibold text-white">
               Md Ramjan Ali
              </span>
              , a passionate{' '}
              <span className="text-[#4BB8FF] font-semibold">
                MERN Stack Developer
              </span>{' '}
              crafting fast, responsive, and user-friendly web applications.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white/80 text-sm sm:text-base mb-4"
            >
              Skilled in <strong>React</strong>, <strong>Tailwind CSS</strong>,{' '}
              <strong>Node.js</strong>, <strong>Express.js</strong>,{' '}
              <strong>MongoDB</strong>, and <strong>API integrations</strong>. I'm
              currently exploring{' '}
              <span className="text-[#FFB74B] font-semibold">
                backend optimization
              </span>{' '}
              and{' '}
              <span className="text-[#9C6BFF] font-semibold">
                real-time application development
              </span>
              .
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-white/70 text-sm sm:text-base mb-10"
            >
              I'm eager to collaborate on real-world projects, learn from
              experienced developers, and contribute to open-source communities.
            </motion.p>

            {/* What I'm Doing */}
            <motion.h3
              variants={itemVariants}
              className="text-xl sm:text-2xl font-bold mb-8 text-white"
            >
              What I'm Doing
            </motion.h3>

            <motion.div
              variants={containerVariants}
              className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            >
              {services.map((item, idx) => (
                <motion.div
                  key={idx}
                  variants={cardVariants}
                  whileHover={{
                    scale: 1.05,
                    y: -8,
                    transition: { duration: 0.3 },
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="p-4 sm:p-6 rounded-xl shadow-lg cursor-pointer"
                  style={{
                    background: 'rgba(255, 255, 255, 0.15)',
                    border: '1px solid rgba(255, 255, 255, 0.25)',
                    backdropFilter: 'blur(10px)',
                  }}
                  data-aos="fade-up"
                  data-aos-delay={idx * 100}
                >
                  <motion.div
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>
                  <h4 className="font-semibold text-base sm:text-lg text-white mb-2">
                    {item.title}
                  </h4>
                  <p className="text-white/80 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  )
}

export default AboutMe