import React, { useState, useRef, useEffect } from 'react'
import {
  FaLinkedin,
  FaGithub,
  FaReact,
  FaChevronDown,
  FaChevronUp,
} from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { SiPandora } from 'react-icons/si'

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const contentRef = useRef(null)
  const [maxHeight, setMaxHeight] = useState('0px')
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1024
  )

  useEffect(() => {
    if (contentRef.current) {
      if (windowWidth >= 1024) {
        setMaxHeight('none')
        setIsOpen(false)
      } else {
        setMaxHeight(isOpen ? `${contentRef.current.scrollHeight}px` : '0px')
      }
    }
  }, [isOpen, windowWidth])

  useEffect(() => {
    function handleResize() {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <div
      className="w-full lg:fixed lg:w-96 md:p-6 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-xl relative"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
      }}
      data-aos="fade-down"
    >
      {/* Profile Image + Name */}
      <div className="flex lg:block justify-around items-center">
        <div>
          <img
            src="https://i.ibb.co/Mx1TGHq6/backbgprofile-1-optimized-500.png"
            alt="Niloy Ahmad Ramjan"
            className="w-24 h-24 sm:w-28 sm:h-28 lg:w-40 lg:h-40 mx-auto rounded-full object-cover mb-4 border-4 border-[#4BB8FF] shadow-lg"
          />
        </div>
        <div className="text-center lg:mt-2">
          <h2 className="text-black text-lg sm:text-xl lg:text-2xl font-bold">
            Niloy Ahmad Ramjan
          </h2>
          <p className="text-[#2C2C2C] font-semibold mt-1 text-sm sm:text-base">
            Full Stack MERN Developer
          </p>
        </div>
      </div>

      {/* Toggle button on mobile */}
      {windowWidth < 1024 && (
        <div className="flex justify-center mt-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-white px-5 py-3 rounded-full bg-black/40 hover:bg-black/50 transition"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <>
                <FaChevronUp /> Hide Info
              </>
            ) : (
              <>
                <FaChevronDown /> Show Info
              </>
            )}
          </button>
        </div>
      )}

      {/* Content */}
      <div
        ref={contentRef}
        className="mt-6 space-y-6 overflow-hidden lg:block"
        style={{
          maxHeight: maxHeight,
          opacity: windowWidth >= 1024 || isOpen ? 1 : 0,
          transition: 'max-height 0.4s ease, opacity 0.4s ease',
        }}
      >
        {/* Roles */}
        <div className="flex flex-col gap-3 border-b border-gray-400 pb-6">
          <span className="flex items-center gap-2 bg-[#2C2C2C]/30 text-white px-4 py-1 rounded-lg text-sm">
            <FaReact className="text-[#61DBFB]" />
            Tech-Forward & Creative
          </span>
          <span className="flex items-center gap-2 bg-[#2C2C2C]/30 text-white px-4 py-1 rounded-lg text-sm">
            <SiPandora className="w-2 h-2 rounded-full bg-[#9C6BFF]" />
            Client Value Oriented
          </span>
          <span className="flex items-center gap-2 bg-[#2C2C2C]/30 text-white px-4 py-1 rounded-lg text-sm">
            <span className="w-2 h-2 rounded-full bg-[#FFB74B]" />
            Frontend Developer
          </span>
        </div>

        {/* Contact */}
        <div className="space-y-6 border-b border-gray-500 pb-8 pt-2">
          <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg">
            <FiMail className="text-[#4BB8FF] text-3xl" />
            <div>
              <h1 className="text-[#2C2C2C] font-semibold">Email</h1>
              <a
                href="mailto:niloyahmadramjan@gmail.com"
                className="text-[#1F2937] hover:underline break-all"
              >
                niloyahmadramjan@gmail.com
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg">
            <FiPhone className="text-[#25D366] text-3xl" />
            <div>
              <h1 className="text-[#2C2C2C] font-semibold">WhatsApp</h1>
              <a
                href="https://wa.me/601135451398"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#1F2937] hover:underline"
              >
                +601135451398
              </a>
            </div>
          </div>
          <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg">
            <FiMapPin className="text-[#FF6B6B] text-3xl" />
            <div>
              <h1 className="text-[#2C2C2C] font-semibold">Address</h1>
              <p className="text-[#1F2937]">Dhaka, Bangladesh</p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a
            href="https://www.linkedin.com/in/niloyahmedramjan/"
            className="text-[#4BB8FF] hover:text-[#1E40AF] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={36} />
          </a>
          <a
            href="https://github.com/niloyahmadramjan"
            className="text-[#4BB8FF] hover:text-[#1E40AF] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={36} />
          </a>
        </div>
      </div>
    </div>
  )
}
