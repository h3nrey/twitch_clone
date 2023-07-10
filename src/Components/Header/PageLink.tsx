import { ThemeContext } from "@/ThemeContext"
import Link from "next/link"
import { CSSProperties, useContext, useEffect, useState } from "react"

interface PageLinkProps {
    url: string
    linkName: string
    currentPage: string
    setCurrentPage: (page: string) => void
}
export default function PageLink({ currentPage, setCurrentPage, linkName, url }: PageLinkProps) {
    const [isHoveringLink, setIsHoveringLink] = useState(false)
    const [linkColor, setLinkColor] = useState("")
    const theme = useContext(ThemeContext)

    function OnMouseEnter() {
        setIsHoveringLink(true)
    }

    function OnMouseExit() {
        setIsHoveringLink(false)
    }

    function setColor() {
        let color = ""

        if (isHoveringLink) {
            color = "rgb(142, 42, 226)s"
        } else {
            if (theme.theme == "dark") {
                color = "rgb(31,31,35)"
            } else {
                color = "rgb(224,224,225)"
            }
        }

        setLinkColor(color)
    }

    useEffect(() => {
        setColor()
    }, [theme, isHoveringLink])

    function SetPageLink(pageName: string): CSSProperties {
        if (currentPage == pageName) {
            return {
                color: "rgb(142, 42, 226)",
                borderColor: "rgb(142, 42, 226)"
            }
        } else {
            return {
                color: linkColor,
                borderColor: "transparent",
            }
        }
    }
    return (
        <Link
            href={`/${url}`}
            className="transition font-semibold hover:pointer hover:text-principal text-text text-sm border-b-4 h-full py-[0.9rem] border-principal"
            onMouseEnter={OnMouseEnter}
            onMouseLeave={OnMouseExit}
            onClick={() => setCurrentPage(url)}
            style={SetPageLink(url)}
        >
            {linkName}
        </Link>
    )
}