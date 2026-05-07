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
    { url: assets.cek_pengajuan },
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
          Demo Aplikasi UIIKunjungan
        </h1>
        
        <hr className="mt-3 mb-6 border-black/20 dark:border-white/30" />

        {/* Centered, not full width, fixed height (tweak as you like) */}
        {/* === VIDEO SECTION === */} 
        <div className="mx-auto mt-6 w-full max-w-[1000px] h-[520px] overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/BC79KbXZbAw"            
            title="Demo Aplikasi"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Back */}
        <div className="flex justify-center mt-10">
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
