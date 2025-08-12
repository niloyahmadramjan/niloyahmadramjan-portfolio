import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import AboutMe from '../pages/About'
import Resume from '../pages/Resume'
import Projects from '../pages/Projects'
import Award from '../pages/Award'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <AboutMe/>
      },
      {
        path: "/resume",
        element: <Resume/>
      },
      {
        path: "/projects",
        element: <Projects/>
      },
      {
        path: "/awards",
        element: <Award/>
      }

    ]
  },
])
