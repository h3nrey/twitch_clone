import { CornersOut, Pause, Play, SpeakerSimpleHigh, SpeakerSimpleLow, SpeakerSimpleX } from "phosphor-react"
import { ChangeEvent, MouseEvent, useEffect, useRef, useState } from "react"
import { colors } from "../../../Colors"

export default function App() {
    const videoRef = useRef<HTMLVideoElement>(null)
    const videoContainer = useRef<HTMLDivElement>(null)
    const [isPaused, setIsPaused] = useState(true)
    const [volume, setVolume] = useState(1)
    const [duration, setDuration] = useState(0)
    const [progress, setProgress] = useState(0)

    const volumeIcon = () => {
        if (volume == 0) return <SpeakerSimpleX weight="fill" />
        else if (volume < 0.5 && volume > 0) return <SpeakerSimpleLow weight="fill" />
        return <SpeakerSimpleHigh weight="fill" />
    }
    function handlePlay() {
        if (isPaused) {
            videoRef.current?.play()
        } else {
            videoRef.current?.pause()
        }

        setIsPaused(!isPaused)
    }

    useEffect(() => {
        handlePlay()
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
        if (videoRef.current != undefined) {
            videoRef.current.volume = volume
        }
    }, [volume])

    function handleVolumeRange(event: ChangeEvent<HTMLInputElement>) {
        setVolume(parseFloat(event.target.value))
    }

    function handleProgress(event: ChangeEvent<HTMLInputElement>) {
        if (videoRef.current != undefined) {
            videoRef.current.currentTime = parseFloat(event.target.value)
            setProgress(Math.floor(parseFloat(event.target.value)))
            handlePlay()
        }

    }

    const handleProgressBarClick = (event: MouseEvent<HTMLInputElement>) => {
        const progressBardWidth = event.currentTarget.offsetWidth;
        const cursorX = event.clientX - event.currentTarget.getBoundingClientRect().left;
        const newTime = Math.round((cursorX / progressBardWidth) * 100);
        setProgress(newTime);
    };

    function handleVolume() {
        if (videoRef.current != undefined) {
            if (volume == 1) {
                setVolume(0)
            } else {
                setVolume(1)
            }
        }

    }

    function calcProgress() {
        const percentage = (progress / duration) * 100;
        console.log(`duration: ${duration} / progress: ${progress} = porcentagem: ${percentage}`)
        return percentage
    }

    function handleFullscreen() {
        const container = videoContainer.current

        if (document.fullscreenElement) {
            document.exitFullscreen()
        } else {
            container?.requestFullscreen()
        }
    }
    return (
        <div className="flex relative  justify-end bg-black h-[20rem]" ref={videoContainer}>
            <video
                ref={videoRef}
                src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
                className="w-[100%] block">
            </video>

            <div className="absolute w-full top-full -translate-y-full flex justify-between p-[0.625rem] px-6 text-text">
                <div className="flex flex-col w-full">
                    {/* Progress Bar  */}
                    <div className="w-full flex justify-center items-center h-4">
                        <input
                            type="range"
                            min={0}
                            max={duration}
                            value={progress}
                            onChange={handleProgress}
                            onClick={(e) => handleProgressBarClick(e)}
                            className="w-full relative bg-thingray h-1 cursor-pointer"
                            style={{ backgroundImage: `linear-gradient(98deg, ${colors.principal} 0%, ${colors.principal} ${calcProgress()}%, rgba(255, 0, 0, 0) ${calcProgress()}%` }} />
                    </div>

                    {/* Controls  */}
                    <div className="flex justify-between items-center">
                        {/* Play + Volume  */}
                        <div className="flex gap-1">
                            {/* Play button  */}
                            <button
                                className="hover:bg-white/40 flex justify-center items-center transition-colors ease-in w-8 h-8 rounded"
                                onClick={handlePlay}>
                                {isPaused ? (
                                    <span>
                                        <Play weight="fill" className="" />
                                    </span>
                                ) : (
                                    <span>
                                        <Pause weight="fill" className="" />
                                    </span>
                                )
                                }
                            </button>

                            {/* Volume Button  */}
                            <button
                                className="hover:bg-white/40 flex justify-center items-center transition-colors ease-in w-8 h-8 rounded"
                                onClick={handleVolume}>
                                <span>
                                    {volumeIcon()}
                                </span>
                            </button>

                            {/* Volume Range  */}
                            <div>
                                <input type="range" max={1} min={0} step={0.05} onChange={handleVolumeRange} value={volume} className="rounded w-[80px]" />
                            </div>
                        </div>
                        <div>
                            {/* fullscreen  */}
                            <button
                                className="relative 
                            before:absolute before:bg-transparent hover:before:bg-white/30 before:left-1/2 before:-translate-x-1/2 before:p-4 before:rounded before:top-1/2 before:-translate-y-1/2 before:transition before:duration-300"
                                onClick={handleFullscreen}
                            >
                                <CornersOut weight="bold" className="text-white" />
                            </button>
                        </div>
                    </div>

                </div>

            </div>

        </div >
    )
}