import { FaLinkedin, FaGithub, FaReact } from 'react-icons/fa'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'

export default function Navbar() {
  return (
    <div
      className="w-full lg:w-80 p-6 rounded-[2.5rem] shadow-2xl overflow-hidden backdrop-blur-xl lg:sticky top-0"
      style={{
        background: 'rgba(255, 255, 255, 0.15)',
        border: '1px solid rgba(255, 255, 255, 0.25)',
      }}
    >
      {/* Gradient border glow */}
      <div
        className="absolute inset-0 rounded-[2.5rem] -z-10"
        style={{
          background: 'linear-gradient(135deg, #FF6B6B, #FF4E88)',
          filter: 'blur(40px)',
          opacity: 0.3,
        }}
      ></div>

      {/* Profile Image */}
      <img
        src="https://i.ibb.co/bgTPqgJD/IMG-9196.jpg"
        alt="Niloy Ahmad Ramjan"
        className="w-42 h-42 mx-auto rounded-full object-cover mb-4 border-4 border-[#4BB8FF] shadow-lg"
      />

      {/* Name */}
      <h2 className="text-black text-2xl font-bold text-center">
        Niloy Ahmad Ramjan
      </h2>
      <p className="text-[#2C2C2C] font-bold mt-1 text-center">
        Full Stack MERN Developer
      </p>

      {/* Roles */}
      <div className="flex flex-col gap-3 mt-4 border-b border-gray-400 pb-6">
        <span className="flex items-center gap-2 bg-[#2C2C2C]/30 text-white px-4 py-1 rounded-lg text-sm">
          <FaReact className="text-[#61DBFB]" />
          Tech-Forward & Creative
        </span>
        <span className="flex items-center gap-2 bg-[#2C2C2C]/30 text-white px-4 py-1 rounded-lg text-sm">
          <span className="w-2 h-2 rounded-full bg-[#9C6BFF]"></span>
          Client Value Oriented
        </span>
        <span className="flex items-center gap-2 bg-[#2C2C2C]/30 text-white px-4 py-1 rounded-lg text-sm">
          <span className="w-2 h-2 rounded-full bg-[#FFB74B]"></span>
          MERN + Frontend Hybrid
        </span>
      </div>

      {/* Contact Info */}
      <div className="mt-4 font-sans max-w-md mx-auto space-y-6 border-b border-gray-500 pb-8 pt-2">
        {/* Email */}
        <div className="flex items-center gap-4 p-3 rounded-lg shadow-lg">
          <FiMail className="text-[#4BB8FF] text-4xl drop-shadow-lg" />
          <div className="flex flex-col items-start">
            <h1 className="text-[#2C2C2C] font-semibold text-lg">Email</h1>
            <a
              href="mailto:niloyahmadramjan@gmail.com"
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
            <h1 className="text-[#2C2C2C] font-semibold text-lg">WhatsApp</h1>
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
            <h1 className="text-[#2C2C2C] font-semibold text-lg">Address</h1>
            <p className="text-[#1F2937] text-md select-text">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center justify-center gap-4 mt-10">
        <a
          href="#"
          className="text-[#4BB8FF] hover:text-[#1E40AF] transition-colors"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={50} />
        </a>
        <a
          href="#"
          className="text-[#4BB8FF] hover:text-[#1E40AF] transition-colors"
          aria-label="GitHub"
        >
          <FaGithub size={50} />
        </a>
      </div>
    </div>
  )
}
