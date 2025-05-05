import { assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div>
            <Image src={assets.profile_img} alt='' className='rounded-full w-32'/>
        </div>
        <h3 className='flex items-end gap-2 text-xl md:text-2xl mb-3 font-Ovo'>Hi! I'm Rafli AF 
            <Image src={assets.hand_icon} alt='' className='w-6'/>
        </h3>
        <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-Ovo'>
            Frontend web developer based in Yogyakarta.
        </h1>            
        <p>
            I am a frontend developer from Klaten Jawa Tengah, 2 years experienced with Angular
        </p>

        {/* BTN */}
        <div>
            <a href='#contact' className=''>Contact me 
                <Image src={assets.right_arrow_white} alt='' className='w-4'/>
            </a>

            <a href='/sample-resume.pdf' download className='px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2'>
                My resume 
                <Image src={assets.download_icon} alt='' className='w-4'/>
            </a>
        </div>
    </div>
  )
}

export default Header