import { ReactNode, useEffect } from "react"

interface PlayerButtonProps {
    clickCallback: () => void
    children: ReactNode
    desc: string,
    posSide: string
    keyCode: string
}
export default function PlayerButton({ clickCallback, children, desc, keyCode, posSide = "left" }: PlayerButtonProps) {
    useEffect(() => {
        if (keyCode != "") {
            document.addEventListener("keydown", (e: KeyboardEvent) => {
                if (e.code === keyCode) {
                    e.preventDefault()
                    clickCallback()
                }

            });

            return () => {
                document.removeEventListener("keydown", clickCallback);
            };
        }
    })

    return (
        <div className="relative group">
            <button
                className="bg-transparent hover:bg-white/30 rounded transition w-[1.875rem] h-[1.875rem] flex justify-center items-center"
                onClick={clickCallback}
            >
                {children}
            </button>

            <span
                className={`absolute flex bg-white p-2 text-[0.8125rem] text-bg top-0 -translate-y-[110%] transition scale-0 group-hover:scale-100 rounded font-semibold ${posSide} whitespace-nowrap`}
            >
                {desc}
            </span>
        </div>

    )
}