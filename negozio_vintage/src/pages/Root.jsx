import React from 'react'
import StickyNavbar from '../Components/StickyNavbar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
   <>
    <StickyNavbar/>
    <Outlet/>
   </>
  )
}

export default Root