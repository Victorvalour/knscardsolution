import React from 'react'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import userIMG from '../images/user.svg'
import { UserAuth } from '../context/AuthContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faCreditCard, faHouse, faFileInvoice, faWallet, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const DashboardSidebar = () => {
    const { user, logout} = UserAuth()
    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    
    const navigate = useNavigate()
    const handleLogout = async () => {
        try {
            await logout()
            navigate('/signin')
        } catch (e) {
            console.log(e.message)
        }
    }
  return (
    <div>



<section className=" bg-white justify-between w-full h-[8vh] pt-3">
<div className='flex w-full justify-between items-center px-3'>
        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {() => toggleMobileNav()}
        className="flex flex-col space-y-1 "
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:10},
            }} 
            className="w-12 h-1.5 bg-black block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-12 h-1.5 bg-black block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-10},
            }} 
             className="w-12 h-1.5 bg-black block rounded-sm"></motion.span>
        </motion.button>

        <p className='text-2xl'></p>

        <FontAwesomeIcon icon={faBell} size="xl" />
</div>
    <AnimatePresence>
{mobileNav && ( <motion.div 
key="mobile-nav"
variants={{
    open:{
        x: "0%"
    },
    closed: {
        x: "-180%"
    }
}} 
initial="closed"
animate="open"
exit="closed"

className="fixed h-[60vh]  shadow-[5px_5px_10px_0px_rgba(0,0,0,0.8)] top-[8vh] bg-white w-[80vw] rounded-2xl flex flex-col pt-16 pb-6 text-center  justify-between">
           
               <div className='flex flex-col space-y-12'>
             
                    <div key="1"
                    className="border-b-2 flex ml-[20%] gap-5 items-center">
                        <FontAwesomeIcon size='xl' icon={faHouse} />
                        <a href="#"
                        className="text-2xl font-bold">Home</a>
                    </div>
                    <div  key="2"
                    className="border-b-2 flex ml-[20%] gap-5 items-center">
                        <FontAwesomeIcon size='xl' icon={faCreditCard} />
                        <a href="#"
                        className="text-2xl ">My cards</a>
                    </div>
                    <div  key="3"
                    className="border-b-2 flex ml-[20%] gap-5 items-center">
                        <FontAwesomeIcon size='xl' icon={faFileInvoice} />
                        <a href="#"
                        className="text-2xl">Transactions</a>
                    </div>
                    <div  key="3"
                    className="border-b-2 flex ml-[20%] gap-5 items-center">
                        <FontAwesomeIcon size='xl' icon={faWallet} />
                        <a href="#"
                        className="text-2xl">Accounts</a>
                    </div>
                    </div>

                    <div  key="4"
                    className="gap-5 flex justify-center items-center">

                        <FontAwesomeIcon icon={faArrowRightFromBracket} size='xl'/>
                        <a href="#"
                        className="text-2xl font-bold "
                        onClick={handleLogout}>Log Out</a>
               
                </div>
         

</motion.div>)}
</AnimatePresence>
</section>
    </div>

  )
}

export default DashboardSidebar