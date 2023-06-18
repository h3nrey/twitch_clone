import { ReactNode, useEffect, useState } from "react"

interface TooltipBoxProps {
    children: ReactNode,
    boxPos: BoxPositions,
    description: string,
}

export enum BoxPositions {
    topLeft,
    topCenter,
    topRight,
    centerRight,
    bottomRight,
    bottomCenter,
    bottomLeft,
    centerLeft,
}

export default function TooltipBox({ children, boxPos, description }: TooltipBoxProps) {
    const [showTooltip, setShowTooltip] = useState(false);
    let showTooltipCooldown: NodeJS.Timeout;

    function handlePos() {
        switch (boxPos) {
            case BoxPositions.topLeft:
                return "top-0 left-0 -translate-y-[110%]";

            case BoxPositions.topCenter:
                return "top-0 left-1/2 -translate-x-1/2 -translate-y-[110%]";

            case BoxPositions.topRight:
                return "top-0 right-0 -translate-y-[110%]";

            case BoxPositions.centerRight:
                return "top-1/2 -translate-y-1/2 left-full translate-x-1"

            case BoxPositions.bottomRight:
                return "top-full right-0 translate-y-1"

            case BoxPositions.bottomCenter:
                return "top-full left-1/2 -translate-x-1/2 translate-y-1";

            case BoxPositions.bottomLeft:
                return "top-full left-0 translate-y-1"

            case BoxPositions.centerLeft:
                return "top-1/2 -translate-y-1/2 right-full -translate-x-1"

            default:
                return "top-0";
        }
    }

    function handleMouseEnter() {
        showTooltipCooldown = setTimeout(() => {
            setShowTooltip(true)
        }, 500)
    }

    function handleMouseLeave() {
        clearTimeout(showTooltipCooldown)
        setShowTooltip(false)
    }


    return (
        <div
            className="relative group"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            {children}
            {showTooltip && (
                <span
                    className={`absolute flex bg-white px-[0.3125rem] py-[0.3125rem] text-[0.8125rem] text-bg transition rounded font-semibold ${handlePos()} whitespace-nowrap`}
                >
                    {description}
                </span>
            )}

        </div>
    )
}