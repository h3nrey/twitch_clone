import About, { Channel } from "@/Components/Player/About";
import LiveChat from "@/Components/Player/LiveChat";
import LiveInfo from "@/Components/Player/LiveInfo";
import VideoPlayer, { Video } from "@/Components/Player/VideoPlayer";
import { handleTime } from "@/utils";
import { Youtube } from "lucide-react";
import { InstagramLogo, YoutubeLogo } from "phosphor-react";
import { useState } from "react";

const videoURL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

const channel: Channel = {
    name: "Vitongemaplys",
    followers: 3900000,
    desc: "Mais um guerreiro da Maior Tribo do Mundo! Atuei como jogador profissional de CS por quase uma década, fui o primeiro treinador a ser campeão do mundo em 2007 com o MIBR. Acertei um pouco, errei muito, ganhei bastante coisa e tbm perdi demais! Atualmente faço live todos os dias aqui na Twitch!",
    socialLinks: [
        { title: "Instagram", url: "https://instagram.com/gaules", type: "instagram" },
        { title: "Youtube", url: "https://youtube.com/gaules", type: "youtube" },
    ],
    channelColor: "#0000e0"
}

const live = {
    liveTitle: "Bonda 4",
    liveCategory: "Just Chatting",
    liveTags: ["portuguese", "music"]
}
export default function App() {
    const [video, setVideo] = useState<Video>({ progress: 0, isPaused: true })

    function handleVideoInfo(info: Video) {
        setVideo(info)
    }
    return (
        <div className="bg-bg pb-2 flex">
            <div className="w-full">
                <VideoPlayer videoURL={videoURL} exportVideo={handleVideoInfo} />
                <div className="px-8 mt-4">
                    <LiveInfo liveProgress={handleTime(video.progress)} channelName={channel.name} channelColor={channel.channelColor}
                        {...live} />
                    <About {...channel} />
                </div>
            </div>
            <LiveChat />

        </div>
    )
}