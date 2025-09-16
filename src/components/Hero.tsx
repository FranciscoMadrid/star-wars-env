import React from 'react'
import TemplateImage from '../../public/bg-deathstar.jpg'
import { StaticImageData } from 'next/image'

interface HeroProps {
    image: StaticImageData,
    title?: string,
    subtitle?: string,
}

export default function Hero({
    image = TemplateImage,
    title ='',
    subtitle =''
}: HeroProps) {
    return (
        <section className='w-full relative min-h-screen flex items-center justify-center'>
            {/* Text Content */}
            <div className='relative z-10 flex flex-col gap-2 px-4 h-full items-center justify-evenly'>
                <h1 
                    className='text-4xl md:text-5xl lg:text-7xl font-bold text-primary'>
                    {title}
                </h1>
                <p className='text-lg md:text-2xl mb-6 text-white'>
                    {subtitle}
                </p>
            </div>

            {/* Background Image */}
            <img 
                src={image.src} 
                alt={title}
                className=' absolute inset-0 w-full h-full object-cover'/>
        </section>
    )
}
