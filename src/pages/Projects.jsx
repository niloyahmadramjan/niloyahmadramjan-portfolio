import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const projects = [
    {
      title: 'MERN E-Commerce Store',
      description:
        'A full-stack e-commerce web app with authentication, cart, payment, and admin dashboard using MERN stack.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/ecommerce-store',
      live: 'https://ecommerce-store.vercel.app',
    },
    {
      title: 'Task Manager App',
      description:
        'A task tracking and collaboration tool with JWT authentication and real-time updates.',
      tech: ['React', 'Firebase', 'TanStack Query', 'Tailwind CSS'],
      github: 'https://github.com/yourusername/task-manager',
      live: 'https://task-manager.vercel.app',
    },
    {
      title: 'Portfolio Website',
      description:
        'Personal portfolio website built with Next.js and Tailwind CSS to showcase skills and projects.',
      tech: ['Next.js', 'Tailwind CSS', 'AOS'],
      github: 'https://github.com/yourusername/portfolio',
      live: 'https://yourportfolio.vercel.app',
    },
  ]

  return (
    <div className="space-y-10 px-6 pb-6">
      <div data-aos="fade-up" data-aos-delay="100">
        <h3 className="text-2xl font-semibold text-white mb-6">Projects</h3>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="p-5 rounded-lg border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-300 flex flex-col justify-between"
              data-aos="fade-up"
              data-aos-delay={150 + idx * 100}
            >
              <div>
                <h4 className="text-lg font-semibold text-[#4BB8FF] mb-2">
                  {project.title}
                </h4>
                <p className="text-white/70 text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-xs px-2 py-1 rounded bg-white/10 text-white/60"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <FaGithub size={18} />
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 hover:text-white transition"
                >
                  <FaExternalLinkAlt size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
