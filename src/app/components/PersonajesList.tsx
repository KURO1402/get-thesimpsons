"use client"

import { useEffect, useState } from "react";
import { simpsonsApi } from "@/api/simpsons";
import ButoonNext from "./ui/ButoonNext";
import PersonajeCard from "./ui/PersonajeCard";

import { Personaje } from "@/app/components/types"

const PersonajesList = () => {
    const [personajes, setPersonajes] = useState<Personaje[]>([]);
    const [page, setPage] = useState<number>(1);
    const [cargando, setCargando] = useState(true);

    const consultarapi = async (p: number) => {
        setCargando(true);
        try {
            const nuevosPersonajes = await simpsonsApi.getPersonajes(p);
            setPersonajes((prev) => [...prev, ...nuevosPersonajes]);
        } finally {
            setCargando(false);
        }
    }

    useEffect(() => {
        const cargar = async () => {
            setCargando(true);
            console.log("Se ejecutó", page);
            await consultarapi(page);
        };
        cargar();
    }, [page]);

    const manejarSiguiente = () => {
        setPage((prevPage) => prevPage + 1);
    }
    return (
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
                {personajes.map((p: Personaje) => (
                    <PersonajeCard key={p.id} id={p.id} age={p.age} birthdate={p.birthdate} gender={p.gender} name={p.name} occupation={p.occupation} portrait_path={p.portrait_path} phrases={p.phrases} status={p.status}/>
                ))}
                {cargando ? (
                    <p>Cargando...</p>
                ) : (
                    <ButoonNext count={page} eventoClick={manejarSiguiente} />
                )}
            </div>
    )
}

export default PersonajesList
