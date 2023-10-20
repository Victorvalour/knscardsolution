import React from 'react'
import { useState } from 'react'
import DashboardSidebar from '../components/dashboard-sidebar'
import {UserAuth} from '../context/AuthContext'
import BottomNav from '../components/bottom-nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat, faPaperPlane, faCreditCard, faMoneyBill1Wave } from '@fortawesome/free-solid-svg-icons'
import { UserId } from '../context/Context';
const Homepage = () => {

  const { user, firstName, sudoId} = UserAuth()
  const {  } = UserId()
  

 // getSudoUser()
  
  console.log(user)
  return (
    <div className='flex flex-col '>
      
          <DashboardSidebar />
         
          <div>
            <p className='text-xl font-semibold pl-5'>
              Welcome, {user && firstName}
            </p>
            </div>
              
          <div className='px-4'>
            <div className='w-full  rounded-xl h-52 bg-blue-200 self-center mt-5 p-4'>
                <div className='flex w-full h-fit items-center justify-between'>
                  <p className='text-4xl font-semibold'>Balance</p>
                  <div className='flex gap-2 items-center font-semibold bg-blue-200 h-fit py-1 px-2 border-2 rounded-3xl'> <FontAwesomeIcon icon={faRepeat} /> <p className='text-xl '>Naira</p></div>
                  </div>
                  <div className='bg-white rounded-xl h-16 w-fit px-6 text-2xl font-semibold mt-8 ml-4 flex items-center'>$ 00,000.00</div>
            </div>

          </div>

         <div className='grid grid-cols-2 p-4 rounded-xl gap-7 mx-4 mt-8
          shadow-[0px_1px_3px_1px_rgba(8,8,8,0.85)]'>

          <div className='w-40 rounded-xl h-24 bg-gray-200 flex items-center p-4 text-xl  gap-4'><FontAwesomeIcon icon={faCreditCard} size="xl" /> <p>Create Virtual Card</p></div>

          <div className='w-40 rounded-xl h-24 bg-gray-200 flex items-center p-4 text-xl  gap-4'><FontAwesomeIcon icon={faCreditCard} size="xl" style={{color: "#1554c1",}} /> <p>Create Physical Card</p></div>

          <div className='w-40 rounded-xl h-24 bg-gray-200 flex items-center p-4 text-xl  gap-4'><FontAwesomeIcon icon={faPaperPlane} size='xl'/> <p>Send Money</p></div>

          <div className='w-40 rounded-xl h-24 bg-gray-200 flex items-center p-4 text-xl  gap-4'><FontAwesomeIcon icon={faMoneyBill1Wave} size="xl" /> <p>Receive Money</p></div>

         </div>

          <BottomNav />
        
    </div>
  )
}

export default Homepage