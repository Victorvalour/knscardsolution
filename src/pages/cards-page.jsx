import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import DashboardSidebar from '../components/dashboard-sidebar';
import { motion } from 'framer-motion';

const Cards = () => {
  return (
    <div>
        <DashboardSidebar />
       <p>Cards</p>

       <div className='relative w-[450px] h-[300px] bg-black mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-gray-500 to-black'>
        <motion.div
        className='absolute w-3 blur-sm h-[400px] bg-white translate-x-6 -top-6 opacity-25'

        initial={{
        
            rotate: 24, x: 0
    }}
        animate={{
            x: "100VW"
        }}
        transition={{
            duration: 3, repeat: Infinity
        }}
      
        ></motion.div>
      
        <p className='absolute bottom-32 text-4xl text-yellow-500 left-16'>1234 5678 9101 1121</p>
        
       </div>

    </div>
  )
}

export default Cards