import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Logo from "../images/KNS-LOGO-PNG.png"

export default function Navbar() {

    const [mobileNav, toggleMobileNav] = useCycle(false, true)
    
    return (

<section className="flex drop-shadow-lg bg-white justify-between w-full h-20 pt-3">
<div className="flex items-center">
    <img src={Logo} alt="" className="w-20 h-16 p-0" />
    <h2 className="font-gothic"><span className="text-cobalt text-lg">KNS</span><span className="text-orange-500">CARD</span>SOLUTION</h2>
</div> 
<div>
        <motion.button 
        animate={mobileNav ? "open" : "closed"}
        onClick= {() => toggleMobileNav()}
        className="flex flex-col space-y-1 mt-5 mr-3"
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

className="fixed right-0 top-20 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.8)] bg-cobalt w-64">
            <div>
                <ul className="flex flex-col text-center my-10 space-y-12">
                    <li key="1"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold text-white">Home</a>
                    </li>
                    <li  key="2"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold text-white ">About</a>
                    </li>
                    <li  key="3"
                    className="border-b-2">
                        <a href="#"
                        className="text-2xl font-bold text-white">Contact Us</a>
                    </li>
                <Link to='/signup'>
                    <li  key="4"
                    className="">
                        <a href="#"
                        className="text-2xl font-bold text-white">Create a free account</a>
                    </li>
                    </Link>
                </ul>
            </div>
</motion.div>)}
</AnimatePresence>
</section>
    )
}