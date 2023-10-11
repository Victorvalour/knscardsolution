import React from 'react'
import DashboardSidebar from '../components/dashboard-sidebar'
import {UserAuth} from '../context/AuthContext'
import BottomNav from '../components/bottom-nav'

const Homepage = () => {

  const { user, logout} = UserAuth()
  return (
    <div className='flex flex-col '>
       
          <DashboardSidebar />

          <div>
            <p className='text-2xl font-semibold pl-5 pt-5'>
              Welcome, {user && user.email}
            </p>
            </div>
            <div className='w-80 rounded-xl h-52 bg-blue-300 self-center mt-8 flex p-4'>
              <div className='bg-blue-600 rounded-xl h-32 m-2 text-center text-2xl w-1/2 hover:bg-blue-500'><p className='text-white font-bold'>Request virtual<br /> card</p></div>
            <div className='bg-orange-600 rounded-xl h-32 m-2 w-1/2 text-center text-2xl hover:bg-orange-500'><p className='text-white font-bold'>Request Physical Card</p></div>
          </div>

          <BottomNav />
     
    </div>
  )
}

export default Homepage