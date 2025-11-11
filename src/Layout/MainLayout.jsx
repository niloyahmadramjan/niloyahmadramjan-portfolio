import React from "react";
import { Outlet, NavLink } from "react-router"; // make sure it's 'react-router-dom'
import Sidebar from "../components/Sidebar";
import resume from "../assets/resume.pdf";
import {
  FaUser,
  FaCode,
  FaProjectDiagram,
  FaAward,
  FaFileDownload,
} from "react-icons/fa";

export default function MainLayout() {
  return (
    <div className="min-h-screen max-w-7xl mx-auto pb-20 pt-5  md:pb-0 md:pt-0 relative">
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
        <main className="flex-1 lg:ml-[100px] flex flex-col min-h-screen pb-10 lg:pb-0">
          {/* Mobile Navbar fixed bottom */}
          <nav
            className="
    fixed bottom-0 left-0 w-full
    flex justify-between items-center
    border-t border-white/25
    bg-white/15
    backdrop-blur-md
    rounded-tl-2xl rounded-tr-2xl
    py-3 px-4
    z-50
    text-[#2C2C2C]
    font-semibold
    lg:hidden
  "
            style={{
              borderTopLeftRadius: "1rem",
              borderTopRightRadius: "1rem",
              borderTop: "1px solid rgba(255, 255, 255, 0.25)",
              background: "rgba(255, 255, 255, 0.15)",
              backdropFilter: "blur(10px)",
            }}
          >
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-xs flex flex-col items-center ${
                  isActive
                    ? "text-[#FF4E88]"
                    : "text-[#2C2C2C] hover:text-[#FF4E88]"
                }`
              }
            >
              <FaUser className="text-lg mb-1" />
              <span>About</span>
            </NavLink>

            <NavLink
              to="/resume"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-xs flex flex-col items-center ${
                  isActive
                    ? "text-[#FF4E88]"
                    : "text-[#2C2C2C] hover:text-[#FF4E88]"
                }`
              }
            >
              <FaCode className="text-lg mb-1" />
              <span>Skills</span>
            </NavLink>

            <NavLink
              to="/projects"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-xs flex flex-col items-center ${
                  isActive
                    ? "text-[#FF4E88]"
                    : "text-[#2C2C2C] hover:text-[#FF4E88]"
                }`
              }
            >
              <FaProjectDiagram className="text-lg mb-1" />
              <span>Projects</span>
            </NavLink>

            <NavLink
              to="/awards"
              end
              className={({ isActive }) =>
                `transition-colors duration-300 text-xs flex flex-col items-center ${
                  isActive
                    ? "text-[#FF4E88]"
                    : "text-[#2C2C2C] hover:text-[#FF4E88]"
                }`
              }
            >
              <FaAward className="text-lg mb-1" />
              <span>Certificates</span>
            </NavLink>

            <a
              href={resume}
              download="mernstack-resume-ramjan.pdf"
              className="transition-colors duration-300 cursor-pointer text-[#2C2C2C] hover:text-[#FF4E88] text-xs flex flex-col items-center"
            >
              <FaFileDownload className="text-lg mb-1" />
              <span>Resume</span>
            </a>
          </nav>

          {/* Scrollable Main Content Container */}
          <div
            className="flex-1 rounded-[2.5rem] shadow-2xl backdrop-blur-xl relative flex flex-col"
            style={{
              background: "rgba(0, 0, 0, 0.4)",
              border: "1px solid rgba(255, 255, 255, 0.25)",
              marginTop: "1rem",
              height: "calc(100vh - 6rem)", // adjust height to avoid overflow
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
                borderBottomLeftRadius: "1rem",
                borderBottom: "1px solid rgba(255, 255, 255, 0.03)",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(50px)",
              }}
            >
              <NavLink
                to="/"
                end
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-[#FF4E88] shadow-lg" : "text-gray-100"
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
                    isActive ? "text-[#FF4E88] shadow-lg" : "text-gray-100"
                  }`
                }
              >
                Skills
              </NavLink>
              <NavLink
                to="/projects"
                end
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-[#FF4E88] shadow-lg" : "text-gray-100"
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
                    isActive ? "text-[#FF4E88] shadow-lg" : "text-gray-100"
                  }`
                }
              >
                Awards & Certificates
              </NavLink>
              <NavLink
                to="/contact"
                end
                className={({ isActive }) =>
                  `transition-colors duration-300 cursor-pointer ${
                    isActive ? "text-[#FF4E88] shadow-lg" : "text-gray-100"
                  }`
                }
              >
                Contact
              </NavLink>
              <a
                href={resume}
                download="mernstack-resume-ramjan.pdf"
                className="transition-colors duration-300 cursor-pointer text-gray-100 hover:text-[#FF4E88] shadow-lg "
              >
                Download Resume
              </a>
            </nav>

            {/* Scrollable Outlet Content */}
            <div
              className="overflow-auto flex-1 mt-4"
              style={{
                maxHeight: "calc(100% - 60px)", // Leave space for navbar
              }}
            >
              <Outlet />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
