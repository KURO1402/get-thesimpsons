import Image from 'next/image'
import SelectorHeader from './ui/SelectorHeader'

export default function Header() {
    return (
        <header className="flex border-b-2 border-[#fbdd05] shadow-sm shadow-[#fbdd05] p-4  items-center justify-between bg-[#FDFBF7]">
            <div className='col-span-1'>
                <Image src="/the_simpsons.png" width={80} height={80} alt="Logo de los simpsons"></Image>
            </div>
            <ul className="flex gap-3 justify-center">
                <SelectorHeader ruta="/">Inicio</SelectorHeader>
                <SelectorHeader ruta="/personajes">Personajes</SelectorHeader>
                <SelectorHeader ruta="/capitulos">Capitulos</SelectorHeader>
                <SelectorHeader ruta="/ubicaciones">Ubicaciones</SelectorHeader>
            </ul>
        </header>
    )
} 