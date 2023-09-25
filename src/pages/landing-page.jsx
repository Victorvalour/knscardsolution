import React from "react";
import { motion, useCycle } from "framer-motion";


export default function Landing() {

const [mobileNav, toggleMobileNav] = useCycle(false, true)

return (
    <div>
        <section className="flex drop-shadow-lg bg-white justify-between w-full h-16 p-5">
            <div>
                <h2>KNSCARDSOLUTION</h2>
            </div> 
            <div>
                    <motion.button 
                    animate={mobileNav ? "open" : "closed"}
                    onClick= {() => toggleMobileNav()}
                    className="flex flex-col space-y-1"
                    >
                        <motion.span variants={{
                            closed: { rotate:0, y: 0},
                            open: { rotate:45, y:8},
                        }} 
                        className="w-8 h-1 bg-orange-500 block rounded-sm"></motion.span>
                        <motion.span variants={{
                            closed: { opacity: 1},
                            open: { opacity: 0},
                        }} 
                        className="w-8 h-1 bg-orange-500 block rounded-sm"></motion.span>
                        <motion.span  variants={{
                            closed: { rotate: 0, y:0},
                            open: { rotate: -45, y:-8},
                        }} 
                         className="w-8 h-1 bg-orange-500 block rounded-sm"></motion.span>
                    </motion.button>
            </div>
            {mobileNav && ( <div className="fixed right-0 top-16 shadow-[10px_10px_10px_0px_rgba(0,0,0,0.8)] bg-slate-500 w-64">
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
            </div>)}
           
        </section>
              <div>
                <p className="text-4xl w-2/4 mt-12 ml-5 font-bold">
The <span className="text-green-700">NO. 1</span> solution to all your card needs.
</p>
        </div>
        <div>
            <p>Have you been searching for ways on how to get virtual or physical cards?</p>
            <p>Well, look no further!</p>
            <p>KNSCARDSOLUTION has got you covered.</p>
            <p>With KNSCARDSOLUTION, you can get safe, trusted and reliable virtual or physical cards to handle all your transactions across all platforms</p>
        </div>
        
    </div>
)


}