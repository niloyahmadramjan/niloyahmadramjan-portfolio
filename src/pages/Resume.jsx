import React from 'react'
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

const Resume = () => {
  return (
    <section className="px-4 md:px-12 lg:px-20" id="resume">
      <div
        className="max-w-6xl mx-auto rounded-xl pb-8"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Title */}
        <h2
          className="text-3xl md:text-4xl font-bold mb-8"
          style={{
            background: 'linear-gradient(90deg, #FF6B6B, #FF4E88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          Resume
        </h2>

        {/* ===== Education ===== */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="100">
          <h3 className="text-2xl font-semibold text-white mb-6">Education</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/20 bg-white/5">
              <h4 className="text-lg font-semibold text-[#4BB8FF]">
                Islamia Degree College, Chittagong
              </h4>
              <span className="text-white/70 text-sm">Jan 2020 – Dec 2022</span>
              <p className="text-white/80">
                Higher Secondary Certificate (HSC)
              </p>
            </div>
          </div>
        </div>

        {/* ===== Experience ===== */}
        <div className="mb-12" data-aos="fade-up" data-aos-delay="200">
          <h3 className="text-2xl font-semibold text-white mb-6">Experience</h3>
          <div className="space-y-4">
            <div className="p-4 rounded-lg border border-white/20 bg-white/5">
              <h4 className="text-lg font-semibold text-[#FFB74B]">
                MERN Stack Developer (Trainee) – Programming Hero
              </h4>
              <span className="text-white/70 text-sm">Dec 2024 – Aug 2025</span>
              <p className="text-white/80">
                Completed an intensive 6-month MERN Stack development program
                covering React.js, Node.js, Express.js, MongoDB, and REST APIs.
                Built multiple full-stack projects, implemented JWT
                authentication, and deployed applications to live servers.
                Collaborated in team projects using Git and GitHub.
              </p>
            </div>
          </div>
        </div>

        {/* ===== Skills Section ===== */}
        <div data-aos="fade-up" data-aos-delay="300">
          <h3 className="text-2xl font-semibold text-white mb-6">Skills</h3>
          <div className="space-y-10">
            {/* ===== Languages ===== */}
            <div data-aos="fade-up" data-aos-delay="100">
              <h3 className="text-xl font-semibold text-white mb-4">
                Languages
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[{ name: 'JavaScript', icon: <SiJavascript /> }].map(
                  (lang, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3"
                    >
                      <span className="text-[#FF4E88] text-xl">
                        {lang.icon}
                      </span>
                      <p className="text-white/80 text-sm">{lang.name}</p>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* ===== Frontend ===== */}
            <div data-aos="fade-up" data-aos-delay="200">
              <h3 className="text-xl font-semibold text-white mb-4">
                Frontend
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: 'React', icon: <FaReact /> },
                  { name: 'Next.js', icon: <SiNextdotjs /> },
                  { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
                  { name: 'REST APIs', icon: <SiAxios /> },
                  { name: 'HTML5', icon: <FaHtml5 /> },
                  { name: 'CSS3', icon: <FaCss3Alt /> },
                ].map((frontend, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3"
                  >
                    <span className="text-[#9C6BFF] text-xl">
                      {frontend.icon}
                    </span>
                    <p className="text-white/80 text-sm">{frontend.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Backend ===== */}
            <div data-aos="fade-up" data-aos-delay="300">
              <h3 className="text-xl font-semibold text-white mb-4">Backend</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: 'Node.js', icon: <FaNodeJs /> },
                  { name: 'Express', icon: <SiExpress /> },
                  { name: 'MongoDB', icon: <SiMongodb /> },
                  { name: 'JWT', icon: <FaDatabase /> },
                ].map((backend, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3"
                  >
                    <span className="text-[#FF6B6B] text-xl">
                      {backend.icon}
                    </span>
                    <p className="text-white/80 text-sm">{backend.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Tools ===== */}
            <div data-aos="fade-up" data-aos-delay="400">
              <h3 className="text-xl font-semibold text-white mb-4">Tools</h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: 'Git', icon: <FaGitAlt /> },
                  { name: 'Firebase', icon: <SiFirebase /> },
                  { name: 'TanStack Query', icon: <TbBrandRedux /> },
                  { name: 'Axios', icon: <SiAxios /> },
                  { name: 'Figma', icon: <FaFigma /> },
                ].map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3"
                  >
                    <span className="text-[#4BB8FF] text-xl">{tool.icon}</span>
                    <p className="text-white/80 text-sm">{tool.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* ===== Soft Skills ===== */}
            <div data-aos="fade-up" data-aos-delay="500">
              <h3 className="text-xl font-semibold text-white mb-4">
                Soft Skills
              </h3>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { name: 'Problem Solving', icon: <FaLightbulb /> },
                  { name: 'Communication', icon: <FaComments /> },
                  { name: 'Teamwork', icon: <FaUsers /> },
                  { name: 'Critical Thinking', icon: <FaBrain /> },
                  { name: 'Collaboration', icon: <FaHandshake /> },
                  { name: 'Project Management', icon: <FaTasks /> },
                  { name: 'Time Management', icon: <FaClock /> },
                  { name: 'Adaptability', icon: <FaLaptopCode /> },
                ].map((skill, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-lg border border-white/20 bg-white/5 flex items-center gap-3"
                  >
                    <span className="text-[#FFB74B] text-xl">{skill.icon}</span>
                    <p className="text-white/80 text-sm">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume
