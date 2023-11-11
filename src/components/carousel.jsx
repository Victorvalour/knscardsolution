import React, { useEffect, useState } from "react";

import leftArrow from "../images/left-arrow.png"
import rightArrow from "../images/right-arrow.png"
import Image1 from "../images/carousel 1.jpg"
import Image2 from "../images/carousel 2.jpg"
import Image3 from "../images/carousel 3.jpg"

const images = [
    Image1,
    Image2,
    Image3  
]

  export default function Carousel() {
const [currentSlide, setCurrentSlide] = useState(0)
const prev = () => setCurrentSlide((currentSlide) => ((currentSlide) === 0 ? images.length -1 : currentSlide - 1))

const next = () => setCurrentSlide((currentSlide) => (currentSlide === images.length - 1 ? 0 : currentSlide + 1))

const autoslide = true
const autoSlideInterval = 4000

useEffect(() => {
    if (!autoslide) return 
    const slideInterval = setInterval(next, autoSlideInterval)
    return () => clearInterval(slideInterval)
}, [])

  return (
    <div className="lg:hidden carousel-container overflow-hidden relative">
     
      <div className="carousel-slides flex transition-transform ease-out duration-500" style={{transform: `translateX(-${currentSlide * 100}%)`}}>
        {images.map((image, index) => (
    
            <img src={image} alt={`Slide ${index}`} className="w-full h-auto" />
    ))    }
        </div>
     <div className="absolute inset-0 flex items-center justify-between ">
        <button onClick={prev}
        className="w-12">
            <img src={leftArrow} alt="" />
        </button>
        <button onClick={next}
        className="w-12">
            <img src={rightArrow} alt="" />
        </button>

        </div>
        <div className="absolute bottom-4 right-0 left-0">
            <div className="flex items-center justify-center gap-2">
                {images.map((_, i) => (
                    <div className={`transition-all w-3 h-3 bg-white rounded-full ${currentSlide === i ? "p-2" : "bg-opacity-50"}`} />
                ))
                }

            </div>

        </div>

    </div>
        )
};


