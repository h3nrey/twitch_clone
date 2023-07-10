import { useState } from "react"
import Link from "next/link"
import { truncateNumber } from "@/utils"
import { Circle } from "phosphor-react"

interface ChannelInterface {
    hidden: boolean,
    channelOnlive: boolean,
    channelAvatar: string,
    channelName: string,
    channelURL: string,
    liveViewers: number
}

export default function SidebarChannel({ hidden, channelAvatar, channelName, channelURL, channelOnlive, liveViewers }: ChannelInterface) {
    return (
        <Link
            className="flex items-center justify-between gap-2 w-full px-[0.625rem] py-[0.3125rem] transition hover:bg-gray dark:hover:bg-lightMode_darkGray cursor-pointer"
            href={`/watch/${channelURL}`}
        >
            <div className={`flex items-center justify-between w-full`}>
                <div className="flex items-center gap-1">
                    <img
                        className={`rounded-full w-[1.875rem] object-cover h-[1.875rem] ${channelOnlive ? "" : "grayscale-[2]"}`}
                        src={channelAvatar} alt="" />
                    <p
                        className={`font-semibold text-[0.875rem] w-[100%] text-ellipsis overflow-hidden ${hidden ? "hidden" : "block"}`}
                    >
                        {channelName}
                    </p>
                </div>
                <span
                    className={`text-[0.8125rem] ml-[0.3125rem] text-lightgray dark:text-lightMode_thinBlack ${hidden ? "hidden" : "inline"}`}
                >
                    {channelOnlive ? <span className="flex items-center gap-[1px]"> <Circle weight="fill" className="text-red" /> {truncateNumber(liveViewers)}</span> : <span>offline</span>}
                </span>

            </div>
        </Link>
    )
}