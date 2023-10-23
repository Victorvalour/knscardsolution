import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Logo from "../images/KNS-LOGO-PNG.png"
import { UserAuth } from '../context/AuthContext'
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import passwordVisibilityToggle from '../components/password-visibility-toggle';

export default function SignUP() {
const [email, setEmail] =useState('')
const [password, setPassword] = useState('')
const [confirmPassword, setConfirmPassword] = useState('')
const [passwordMessage, setPasswordMessage] = useState('')
const [error, setError] = useState('')

const [PasswordInputType, ToggleIcon] = passwordVisibilityToggle();

const { createUser } = UserAuth()

const navigate = useNavigate()

const handleConfirmPassword = (e) => {
if (e.target.value === password) {
    setConfirmPassword(password)
    setPasswordMessage('')
  } else {
    setPasswordMessage('Passwords must match')
    setConfirmPassword('')
  }
}

const handleSubmit = async (e) => {
  e.preventDefault()
  setError('')
  try{
      await createUser(email, confirmPassword);

      navigate('/signin');

      toast("Sign up successful. LOGIN");
      
  } 
  catch (e) {
    setError(e.message)
    console.log(e.message);

  }
}

  return (
    <div className='bg-cobalt h-[100vh] pt-16 pb-10'>
        <div className='h-full'>
          <div className="flex items-center bg-white w-[80%] mx-auto rounded-xl py-2 px-3 mb-8 border-black border-4 text-center">
             <img src={Logo} alt="" className="w-20 h-16 p-0" />
             <h2 className="font-gothic text-center"><span className="text-cobalt text-lg">KNS</span><span className="text-orange-500">CARD</span>SOLUTION</h2>
          </div> 
            <form onSubmit={handleSubmit}
            className='w-[90%] rounded-lg bg-gray-200 mx-auto'>
                <p className='text-3xl font-semibold text-center'>Create account</p>
                <p className='text-lg text-center'>Let's get started on your card.</p>
            <div className='flex flex-col  w-[90%] mx-auto'>            
               
               
           {/*     <input type="name" placeholder='First Name'
                className='h-16 rounded-md text-xl my-2'/>

                <input type="name" placeholder='Last Name'
                className='h-16 rounded-md text-xl my-2' />

                    <input type="name" placeholder='Phone Number'
  className='h-16 rounded-md text-xl my-2' /> */}

                <input type="email" placeholder='Email Address'
                onChange={(e) => setEmail(e.target.value)}
                className='h-16 rounded-md text-xl my-2' />

               <div className='relative'> <input type={PasswordInputType} placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                className='h-16 rounded-md text-xl my-2 w-full'/>
                <span className="absolute right-5 top-7 cursor-pointer">
                  {ToggleIcon}
                </span>
                </div>
                <p className='text-red-600'>{passwordMessage}</p>

                <div className='relative'>
                <input type={PasswordInputType} placeholder='Confirm Password'
                onChange={handleConfirmPassword}
                className='h-16 rounded-md text-xl my-2 w-full'/>
                 <span className="absolute right-5 top-7 cursor-psointer">
                  {ToggleIcon}
                </span>
              </div>

                <p>By click the "Create account" button, you agree to knscardsolution's <span className='text-blue-800'>terms of service.</span></p>

                <button 
                className='h-16 w-64 bg-orange-500 rounded-2xl px-6 text-xl font-bold mx-auto my-4'
                type='submit'>Create account</button>

                </div>

                <p className='text-center text-lg pb-10'>Already have an account? <br /> 
                <Link to='/signin'>
                <span className='text-blue-600 underline'>Login to your account</span>
                </Link></p>
          
            </form>
     
        </div>
        <ToastContainer />
    </div>
  )
}

