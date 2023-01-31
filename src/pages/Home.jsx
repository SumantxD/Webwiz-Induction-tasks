import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'


const Home = () => {
  return (
    <>  
        <Navbar/>
        <div className=' bg-slate-500'>Welcome to Webwiz</div>
        <div>
            <Link to='/task1'>
                <button>Task1</button>
            </Link>
            <button>Task2</button>
            <button>Task3</button>
            <button>Task4</button>
            <button>Task5</button>
        </div>
    </>
  )
}

export default Home
