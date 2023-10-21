import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import Logo from "../images/KNS-LOGO-PNG.png"
import { useState, useContext } from 'react'
import { UserAuth } from '../context/AuthContext';
import { UserId } from '../context/Context';
import { ToastContainer, toast } from "react-toastify";




export default function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('')
const [error, setError] = useState('')
const navigate = useNavigate()

const  { login } = UserAuth();


const { user } = UserAuth();

const handleSubmit = async (e) => {
  e.preventDefault();
  setError('')
  try {
      await login(email, password)
    
      //getUserData();
  
     

  } catch (e) {
    setError(e.message)
    console.log(e.message)
 
  }
}
  return (
    <div className='bg-cobalt h-[100vh] pt-16'>
        <div className=''>
          <div className="flex items-center bg-white w-[80%] mx-auto rounded-xl py-2 px-3 mb-8 border-black border-4">
     
             <img src={Logo} alt="" className="w-20 h-16 p-0" />
             <div>
             <h2 className="font-gothic w-[90px] text-lg"><span className="text-cobalt text-lg text-start">KNS</span><span className="text-orange-500">CARD</span>SOLUTION</h2> </div>
             </div>
      
            <form 
            onSubmit={handleSubmit}
            className='w-[90%] rounded-lg bg-gray-200 mx-auto'>
                <p className='text-3xl font-semibold text-center'>Sign In</p>
                <p className='text-lg text-center'>Log into your account.</p>
            <div className='flex flex-col  w-[90%] mx-auto'>            

                <input 
                onChange={(e) => setEmail(e.target.value)}
                type="email" placeholder='Email Address'
                className='h-16 rounded-md text-xl my-2' />


                <input
                onChange={(e) => setPassword(e.target.value)}
                type="password" placeholder='Password'
                className='h-16 rounded-md text-xl my-2' />
                
                <p className='text-end'>Forgot Password?</p>

                <button 
                className='h-16 w-[70%s] bg-orange-500 rounded-2xl px-6 text-xl font-bold mx-auto my-4'
                type='submit'>Sign In</button>


                <p className='mb-8 text-md'>Don't have an account? 
                <Link to='/signup'>
                <span className='text-cobalt underline'> Create an account.</span>
                </Link>
                </p>

                </div>

                
            </form>
        </div>
        <ToastContainer />
    </div>
  )

  return children
}

