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
      className="w-full h-fit lg:fixed lg:w-96 md:p-6 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-xl relative"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
      }}
      data-aos="fade-down"
      data-aos-duration="1200"
      data-aos-easing="ease-out-cubic"
    >
      {/* Profile Image + Name */}
      <div
        className="flex lg:block justify-around items-center"
        data-aos="fade-right"
        data-aos-duration="1100"
        data-aos-easing="ease-out-cubic"
      >
        <div
          data-aos="zoom-in-down"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-easing="ease-out-cubic"
        >
          <img
            src="https://i.ibb.co/Mx1TGHq6/backbgprofile-1-optimized-500.png"
            alt="Niloy Ahmad Ramjan"
            className="w-28 h-28 md:w-42 md:h-42 mx-auto rounded-full object-cover mb-4 border-4 border-[#4BB8FF] shadow-lg"
          />
        </div>

        {/* Name */}
        <div
          data-aos="fade-right"
          data-aos-duration="1100"
          data-aos-delay="250"
          data-aos-easing="ease-out-cubic"
        >
          <h2 className="text-black text-xl md:text-2xl font-bold md:text-center">
            Niloy Ahmad Ramjan
          </h2>
          <p className="text-[#2C2C2C] font-bold mt-1 md:text-center">
            Full Stack MERN Developer
          </p>
        </div>
      </div>

      {/* Toggle button only on mobile */}
      {windowWidth < 1024 && (
        <div
          className="flex justify-center mt-6 absolute -top-4 right-5 cursor-pointer"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="350"
        >
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center gap-2 text-[#FFFFFF] p-4 backdrop-blur-2xl rounded-full font-semibold text-lg focus:outline-none"
            aria-expanded={isOpen}
            aria-controls="extra-info"
          >
            {isOpen ? (
              <FaChevronUp className="cursor-pointer" />
            ) : (
              <FaChevronDown className="cursor-pointer" />
            )}
          </button>
        </div>
      )}

      {/* Full content: show always on desktop, toggle on mobile */}
      <div
        id="extra-info"
        ref={contentRef}
        className="mt-6 space-y-6 overflow-hidden lg:block"
        style={{
          maxHeight: maxHeight,
          opacity: windowWidth >= 1024 || isOpen ? 1 : 0,
          transition: 'max-height 0.5s ease, opacity 0.5s ease',
        }}
        data-aos={windowWidth >= 1024 || isOpen ? 'fade-up' : ''}
        data-aos-duration="1200"
        data-aos-easing="ease-out-cubic"
      >
        {/* Roles */}
        <div
          className="flex flex-col gap-3 border-b border-gray-400 pb-6"
          data-aos="fade-left"
          data-aos-duration="900"
          data-aos-easing="ease-out-cubic"
          data-aos-delay="400"
        >
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

        <div className=''>
          {/* Contact Info */}
          <div
            className="font-sans md:max-w-md md:mx-auto space-y-6 border-b border-gray-500 pb-8 pt-2"
            data-aos="fade-right"
            data-aos-duration="900"
            data-aos-easing="ease-out-cubic"
            data-aos-delay="550"
          >
            {/* Email */}
            <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg">
              <FiMail className="text-[#4BB8FF] text-4xl drop-shadow-lg" />
              <div className="flex flex-col items-start">
                <h1 className="text-[#2C2C2C] font-semibold text-lg">Email</h1>
                <a
                  href="mailto:niloyahmadramjan@gmail.com"
                  target="_blank"
                  className="text-[#1F2937] text-md hover:underline"
                >
                  niloyahmadramjan@..
                </a>
              </div>
            </div>

            {/* WhatsApp / Phone */}
            <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg">
              <FiPhone className="text-[#25D366] text-4xl drop-shadow-lg" />
              <div className="flex flex-col items-start">
                <h1 className="text-[#2C2C2C] font-semibold text-lg">
                  WhatsApp
                </h1>
                <a
                  href="https://wa.me/8801774001235"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#1F2937] text-md hover:underline"
                >
                  +8801774001235
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg">
              <FiMapPin className="text-[#FF6B6B] text-4xl drop-shadow-lg" />
              <div className="flex flex-col items-start">
                <h1 className="text-[#2C2C2C] font-semibold text-lg">
                  Address
                </h1>
                <p className="text-[#1F2937] text-md select-text">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 mt-10">
          <a
            href="https://www.linkedin.com/in/niloyahmedramjan/"
            className="text-[#4BB8FF] hover:text-[#1E40AF] transition-colors"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={40} />
          </a>
          <a
            href="https://github.com/niloyahmadramjan"
            className="text-[#4BB8FF] hover:text-[#1E40AF] transition-colors"
            aria-label="GitHub"
          >
            <FaGithub size={40} />
          </a>
        </div>
      </div>
    </div>
  )
}
