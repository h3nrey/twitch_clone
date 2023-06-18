import { ReactNode, useEffect } from "react"

interface PlayerButtonProps {
    clickCallback: () => void
    children: ReactNode
    desc: string,
    posSide: string
    keyCode: string
}
export default function PlayerButton({ clickCallback, children, desc, keyCode, posSide = "left" }: PlayerButtonProps) {
    return (
        <div className="relative group">
            <button
                className="bg-transparent hover:bg-white/30 rounded transition w-[1.875rem] h-[1.875rem] flex justify-center items-center"
                onClick={clickCallback}
            >
                {children}
            </button>
        </div>

    )
}