import type { Film } from "../type/starwars";

const baseURL = 'https://swapi.info/api/';

/* Fetches all films */
export async function fetchFilms(): Promise<Film[]>{
    "use server";
    try {
        const res = await fetch(`${baseURL}/films`);
        if(!res.ok) throw new Error("Failed to fetch films");
        return res.json()
    } catch (error) {
        console.error("Error fetching films:", error);
        return [];
    }
}
/* Fetches specified film */
export async function fetchFilm(id: string) {
    "use server";
    try {
        const res = await fetch(`${baseURL}/films/${id}`)
        if (!res.ok) throw new Error("Failed to fetch film");
        return res.json()
    } catch (error) {
                console.error("Error fetching films", error);
        return null;
    }
}