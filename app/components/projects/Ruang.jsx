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
    { url: assets.index_peminjaman_ruang },
    { url: assets.index_tabel_peminjaman_ruang },
    { url: assets.kalender_ketersediaan_peminjaman_ruang },
    { url: assets.form_peminjaman_ruang },
    ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => setCurrentIndex(i => i===0 ? slides.length-1 : i-1);
  const nextSlide = () => setCurrentIndex(i => i===slides.length-1 ? 0 : i+1);
  const goToSlide = (i) => setCurrentIndex(i);

  return (
    <main className="min-h-screen bg-white dark:bg-darkTheme transition-colors duration-300">
      <NavbarProject isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

      {/* === IMAGE SECTION === */}
      <section className="pt-24 max-w-[1400px] w-full m-auto px-4">
        <h1 className="font-Playfair font-semibold text-4xl text-center text-black dark:text-white">
          UIIRuang
        </h1>
        <hr className="mt-3 mb-6 border-black/20 dark:border-white/30" />

        {/* Image container (fixed height) */}
        <div className="relative group h-[780px] w-full rounded-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, scale: 0.985, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.985, y: -12 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <Image
                src={slides[currentIndex].url}
                alt=""
                fill
                sizes="100vw"
                className="rounded-2xl object-contain"
                priority
              />
            </motion.div>
          </AnimatePresence>

          {/* Arrows (centered vertically inside the image box) */}
          <button
            onClick={prevSlide}
            aria-label="Previous slide"
            type="button"
            className="hidden group-hover:flex items-center justify-center absolute left-5 top-1/2 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white hover:bg-black/40 hover:scale-110 transition-all duration-300"
          >
            <BsChevronCompactLeft size={30} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next slide"
            type="button"
            className="hidden group-hover:flex items-center justify-center absolute right-5 top-1/2 -translate-y-1/2 text-2xl rounded-full p-2 bg-black/20 text-white hover:bg-black/40 hover:scale-110 transition-all duration-300"
          >
            <BsChevronCompactRight size={30} />
          </button>
        </div>

        {/* Dots */}
        <div className="flex items-center justify-center gap-2 mt-4">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              aria-label={`Go to slide ${i + 1}`}
              type="button"
              className={`text-2xl transition-colors duration-300 ${
                currentIndex === i
                  ? "text-blue-500 dark:text-white"
                  : "text-gray-400 dark:text-gray-300"
              } hover:text-blue-700 dark:hover:text-gray-100`}
            >
              <RxDotFilled />
            </button>
          ))}
        </div>

        <hr className="mt-8 border-black/20 dark:border-white/30" />
      </section>

      {/* === VIDEO SECTION === */}
      <section className="max-w-[1400px] w-full m-auto px-4 mt-4">
        <h1 className="font-Playfair font-semibold text-4xl text-center text-black dark:text-white">
          Demo Aplikasi UIIRuang
        </h1>

        {/* Centered, not full width, fixed height (tweak as you like) */}
        <div className="mx-auto mt-6 w-full max-w-[1000px] h-[520px] overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://youtu.be/syMpX5U4n8E?si=lUvDGdRZWLnD4THl"
            title="Demo Aplikasi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Back */}
        <div className="flex justify-center mt-10 mb-10">
          <Link
            href="/"
            className="bg-white border border-black hover:bg-gray-200 text-black font-semibold py-1 px-6 rounded-md dark:bg-white dark:text-black dark:hover:bg-gray-200"
          >
            Kembali
          </Link>
        </div>
      </section>
    </main>
  );

}
