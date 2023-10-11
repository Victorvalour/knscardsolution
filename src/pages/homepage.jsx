import React from 'react'
import DashboardSidebar from '../components/dashboard-sidebar'
import {UserAuth} from '../context/AuthContext'
import BottomNav from '../components/bottom-nav'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRepeat } from '@fortawesome/free-solid-svg-icons'
const Homepage = () => {

  const { user, logout} = UserAuth()
  return (
    <div className='flex flex-col '>
       
          <DashboardSidebar />

          <div>
            <p className='text-xl font-semibold pl-5'>
              Welcome, {user && user.email}
            </p>
            </div>
          <div className='px-4'>
            <div className='w-full  rounded-xl h-52 bg-blue-300 self-center mt-5 p-4'>
                <div className='flex w-full h-fit items-center justify-between'>
                  <p className='text-4xl font-semibold'>Balance</p>
                  <div className='flex gap-2 items-center font-semibold bg-blue-200 h-fit py-1 px-2 border-2 rounded-3xl'> <FontAwesomeIcon icon={faRepeat} /> <p className='text-xl '>Naira</p></div>
                  </div>
                  <div className='bg-white rounded-xl h-16 w-fit px-6 text-2xl font-bold mt-8 ml-4 flex items-center'>$10,500</div>
            </div>

          </div>

          <div className='bg-blue-600 rounded-xl h-32 m-2 text-center text-2xl w-1/2 hover:bg-blue-500'><p className='text-white font-bold'>Request virtual<br /> card</p></div>
            <div className='bg-orange-600 rounded-xl h-32 m-2 w-1/2 text-center text-2xl hover:bg-orange-500'><p className='text-white font-bold'>Request Physical Card</p></div>
          <BottomNav />
     
    </div>
  )
}

export default Homepage