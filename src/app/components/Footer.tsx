export default function Footer() {
    return (
      <footer className="w-full flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-2 p-4 border-t-2 border-[#fbdd05] shadow-md bg-[#FDFBF7] text-sm md:text-base">
        <p className="text-gray-700 text-center">
          Hecho con{" "}
          <a 
            className="underline font-bold text-[#e6c200] hover:text-[#fbdd05] transition-colors duration-200" 
            href="https://thesimpsonsapi.com/" 
            target="_blank"
            rel="noopener noreferrer"
          >
            The Simpsons API
          </a>
        </p>
      </footer>
    );
  }