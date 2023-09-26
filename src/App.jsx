import { useState } from 'react'
import Landing from './pages/landing-page'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignUP from './pages/signup-page'
import Login from './pages/login-page'
import Homepage from './pages/homepage'


export default function App() {


  return (
    <div>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/signup' element={<SignUP />} />
      <Route path='signin' element={<Login />} />
      <Route path='/dashboard' element={<Homepage />} />
    </Routes>
  
    </div>
 

  )
}

