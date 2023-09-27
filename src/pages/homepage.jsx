import React from 'react'
import DashboardSidebar from '../components/dashboard-sidebar'
import {UserAuth} from '../context/AuthContext'

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
            <div className='w-80 h-52 bg-blue-300 self-center mt-8 flex p-4'>
              <div className='bg-blue-500 h-32 m-2 text-center text-2xl w-1/2'><p>Request virtual<br /> card</p></div>
            <div className='bg-orange-600 h-32 m-2 w-1/2 text-center text-2xl'><p>Request Physical Card</p></div>
          </div>
     
    </div>
  )
}

export default Homepage