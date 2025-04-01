import React from 'react'
import { Navigation } from '../components'
import { Outlet } from 'react-router'
import Footer from '../components/Footer'

const HomeLayout = () => {
  return (
    <div>
        <Navigation/>
       
        <Outlet/>
    </div>
  )
}

export default HomeLayout