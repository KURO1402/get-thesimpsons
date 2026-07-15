"use client"
import { simpsonsApi } from "@/api/simpsons"

export default async function ButoonNext({count}: {count:number}) {
    const siguientePage = async () => {
        count++;
        const personajes = await simpsonsApi.getPersonajes(count);
        return personajes;
    }
    
    return (
        
        <button className="bg-yellow-500 p-3 rounded-xl" onClick={siguientePage}>
            Siguiente
        </button>
    )
}