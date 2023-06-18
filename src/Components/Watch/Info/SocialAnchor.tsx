import { useState } from "react";
import SocialIcon from "./SocialIcon";

interface SocialAnchorProps {
    color: string,
    url: string,
    type: string,
    title: string,
}

export default function SocialAnchor({ color, url, type, title }: SocialAnchorProps) {
    const [isHoveringAnchor, setIsHoveringAnchor] = useState(false)

    function handleMouseEnter() {
        setIsHoveringAnchor(true)
    }

    function handleMouseLeave() {
        setIsHoveringAnchor(false)
    }

    const anchorStyle = {
        color: isHoveringAnchor ? color : "#adadb8"
    }
    return (
        <a
            href={url}
            target="blank"
            className="flex gap-2 hover:text-principal text-darktext"
            style={{ color: isHoveringAnchor ? color : "#adadb8" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <figure>
                <SocialIcon type={type} />
            </figure>
            <span className="text-[0.8125rem] transition font-semibold">
                {title}
            </span>
        </a>
    )
}