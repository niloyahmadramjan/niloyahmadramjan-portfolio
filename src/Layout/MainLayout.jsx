import React from 'react'
import { Outlet, NavLink } from 'react-router' // make sure it's 'react-router-dom'
import Sidebar from '../components/Sidebar'

export default function MainLayout() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto py-10 relative">
      <div className="lg:flex">
        {/* Sidebar */}
        <aside
          className="
            w-full
            lg:w-[240px]
            lg:sticky lg:top-10
            lg:h-screen
            lg:overflow-auto
            bg-transparent
            lg:flex 
            lg:items-center
            lg:justify-center
            z-50
          "
          style={{ left: 0 }}
        >
          <Sidebar />
        </aside>

        {/* Main content container with left margin for sidebar */}
        <main className="flex-1 lg:ml-[100px] flex flex-col min-h-screen ">
          {/* Mobile Navbar fixed bottom */}
          <nav
            className="
              fixed bottom-0 left-0 w-full
              flex justify-around items-center
              border-t border-white/25
              bg-white/15
              backdrop-blur-md
              rounded-tl-2xl rounded-tr-2xl
              py-6
              z-50
              text-[#2C2C2C]
              font-semibold
              lg:hidden
            "
            style={{
              borderTopLeftRadius: '1rem',
              borderTopRightRadius: '1rem',
              borderTop: '1px solid rgba(255, 255, 255, 0.25)',
              background: 'rgba(255, 255, 255, 0.15)',
              backdropFilter: 'blur(10px)',
            }}
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-sm ${
                  isActive ? 'text-[#FF4E88]' : 'hover:text-[#FF4E88]'
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/resume"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-sm ${
                  isActive ? 'text-[#FF4E88]' : 'hover:text-[#FF4E88]'
                }`
              }
            >
              Resume
            </NavLink>
            <NavLink
              to="/projects"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-sm ${
                  isActive ? 'text-[#FF4E88]' : 'hover:text-[#FF4E88]'
                }`
              }
            >
              Projects
            </NavLink>
            <NavLink
              to="/awards"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-sm ${
                  isActive ? 'text-[#FF4E88]' : 'hover:text-[#FF4E88]'
                }`
              }
            >
              Awards
            </NavLink>
            <NavLink
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-sm ${
                  isActive ? 'text-[#FF4E88]' : 'hover:text-[#FF4E88]'
                }`
              }
            >
              Download CV
            </NavLink>
          </nav>

          {/* Scrollable Main Content Container */}
          <div
            className="flex-1 rounded-[2.5rem] shadow-2xl backdrop-blur-xl relative flex flex-col"
            style={{
              background: 'rgba(0, 0, 0, 0.4)',
              border: '1px solid rgba(255, 255, 255, 0.25)',
              marginTop: '1rem',
              height: 'calc(100vh - 6rem)', // adjust height to avoid overflow
            }}
          >
            {/* Sticky Desktop Navbar */}
            <nav
              className="
                hidden lg:flex
                sticky top-0
                border-b border-white/25
                bg-white/15
                backdrop-blur-md
                rounded-bl-2xl
                px-8 py-4
                space-x-8
                z-50
                text-[#2C2C2C]
                font-semibold
                self-start ml-auto
              "
              style={{
                borderBottomLeftRadius: '1rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
                background: 'rgba(255, 255, 255, 0.15)',
                backdropFilter: 'blur(50px)',
              }}
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-[#FF4E88] shadow-lg' : 'text-gray-100'
                  }`
                }
              >
                About
              </NavLink>
              <NavLink
                to="/resume"
                end
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-[#FF4E88] shadow-lg' : 'text-gray-100'
                  }`
                }
              >
                Resume
              </NavLink>
              <NavLink
                to="/projects"
                end
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-[#FF4E88] shadow-lg' : 'text-gray-100'
                  }`
                }
              >
                Projects
              </NavLink>
              <NavLink
                to="/awards"
                end
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer ${
                    isActive ? 'text-[#FF4E88] shadow-lg' : 'text-gray-100'
                  }`
                }
              >
                Awards
              </NavLink>
              <a
                href="/cv.pdf" 
                download="My_CV.pdf" 
                className="transition-colors duration-300 cursor-pointer text-gray-100 hover:text-[#FF4E88] shadow-lg "
              >
                Download CV
              </a>
            </nav>

            {/* Scrollable Outlet Content */}
            <div
              className="overflow-auto flex-1 mt-4"
              style={{
                maxHeight: 'calc(100% - 60px)', // Leave space for navbar
              }}
            >
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}
