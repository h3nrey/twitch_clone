import { useState } from "react"
import Link from "next/link"

interface ChannelInterface{
    hidden: boolean,
    channelAvatar: string,
    channelName: string,
    channelURL: string,
}

export default function SidebarChannel({hidden, channelAvatar, channelName, channelURL}: ChannelInterface){
    const [onLive, setOnLive] = useState(true);
    return(
        <Link 
            className="flex items-center justify-between gap-2 p-2 transition hover:bg-gray cursor-pointer"
            href={channelURL}
        >
            <div className={`flex items-center gap-2 `}>
                <img 
                    className={`rounded-full h-6 ${onLive ? "": "grayscale-[0.8]"}`}
                    src={channelAvatar} alt="" />
                <p className={`${hidden ? "hidden": "block"}`}>{channelName}</p>
            </div>
            <span className={`text-[0.8125rem] text-lightgray ${hidden ? "hidden": "block"}`}>offline</span>
        </Link>
    )
}