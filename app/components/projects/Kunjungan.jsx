"use client";
import React, { createContext, useState  } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import {assets} from '../../../assets/assets'
import Image from "next/image";
import "../../globals.css";


const Kunjungan = () => {
  const slides = [
    {
      url: assets.landing_page_kunjungan,
    },
    {
      url: assets.page_pengajuan_kunjungan
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  const [isScroll, setIsScroll] = useState(false);
  

  return (
    <div>
      {/* content */}
      <div className='max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group'>
        <h1 className='font-Playfair font-semibold text-4xl'>UIIKunjungan</h1>
        <hr className='mt-3 mb-3' />
        <Image 
          src={slides[currentIndex].url} 
          alt=''
          className='w-full h-full rounded-2xl object-contain'
          />

        {/* Left Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 hover:scale-110 transition-all duration-300'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 hover:scale-110 transition-all duration-300'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`text-2xl cursor-pointer transition-all duration-300 ${
                currentIndex === slideIndex
                  ? 'text-blue-500' // Active dot color
                  : 'text-gray-400' // Inactive dot color
              } hover:text-blue-700`} // Hover effect
            >
              <RxDotFilled />
            </div>
          ))}
        </div>

        {/* btn kembali */}
        <div className='flex justify-center'>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md justify-center">
          Kembali
        </button>
        </div>
      </div>
    </div>
  )
}

export default Kunjungan