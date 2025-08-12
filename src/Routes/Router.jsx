import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import AboutMe from '../pages/About'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <AboutMe/>
      }
    ]
  },
])
