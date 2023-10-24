import React, { useState } from 'react'
import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import DashboardSidebar from '../components/dashboard-sidebar';
import { motion } from 'framer-motion';
import logo from '../images/KNS-LOGO-PNG.png'
import cardChip from '../images/card-chip.png'
import { ToastContainer, toast } from "react-toastify";
import BottomNav from '../components/bottom-nav';

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
        setCards(response.data)
    if (response.data.length == 0) {
        toast('You don\'t have any cards', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }
})
        .catch(err => console.error(err));
    }, [])

  return (
    <div>
        <DashboardSidebar />
        <div className='mx-4'>
       <p className='text-2xl mb-4 font-semibold'>Cards</p>
       {cards.map((cardData) => 


    <div key={cardData._id}
    className='relative -z-50 w-[400px] h-[250px] bg-black mx-auto rounded-2xl overflow-hidden bg-gradient-to-r from-gray-500 to-black mb-12'>

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
       
      
        <p className='font-ibmPlexMono absolute bottom-24 text-2xl text-yellow-400 left-16'>{cardData.maskedPan.slice(0, 4)} {cardData.maskedPan.slice(4, 8)} {cardData.maskedPan.slice(8, 12)} {cardData.maskedPan.slice(12, 16)}</p>

       <div className='absolute flex bottom-[65px] text-lg text-white left-44'>
        <p className='leading-3 text-[11px]'>valid <br /> through</p>
         <p className=' bottom-[70px] text-lg text-white left-48'>| {cardData.expiryMonth}/{cardData.expiryYear}</p>
       </div>

        <p className='font-ibmPlexMono absolute bottom-6 text-2xl text-white left-16'>{cardData.customer.name}</p>
    
       </div>
)}


     {/*  
  */  } 
  </div>
  <ToastContainer/>
  <BottomNav />
    </div>
  )
}

export default Cards