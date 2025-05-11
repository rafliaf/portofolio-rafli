import { assets, workData } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Work = () => {
  return (
    <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-Ovo'>My portofolio</h4>
        <h2 className='text-center text-5xl font-Ovo'>My latest work</h2>

        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
            Welcome to my web development portofolio! Explore a collection of projects showcasing my expertise in front-end development.
        </p>

        {/* work data */}
        <div className='grid grid-cols-auto my-10 gap-5'>
            {workData.map((project, index) => (
                <div key={index} style={{ backgroundImage: `url(${project.bgImage})` }} className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer'>
                    <div>
                        <h2>{project.title}</h2>
                        <p>{project.description}</p>
                    </div>
                    <div>
                        <Image src={assets.send_icon} alt='send icon' className='w-5'/>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work