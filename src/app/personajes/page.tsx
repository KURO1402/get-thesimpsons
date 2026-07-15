import { simpsonsApi } from "@/api/simpsons"
import ButoonNext from "../components/ui/ButoonNext"
import { count } from "console";

interface Personaje {
    id: number,
    name: string
}

export default async function PersonajesPage() {
    const personajes = await simpsonsApi.getPersonajes(1);
    let countp = 0;
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
                <ButoonNext count={ countp} />
            </div>
        </main>
    )
}