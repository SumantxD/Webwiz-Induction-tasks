import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Home = () => {
  return (
    <> 
      <div className=' p-10'>
        <Navbar/>
        <div className=' bg-slate-300 mt-5 text-center text-gray-500 text-6xl font-light font-mono'>Welcome to Webwiz</div>
        <div className=' bg-slate-200 w-full h-[70vh] mt-1'>

        </div>
      </div> 
            
    </>
  )
}

export default Home
