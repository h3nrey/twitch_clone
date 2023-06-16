import { SidebarContext } from "@/SidebarContext"
import { truncateNumber } from "@/utils"
import { YoutubeLogo } from "phosphor-react"
import { useContext } from "react"

interface Channel {
    name: string,
    followers: number,
    desc: string,
    socialLinks: SocialLink[]
}

interface SocialLink {
    title: string,
    url: string,
}
export default function About({ name, followers, desc, socialLinks }: Channel) {
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
                    <a href={link.url} target="blank" className="flex gap-2 hover:text-principal text-darktext">
                        <figure>
                            <YoutubeLogo weight="fill" size={20} />
                        </figure>
                        <span className="text-[0.8125rem] transition font-semibold">
                            {link.title}
                        </span>
                    </a>
                ))}
            </div>
        </div>
    )
}