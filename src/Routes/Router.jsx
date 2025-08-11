import React from 'react'
import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout'
import Home from '../pages/Home'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout/>,
    children: [
      {
        index: true,
        element: <Home/>
      }
    ]
  },
])
