import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import creditCard from "../images/credit-card.png"

import Carousel from "../components/carousel";

export default function Landing() {


return (
    <div className="flex flex-col">

            <Navbar />
<div className="flex  mb-5 mt-12">
             
                <p className="text-4xl mx-8 font-bold">
The <span className="text-cobalt">NO. 1</span> solution to all your card needs.
</p>
        </div>
        <p className="text-xl mx-8 mb-10 font-spaceGrotesk">
        Welcome to <span className="text-blue-900 font-semibold font-spaceGrotesk">kns card solution</span>, your one-stop destination for seamless payment solutions. Whether you need a virtual card for online purchases or a physical card for in-store transactions, we've got you covered.
</p>
      

     <Link to='/signup' className="w-48 mx-auto mb-10">
       <button
     className="self-center rounded-md bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-red-700 hover:to-purple-900 font-semibold w-56 h-12 shadow-[0px_10px_10px_0px_rgba(183,194,242,0.75)] text-white text-lg">Create a free account
        </button>
     </Link>

     <div>

      <p className="text-center text-2xl">&#128512;&#128512;&#128512;</p>
        <p className="text-xl mx-8 font-spaceGrotesk">Join millions of satisfied customers who trust <span className="text-blue-900 font-semibold">kns card solution </span>for their payment needs. Sign up now and take control of your finances like never before.</p>
      </div>

     <motion.div
            id="card-spin"
            className="w-80 h-72 -z-10 p-4 mx-auto"
            initial={{ y: 0 }}
            animate={{ y: 30 }}
            transition={{ duration: 1, repeat: Infinity, repeatType: 'reverse', ease :"easeIn"}}
          >
            <img
              src={creditCard}
              alt="Credit Card"
              className="w-full h-full"
            />
          </motion.div>


     
        <div className="mt-8 mx-5">
            <p className="text-lg ">Have you been searching for ways on how to get virtual or physical cards?</p>
            <p  className="text-lg ">Well, look no further! KNSCARDSOLUTION has got you covered.</p>
            <p  className="text-lg ">With KNSCARDSOLUTION, you can get safe, trusted and reliable virtual or physical cards to handle all your transactions across all platforms</p>
        </div>

        <Carousel />
        
    </div>
)


}