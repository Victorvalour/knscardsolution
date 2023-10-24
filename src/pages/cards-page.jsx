import React, { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import DashboardSidebar from '../components/dashboard-sidebar';
import { motion } from 'framer-motion';
import logo from '../images/KNS-LOGO-PNG.png'
import cardChip from '../images/card-chip.png'

const Cards = () => {
 const [cards, setCards] = useState([])

    const userSudoId = localStorage.getItem('userSudoId');

    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGNjZWYwOTRhNzU0YTY1YTM3MGQ0YWUiLCJlbWFpbEFkZHJlc3MiOiJ5b3VuZ3N0aW1keUB5YWhvby5jb20iLCJqdGkiOiI2NTJhOWNjYWJmY2NiOGQ2OTA2ZTFlZGUiLCJtZW1iZXJzaGlwIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmYyIsImJ1c2luZXNzIjp7Il9pZCI6IjY0ZjFkOGQ3YWVkOTFmOTMwMmNhZDdmOSIsIm5hbWUiOiJLTlMgQ0FSRCBTT0xVVElPTiBMVEQiLCJpc0FwcHJvdmVkIjp0cnVlfSwidXNlciI6IjY0Y2NlZjA5NGE3NTRhNjVhMzcwZDRhZSIsInJvbGUiOiJBUElLZXkifSwiaWF0IjoxNjk3MjkxNDY2LCJleHAiOjE3Mjg4NDkwNjZ9.6dDwuzw6T3YmvbvrpnFFDRAqa1vpYd5Bbn2ySadVkU8'
        }
      };
      useEffect(() => {
      fetch(`https://api.sandbox.sudo.cards/cards/customer/${userSudoId}`, options)
        .then(response => response.json())
        .then((response) => {console.log(response.data)
        setCards(response.data)})
        .catch(err => console.error(err));
    }, [])

  return (
    <div>
        <DashboardSidebar />
       <p>Cards</p>

       <div className='relative -z-50 w-[400px] h-[250px] bg-black mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-gray-500 to-black'>
        <motion.div
        className='absolute w-3 blur-sm h-[400px] bg-white translate-x-6 -top-6 opacity-25'

        initial={{
        
            rotate: 24, x: 0
    }}
        animate={{
            x: "100VW"
        }}
        transition={{
            duration: 2, repeat: Infinity
        }}
      
        ></motion.div>
<div className='absolute left-5 top-5 w-20 rotate-90'><img src={cardChip} alt="" /></div>

        <div className='absolute bg-white w-24 right-8 top-8 rounded-2xl -skew-x-12 rounded-tl-[1.5rem] rounded-br-[1.5rem] overflow-hidden' > <img src={logo} alt="" /></div>
       
      
        <p className='font-ibmPlexMono absolute bottom-24 text-2xl text-yellow-400 left-16'>1234 5678 9101 1121</p>

       <div className='absolute flex bottom-[65px] text-lg text-white left-44'>
        <p className='leading-3 text-[11px]'>valid <br /> through</p>
         <p className=' bottom-[70px] text-lg text-white left-48'>| 12/24</p>
       </div>

        <p className='font-ibmPlexMono absolute bottom-6 text-2xl text-white left-16'>Test User</p>
        
       </div>

    </div>
  )
}

export default Cards