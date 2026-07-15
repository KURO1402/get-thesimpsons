"use client"
interface BotonProps {
    count: number, 
    eventoClick: () => void
}
export default function ButoonNext({count, eventoClick}: BotonProps ) {
    return (
        <button className="bg-yellow-500 p-3 rounded-xl" onClick={eventoClick}>
            Siguiente (Página {count})
        </button>
    )
}