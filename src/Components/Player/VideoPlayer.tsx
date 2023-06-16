import { CornersOut, Pause, Play, SpeakerSimpleHigh, SpeakerSimpleLow, SpeakerSimpleX } from "phosphor-react"
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { colors } from "../../../Colors"
import ProgressBar from "./ProgressBar"
import VideoControls from "./VideoControls"
import { handleTime } from "@/utils"

interface VideoPlayerInterface {
    videoURL: string,
    exportVideo: (value: Video) => void
}

export interface Video {
    progress: number,
    isPaused: boolean,
}
export default function VideoPlayer({ videoURL, exportVideo }: VideoPlayerInterface) {
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoContainer = useRef<HTMLDivElement>(null)
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0)
    const [pausePopup, setPausePopup] = useState(true)
    const [isPaused, setIsPaused] = useState(false)

    useEffect(() => {
        if (videoRef.current != undefined) {
            setDuration(Math.floor(videoRef.current.duration))
        }

        const video = videoRef.current;

        if (video != undefined) {
            const handleLoadedMetadata = () => {
                setDuration(Math.floor(video.duration));
            };

            const handleTimeUpdate = () => {
                setProgress(Math.floor(video.currentTime));
            };

            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            video.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                video.removeEventListener('timeupdate', handleTimeUpdate);
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
            };
        }

    }, [])

    useEffect(() => {
        exportVideo({ progress, isPaused })
    }, [progress])

    function handleProgress(value: number) {
        if (videoRef.current != undefined) {
            videoRef.current.currentTime = value
            setProgress(Math.floor(value))
        }
    }

    function togglePausePopup(state: boolean, pauseState: boolean) {
        setPausePopup(state)
        setIsPaused(pauseState)
    }

    return (
        <div className="flex relative  justify-end bg-black h-[26.25rem]" id="video__player__container" ref={videoContainer}>
            <video
                ref={videoRef}
                src={videoURL}
                className="w-[100%] block">
            </video>

            {pausePopup && (
                <div className="bg-black/50 rounded-full absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 p-4">
                    {isPaused ? (
                        <Pause weight="fill" className="text-text w-16 h-16" />
                    ) :
                        <Play weight="fill" className="text-text w-16 h-16" />
                    }

                </div>
            )}


            <div className="absolute w-full top-full -translate-y-full flex justify-between p-[0.625rem] px-6 text-text">
                <div className="flex flex-col w-full">
                    <ProgressBar
                        progress={progress}
                        duration={duration}
                        setProgress={setProgress}
                        handleProgress={handleProgress}
                    />

                    {/* Controls  */}
                    <VideoControls
                        videoRef={videoRef.current}
                        videoContainer={videoContainer.current}
                        handlePausePopup={togglePausePopup}
                    />

                </div>

            </div>

        </div >
    )
}