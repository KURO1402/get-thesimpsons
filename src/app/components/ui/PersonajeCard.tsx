import Image from "next/image";
import { Personaje } from "../types";
import ListPhrases from "./ListPhrases";

const STATUS_STYLES: Record<string, string> = {
  Alive: "bg-green-100 text-green-500",
  Deceased: "bg-red-100 text-red-500",
};

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
  const statusStyle = STATUS_STYLES[status] ?? "bg-gray-100 text-gray-500";

  return (
    <div className="flex group shadow-2xl bg-white rounded-2xl flex-col px-3 pt-3 pb-5 border border-gray-200 hover:-translate-y-2 transition h-full">
      <div className="flex">
        <span className="bg-yellow-200 p-1 rounded-2xl font-bold text-yellow-800">
          #{id}
        </span>
      </div>

      <div className="flex justify-center items-center group-hover:-rotate-12 transition">
        <Image
          className="border border-gray-200 rounded-xl"
          src={`https://cdn.thesimpsonsapi.com/500${portrait_path}`}
          width={150}
          height={150}
          alt={`Retrato de ${name}`}
        />
      </div>

      <h2 className="text-center font-bold text-xl">{name}</h2>

      <ul className="min-h-[130px]">
        <li><strong>Edad:</strong> {age ?? "desconocido"}</li>
        <li><strong>Fecha Nac:</strong> {birthdate || "desconocido"}</li>
        <li><strong>Género:</strong> {gender}</li>
        <li><strong>Ocupación(es):</strong>{occupation}</li>
      </ul>

      <div className="pt-2">
        <ListPhrases phrases={phrases} />
      </div>

      <div className="mt-auto pt-2">
        <div className="h-6 flex justify-end items-center text-xs px-2">
          <span
            className={`p-2 text-sm font-bold rounded-3xl border ${statusStyle}`}
          >
            {status}
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonajeCard;