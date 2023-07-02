import { useEffect, useState } from "react"

interface ChatCommentProps {
    userName: string,
    comment: string,
}

const colors = ['#EB0400', "#00FF7F", "#D2C009", "#F57F53", "#D2691E", "#AD54FE"]
export default function ChatComment({ userName, comment }: ChatCommentProps) {
    const [userColor, setUserColor] = useState("")

    useEffect(() => {
        const randColor = Math.floor(Math.random() * colors.length)
        setUserColor(colors[randColor])
    },
        [])
    return (
        <div className="p-1 text-sm hover:bg-white/20 dark:hover:bg-lightMode_darkGray rounded transition">
            <div
                className="py-[0.3125rem] pl-[0.625rem] text-text dark:text-lightMode_black font-normal"
            >
                <span className="" style={{ color: userColor }}>
                    {userName}
                </span>
                :
                <span className="ml-1">
                    {comment}
                </span>
            </div>
        </div>
    )
}