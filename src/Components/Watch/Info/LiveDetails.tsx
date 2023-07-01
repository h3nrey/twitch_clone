import Link from "next/link";
import Avatar from "./Avatar";

interface LiveDetailsProps {
    channelName: string,
    channelColor: string,
    avatarUrl: string
    liveTitle: string,
    liveCategory: string,
    liveTags: string[]
}

export default function LiveDetails({ channelName, channelColor, avatarUrl, liveTitle, liveCategory, liveTags }: LiveDetailsProps) {
    return (
        <div className="flex gap-3">
            {/* Avatar Icon  */}
            <Avatar
                channelColor={channelColor}
                avatarURL={avatarUrl} />

            {/* Channel Info  */}
            <div className="text-text dark:text-lightMode_black">
                <h2 className="font-bold text-[1.125rem]">{channelName}</h2>
                <h3 className="text-sm font-semibold">{liveTitle}</h3>
                <div className="flex gap-2 items-center">
                    <Link href="/browse/category">
                        <p className="text-principal text-sm">{liveCategory}</p>
                    </Link>
                    <div className="flex gap-1">
                        {liveTags.map(tag => (
                            <span key={tag} className="rounded-full bg-darkgray dark:bg-lightMode_darkGray px-2 text-[0.75rem] text-thingray font-semibold">
                                {tag}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}