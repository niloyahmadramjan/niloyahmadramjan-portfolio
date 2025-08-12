import { FaGithub, FaExternalLinkAlt,FaEye } from 'react-icons/fa'

const projects = [
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

export default function Projects() {
  return (
    <div className="mb-12 px-8" data-aos="fade-up" data-aos-delay="100">
      <h3 className="text-2xl font-semibold text-white mb-6">Projects</h3>
      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="rounded-lg border border-white/20 bg-white/5 overflow-hidden"
          >
            {/* Image Section */}
            <div className="relative group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-all flex items-center justify-center">
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-3xl p-3 rounded-full bg-[#4BB8FF] hover:bg-[#3aa0e0] transition"
                >
                  <FaEye />
                </a>
              </div>
            </div>

            {/* Text Info Section */}
            <div className="p-4">
              <h4 className="text-lg font-semibold text-[#4BB8FF] mb-2">
                {project.title}
              </h4>
              <p className="text-white/80 mb-3">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech.map((t, i) => (
                  <span
                    key={i}
                    className="text-xs px-2 py-1 bg-white/10 rounded text-white/70 border border-white/20"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* GitHub + Live Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4BB8FF] flex items-center gap-1"
                >
                  <FaGithub /> Code
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-[#4BB8FF] flex items-center gap-1"
                >
                  <FaExternalLinkAlt /> Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
