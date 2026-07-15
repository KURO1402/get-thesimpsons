import Link from "next/link"
import { LinkProps } from "../types"

export default function SelectorHeader({children, ruta}: LinkProps) {
    return (
        <li className="group flex flex-col font-bold text-xl relative hover:text-amber-400">
            <Link href={ruta}>{children}</Link>
            <span className="h-1 bg-amber-300 transition-transform duration-300 scale-x-0 group-hover:scale-x-100"></span>
        </li>
    )
}