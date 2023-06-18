import { Play, Pause, CornersOut, SpeakerSimpleHigh, SpeakerSimpleLow, SpeakerSimpleX, Gear, MagnifyingGlass, FilmSlate, SidebarSimple } from "phosphor-react"
import { ChangeEvent, useEffect, useState } from "react"
import { createPortal } from "react-dom"
import PlayerButton from "./PlayerButton"

interface VideoControlsProps {
    videoRef: HTMLVideoElement | null
    videoContainer: HTMLDivElement | null
    handlePausePopup: (popupState: boolean, pauseState: boolean,) => void
}

export default function VideoControls({ videoRef, videoContainer, handlePausePopup }: VideoControlsProps) {
    const [isPaused, setIsPaused] = useState(true)
    const [volume, setVolume] = useState(1)

    const volumeIcon = () => {
        if (volume == 0) return <SpeakerSimpleX weight="fill" />
        else if (volume < 0.5 && volume > 0) return <SpeakerSimpleLow weight="fill" />
        return <SpeakerSimpleHigh weight="fill" />
    }

    function handleVolumeRange(event: ChangeEvent<HTMLInputElement>) {
        setVolume(parseFloat(event.target.value))
    }

    useEffect(() => {
        if (videoRef != undefined) {
            videoRef.volume = volume
        }
    }, [volume])

    function handlePlay() {
        if (!videoRef) return

        if (isPaused) {
            videoRef.play()
        } else {
            videoRef.pause()
        }

        setIsPaused(!isPaused)

        togglePausePopup()

    }

    function togglePausePopup() {
        handlePausePopup(true, !isPaused)
        setTimeout(() => {
            handlePausePopup(false, isPaused)
        }, 500)
    }

    function handleVolume() {
        if (videoRef != undefined) {
            if (volume == 1) {
                setVolume(0)
            } else {
                setVolume(1)
            }
        }

    }

    function handleFullscreen() {
        if (videoContainer) {
            if (document.fullscreenElement) {
                document.exitFullscreen()
            } else {
                videoContainer.requestFullscreen()
            }
        }

    }

    return (
        <div className="flex justify-between items-center">
            {/* Left  */}
            <div className="flex gap-1">
                {/* Play button  */}
                <PlayerButton clickCallback={handlePlay} desc={isPaused ? "Play(space)" : "Pause(space)"} posSide="top" keyCode="Space">
                    {isPaused ? (
                        <Play weight="fill" className="" />
                    ) : (
                        <Pause weight="fill" className="" />
                    )
                    }
                </PlayerButton>

                {/* Volume Button  */}
                <div className="group flex gap-1">
                    <PlayerButton clickCallback={handleVolume} desc={volume > 0 ? "Mute(m)" : "Unmute(m)"} posSide="" keyCode="KeyM">
                        {volumeIcon()}
                    </PlayerButton>

                    {/* Volume Range  */}
                    <div className="invisible group-hover:visible">
                        <input type="range"
                            className="rounded w-[80px]"
                            max={1}
                            min={0}
                            step={0.05}
                            onChange={handleVolumeRange}
                            value={volume}
                        />
                    </div>
                </div>

            </div>

            {/* Right */}
            <div className="flex">
                {/* settings */}
                <PlayerButton clickCallback={() => alert("Settings")} desc="Settings" posSide="left-0" keyCode="">
                    <Gear weight="bold" size={20} />
                </PlayerButton>

                {/* Clip  */}
                <PlayerButton clickCallback={() => alert("Creating clip")} desc="Clip (x)" posSide="right-0" keyCode="KeyX">
                    <FilmSlate weight="bold" size={20} />
                </PlayerButton>

                {/* Theatre  */}
                <PlayerButton clickCallback={handleFullscreen} desc="Theatre (alt+t)" posSide="right-0" keyCode="KeyT">
                    <SidebarSimple weight="bold" size={20} />
                </PlayerButton>

                {/* fullscreen  */}
                <PlayerButton clickCallback={handleFullscreen} desc="Fullscreen (f)" posSide="right-0" keyCode="KeyF">
                    <CornersOut weight="bold" size={20} />
                </PlayerButton>
            </div>
        </div>
    )
}