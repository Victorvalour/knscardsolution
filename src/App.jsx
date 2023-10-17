import { React, useState } from 'react'
import Landing from './pages/landing-page'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import SignUP from './pages/signup-page'
import Login from './pages/login-page'
import Homepage from './pages/homepage'
import { AuthContextProvider } from './context/AuthContext'
import ProtectedRoute from './components/ProtectedRoute'
import ProfileForm from './pages/profile-form'
import IdContextProvider from './context/Context'


export default function App() {

  

  return (
    <div>
      <AuthContextProvider>
     <IdContextProvider>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/signup' element={<SignUP />} />
      
     
      <Route path='/signin' element={<Login />} />
      

      <Route path='/profile-form' element={<ProfileForm />} />

      <Route path='/dashboard' element={
       <ProtectedRoute> 


      <Homepage />
      </ProtectedRoute>
      } />
    </Routes>
    </IdContextProvider>
    </AuthContextProvider>
  
    </div>
 

  )
}

