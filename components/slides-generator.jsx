"use client"

import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  { heading: 'Slide 1', text: 'This is the first slide content.' },
  { heading: 'Slide 2', text: 'This is the second slide content.' },
  { heading: 'Slide 3', text: 'This is the third slide content.' },
];

const SlidesGenerator = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className='flex flex-col items-center justify-center w-full h-full p-2 bg-amber-100 rounded-lg'>
        <div className='w-full h-3/4 bg-white p-6 rounded-lg shadow-lg text-center'>
            <h2 className='text-xl font-bold mb-2'>{slides[currentIndex].heading}</h2>
            <p className='text-gray-700'>{slides[currentIndex].text}</p>
        </div>
        {/* buttons theek hony mein time lagta hai boss */}
        <div className="flex justify-between w-full mt-4 p-4 items-center">

            <Button
                onClick={prevSlide}
                variant="outline"
                size="icon"
                className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                >
                <ChevronLeft className="w-6 h-6" />
            </Button>

            <h2 className=" bg-amber-50 w-1/2 p-2 text-xl font-bold text-black text-center rounded-lg">{slides[currentIndex].heading}</h2>

            <Button
                onClick={nextSlide}
                variant="outline"
                size="icon"
                className="bg-black text-white hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer"
                >
                <ChevronRight className="w-6 h-6" />
            </Button>


        </div>
    </div>
  );
};

export default SlidesGenerator;
