import Image from "next/image";
import { Personaje } from "../types";
import ListPhrases from "./ListPhrases";
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
    <div className="flex group shadow shadow-2xl bg-white rounded-2xl flex-col px-3 pt-3 pb-5 border border-1 border-gray-200 hover:translate-y-2 transition">
      <div className="flex">
        <span className="bg-yellow-200 p-1 rounded-2xl font-bold text-yellow-800">
          #{id}
        </span>
      </div>
      <div className="flex justify-center items-center group-hover:-rotate-10 transition">
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
          <li><strong>Edad:</strong> {age || "desconocido"}</li>
          <li><strong>Fechas Nac:</strong> {birthdate || "desconocido"}</li>
          <li><strong>Género:</strong> {gender}</li>
          <li><strong>Ocupación(es):</strong> {occupation}</li>
        </ul>
      </div>
      <div className="mt-auto pt-2">
        <ListPhrases phrases={phrases}/>
      </div>

      <div className="mt-auto pt-2">
        <div className="h-6 flex justify-between items-center text-white text-xs px-2">
          <span></span>
          <span className={`p-2 text-sm font-bold rounded-3xl border-1 ${status == "Alive" ? "bg-green-100 text-green-500": status == "Deceased" ? "bg-red-100 text-red-500": "bg-gray-100 text-gray-500"}`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

export default PersonajeCard;
