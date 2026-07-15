import Image from "next/image"
import { Personaje } from "../types"
const PersonajeCard = ({id, age, birthdate, gender, name, occupation, portrait_path, phrases, status}: Personaje) => {
    return (
        <div className="flex shadow shadow-2xl bg-white rounded-2xl flex-col p-2 border border-1 border-gray-200 hover:translate-y-2 transition">
                <div className=" flex justify-center items-center border border-1 border-gray-200 w-35 rounded-xl">
                    <Image src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`} width={200} height={200} alt={name}/>
                </div>
                <div>
                    <h2>{name}</h2>
                </div>
                <div>
                    <ul>
                        <li>- Edad: {age || "desconocido"}</li>
                        <li>- Fechas Nac: {birthdate || "desconocido"}</li>
                        <li>- Genero: {gender}</li>
                        <li>- Ocupation: {occupation}</li>
                    </ul>
                </div>
                <div>
                    <ul>
                        {phrases.map((p) => (
                            <li key={p}>{p}</li>
                        ))}
                    </ul>
                </div>
                <span>{status}</span>
        </div>
    )
}

export default PersonajeCard
