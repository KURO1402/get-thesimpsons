import Image from "next/image";
import { Personaje } from "../types";
const PersonajeCard = ({
  id,
  age,
  birthdate,
  gender,
  name,
  occupation,
  portrait_path,
  phrases,
  status,
}: Personaje) => {
  return (
    <div className="flex shadow shadow-2xl bg-white rounded-2xl flex-col p-2 border border-1 border-gray-200 hover:translate-y-2 transition">
      <div className="flex">
        <span className="bg-yellow-200 p-1 rounded-2xl font-bold text-yellow-800">
          #{id}
        </span>
      </div>
      <div className=" flex justify-center items-center">
        <Image
          className="border border-1 border-gray-200 rounded-xl"
          src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
          width={150}
          height={150}
          alt={name}
        />
      </div>
      <div className="">
        <h2 className="text-center font-bold text-xl">{name}</h2>
      </div>
      <div className="">
        <ul className="">
          <li>Edad: {age || "desconocido"}</li>
          <li>Fechas Nac: {birthdate || "desconocido"}</li>
          <li>Genero: {gender}</li>
          <li>Ocupation: {occupation}</li>
        </ul>
      </div>
      <div></div>
      <details className="group relative inline-block text-left">
        <summary className="flex items-center gap-2 list-none bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg cursor-pointer select-none border border-yellow-500 hover:bg-yellow-200 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
          <span
            role="button"
            aria-haspopup="menu"
            aria-expanded="false"
            aria-label="Mostrar frases del personaje"
            className="flex items-center gap-2 font-medium"
          >
            Frases del Personaje
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4 transition-transform duration-200 group-open:rotate-180"
            >
              <path d="M6 9l6 6 6-6" />
            </svg>
          </span>
        </summary>

        <div className="absolute left-0 mt-2 w-full min-w-[16rem] bg-yellow-50 border border-yellow-300 rounded-lg shadow-lg p-4 text-gray-700 z-10">
          {phrases.length > 0 ? (
            <ul className="space-y-1">
              {phrases.map((p) => (
                <li key={p} className="flex gap-2 text-sm leading-snug">
                  <span className="text-yellow-600">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-sm text-gray-400 italic">
              Sin frases disponibles
            </p>
          )}
        </div>
      </details>
      <span>{status}</span>
    </div>
  );
};

export default PersonajeCard;
