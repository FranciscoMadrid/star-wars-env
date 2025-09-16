import { StaticImageData } from 'next/image';
import TemplateImage from '../../public/placeholder-image.png'
import { Clapperboard } from 'lucide-react';
import Link from 'next/link';
import React from 'react'

interface MovieCardProps {
    image?: string;
    title?: string;
    subtitle?: string;
    imageHeight?: string;
    link?: string
}

export default function MovieCard({
    image = TemplateImage.src,
    title ='Default Title',
    subtitle = "Default Subtitle",
    imageHeight = 'h-[25vh]',
    link = '/'
}: MovieCardProps) {
    return (
        <div className={`w-full relative bg-background backdrop-blur-2xl rounded-2xl overflow-hidden group ${imageHeight}`}>
            {/* Background Image */}
            <Link href={link}>
                <img src={image} className={`object-cover w-full  ${imageHeight}`}/>
            </Link>
            <div className=' absolute bottom-0 border-t-4 border-highlight left-0 p-4 w-full bg-background transform translate-y-full group-hover:translate-y-0 duration-300 flex flex-col items-center justify-center'>
                <div className=' flex flex-row gap-2 items-center justify-evenly'>
                    <Clapperboard size={32} color='white'/>
                    <p className='text-white font-bold'>{title}</p>
                </div>
                <p className='text-white font-light'>{subtitle}</p>
            </div>
        </div>
    )
}
