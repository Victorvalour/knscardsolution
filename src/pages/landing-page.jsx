import React from "react";
import { Link } from "react-router-dom";
import { motion, useCycle, AnimatePresence } from "framer-motion";
import Navbar from "../components/navbar";
import creditCard from "../images/credit-card.png"
import Image1 from "../images/carousel 1.jpg"
import Image2 from "../images/carousel 2.jpg"
import Image3 from "../images/carousel 3.jpg"
import Carousel from "../components/carousel";

export default function Landing() {


return (
    <div className="flex flex-col">

            <Navbar />
            <div className="flex flex-col md:flex-row">
              <div className="md:w-[50%] xl:text-[1.5em]">
<div className="flex  mb-5 mt-12 ">
             
                <p className="text-4xl lg:text-5xl xl:text-6xl mx-8 font-bold text-cobalt">
                  
The <span className="text-black">NO. 1</span> solution to all your payment needs.
</p>
        </div>
        <p className="text-xl lg:text-2xl mx-8 mb-10 font-spaceGrotesk">
        Welcome to <span className="text-blue-900 font-semibold font-spaceGrotesk">kns card solution</span>, your one-stop destination for seamless payment solutions. Whether you need a virtual card for online purchases or a physical card for in-store transactions, we've got you covered.
</p>

    <div className="w-full flex ">
     <Link to='/signup' className="w-48  mx-auto mb-10">
       <button
     className="self-center lg:text-2xl rounded-md bg-gradient-to-r from-purple-800 to-cyan-800 hover:from-red-700 hover:to-purple-900 font-semibold w-56 h-12 lg:w-72 lg:h-16 shadow-[0px_10px_10px_0px_rgba(183,194,242,0.75)] text-white text-lg">Create a free account
        </button>
     </Link>
     </div>

     </div>
     
     <motion.div
            id="card-spin"
            className="w-80 md:w-[400px] md:h-[300px] lg:w-[500px] lg:h-[400px] h-72 -z-10 p-4 mx-auto"
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

          </div>

          <div>

<p className="text-center text-2xl">&#128512;&#128512;&#128512;</p>
  <p className="text-xl lg:text-2xl mx-8 font-spaceGrotesk">Join millions of satisfied customers who trust <span className="text-blue-900 font-semibold">kns card solution </span>for their payment needs. Sign up now and take control of your finances like never before.</p>
</div>
     
        <div className="mt-4">
        <p className="text-2xl lg:text-3xl mx-8 font-bold text-cobalt">
        Why Choose Us?
</p>

<ul className="text-xl mx-8 font-spaceGrotesk lg:text-2xl mt-4">
  <li><span className="font-bold">&#x2022; Instant Access:</span> Get your virtual card instantly upon sign-up and have the physical card delivered to your doorstep.</li>
  <li><span className="font-bold">&#x2022; Enhanced Security:</span> Our cutting-edge technology ensures your financial information is safe and secure.</li>
  <li><span className="font-bold">&#x2022; Global Acceptance:</span> Use our cards worldwide, online and offline, wherever Visa or Mastercard is accepted.</li>
</ul>
            
  
        </div>
        
        <div className="mx-auto flex justify-around w-full">
        <Carousel />
        </div>
        <div className="hidden lg:flex w-full mx-auto justify-between ml-2 mt-10">
        <img src={Image1} className="w-[33%]" alt="Image 1" />
        <img src={Image2} className="w-[33%]" alt="Image 2" />
        <img src={Image3} className="w-[33%]" alt="Image 3" />
        </div>
        
    </div>
)


}