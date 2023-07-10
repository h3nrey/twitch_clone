interface AvatarProps {
    channelColor: string,
    avatarURL: string,
}
export default function Avatar({ channelColor, avatarURL }: AvatarProps) {
    return (
        <div className="flex flex-col">
            <img
                className="rounded-full border-4 h-16 w-16 object-cover"
                src={avatarURL}
                style={{ borderColor: channelColor }}
            />
            <div className="relative h-3">
                <span
                    className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-red uppercase px-1 rounded text-[0.8125rem] text-text font-semibold border-1 border-bg"
                >
                    live
                </span>
            </div>
        </div>
    )
}