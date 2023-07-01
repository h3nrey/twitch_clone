import { useState } from "react"
import Link from "next/link"

interface ChannelInterface {
    hidden: boolean,
    channelAvatar: string,
    channelName: string,
    channelURL: string,
}

export default function SidebarChannel({ hidden, channelAvatar, channelName, channelURL }: ChannelInterface) {
    const [onLive, setOnLive] = useState(true);
    return (
        <Link
            className="flex items-center justify-between gap-2 w-full px-[0.625rem] py-[0.3125rem] transition hover:bg-gray dark:hover:bg-lightMode_darkGray cursor-pointer"
            href={channelURL}
        >
            <div className={`flex items-center w-full`}>
                <img
                    className={`rounded-full h-[1.875rem] ${onLive ? "" : "grayscale-[0.8]"}`}
                    src={channelAvatar} alt="" />
                <div className="text-ellipsis whitespace-nowrap w-full flex">
                    <p
                        className={`font-semibold text-[0.875rem] ml-[0.625rem] flex-1 ${hidden ? "hidden" : "block"}`}
                    >
                        {channelName}
                    </p>
                    <span className={`text-[0.8125rem] ml-[0.3125rem] text-lightgray dark:text-lightMode_thinBlack ${hidden ? "hidden" : "block"}`}>offline</span>
                </div>

            </div>
        </Link>
    )
}