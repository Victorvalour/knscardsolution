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
<div className="flex mb-5 mt-12">
              <div className="w-2/4 mb-5 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
                <p className="text-4xl ml-5 font-bold">
The <span className="text-cobalt">NO. 1</span> solution to all your card needs.
</p>
</div>
<motion.div
            id="card-spin"
            className="w-2/4 h-full -z-10 p-4"
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <img
              src={creditCard}
              alt="Credit Card"
              className="w-full h-full"
            />
          </motion.div>
      
        </div>

     <Link to='/signup' className="w-48 mx-auto">
       <button
     className="self-center rounded-md bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-red-700 hover:to-purple-900 font-bold w-48 h-12 shadow-[0px_10px_10px_0px_rgba(25,53,171,0.75)] text-white">Create a free account
        </button>
     </Link>



        <div className="mt-8 mx-5">
            <p className="text-lg ">Have you been searching for ways on how to get virtual or physical cards?</p>
            <p  className="text-lg ">Well, look no further! KNSCARDSOLUTION has got you covered.</p>
            <p  className="text-lg ">With KNSCARDSOLUTION, you can get safe, trusted and reliable virtual or physical cards to handle all your transactions across all platforms</p>
        </div>

        <Carousel />
        
    </div>
)


}