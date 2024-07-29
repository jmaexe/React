import React from 'react'
import Sidebar from '../Components/Sidebar'
import { Outlet } from 'react-router-dom'

const Settings = () => {

  return (
    <div className='w-screen h-screen flex'>
      <div className='flex flex-col bg-deep-orange-400 h-full basis-1/4 justify-center items-center p-2'>
        <Sidebar/>
      </div>
      <div className='flex flex-col bg-deep-purple-400 h-full basis-3/4 justify-center items-center'><Outlet /></div>
    </div>
  )
}

export default Settings