import { SidebarContext } from "@/SidebarContext"
import { truncateNumber } from "@/utils"
import { useContext } from "react"
import SocialAnchor from "./SocialAnchor"
import { Channel } from "@/pages/api/homeData"

// export interface AboutProps {
//     name: string,
//     followers: number,
//     desc: string,
//     socialLinks: SocialLink[],
//     channelColor: string
// }

// interface SocialLink {
//     title: string,
//     url: string,
//     type: string
// }

export default function About({ name, followers, about, socialLinks, color }: Channel) {
    const sidebarHidden = useContext(SidebarContext)
    const chatHidden = false
    return (
        <div
            className="text-text flex p-10 gap-10 bg-darkgray rounded transition"
            style={{
                margin: sidebarHidden ? "1.5rem 2.5rem" : "1.5rem 0",
                flexDirection: !chatHidden && !sidebarHidden ? "column" : "row"
            }}>
            <div>
                <h2 className="text-2xl font-semibold">About {name}</h2>
                <div>{truncateNumber(followers)} <span className="text-thingray">followers</span></div>
                <p className="text-sm font-normal">{about}</p>
            </div>
            <div
                className="flex gap-2"
                style={{
                    flexDirection: !chatHidden && !sidebarHidden ? "row" : "column"
                }}>
                {socialLinks.map(link => (
                    <SocialAnchor color={color} {...link} />
                ))}
            </div>
        </div>
    )
}