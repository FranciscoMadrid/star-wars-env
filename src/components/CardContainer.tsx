'use client'
import React, { useEffect, useState } from 'react'
import MovieCard from './MovieCard'
import { Film } from '@/app/type/starwars'
import { filmsDictionary } from '@/app/content/starwars-films'

interface CardContainerProps {
    initialFilms: Film[]
}

export default function CardContainer({
    initialFilms
}: CardContainerProps) {
    return (
        <div className=' flex flex-col gap-2 items-center justify-center p-4'>
            <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold mb-8 text-center tracking-wide text-primary'>
                The Galaxy Story Unfolds
            </h1>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 p-4'>
                {initialFilms.map((item) => (
                    <MovieCard
                        key={item.episode_id}
                        title={item.title}
                        subtitle={item.release_date}
                        imageHeight='h-[450px] md:h-[550px] lg:h-[600px]'
                        image={filmsDictionary[parseInt(item.episode_id)]}
                        link={`/film/${item.episode_id}`}
                    />
                ))}
            </div>
        </div>
    )
}
