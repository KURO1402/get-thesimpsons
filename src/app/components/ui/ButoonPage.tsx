import Link from "next/link"
import { LinkProps } from "../types"

export default function ButoonPage({children, ruta}: LinkProps) {
    return (
        <button className="bg-[#fbdd05] text-black font-black text-[18px] px-[1.3em] py-[0.6em] border-[3px] border-black rounded-[0.4em] shadow-[0.1em_0.1em_0_0_rgba(0,0,0,1)] cursor-pointer transition-all duration-100 hover:-translate-x-[0.05em] hover:-translate-y-[0.05em] hover:shadow-[0.15em_0.15em_0_0_rgba(0,0,0,1)] active:translate-x-[0.05em] active:translate-y-[0.05em] active:shadow-[0.05em_0.05em_0_0_rgba(0,0,0,1)]">
            <Link href={ruta}>{children}</Link>
        </button>
    )
}