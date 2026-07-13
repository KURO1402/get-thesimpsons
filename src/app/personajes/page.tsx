import { simpsonsApi } from "@/api/simpsons"

interface Personaje {
    id: number,
    name: string
}

export default async function PersonajesPage() {
    const personajes = await simpsonsApi.getPersonajes();
    return(
        <main className="flex flex-1 flex-col">
            <h1>Personajes</h1>
            <div>
                {personajes.map((p: Personaje) => (
                    <div key={p.id}>
                        <p>
                            {p.name}
                        </p>
                    </div>
                ))}
                
            </div>
        </main>
    )
}