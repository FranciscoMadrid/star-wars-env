import React from 'react'
import { fetchFilm } from '@/app/actions/starwars';
import { filmsDictionary } from '@/app/content/starwars-films'
import { Film } from '@/app/type/starwars';
import { UserStar } from 'lucide-react';
import { BriefcaseBusiness } from 'lucide-react';

interface FilmPageProps {
    params: {
        slug: string
    }
}

export default async function FilmPage({params} : FilmPageProps) {
    const {slug} = await params;
    const film: Film = await fetchFilm(slug)
    const posterImage = filmsDictionary[parseInt(film.episode_id)]

    return(
        <section 
            style={{
                backgroundImage: 'url(/bg-space.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
            className="text-white h-full w-full pt-25 p-10">
            <div className="max-w-7xl mx-auto">
                <div className="w-full border-2 rounded-2xl overflow-hidden border-white grid grid-cols-1 md:grid-cols-2">
                <img
                    src={posterImage}
                    alt={`${film.title} Poster`}
                    className="w-full h-auto max-h-[800px] rounded-lg object-cover"/>

                    {/* Film Info */}
                    <div className="flex flex-col gap-10 items-center p-6 justify-evenly bg-background/20 backdrop-blur-2xl">
                        {/* Title and Release Date */}
                        <div className='flex flex-col gap-2 items-center'>
                            <h1 className="text-4xl font-bold tracking-wide text-primary text-center">
                                {film.title}
                            </h1>
                            <p className='text-xl font-light tracking-wide text-primary text-center'>{film.release_date}</p>
                        </div>

                        {/* Opening Crawl */}
                        <p className="text-lg md:text-xl font-light">{film.opening_crawl}</p>
                        
                        {/* Director */}
                        <div className="flex flex-row gap-2 justify-center items-center text-2xl md:text-4xl">
                            <UserStar className="w-6 h-6 md:w-10 md:h-10" color="white" />
                            <span className="text-lg md:text-xl">Director: {film.director}</span>
                        </div>
                        {/* Producer */}
                        <div className="flex flex-row gap-2 justify-center items-center text-2xl md:text-4xl">
                            <BriefcaseBusiness className="w-6 h-6 md:w-10 md:h-10" color="white" />
                            <span className="text-lg md:text-xl">Producer: {film.producer}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}