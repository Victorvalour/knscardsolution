import React from 'react'
import { motion, useCycle, AnimatePresence } from 'framer-motion'
import { Link, useNavigate } from 'react-router-dom'
import userIMG from '../images/user.svg'
import { UserAuth } from '../context/AuthContext'

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



<section className="flex drop-shadow-lg bg-white justify-between w-full h-20 pt-3">
<div className='flex w-full justify-between items-center px-3'>
        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {() => toggleMobileNav()}
        className="flex flex-col space-y-1 mr-3"
        >
            <motion.span variants={{
                closed: { rotate:0, y: 0},
                open: { rotate:45, y:10},
            }} 
            className="w-12 h-1.5 bg-orange-500 block rounded-sm"></motion.span>
            <motion.span variants={{
                closed: { opacity: 1},
                open: { opacity: 0},
            }} 
            className="w-12 h-1.5 bg-orange-500 block rounded-sm"></motion.span>
            <motion.span  variants={{
                closed: { rotate: 0, y:0},
                open: { rotate: -45, y:-10},
            }} 
             className="w-12 h-1.5 bg-orange-500 block rounded-sm"></motion.span>
        </motion.button>

        <p className='text-2xl'>Dashboard</p>

        <img src={userIMG} alt="" className='w-10 h-10' />
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

className="fixed  top-20 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.8)] bg-cobalt w-64">
            <div>
                <div className="flex flex-col text-center my-10 space-y-12">
                    <div key="1"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl bg-slate-500 font-bold text-white">Home</a>
                    </div>
                    <div  key="2"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold text-white ">My cards</a>
                    </div>
                    <div  key="3"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold text-white">Orders</a>
                    </div>
                
                    <div  key="4"
                    className="">
                        <a href="#"
                        className="text-2xl font-bold text-white"
                        onClick={handleLogout}>Log Out</a>
                    </div>
                  
                </div>
            </div>
</motion.div>)}
</AnimatePresence>
</section>
    </div>

  )
}

export default DashboardSidebar