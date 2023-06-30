import About from "@/Components/Watch/Info/About";
import LiveChat from "@/Components/Watch/Chat/LiveChat";
import LiveInfo from "@/Components/Watch/Info/LiveInfo";
import VideoPlayer, { Video } from "@/Components/Watch/Player/VideoPlayer";
import { handleTime } from "@/utils";
import { useState } from "react";
import { useRouter } from "next/router";
import { Channel, FilterChannelsByName } from "../api/homeData";
import { GetStaticProps, InferGetStaticPropsType } from "next";

const videoURL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"


function loadData(id: string | string[] | undefined) {
    const channelId = typeof id === "string" ? id : ""
    const channelFound = FilterChannelsByName(channelId)

    if (channelFound.length > 0) {
        return channelFound
    }
    return channelFound
}

export default function App() {
    // const [channelData, setChannelData] = useState<Channel | null>(null)
    const router = useRouter()
    const channelData: Channel = loadData(router.query.id)[0]
    const [video, setVideo] = useState<Video>({ progress: 0, isPaused: true })

    function handleVideoInfo(info: Video) {
        setVideo(info)
    }

    return (
        <>
            {channelData && (
                <div className="bg-bg pb-2 flex">
                    <div className="w-full">
                        <VideoPlayer videoURL={videoURL} exportVideo={handleVideoInfo} />

                        <div className="px-8 mt-4">
                            <LiveInfo
                                liveProgress={handleTime(video.progress)}
                                channelName={channelData.name}
                                channelColor={channelData.color}
                                avatarUrl={channelData.avatarUrl}
                                liveTags={channelData.live.tags}
                                liveTitle={channelData.live.title}
                                liveCategory={channelData.live.category}
                                liveViewers={channelData.live.viewers}
                            />
                            <About {...channelData} />
                        </div>
                    </div>
                    <LiveChat />

                </div>
            )}
        </>
    )
}