import React from "react";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Logo from "../images/KNS-LOGO-PNG.png"


export default function Landing() {

const [mobileNav, toggleMobileNav] = useCycle(false, true)

return (
    <div className="flex flex-col">
        <section className="flex drop-shadow-lg bg-white justify-between w-full h-20 pt-3">
            <div className="flex items-center">
                <img src={Logo} alt="" className="w-20 h-16 p-0" />
                <h2 className="font-gothic"><span className="text-cobalt text-lg">KNS</span><span className="text-orange-500">CARD</span>SOLUTION</h2>
            </div> 
            <div>
                    <motion.button 
                    animate={mobileNav ? "open" : "closed"}
                    onClick= {() => toggleMobileNav()}
                    className="flex flex-col space-y-1 mt-5"
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
        
        className="fixed right-0 top-20 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.8)] bg-slate-500 w-64">
                        <div>
                            <ul className="flex flex-col text-center my-10 space-y-12">
                                <li>
                                    <a href="#"
                                    className="text-2xl font-bold text-white">Home</a>
                                </li>
                                <li>
                                    <a href="#"
                                    className="text-2xl font-bold text-white ">Create free account</a>
                                </li>
                                <li>
                                    <a href="#"
                                    className="text-2xl font-bold text-white">About</a>
                                </li>
                                <li>
                                    <a href="#"
                                    className="text-2xl font-bold text-white">Contact Us</a>
                                </li>
                            </ul>
                        </div>
            </motion.div>)}
            </AnimatePresence>
        </section>
              <div>
                <p className="text-4xl w-2/4 mt-12 ml-5 font-bold">
The <span className="text-cyan-700">NO. 1</span> solution to all your card needs.
</p>
        </div>
        <div className="mt-8 mx-5">
            <p className="text-lg ">Have you been searching for ways on how to get virtual or physical cards?</p>
            <p>Well, look no further! KNSCARDSOLUTION has got you covered.</p>
            <p>With KNSCARDSOLUTION, you can get safe, trusted and reliable virtual or physical cards to handle all your transactions across all platforms</p>
        </div>

        <button className="self-center rounded-md bg-gradient-to-r from-purple-500 to-cyan-600 hover:from-red-700 hover:to-purple-900  w-44 h-12">Create a free account</button>
        
    </div>
)


}