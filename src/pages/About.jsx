import React from 'react'
import {
  FaCode,
  FaServer,
  FaDatabase,
  FaLaptopCode,
  FaProjectDiagram,
} from 'react-icons/fa'

const AboutMe = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 pb-8" id="about">
      <div
        className="max-w-6xl mx-auto rounded-t-xl"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        {/* Title */}
        <h2
          className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 text-white"
          style={{
            background: 'linear-gradient(90deg, #FF6B6B, #FF4E88)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          About Me
        </h2>

        {/* Intro */}
        <p className="text-white/90 text-base sm:text-lg leading-relaxed mb-6">
          I am{' '}
          <span className="font-semibold text-white">Niloy Ahmad Ramjan</span>,
          a passionate{' '}
          <span className="text-[#4BB8FF] font-semibold">
            MERN Stack Developer
          </span>{' '}
          crafting fast, responsive, and user-friendly web applications.
        </p>
        <p className="text-white/80 text-sm sm:text-base mb-4">
          Skilled in <strong>React</strong>, <strong>Tailwind CSS</strong>,{' '}
          <strong>Node.js</strong>, <strong>Express.js</strong>,{' '}
          <strong>MongoDB</strong>, and <strong>API integrations</strong>. I’m
          currently exploring{' '}
          <span className="text-[#FFB74B] font-semibold">
            backend optimization
          </span>{' '}
          and{' '}
          <span className="text-[#9C6BFF] font-semibold">
            real-time application development
          </span>
          .
        </p>
        <p className="text-white/70 text-sm sm:text-base mb-10">
          I’m eager to collaborate on real-world projects, learn from
          experienced developers, and contribute to open-source communities.
        </p>

        {/* What I'm Doing */}
        <h3 className="text-xl sm:text-2xl font-bold mb-8 text-white">
          What I'm Doing
        </h3>
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {[
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
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
              style={{
                background: 'rgba(255, 255, 255, 0.15)',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                backdropFilter: 'blur(10px)',
              }}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
            >
              {item.icon}
              <h4 className="font-semibold text-base sm:text-lg text-white mb-2">
                {item.title}
              </h4>
              <p className="text-white/80 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default AboutMe
