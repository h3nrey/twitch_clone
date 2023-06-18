export default function Avatar({ channelColor }: { channelColor: string }) {
    return (
        <div className="flex flex-col">
            <img
                className="rounded-full border-4"
                src="https://static-cdn.jtvnw.net/jtv_user_pictures/7b68f6a2-1316-47c9-98e6-4413dad16837-profile_image-70x70.jpg"
                style={{ borderColor: channelColor }}
            />
            <div className="relative h-3">
                <span
                    className="absolute top-0 left-1/2 -translate-x-1/2  -translate-y-1/2 bg-red uppercase px-1 rounded text-[0.8125rem] text-text font-semibold border-2 border-bg"
                >
                    live
                </span>
            </div>
        </div>
    )
}