import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Logo from "../images/KNS-LOGO-PNG.png"

export default function Navbar() {

    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    
    return (

<section className=" flex drop-shadow-lg bg-white justify-between w-full h-20 pt-3">
<div className=" flex items-center">
    <img src={Logo} alt="" className="w-20 h-16 p-0" />
    <h2 className="font-gothic  text-sm"><span className="text-cobalt text-lg">KNS</span><span className="text-orange-500">CARD</span>SOLUTION</h2>
</div> 
        <div className="hidden xl:flex items-end mb-4 gap-6 mr-[10%] text-lg font-spaceGrotesk font-semibold">
        <p className=" px-8 h-8 -skew-x-12">Home</p>
        <p className=" px-5 h-8 -skew-x-12">About</p> 
        <p className=" px-3 h-8 -skew-x-12">Contact Us</p>
        <Link to='/signup'> <p className=" px-2 h-8 -skew-x-12">Create Account</p>   </Link>
            
        </div>
        <Link to='/signin'>
    <div className="hidden xl:flex w-32 h-14 justify-center items-center text-white text-xl bg-cobalt rounded-2xl"><p>Sign In</p></div>
    </Link>
<div className="xl:hidden">
        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {() => toggleMobileNav()}
        className="flex flex-col space-y-1 mt-5 mr-3"
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

className="fixed  right-0 shadow-[5px_5px_10px_0px_rgba(0,0,0,0.8)] top-[8vh] sm:top-[80px] bg-white w-[80vw] md:w-[500px] rounded-2xl flex flex-col pt-16 pb-6 text-center  justify-between">
            <div>
                <ul className="flex flex-col text-center my-10 space-y-12">
                    <li key="1"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold ">Home</a>
                    </li>
                    <li  key="2"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold  ">About</a>
                    </li>
                    <li  key="3"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold ">Contact Us</a>
                    </li>
                <Link to='/signup'>
                    <li  key="4"
                    className="">
                        <div
                        className="text-2xl font-bold border-b-2 ">Create a free account</div>
                    </li>
                    </Link>

                    <Link to='/signin'>
                    <li  key="5"
                    className="text-2xl font-bold ">
                       Sign In
                    </li>
                    </Link>
                </ul>
            </div>
</motion.div>)}
</AnimatePresence>
</section>
    )
}