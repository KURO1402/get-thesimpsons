import PersonajesList from "../components/PersonajesList"

export default function PersonajesPage() {

    return (
        <main className="flex flex-col p-4">
            <h1>Personajes</h1>
            <PersonajesList />
        </main>
    )
}