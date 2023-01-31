import React, { useState, useEffect } from 'react'
import { Route, BrowserRouter as Router, Routes, Link } from 'react-router-dom'
// import { useNavigate } from 'react-router-dom';  

const Navbar = () => {

    //now how to highlight one of them
    const [curr, setCurr] = useState(0);

    // const navigate = useNavigate()
    

  return (
    <>
    <div className="flex overflow-x-auto gap-x-5 whitespace-nowrap">
        <Link to={'/'}>
            <button className={(curr !== 0)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(0)}>Home</button>
        </Link>
        <button className={(curr !== 1)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(1)}>Q1</button>
        <button className={(curr !== 2)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(2)}>Q2</button>
        <button className={(curr !== 3)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(3)}>Q3</button>
        <button className={(curr !== 4)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(4)}>Q4</button>
        <Link to={'/task1'}>
            <button className={(curr !== 5)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(5)}>Task1</button>
        </Link>
        <Link to={'/task2'}>
            <button className={(curr !== 6)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(6)}>Task2</button>
        </Link>
        <Link to={'/task3'}> 
            <button className={(curr !== 7)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(7)}>Task3</button>
        </Link>
        <Link to={'/task4'}>
            <button className={(curr !== 8)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(8)}>Task4</button>
        </Link>
        <button className={(curr !== 9)?'text-gray-700 bg-slate-300 p-3 rounded-lg font-medium':'text-green-500 bg-slate-300 p-3 rounded-lg font-medium'} onClick={() => setCurr(9)}>Task5</button>
    </div>
    </>
  )
}

export default Navbar