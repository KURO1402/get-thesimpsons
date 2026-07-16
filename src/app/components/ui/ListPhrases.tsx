import React from 'react'

const ListPhrases = ({phrases}:{phrases:string[]}) => {
  return (
    <details className="flex w-full group relative inline-block text-left">
          <summary className="flex items-center gap-2 list-none bg-yellow-100 text-yellow-700 px-4 py-2 rounded-lg cursor-pointer select-none border border-yellow-500 hover:bg-yellow-200 transition-colors duration-200 [&::-webkit-details-marker]:hidden">
            <span
              role="button"
              aria-haspopup="menu"
              aria-expanded="false"
              aria-label="Mostrar frases del personaje"
              className="flex items-center gap-2 font-medium w-full justify-between"
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
  )
}

export default ListPhrases


