import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './pages/Navbar'
import Task1 from './pages/Task1'
import Task2 from './pages/Task2'
import Task3 from './pages/Task3'
import Task4 from './pages/Task4'
import Task5 from './pages/Task5'


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/task1' element={<Task1/>}/>
          <Route path='/task2' element={<Task2/>}/>
          <Route path='/task3' element={<Task3/>}/>
          <Route path='/task4' element={<Task4/>}/>
          <Route path='/Task5' element={<Task5/>}/>
        </Routes>
      </Router>
    </>
  )
}

export default App