import LiveDetails from "./LiveDetails";
import LiveControls from "./LiveControls";
import LiveStats from "./LiveStats";

interface LiveInfoProps {
    channelName: string,
    channelColor: string,
    avatarUrl: string,
    liveProgress: string,
    liveTitle: string,
    liveCategory: string,
    liveTags: string[],
    liveViewers: number,
}

export default function LiveInfo(
    { liveProgress, channelName, channelColor, avatarUrl, liveTitle, liveCategory, liveTags, liveViewers }: LiveInfoProps) {
    return (
        <div>
            <div className="flex justify-between items-start">
                {/* Live Info */}
                <LiveDetails
                    channelName={channelName}
                    channelColor={channelColor}
                    avatarUrl={avatarUrl}
                    liveTitle={liveTitle}
                    liveCategory={liveCategory}
                    liveTags={liveTags}
                />

                {/* Live Controls  + Stats */}
                <div className="flex flex-col items-end gap-2">
                    <LiveControls />
                    <LiveStats
                        liveProgress={liveProgress}
                        liveViewers={liveViewers}
                    />
                </div>
            </div>
        </div>
    )
}