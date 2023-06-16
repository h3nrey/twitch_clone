import About from "@/Components/Player/About";
import LiveInfo from "@/Components/Player/LiveInfo";
import VideoPlayer, { Video } from "@/Components/Player/VideoPlayer";
import { handleTime } from "@/utils";
import { useState } from "react";

const videoURL = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"

const channel = {
    name: "Gaules",
    followers: 3900000,
    desc: "Mais um guerreiro da Maior Tribo do Mundo! Atuei como jogador profissional de CS por quase uma década, fui o primeiro treinador a ser campeão do mundo em 2007 com o MIBR. Acertei um pouco, errei muito, ganhei bastante coisa e tbm perdi demais! Atualmente faço live todos os dias aqui na Twitch!",
    socialLinks: [
        { title: "Instagram", url: "https://instagram.com/gaules" },
        { title: "Youtube", url: "https://youtube.com/gaules" },
    ]
}
export default function App() {
    const [video, setVideo] = useState<Video>({ progress: 0, isPaused: true })

    function handleVideoInfo(info: Video) {
        setVideo(info)
    }
    return (
        <div className="bg-bg">
            <VideoPlayer videoURL={videoURL} exportVideo={handleVideoInfo} />
            <div className="px-8">
                <LiveInfo liveProgress={handleTime(video.progress)} />
                <About name={channel.name} followers={channel.followers} desc={channel.desc} socialLinks={channel.socialLinks} />
            </div>
        </div>
    )
}