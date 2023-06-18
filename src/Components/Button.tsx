import { ReactNode } from "react"

interface ButtonProps {
    clickCallback: () => void,
    children: ReactNode
}

export default function Button({ clickCallback, children }: ButtonProps) {
    return (
        <button
            className="bg-transparent hover:bg-white/30 rounded transition p-[0.3125rem] flex justify-center items-center"
            onClick={clickCallback}
        >
            {children}
        </button>
    )
}