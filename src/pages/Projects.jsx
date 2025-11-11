'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaEye } from 'react-icons/fa'

const projects = [
  {
    title: 'Vibe Pass - Movie Booking Platform',
    description:
      'A MERN-based movie and event booking platform offering real-time seat selection, secure payments, and an enhanced user experience. Features include role-based Admin Dashboard to manage users, bookings, payments, and refunds, real-time seat booking system with live availability synchronization, integrated Stripe & SSLCommerz for secure multi-gateway online payments, AI assistant and real-time chat support for user-to-admin communication.',
    tech: [
      'React.js',
      'Next.js',
      'TailwindCSS',
      'Node.js',
      'Express.js',
      'MongoDB',
      'Stripe',
      'SSLCommerz',
      'JWT',
      'TanStack Query',
      'Socket.io',
      'Node-Cron',
    ],
    github: 'https://github.com/niloyahmadramjan/Vibe-Pass',
    githubServer: 'https://github.com/niloyahmadramjan/vibe-pass-server',
    live: 'https://vibe-pass.vercel.app/',
    image: 'https://i.ibb.co/WNvYvptw/image.png',
    features: [
      'Role-based Admin Dashboard to manage users, bookings, payments, and refunds',
      'Real-time seat booking system with live availability synchronization',
      'Integrated Stripe & SSLCommerz for secure multi-gateway online payments',
      'AI assistant and real-time chat support for user-to-admin communication',
    ],
    type: 'Team Project',
  },
  {
    title: 'EduEcho - Knowledge Sharing Platform',
    description:
      'MERN-stack platform for students to share and explore articles, with Firebase authentication, categories, likes, and comments.',
    tech: [
      'React.js',
      'TailwindCSS',
      'DaisyUI',
      'Firebase Auth',
      'Axios',
      'MongoDB',
      'Express.js',
      'Node.js',
    ],
    github:
      'https://github.com/niloyahmadramjan/b11a11-client-side-niloyahmadramjan-1',
    live: 'https://eduecho-bd.web.app',
    image: 'https://i.ibb.co/83Ktkr3/image.png',
  },
  {
    title: 'SurplusShare - Local Food Waste Reduction',
    description:
      'A role-based MERN platform where restaurants can donate surplus food, charities can request, and users can browse. Includes Stripe payments and analytics.',
    tech: [
      'React.js',
      'TailwindCSS',
      'DaisyUI',
      'Firebase',
      'MongoDB',
      'Express.js',
      'Node.js',
      'TanStack Query',
      'Stripe',
    ],
    github: 'https://github.com/yourusername/surplusshare-client',
    live: 'https://surplusshare-bd.web.app',
    image: 'https://i.ibb.co/RGHbcTrq/image.png',
  },
  {
    title: 'HobbyHub – Local Hobby Group Organizer',
    description:
      'Connect through shared hobbies by joining or creating groups. Features Firebase auth, dark/light mode, protected routes, and responsive design.',
    tech: [
      'React.js',
      'TailwindCSS',
      'DaisyUI',
      'Firebase',
      'MongoDB',
      'Express.js',
      'Node.js',
    ],
    github: 'https://github.com/yourusername/hobbyhub-client',
    live: 'https://hobbyhub-a11.web.app',
    image: 'https://i.ibb.co/jZsHYVjR/image.png',
  },
  {
    title: 'JobTrack - Job Listing & Tracking Platform',
    description:
      'Responsive job listing app with Firebase auth, private routes, search, profile management, and Framer Motion animations.',
    tech: [
      'React.js',
      'TailwindCSS',
      'Firebase',
      'Framer Motion',
      'MongoDB',
      'Express.js',
      'Node.js',
    ],
    github: 'https://github.com/yourusername/jobtrack-client',
    live: 'https://kajlagbebd-24a9c.firebaseapp.com/',
    image: 'https://i.ibb.co/Lhnj0k5h/image.png',
  },
]

// Skeleton Loader for Project Card
const ProjectSkeleton = () => (
  <div className="rounded-lg border border-white/20 bg-white/5 overflow-hidden animate-pulse">
    <div className="w-full h-48 bg-gray-700/40"></div>
    <div className="p-4 space-y-3">
      <div className="h-6 bg-gray-700/40 rounded w-3/4"></div>
      <div className="h-4 bg-gray-700/40 rounded w-full"></div>
      <div className="h-4 bg-gray-700/40 rounded w-5/6"></div>
      <div className="flex flex-wrap gap-2">
        <div className="h-6 w-16 bg-gray-700/40 rounded"></div>
        <div className="h-6 w-20 bg-gray-700/40 rounded"></div>
        <div className="h-6 w-24 bg-gray-700/40 rounded"></div>
      </div>
      <div className="flex gap-4 pt-2">
        <div className="h-5 w-16 bg-gray-700/40 rounded"></div>
        <div className="h-5 w-16 bg-gray-700/40 rounded"></div>
      </div>
    </div>
  </div>
)

// Lazy Image Component
const LazyImage = ({ src, alt, className }) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = React.useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div ref={imgRef} className={className}>
      {!isLoaded && (
        <div className="w-full h-full bg-gray-700/40 animate-pulse"></div>
      )}
      {isInView && (
        <img
          src={src}
          alt={alt}
          className={`w-full h-full object-cover transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
      )}
    </div>
  )
}

export default function Projects() {
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

  return (
    <div className="px-8 pb-8" data-aos="fade-up" data-aos-delay="100">
      <motion.h3
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-2xl font-semibold text-white mb-6"
      >
        Projects
      </motion.h3>

      {isLoading ? (
        <div className="grid md:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <ProjectSkeleton key={item} />
          ))}
        </div>
      ) : (
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-6"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="rounded-lg border border-white/20 bg-white/5 overflow-hidden"
            >
              {/* Image Section */}
              <div className="relative group overflow-hidden">
                <LazyImage
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48"
                />
                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white text-3xl p-3 rounded-full bg-[#4BB8FF] hover:bg-[#3aa0e0] transition"
                  >
                    <FaEye />
                  </motion.a>
                </motion.div>
              </div>

              {/* Text Info Section */}
              <div className="p-4">
                <h4 className="text-lg font-semibold text-[#4BB8FF] mb-2">
                  {project.title}
                </h4>
                <p className="text-white/80 mb-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tech.map((t, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.05 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-xs px-2 py-1 bg-white/10 rounded text-white/70 border border-white/20"
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>

                {/* GitHub + Live Links */}
                <div className="flex gap-4">
                  {project.githubServer ? (
                    <>
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, color: '#4BB8FF' }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-[#4BB8FF] flex items-center gap-1 transition-colors"
                      >
                        <FaGithub /> Client
                      </motion.a>
                      <motion.a
                        href={project.githubServer}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05, color: '#4BB8FF' }}
                        whileTap={{ scale: 0.95 }}
                        className="text-white hover:text-[#4BB8FF] flex items-center gap-1 transition-colors"
                      >
                        <FaGithub /> Server
                      </motion.a>
                    </>
                  ) : (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, color: '#4BB8FF' }}
                      whileTap={{ scale: 0.95 }}
                      className="text-white hover:text-[#4BB8FF] flex items-center gap-1 transition-colors"
                    >
                      <FaGithub /> Code
                    </motion.a>
                  )}
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.05, color: '#4BB8FF' }}
                    whileTap={{ scale: 0.95 }}
                    className="text-white hover:text-[#4BB8FF] flex items-center gap-1 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  )
}