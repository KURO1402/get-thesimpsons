import Image from "next/image";
import ButoonPage from "./components/ui/ButoonPage";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-4 sm:px-10 md:px-20 lg:px-40 xl:px-80 gap-6 py-8">
      <div className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px]">
        <Image 
          src="/the_simpsons.png" 
          width={400} 
          height={400} 
          alt="Logo de los simpsons"
          className="w-full h-auto object-contain"
          priority
        />
      </div>
      <div className="text-center md:text-justify text-base md:text-lg max-w-xl">
        <p>
          ¡Bienvenido al universo de Los Simpson! En esta página encontrarás toda la información que necesitas sobre tus personajes favoritos, los capítulos más icónicos de la serie y las localizaciones más emblemáticas de Springfield. ¡Explora y revive los mejores momentos de la familia amarilla!
        </p>
      </div>

      <div className="flex flex-col sm:flex-row gap-4 pt-4 w-full sm:w-auto">
        <ButoonPage ruta="/personajes">Personajes</ButoonPage>
        <ButoonPage ruta="/capitulos">Capitulos</ButoonPage>
        <ButoonPage ruta="/ubicaciones">Ubicaciones</ButoonPage>
      </div>
    </main>
  );
}