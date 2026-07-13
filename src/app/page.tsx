import Image from "next/image";
import ButoonPage from "./components/ui/ButoonPage";

export default function Home() {
  return (
    <main className="flex flex-1 items-center flex-col px-80 pt-15 gap-5">
        <div>
          <Image src="/the_simpsons.png" width={400} height={400} alt="Logo de los simpsons"></Image>
        </div>
        <div className="text-justify text-lg">
            <p>¡Bienvenido al universo de Los Simpson! En esta página encontrarás toda la información que necesitas sobre tus personajes favoritos, los capítulos más icónicos de la serie y las localizaciones más emblemáticas de Springfield. ¡Explora y revive los mejores momentos de la familia amarilla!</p>
        </div>
        <div className="flex gap-5 pt-5">
          <ButoonPage ruta="/personajes">Personajes</ButoonPage>
          <ButoonPage ruta="/capitulos">Capitulos</ButoonPage>
          <ButoonPage ruta="/ubicaciones">Ubicaciones</ButoonPage>
        </div>
    </main>
  );
}
