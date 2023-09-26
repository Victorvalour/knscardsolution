import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../images/KNS-LOGO-PNG.png"

export default function SignUP() {
  return (
    <div className='bg-cobalt h-[100%] pt-16 pb-10'>
        <div>
          <div className="flex items-center bg-white w-[80%] mx-auto rounded-xl py-2 px-3 mb-8 border-black border-4">
             <img src={Logo} alt="" className="w-20 h-16 p-0" />
             <h2 className="font-gothic"><span className="text-cobalt text-lg">KNS</span><span className="text-orange-500">CARD</span>SOLUTION</h2>
          </div> 
            <form className='w-[90%] rounded-lg bg-gray-200 mx-auto'>
                <p className='text-3xl font-semibold text-center'>Create account</p>
                <p className='text-lg text-center'>Let's get started on your card.</p>
            <div className='flex flex-col  w-[90%] mx-auto'>            
                <input type="name" placeholder='First Name'
                className='h-16 rounded-md text-xl my-2'/>

                <input type="name" placeholder='Last Name'
                className='h-16 rounded-md text-xl my-2' />

                <input type="email" placeholder='Email Address'
                className='h-16 rounded-md text-xl my-2' />

                <input type="name" placeholder='Phone Number'
                className='h-16 rounded-md text-xl my-2' />

                <input type="password" placeholder='Password'
                className='h-16 rounded-md text-xl my-2' />
                
                <input type="password" placeholder='Confirm Password'
                className='h-16 rounded-md text-xl my-2' />

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
    </div>
  )
}

