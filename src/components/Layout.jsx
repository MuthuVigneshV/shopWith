import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

function Layout({cart, setCart}) {

  return (
    <div className='bg-container'>
    <Navbar className="navbar"  cart={ cart } setCart={ setCart }/>
    <Outlet />
    <Footer />
    </div>
  )
}

export default Layout