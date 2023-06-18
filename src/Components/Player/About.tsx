import { SidebarContext } from "@/SidebarContext"
import { truncateNumber } from "@/utils"
import { YoutubeLogo } from "phosphor-react"
import { Children, ReactNode, useContext, useState } from "react"
import SocialIcon from "./SocialIcon"
import SocialAnchor from "./SocialAnchor"

export interface Channel {
    name: string,
    followers: number,
    desc: string,
    socialLinks: SocialLink[],
    channelColor: string
}

interface SocialLink {
    title: string,
    url: string,
    type: string
}

export default function About({ name, followers, desc, socialLinks, channelColor }: Channel) {
    const sidebarHidden = useContext(SidebarContext)

    return (
        <div
            className="text-text flex p-10 gap-10 bg-darkgray rounded transition"
            style={{ margin: sidebarHidden ? "1.5rem 2.5rem" : "1.5rem 0" }}>
            <div>
                <h2 className="text-2xl font-semibold">About {name}</h2>
                <div>{truncateNumber(followers)} <span className="text-thingray">followers</span></div>
                <p className="text-sm font-normal">{desc}</p>
            </div>
            <div className="flex flex-col gap-2">
                {socialLinks.map(link => (
                    <SocialAnchor color={channelColor} {...link} />
                ))}
            </div>
        </div>
    )
}