'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';

export default function Navbar() {
    const [opacity, setOpacity] = useState(0);
    
    /* Handles Dynamic Opacity */
    useEffect(() => {
        const handleScroll = () => {
            const newOpacity = Math.min(window.scrollY / 300, 1);
            setOpacity(newOpacity);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup on unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav /* Background Color set to color-background rgb values */
            className='w-full p-4 text-2xl fixed top-0 left-0 transition-opacity duration-300 ease-in-out z-100'
            style={{backgroundColor: `rgba(0, 0, 0, ${opacity})`}}>
            <div className='flex flex-row max-w-7xl mx-auto items-center gap-2 justify-between'>
                {/* Icon and Title */}
                <Link 
                    href='/'
                    className='flex flex-row gap-2 items-center font-bold transition ease-in-out duration-300 text-white hover:text-primary'>
                        <img src="/millennium-falcon-light.png" className='h-12 w-12'/>
                        <span>Star Wars</span>
                </Link>
            </div>
        </nav>
    )
}
