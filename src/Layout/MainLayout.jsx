import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

export default function MainLayout() {
  return (
    <div
      className="min-h-screen max-w-7xl mx-auto flex justify-center lg:justify-start p-4 lg:p-10"
      style={{
        background:
          'linear-gradient(135deg, #1F5F99 0%, #A42D54 50%, #1F5F99 100%)',
      }}
    >
      <Navbar />
      <Outlet />
      <Footer className="min-h-screen flex items-start justify-center lg:justify-start p-4 lg:p-10" />
    </div>
  )
}
