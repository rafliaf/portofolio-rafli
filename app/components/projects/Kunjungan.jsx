"use client";
import { useTheme } from "../../hooks/useTheme";
import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
import { motion, AnimatePresence } from "framer-motion";
import { assets } from "../../../assets/assets";
import Image from "next/image";
import Link from "next/link";
import NavbarProject from "../navbar-project/Navbar-Project";

export default function Kunjungan() {
  const { isDarkMode, setIsDarkMode } = useTheme();

  const slides = [
    { url: assets.landing_page_kunjungan },
    { url: assets.page_pengajuan_kunjungan },
    { url: assets.pengajuan_detail },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex(i => i===0 ? slides.length-1 : i-1);
  const nextSlide = () => setCurrentIndex(i => i===slides.length-1 ? 0 : i+1);
  const goToSlide = (i) => setCurrentIndex(i);

  return (
    <main className="min-h-screen bg-white dark:bg-darkTheme transition-colors duration-300">
      <NavbarProject isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      <div className="pt-24 max-w-[1400px] w-full m-auto py-16 px-4 relative group">
        <h1 className="font-Playfair font-semibold text-4xl text-center text-black dark:text-white">
          UIIKunjungan
        </h1>
        <hr className="mt-3 mb-3 border-black/20 dark:border-white/30" />

        {/* Image (auto height + animation) */}
        <div className="relative w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.985, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: -12 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="w-full"
            >
              <Image
                src={slides[currentIndex].url}
                alt=""
                width={1400}
                height={800}
                className="w-full h-auto rounded-2xl object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Floating arrows on image (optional) */}
        <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 hover:scale-110 transition-all duration-300">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        <div className="hidden group-hover:block absolute top-1/2 -translate-y-1/2 right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer hover:bg-black/40 hover:scale-110 transition-all duration-300">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

        {/* Bottom nav: arrows + dots */}
        <div className="flex items-center justify-center gap-4 py-4">
          <button onClick={prevSlide} className="text-2xl p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300 dark:bg-white/20 dark:text-white dark:hover:bg-white/40" aria-label="Previous slide" type="button">
            <BsChevronCompactLeft />
          </button>

          <div className="flex items-center gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => goToSlide(i)}
                className={`text-2xl cursor-pointer transition-all duration-300 ${
                  currentIndex===i ? "text-blue-500 dark:text-white" : "text-gray-400 dark:text-gray-300"
                } hover:text-blue-700 dark:hover:text-gray-100`}
                aria-label={`Go to slide ${i+1}`}
                type="button"
              >
                <RxDotFilled />
              </button>
            ))}
          </div>

          <button onClick={nextSlide} className="text-2xl p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-all duration-300 dark:bg-white/20 dark:text-white dark:hover:bg-white/40" aria-label="Next slide" type="button">
            <BsChevronCompactRight />
          </button>
        </div>

        {/* Back */}
        <div className="flex justify-center">
          <Link href="/" className="bg-white border border-solid border-black hover:bg-gray-200 text-black font-semibold py-1 px-6 rounded-md dark:bg-white dark:text-black dark:hover:bg-gray-200">
            Kembali
          </Link>
        </div>
      </div>
    </main>
  );
}
