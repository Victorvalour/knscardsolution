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
import Profile from './pages/profile-page'
import KycForm from './pages/kyc-form-page'
import Cards from './pages/cards-page'


export default function App() {

  

  return (
    <div>
      <AuthContextProvider>
     <IdContextProvider>
    <Routes>
      <Route path='/' element={<Landing />}/>
      <Route path='/signup' element={<SignUP />} />
      
     
      <Route path='/signin' element={<Login />} />
      
      <Route path='/profile-form' element={ <ProtectedRoute> <ProfileForm />   </ProtectedRoute>} />

      <Route path='/profile' element={ <ProtectedRoute> <Profile/> </ProtectedRoute>} />

      <Route path='/dashboard' element={
       <ProtectedRoute> 
      <Homepage />
      </ProtectedRoute>
      } />
      <Route path='/kyc-form' element={ <ProtectedRoute> <KycForm />   </ProtectedRoute>} />

      <Route path='/cards' element={
       <ProtectedRoute> 
      <Cards />
      </ProtectedRoute>
      } />
    </Routes>
    </IdContextProvider>
    </AuthContextProvider>
  
    </div>
 

  )
}

