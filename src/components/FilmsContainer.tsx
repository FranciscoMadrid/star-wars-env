import React from 'react'
import CardContainer from './CardContainer'
import { fetchFilms } from '@/app/actions/starwars'

export default async function FilmsContainer() {
    const films = await fetchFilms();
    return <CardContainer initialFilms={films}/>
}
